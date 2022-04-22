import React from 'react'
import Panel from 'react-foundation-apps/src/panel'
import Trigger from 'react-foundation-apps/src/trigger'
import { Link } from 'react-router-dom'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import { Translate } from '@material-ui/icons'
import AccountStore from '../../stores/AccountStore'
import { connect } from 'alt-react'
import WalletUnlockStore from '../../stores/WalletUnlockStore'
import WalletManagerStore from '../../stores/WalletManagerStore'
import SettingsStore from '../../stores/SettingsStore'
import PropTypes from 'prop-types'

class MobileMenu extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  onClick() {
    ZfApi.publish('mobile-menu', 'close')
  }

  _onNavigate(route, e) {
    e.preventDefault()
    this.context.router.push(route)
    ZfApi.publish('mobile-menu', 'close')
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { id, currentAccount, linkedAccounts, myAccounts } = this.props
    let accounts = null

    // eslint-disable-next-line react/prop-types
    if (linkedAccounts.size > 1) {
      // eslint-disable-next-line react/prop-types
      accounts = linkedAccounts.map((a) => {
        return (
          <li key={a} onClick={this.onClick}>
            <Link to={`/account/${a}/overview`}>{a}</Link>
          </li>
        )
      })
      // eslint-disable-next-line react/prop-types
    } else if (linkedAccounts.size === 1) {
      accounts = (
        <li key="account" onClick={this.onClick}>
          {/* eslint-disable-next-line react/prop-types */}
          <Link to={`/account/${linkedAccounts.first()}/overview`}>
            <Translate content="header.account" />
          </Link>
        </li>
      )
    }

    let linkToAccountOrDashboard
    // eslint-disable-next-line react/prop-types
    if (linkedAccounts.size > 1)
      linkToAccountOrDashboard = (
        <a onClick={this._onNavigate.bind(this, '/dashboard')}>
          <Translate content="header.dashboard" />
        </a>
      )
    // eslint-disable-next-line react/prop-types
    else if (linkedAccounts.size === 1)
      linkToAccountOrDashboard = (
        // eslint-disable-next-line react/prop-types
        <a onClick={this._onNavigate.bind(this, `/account/${linkedAccounts.first()}/overview`)}>
          <Translate content="header.account" />
        </a>
      )
    else linkToAccountOrDashboard = <Link to="/create-account">Create Account</Link>

    // eslint-disable-next-line react/prop-types
    let tradeLink = this.props.lastMarket ? (
      // eslint-disable-next-line react/prop-types
      <a onClick={this._onNavigate.bind(this, `/market/${this.props.lastMarket}`)}>
        <Translate content="header.exchange" />
      </a>
    ) : (
      <a onClick={this._onNavigate.bind(this, '/explorer/markets')}>
        <Translate content="header.exchange" />
      </a>
    )

    return (
      <Panel id={id} position="left">
        <div className="grid-content" style={{ zIndex: 200 }}>
          <Trigger close={id}>
            <a className="close-button">&times;</a>
          </Trigger>
          <section style={{ marginTop: '3rem' }} className="block-list">
            <ul>
              <li>{linkToAccountOrDashboard}</li>
              <li onClick={this.onClick}>
                <Link to="transfer">
                  <Translate content="header.payments" />
                </Link>
              </li>
              {/* eslint-disable-next-line react/prop-types */}
              {linkedAccounts.size === 0 ? null : <li>{tradeLink}</li>}
              {/* eslint-disable-next-line react/prop-types */}
              {currentAccount && myAccounts.indexOf(currentAccount) !== -1 ? (
                <li onClick={this.onClick}>
                  <Link to={'/deposit-withdraw/'}>
                    <Translate content="account.deposit_withdraw" />
                  </Link>
                </li>
              ) : null}
              <li>
                <a onClick={this._onNavigate.bind(this, '/explorer')}>
                  <Translate content="header.explorer" />
                </a>
              </li>
              <li onClick={this.onClick}>
                <Link to="settings">
                  <Translate content="header.settings" />
                </Link>
              </li>
            </ul>
          </section>

          <section style={{ marginTop: '3rem' }} className="block-list">
            <header>Accounts</header>
            <ul>{accounts}</ul>
          </section>
        </div>
      </Panel>
    )
  }
}

export default connect(MobileMenu, {
  listenTo() {
    return [AccountStore, WalletUnlockStore, WalletManagerStore, SettingsStore]
  },
  getProps() {
    return {
      linkedAccounts: AccountStore.getState().linkedAccounts,
      currentAccount: AccountStore.getState().currentAccount,
      locked: WalletUnlockStore.getState().locked,
      current_wallet: WalletManagerStore.getState().current_wallet,
      lastMarket: SettingsStore.getState().viewSettings.get('lastMarket'),
      myAccounts: AccountStore.getMyAccounts(),
    }
  },
})
