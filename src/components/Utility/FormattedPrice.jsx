import React from 'react'
import { FormattedNumber } from 'react-intl'
import utils from '../../common/utils'
import ChainTypes from './ChainTypes'
import BindToChainState from './BindToChainState'
import AltContainer from 'alt-container'
import SettingsStore from '../../stores/SettingsStore'
import SettingsActions from '../../actions/SettingsActions'
import Popover from 'react-popover'
import { Translate } from '@material-ui/icons'
import AssetName from './AssetName'
import PropTypes from 'prop-types'

/**
 *  Given an amount and an asset, render it with proper precision
 *
 *  Expected Properties:
 *     base_asset:  asset id, which will be fetched from the
 *     base_amount: the ammount of asset
 *     quote_asset:
 *     quote_amount: the ammount of asset
 *
 */

class FormattedPrice extends React.Component {
  static propTypes = {
    base_asset: ChainTypes.ChainAsset.isRequired,
    quote_asset: ChainTypes.ChainAsset.isRequired,
    base_amount: PropTypes.any,
    quote_amount: PropTypes.any,
    decimals: PropTypes.number,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = { isPopoverOpen: false }
    this.togglePopover = this.togglePopover.bind(this)
    this.closePopover = this.closePopover.bind(this)
  }

  togglePopover(e) {
    e.preventDefault()
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen })
  }

  closePopover() {
    this.setState({ isPopoverOpen: false })
  }

  onFlip() {
    let setting = {}
    // eslint-disable-next-line react/prop-types
    setting[this.props.marketId] = !this.props.marketDirections.get(this.props.marketId)
    SettingsActions.changeMarketDirection(setting)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      // eslint-disable-next-line react/prop-types
      nextProps.marketDirections !== this.props.marketDirections ||
      nextProps.base_amount !== this.props.base_amount ||
      nextProps.quote_amount !== this.props.quote_amount ||
      nextProps.decimals !== this.props.decimals ||
      !utils.are_equal_shallow(nextState, this.state)
    )
  }

  goToMarket(e) {
    e.preventDefault()
    this.context.router.push(
      `/market/${this.props.base_asset.get('symbol')}_${this.props.quote_asset.get('symbol')}`,
    )
  }

  render() {
    let {
      base_asset,
      quote_asset,
      base_amount,
      quote_amount,
      // eslint-disable-next-line react/prop-types
      callPrice,
      // eslint-disable-next-line react/prop-types
      marketDirections,
      // eslint-disable-next-line react/prop-types
      marketId,
      // eslint-disable-next-line react/prop-types
      hide_symbols,
      // eslint-disable-next-line react/prop-types
      noPopOver,
    } = this.props

    // eslint-disable-next-line react/prop-types
    let invertPrice = marketDirections.get(marketId)

    if (invertPrice && !callPrice) {
      let tmp = base_asset
      base_asset = quote_asset
      quote_asset = tmp
      let tmp_amount = base_amount
      base_amount = quote_amount
      quote_amount = tmp_amount
    }

    let formatted_value = ''
    // eslint-disable-next-line react/prop-types
    if (!this.props.hide_value) {
      let base_precision = utils.get_asset_precision(base_asset.get('precision'))
      let quote_precision = utils.get_asset_precision(quote_asset.get('precision'))
      let value = base_amount / base_precision / (quote_amount / quote_precision)
      if (isNaN(value) || !isFinite(value)) {
        return <span>n/a</span>
      }
      let decimals = this.props.decimals
        ? this.props.decimals
        : base_asset.get('precision') + quote_asset.get('precision')
      decimals = Math.min(8, decimals)
      if (base_asset.get('id') === '1.3.0') {
        base_asset.get('precision')
      }
      formatted_value = (
        <FormattedNumber value={value} minimumFractionDigits={2} maximumFractionDigits={decimals} />
      )
    }
    let symbols = hide_symbols ? (
      ''
    ) : (
      <span
        data-place="bottom"
        data-tip={noPopOver && !callPrice ? 'Click to invert the price' : null}
        className={noPopOver && !callPrice ? 'clickable inline-block' : ''}
        onClick={noPopOver && !callPrice ? this.onFlip.bind(this) : null}
      >
        <AssetName name={base_asset.get('symbol')} />/<AssetName name={quote_asset.get('symbol')} />
      </span>
    )

    const currency_popover_body =
      !noPopOver && !hide_symbols ? (
        <div>
          {!callPrice ? (
            <div className="button" onClick={this.onFlip.bind(this)}>
              <Translate content="exchange.invert" />
            </div>
          ) : null}
          <div className="button" onClick={this.goToMarket.bind(this)}>
            <Translate content="exchange.to_market" />
          </div>
        </div>
      ) : null

    let popOver = currency_popover_body ? (
      <Popover
        isOpen={this.state.isPopoverOpen}
        onOuterAction={this.closePopover}
        body={currency_popover_body}
      >
        <span className="currency click-for-help" onClick={this.togglePopover}>
          {symbols}
        </span>
      </Popover>
    ) : null

    return (
      <span>
        {formatted_value} {popOver ? popOver : symbols}
      </span>
    )
  }
}

FormattedPrice = BindToChainState(FormattedPrice)

export default class FormattedPriceWrapper extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    let marketId = this.props.quote_asset + '_' + this.props.base_asset

    return (
      <AltContainer
        stores={[SettingsStore]}
        inject={{
          marketDirections: () => {
            return SettingsStore.getState().marketDirections
          },
        }}
      >
        <FormattedPrice {...this.props} marketId={marketId} />
      </AltContainer>
    )
  }
}
