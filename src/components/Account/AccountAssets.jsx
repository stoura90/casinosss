import React from 'react'
import { Link } from 'react-router-dom'
import { Translate } from '@material-ui/icons'
import AssetActions from '../../actions/AssetActions'
import AssetStore from '../../stores/AssetStore'
import AccountActions from '../../actions/AccountActions'
import Trigger from 'react-foundation-apps/src/trigger'
import Modal from 'react-foundation-apps/src/modal'
import FormattedAsset from '../Utility/FormattedAsset'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import NotificationActions from '../../actions/NotificationActions'
import Utils from '../../common/utils'
import { debounce } from 'lodash'
import LoadingIndicator from '../LoadingIndicator'
import PrivateKeyStore from '../../stores/PrivateKeyStore'
import IssueModal from '../Modal/IssueModal'
import ReserveAssetModal from '../Modal/ReserveAssetModal'
import { connect } from 'alt-react'
import assetUtils from '../../common/asset_utils'
import PropTypes from 'prop-types'

class AccountAssets extends React.Component {
  static defaultProps = {
    symbol: '',
    name: '',
    description: '',
    max_supply: 0,
    precision: 0,
  }

  static propTypes = {
    symbol: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      create: {
        symbol: '',
        name: '',
        description: '',
        max_supply: 1000000000000000,
        precision: 4,
      },
      issue: {
        amount: 0,
        to: '',
        to_id: '',
        asset_id: '',
        symbol: '',
      },
      errors: {
        symbol: null,
      },
      isValid: false,
      searchTerm: '',
    }

    this._searchAccounts = debounce(this._searchAccounts, 150)
  }

  _checkAssets(assets, force) {
    let lastAsset = assets
      .sort((a, b) => {
        if (a.symbol > b.symbol) {
          return 1
        } else if (a.symbol < b.symbol) {
          return -1
        } else {
          return 0
        }
      })
      .last()

    if (assets.size === 0 || force) {
      AssetActions.getAssetList('A', 100)
      this.setState({ assetsFetched: 100 })
    } else if (assets.size >= this.state.assetsFetched) {
      AssetActions.getAssetList(lastAsset.symbol, 100)
      this.setState({ assetsFetched: this.state.assetsFetched + 99 })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    this._checkAssets(nextProps.assets)
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-next-line react/prop-types
    this._checkAssets(this.props.assets, true)
  }

  _onIssueInput(value, e) {
    let key = e.target.id
    let { issue } = this.state

    if (key === 'to') {
      this._searchAccounts(e.target.value)
      issue.to = e.target.value
      // eslint-disable-next-line react/prop-types
      let account = this.props.searchAccounts.findEntry((name) => {
        return name === e.target.value
      })

      issue.to_id = account ? account[0] : null
    } else {
      issue[value] = e.target.value
    }

    this.setState({ issue: issue })
  }

  _searchAccounts(searchTerm) {
    AccountActions.accountSearch(searchTerm)
  }

  _issueAsset(account_id, e) {
    e.preventDefault()
    ZfApi.publish('issue_asset', 'close')
    let { issue } = this.state
    // eslint-disable-next-line react/prop-types
    let asset = this.props.assets.get(issue.asset_id)
    issue.amount *= Utils.get_asset_precision(asset.precision)
    AssetActions.issueAsset(account_id, issue).then((result) => {
      if (result) {
        NotificationActions.addNotification({
          message: `Successfully issued ${Utils.format_asset(
            issue.amount,
            // eslint-disable-next-line react/prop-types
            this.props.assets.get(issue.asset_id),
          )}`, //: ${this.state.wallet_public_name}
          level: 'success',
          autoDismiss: 10,
        })

        // Update the data for the asset
        AssetActions.getAsset(issue.asset_id)
      } else {
        NotificationActions.addNotification({
          message: `Failed to issue asset`, //: ${this.state.wallet_public_name}
          level: 'error',
          autoDismiss: 10,
        })
      }
    })
  }

  _reserveButtonClick(assetId, e) {
    e.preventDefault()
    this.setState({ reserve: assetId })
    ZfApi.publish('reserve_asset', 'open')
  }

  _reserveAsset(account_id, e) {
    e.preventDefault()
    ZfApi.publish('reserve_asset', 'close')
    let { issue } = this.state
    // eslint-disable-next-line react/prop-types
    let asset = this.props.assets.get(issue.asset_id)
    issue.amount *= Utils.get_asset_precision(asset.precision)
    AssetActions.issueAsset(account_id, issue).then((result) => {})
  }

  _issueButtonClick(asset_id, symbol, e) {
    e.preventDefault()
    let { issue } = this.state
    issue.asset_id = asset_id
    issue.symbol = symbol
    this.setState({ issue: issue })
    ZfApi.publish('issue_asset', 'open')
  }

  _editButtonClick(symbol, account_name, e) {
    e.preventDefault()
    // eslint-disable-next-line react/prop-types
    this.props.router.push(`/account/${account_name}/update-asset/${symbol}`)
  }

  _onAccountSelect(account_name) {
    let { issue } = this.state
    issue.to = account_name
    // eslint-disable-next-line react/prop-types
    issue.to_id = this.props.account_name_to_id[account_name]
    this.setState({ issue: issue })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { account, account_name, searchAccounts, assets } = this.props
    let { issue, errors, isValid, create } = this.state

    let accountExists = true
    if (!account) {
      return <LoadingIndicator type="circle" />
      // eslint-disable-next-line react/prop-types
    } else if (account.notFound) {
      accountExists = false
    }
    if (!accountExists) {
      return (
        <div className="grid-block">
          <h5>
            <Translate component="h5" content="account.errors.not_found" name={account_name} />
          </h5>
        </div>
      )
    }

    // eslint-disable-next-line react/prop-types
    let isMyAccount = PrivateKeyStore.hasKey(account.getIn(['owner', 'key_auths', '0', '0']))
    let myAssets = assets
      // eslint-disable-next-line react/prop-types
      .filter((asset) => {
        // eslint-disable-next-line react/prop-types
        return asset.issuer === account.get('id')
      })
      .sort((a, b) => {
        return (
          parseInt(a.id.substring(4, a.id.length), 10) -
          parseInt(b.id.substring(4, b.id.length), 10)
        )
      })
      .map((asset) => {
        let description = assetUtils.parseDescription(asset.options.description)
        let desc = description.short_name ? description.short_name : description.main

        if (desc.length > 100) {
          desc = desc.substr(0, 100) + '...'
        }
        return (
          <tr key={asset.symbol}>
            <td>
              <Link to={`/asset/${asset.symbol}`}>{asset.symbol}</Link>
            </td>
            <td style={{ maxWidth: '250px' }}>{desc}</td>
            <td>
              <FormattedAsset
                amount={parseInt(asset.dynamic_data.current_supply, 10)}
                asset={asset.id}
              />
            </td>
            <td>
              <FormattedAsset amount={parseInt(asset.options.max_supply, 10)} asset={asset.id} />
            </td>
            <td>
              {!asset.bitasset_data_id ? (
                <button
                  onClick={this._issueButtonClick.bind(this, asset.id, asset.symbol)}
                  className="button outline"
                >
                  <Translate content="transaction.trxTypes.asset_issue" />
                </button>
              ) : null}
            </td>

            <td>
              {!asset.bitasset_data_id ? (
                <button
                  onClick={this._reserveButtonClick.bind(this, asset.id)}
                  className="button outline"
                >
                  <Translate content="transaction.trxTypes.asset_reserve" />
                </button>
              ) : null}
            </td>

            <td>
              <button
                onClick={this._editButtonClick.bind(this, asset.symbol, account_name)}
                className="button outline"
              >
                <Translate content="transaction.trxTypes.asset_update" />
              </button>
            </td>
          </tr>
        )
      })
      .toArray()

    // eslint-disable-next-line react/prop-types
    let autoCompleteAccounts = searchAccounts.filter((a) => {
      return a.indexOf(this.state.searchTerm) !== -1
    })

    return (
      <div className="grid-content">
        <div className="content-block generic-bordered-box">
          <div className="block-content-header">
            <Translate content="account.user_issued_assets.issued_assets" />
          </div>
          <div className="box-content">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <Translate content="account.user_issued_assets.symbol" />
                  </th>
                  <th style={{ maxWidth: '200px' }}>
                    <Translate content="account.user_issued_assets.description" />
                  </th>
                  <Translate component="th" content="markets.supply" />
                  <th>
                    <Translate content="account.user_issued_assets.max_supply" />
                  </th>
                  <th style={{ textAlign: 'center' }} colSpan="3">
                    <Translate content="account.perm.action" />
                  </th>
                </tr>
              </thead>
              <tbody>{myAssets}</tbody>
            </table>
          </div>
        </div>

        <div className="content-block">
          <Link to={`/account/${account_name}/create-asset/`}>
            <button className="button outline">
              <Translate content="transaction.trxTypes.asset_create" />
            </button>
          </Link>
        </div>

        <Modal id="issue_asset" overlay={true}>
          <Trigger close="issue_asset">
            <a href="#" className="close-button">
              &times;
            </a>
          </Trigger>
          <br />
          <div className="grid-block vertical">
            <IssueModal
              asset_to_issue={this.state.issue.asset_id}
              onClose={() => {
                ZfApi.publish('issue_asset', 'close')
              }}
            />
          </div>
        </Modal>

        <Modal id="reserve_asset" overlay={true}>
          <Trigger close="reserve_asset">
            <a href="#" className="close-button">
              &times;
            </a>
          </Trigger>
          <br />
          <div className="grid-block vertical">
            <ReserveAssetModal
              assetId={this.state.reserve}
              account={account}
              onClose={() => {
                ZfApi.publish('reserve_asset', 'close')
              }}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

export default connect(AccountAssets, {
  listenTo() {
    return [AssetStore]
  },
  getProps() {
    return { assets: AssetStore.getState().assets }
  },
})
