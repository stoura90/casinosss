import React from 'react'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import Modal from 'react-foundation-apps/src/modal'
import Trigger from 'react-foundation-apps/src/trigger'
import { Translate } from '@material-ui/icons'
import ChainTypes from '../Utility/ChainTypes'
import BindToChainState from '../Utility/BindToChainState'
import FormattedAsset from '../Utility/FormattedAsset'
import utils from '../../common/utils'
import classNames from 'classnames'
import AmountSelector from '../Utility/AmountSelector'
import BalanceComponent from '../Utility/BalanceComponent'
import WalletApi from '../../api/WalletApi'
import WalletDb from '../../stores/WalletDb'
import FormattedPrice from '../Utility/FormattedPrice'
import counterpart from 'counterpart'
import HelpContent from '../Utility/HelpContent'
import Immutable from 'immutable'
import { ChainStore } from 'graphenejs-lib'
import PropTypes from 'prop-types'

let wallet_api = new WalletApi()

/**
 *  Given an account and an asset id, render a modal allowing modification of a margin position for that asset
 *
 *  Expected Properties:
 *     quote_asset:  asset id, must be a bitasset
 *     account: full_account object for the account to use
 *
 */

class BorrowModalContent extends React.Component {
  static propTypes = {
    quote_asset: ChainTypes.ChainAsset.isRequired,
    bitasset_balance: ChainTypes.ChainObject,
    backing_asset: ChainTypes.ChainAsset.isRequired,
    backing_balance: ChainTypes.ChainObject,
    call_orders: ChainTypes.ChainObjectsList,
    hasCallOrders: PropTypes.bool,
  }

  constructor(props) {
    super()
    this.state = this._initialState(props)
  }

  _initialState(props) {
    let currentPosition = props ? this._getCurrentPosition(props) : {}
    let isPredictionMarket = this._isPredictionMarket(props)

    if (currentPosition.collateral) {
      let debt = utils.get_asset_amount(currentPosition.debt, props.quote_asset)
      let collateral = utils.get_asset_amount(currentPosition.collateral, props.backing_asset)

      return {
        short_amount: debt ? debt.toString() : null,
        collateral: collateral ? collateral.toString() : null,
        collateral_ratio: this._getCollateralRatio(debt, collateral),
        errors: this._getInitialErrors(),
        isValid: false,
        original_position: {
          debt: debt,
          collateral: collateral,
        },
      }
    } else {
      return {
        short_amount: 0,
        collateral: 0,
        collateral_ratio: isPredictionMarket ? 1 : 0,
        errors: this._getInitialErrors(),
        isValid: false,
        original_position: {
          debt: 0,
          collateral: 0,
        },
      }
    }
  }

  componentDidMount() {
    let newState = this._initialState(this.props)

    this.setState(newState)
    this._setUpdatedPosition(newState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !utils.are_equal_shallow(nextState, this.state) ||
      !Immutable.is(nextProps.quote_asset, this.props.quote_asset) ||
      !nextProps.backing_asset.get('symbol') === this.props.backing_asset.get('symbol') ||
      // eslint-disable-next-line react/prop-types
      !Immutable.is(nextProps.account, this.props.account) ||
      !Immutable.is(nextProps.call_orders, this.props.call_orders)
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      // eslint-disable-next-line react/prop-types
      nextProps.account !== this.props.account ||
      nextProps.hasCallOrders !== this.props.hasCallOrders ||
      nextProps.quote_asset.get('id') !== this.props.quote_asset.get('id')
    ) {
      this.setState(this._initialState(nextProps))
    }
  }

  _getInitialErrors() {
    return {
      collateral_balance: null,
      ratio_too_high: null,
    }
  }

  confirmClicked(e) {
    e.preventDefault()
    // eslint-disable-next-line react/prop-types
    ZfApi.publish(this.props.modalId, 'close')
  }

  _onBorrowChange(e) {
    let feed_price = this._getFeedPrice()
    let amount = e.amount.replace(/,/g, '')
    let newState = {
      short_amount: amount,
      collateral: (this.state.collateral_ratio * (amount / feed_price)).toFixed(
        this.props.backing_asset.get('precision'),
      ),
      collateral_ratio: this.state.collateral_ratio,
    }

    this.setState(newState)
    this._validateFields(newState)
    this._setUpdatedPosition(newState)
  }

  _onCollateralChange(e) {
    let amount = e.amount.replace(/,/g, '')

    let feed_price = this._getFeedPrice()

    let newState = this._isPredictionMarket(this.props)
      ? {
          short_amount: amount,
          collateral: amount,
          collateral_ratio: 1,
        }
      : {
          short_amount: this.state.short_amount,
          collateral: amount,
          collateral_ratio: amount / (this.state.short_amount / feed_price),
        }

    this.setState(newState)
    this._validateFields(newState)
    this._setUpdatedPosition(newState)
  }

  _onRatioChange(e) {
    let feed_price = this._getFeedPrice()

    let ratio = e.target.value

    let newState = {
      short_amount: this.state.short_amount,
      collateral: ((this.state.short_amount / feed_price) * ratio).toFixed(
        this.props.backing_asset.get('precision'),
      ),
      collateral_ratio: ratio,
    }

    this.setState(newState)
    this._validateFields(newState)
    this._setUpdatedPosition(newState)
  }

  _setUpdatedPosition(newState) {
    this.setState({
      newPosition: parseFloat(newState.short_amount) / parseFloat(newState.collateral),
    })
  }

  _validateFields(newState) {
    let errors = this._getInitialErrors()
    let { original_position } = this.state
    let backing_balance = !this.props.backing_balance
      ? { balance: 0 }
      : this.props.backing_balance.toJS()

    if (
      parseFloat(newState.collateral) - original_position.collateral >
      utils.get_asset_amount(backing_balance.balance, this.props.backing_asset.toJS())
    ) {
      errors.collateral_balance = counterpart.translate('borrow.errors.collateral')
    }
    let isValid =
      newState.short_amount >= 0 &&
      newState.collateral >= 0 &&
      (newState.short_amount != original_position.debt ||
        newState.collateral != original_position.collateral)

    // let sqp = this.props.quote_asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;
    let mcr =
      this.props.quote_asset.getIn(['bitasset', 'current_feed', 'maintenance_collateral_ratio']) /
      1000
    if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : mcr)) {
      errors.below_maintenance = counterpart.translate('borrow.errors.below', { mr: mcr })
      isValid = false
    } else if (
      parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : mcr + 0.5)
    ) {
      errors.close_maintenance = counterpart.translate('borrow.errors.close', { mr: mcr })
      isValid = true
    }

    this.setState({ errors, isValid })
  }

  _onSubmit(e) {
    e.preventDefault()

    let quotePrecision = utils.get_asset_precision(this.props.quote_asset.get('precision'))
    let backingPrecision = utils.get_asset_precision(this.props.backing_asset.get('precision'))
    let currentPosition = this._getCurrentPosition(this.props)

    var tr = wallet_api.new_transaction()
    tr.add_type_operation('call_order_update', {
      fee: {
        amount: 0,
        asset_id: 0,
      },
      // eslint-disable-next-line react/prop-types
      funding_account: this.props.account.get('id'),
      delta_collateral: {
        amount: parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10),
        asset_id: this.props.backing_asset.get('id'),
      },
      delta_debt: {
        amount: parseInt(this.state.short_amount * quotePrecision - currentPosition.debt, 10),
        asset_id: this.props.quote_asset.get('id'),
      },
    })
    WalletDb.process_transaction(tr, null, true).catch((err) => {
      // console.log("unlock failed:", err);
    })

    // eslint-disable-next-line react/prop-types
    ZfApi.publish(this.props.modalId, 'close')
  }

  _getCurrentPosition(props) {
    let currentPosition = {
      collateral: null,
      debt: null,
    }

    if (props && props.hasCallOrders && props.call_orders) {
      for (let key in props.call_orders) {
        if (props.call_orders.hasOwnProperty(key) && props.call_orders[key]) {
          if (
            props.quote_asset.get('id') ===
            props.call_orders[key].getIn(['call_price', 'quote', 'asset_id'])
          ) {
            currentPosition = props.call_orders[key].toJS()
          }
        }
      }
    }
    return currentPosition
  }

  _getFeedPrice() {
    if (!this.props) {
      return 1
    }

    if (this._isPredictionMarket(this.props)) {
      return 1
    }

    return (
      1 /
      utils.get_asset_price(
        this.props.quote_asset.getIn([
          'bitasset',
          'current_feed',
          'settlement_price',
          'quote',
          'amount',
        ]),
        this.props.backing_asset,
        this.props.quote_asset.getIn([
          'bitasset',
          'current_feed',
          'settlement_price',
          'base',
          'amount',
        ]),
        this.props.quote_asset,
      )
    )
  }

  _getCollateralRatio(debt, collateral) {
    return collateral / (debt / this._getFeedPrice())
  }

  _isPredictionMarket(props) {
    return props.quote_asset.getIn(['bitasset', 'is_prediction_market'])
  }

  render() {
    let { quote_asset, bitasset_balance, backing_asset, backing_balance } = this.props
    let { short_amount, collateral, collateral_ratio, errors, isValid } = this.state
    let quotePrecision = utils.get_asset_precision(this.props.quote_asset.get('precision'))
    let backingPrecision = utils.get_asset_precision(this.props.backing_asset.get('precision'))

    if (
      !collateral_ratio ||
      isNaN(collateral_ratio) ||
      !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)
    )
      collateral_ratio = 0
    bitasset_balance = !bitasset_balance ? { balance: 0, id: null } : bitasset_balance.toJS()
    backing_balance = !backing_balance ? { balance: 0, id: null } : backing_balance.toJS()

    let collateralClass = classNames('form-group', { 'has-error': errors.collateral_balance })
    let collateralRatioClass = classNames(
      'form-group',
      { 'has-error': errors.below_maintenance },
      { 'has-warning': errors.close_maintenance },
    )
    let buttonClass = classNames(
      'button',
      { disabled: errors.collateral_balance || !isValid },
      { success: isValid },
    )

    // Dynamically update user's remaining collateral
    let currentPosition = this._getCurrentPosition(this.props)
    let backingBalance = backing_balance.id ? ChainStore.getObject(backing_balance.id) : null
    let backingAmount = backingBalance ? backingBalance.get('balance') : 0
    let collateralChange = parseInt(
      this.state.collateral * backingPrecision - currentPosition.collateral,
      10,
    )
    let remainingBalance = backingAmount - collateralChange

    let bitAssetBalanceText = (
      <span>
        <Translate component="span" content="transfer.available" />:{' '}
        {bitasset_balance.id ? (
          <BalanceComponent balance={bitasset_balance.id} />
        ) : (
          <FormattedAsset amount={0} asset={quote_asset.get('id')} />
        )}
      </span>
    )
    let backingBalanceText = (
      <span>
        <Translate component="span" content="transfer.available" />:{' '}
        {backing_balance.id ? (
          <FormattedAsset amount={remainingBalance} asset={backing_asset.get('id')} />
        ) : (
          <FormattedAsset amount={0} asset={backing_asset.get('id')} />
        )}
      </span>
    )

    let feed_price = this._getFeedPrice()

    let maintenanceRatio =
      this.props.quote_asset.getIn(['bitasset', 'current_feed', 'maintenance_collateral_ratio']) /
      1000
    let squeezeRatio =
      this.props.quote_asset.getIn(['bitasset', 'current_feed', 'maximum_short_squeeze_ratio']) /
      1000

    let isPredictionMarket = this._isPredictionMarket(this.props)

    if (!isPredictionMarket && isNaN(feed_price)) {
      return (
        <div>
          <form className="grid-container text-center no-overflow" noValidate>
            <Translate
              component="h3"
              content="borrow.no_valid"
              asset_symbol={quote_asset.get('symbol')}
            />
          </form>
          <div className="grid-content button-group text-center no-overflow">
            {/* eslint-disable-next-line react/prop-types */}
            <Trigger close={this.props.modalId}>
              <div className=" button warning">
                <Translate content="account.perm.cancel" />
              </div>
            </Trigger>
          </div>
        </div>
      )
    }

    return (
      <div>
        <form className="grid-container small-10 small-offset-1 no-overflow" noValidate>
          <Translate
            component="h3"
            content="borrow.title"
            asset_symbol={quote_asset.get('symbol')}
          />
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.hide_help ? null : (
            <HelpContent
              path={'components/' + (isPredictionMarket ? 'BorrowModalPrediction' : 'BorrowModal')}
              debt={quote_asset.get('symbol')}
              collateral={backing_asset.get('symbol')}
              /* eslint-disable-next-line react/prop-types */
              borrower={this.props.account.get('name')}
              mr={maintenanceRatio}
            />
          )}
          {!isPredictionMarket ? (
            <div style={{ paddingBottom: '1rem' }}>
              <div className="borrow-price-feeds">
                <span className="borrow-price-label">
                  <Translate content="transaction.feed_price" />
                  :&nbsp;
                </span>
                <FormattedPrice
                  decimals={2}
                  callPrice
                  noPopOver
                  quote_amount={quote_asset.getIn([
                    'bitasset',
                    'current_feed',
                    'settlement_price',
                    'base',
                    'amount',
                  ])}
                  quote_asset={quote_asset.getIn([
                    'bitasset',
                    'current_feed',
                    'settlement_price',
                    'base',
                    'asset_id',
                  ])}
                  base_asset={quote_asset.getIn([
                    'bitasset',
                    'current_feed',
                    'settlement_price',
                    'quote',
                    'asset_id',
                  ])}
                  base_amount={quote_asset.getIn([
                    'bitasset',
                    'current_feed',
                    'settlement_price',
                    'quote',
                    'amount',
                  ])}
                />
              </div>
              {/* <div className="borrow-price-feeds">
                                <span
                                    className="inline-block tooltip borrow-price-label"
                                    data-place="bottom"
                                    data-tip={counterpart.translate("tooltip.margin_price")}
                                ><Translate content="exchange.squeeze" />:&nbsp;</span>
                                <FormattedPrice
                                    decimals={2}
                                    callPrice
                                    noPopOver
                                    quote_amount={quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "amount"])}
                                    quote_asset={quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "base", "asset_id"])}
                                    base_asset={quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "asset_id"])}
                                    base_amount={squeezeRatio * quote_asset.getIn(["bitasset", "current_feed", "settlement_price", "quote", "amount"])}
                                    />
                            </div> */}
              <b />
              <div
                className={
                  'borrow-price-final ' +
                  (errors.below_maintenance
                    ? 'has-error'
                    : errors.close_maintenance
                    ? 'has-warning'
                    : '')
                }
              >
                <span className="borrow-price-label">
                  <Translate content="exchange.your_price" />
                  :&nbsp;
                </span>
                {this.state.newPosition ? (
                  <FormattedPrice
                    decimals={2}
                    callPrice
                    noPopOver
                    quote_amount={maintenanceRatio * this.state.short_amount * quotePrecision}
                    quote_asset={quote_asset.get('id')}
                    base_asset={backing_asset.get('id')}
                    base_amount={this.state.collateral * backingPrecision}
                  />
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="form-group">
            <AmountSelector
              label="transaction.borrow_amount"
              amount={short_amount.toString()}
              onChange={this._onBorrowChange.bind(this)}
              asset={quote_asset.get('id')}
              assets={[quote_asset.get('id')]}
              display_balance={bitAssetBalanceText}
              placeholder="0.0"
              tabIndex={1}
            />
          </div>
          <div className={collateralClass}>
            <AmountSelector
              label="transaction.collateral"
              amount={collateral.toString()}
              onChange={this._onCollateralChange.bind(this)}
              asset={backing_asset.get('id')}
              assets={[backing_asset.get('id')]}
              display_balance={backingBalanceText}
              placeholder="0.0"
              tabIndex={1}
            />
            {errors.collateral_balance ? (
              <div style={{ paddingTop: '0.5rem' }}>{errors.collateral_balance}</div>
            ) : null}
          </div>
          {!isPredictionMarket ? (
            <div className={collateralRatioClass}>
              <Translate component="label" content="borrow.coll_ratio" />
              <input
                min="0"
                max="6"
                step="0.05"
                onChange={this._onRatioChange.bind(this)}
                value={collateral_ratio}
                type="range"
                disabled={!short_amount}
              />
              <div className="inline-block">{utils.format_number(collateral_ratio, 2)}</div>
              {errors.below_maintenance || errors.close_maintenance ? (
                <div style={{ maxWidth: 'calc(100% - 50px)' }} className="float-right">
                  {errors.below_maintenance}
                  {errors.close_maintenance}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="no-padding grid-content button-group no-overflow">
            <div onClick={this._onSubmit.bind(this)} href className={buttonClass}>
              <Translate content="borrow.adjust" />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault()
                this.setState(this._initialState(this.props))
              }}
              href
              className="button info"
            >
              <Translate content="wallet.reset" />
            </div>
            {/*<Trigger close={this.props.modalId}>
                            <div className="button"><Translate content="account.perm.cancel" /></div>
                        </Trigger>*/}
          </div>
        </form>
      </div>
    )
  }
}
BorrowModalContent = BindToChainState(BorrowModalContent, { keep_updating: true })

/* This wrapper class appears to be necessary because the decorator eats the show method from refs */
export default class ModalWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      smallScreen: false,
    }
  }

  show() {
    // eslint-disable-next-line react/prop-types
    let modalId = 'borrow_modal_' + this.props.quote_asset
    ZfApi.publish(modalId, 'open')
  }

  UNSAFE_componentWillMount() {
    this.setState({
      smallScreen: window.innerHeight <= 800,
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { quote_asset, backing_asset, account } = this.props
    let modalId = 'borrow_modal_' + quote_asset
    // eslint-disable-next-line react/prop-types
    let accountBalance = account.get('balances').toJS()
    let coreBalance, bitAssetBalance

    if (accountBalance) {
      for (var id in accountBalance) {
        if (id === backing_asset) {
          coreBalance = accountBalance[id]
        }

        if (id === quote_asset) {
          bitAssetBalance = accountBalance[id]
        }
      }
    }

    return (
      <Modal id={modalId} overlay={true} ref={modalId}>
        <Trigger close={modalId}>
          <a href="#" className="close-button">
            &times;
          </a>
        </Trigger>
        <div className="grid-block vertical">
          <BorrowModalContent
            quote_asset={quote_asset}
            /* eslint-disable-next-line react/prop-types */
            call_orders={account.get('call_orders')}
            /* eslint-disable-next-line react/prop-types */
            hasCallOrders={account.get('call_orders') && account.get('call_orders').size > 0}
            modalId={modalId}
            bitasset_balance={bitAssetBalance}
            backing_balance={coreBalance}
            backing_asset={backing_asset}
            hide_help={this.state.smallScreen}
            account={account}
          />
        </div>
      </Modal>
    )
  }
}
