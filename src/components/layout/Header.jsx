import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'alt-react'
import AccountActions from '../../actions/AccountActions'
import AccountStore from '../../stores/AccountStore'
import SettingsStore from '../../stores/SettingsStore'
import Icon from '../Icon/Icon'
import { Translate } from '@material-ui/icons'
import counterpart from 'counterpart'
import WalletDb from '../../stores/WalletDb'
import WalletUnlockStore from '../../stores/WalletUnlockStore'
import WalletUnlockActions from '../../actions/WalletUnlockActions'
import WalletManagerStore from '../../stores/WalletManagerStore'
import cnames from 'classnames'
import TotalBalanceValue from '../Utility/TotalBalanceValue'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import { Container } from 'reactstrap'

var logo = require('../../assets/logo-ico-blue.png')
class Header extends React.Component {
  static contextTypes = {
    location: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super()
    this.state = {
      active: context.location.pathname,
    }

    this.unlisten = null
  }

  UNSAFE_componentWillMount() {
    this.unlisten = this.context.router.listen((newState, err) => {
      if (!err) {
        if (this.unlisten && this.state.active !== newState.pathname) {
          this.setState({
            active: newState.pathname,
          })
        }
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 1250)
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
      this.unlisten = null
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      // eslint-disable-next-line react/prop-types
      nextProps.linkedAccounts !== this.props.linkedAccounts ||
      // eslint-disable-next-line react/prop-types
      nextProps.currentAccount !== this.props.currentAccount ||
      // eslint-disable-next-line react/prop-types
      nextProps.locked !== this.props.locked ||
      // eslint-disable-next-line react/prop-types
      nextProps.current_wallet !== this.props.current_wallet ||
      // eslint-disable-next-line react/prop-types
      nextProps.lastMarket !== this.props.lastMarket ||
      // eslint-disable-next-line react/prop-types
      nextProps.starredAccounts !== this.props.starredAccounts ||
      nextState.active !== this.state.active
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // this._setActivePath();
  }

  _triggerMenu(e) {
    e.preventDefault()
    ZfApi.publish('mobile-menu', 'toggle')
  }

  _toggleLock(e) {
    e.preventDefault()
    if (WalletDb.isLocked()) WalletUnlockActions.unlock()
    else WalletUnlockActions.lock()
  }

  _onNavigate(route, e) {
    e.preventDefault()
    this.context.router.push(route)
  }

  _onGoBack(e) {
    e.preventDefault()
    window.history.back()
  }

  _onGoForward(e) {
    e.preventDefault()
    window.history.forward()
  }

  _accountClickHandler(account_name, e) {
    e.preventDefault()
    ZfApi.publish('account_drop_down', 'close')
    AccountActions.setCurrentAccount.defer(account_name)
  }

  onClickUser(account, e) {
    e.stopPropagation()
    e.preventDefault()

    this.context.router.push(`/account/${account}/overview`)
  }

  render() {
    let { active } = this.state
    // eslint-disable-next-line react/prop-types
    let { currentAccount, starredAccounts } = this.props
    let settings = counterpart.translate('header.settings')
    let locked_tip = counterpart.translate('header.locked_tip')
    let unlocked_tip = counterpart.translate('header.unlocked_tip')

    let tradingAccounts = AccountStore.getMyAccounts()
    let myAccountCount = tradingAccounts.length

    // eslint-disable-next-line react/prop-types
    if (starredAccounts.size) {
      for (let i = tradingAccounts.length - 1; i >= 0; i--) {
        // eslint-disable-next-line react/prop-types
        if (!starredAccounts.has(tradingAccounts[i])) {
          tradingAccounts.splice(i, 1)
        }
      }
      // eslint-disable-next-line react/prop-types
      starredAccounts.forEach((account) => {
        if (tradingAccounts.indexOf(account.name) === -1) {
          tradingAccounts.push(account.name)
        }
      })
    }

    let myAccounts = AccountStore.getMyAccounts()

    let walletBalance = myAccounts.length ? (
      <div
        className="grp-menu-item"
        style={{
          padding: '18px 0 15px 0',
          fontSize: 14,
        }}
      >
        <TotalBalanceValue.AccountWrapper accounts={myAccounts} inHeader={true} />
      </div>
    ) : null

    let dashboard = (
      <a
        style={{ paddingTop: 3, paddingBottom: 3 }}
        className={cnames({ active: active === '/' || active.indexOf('dashboard') !== -1 })}
        onClick={this._onNavigate.bind(this, '/dashboard')}
      >
        <img style={{ margin: 0, height: 40 }} src={logo} />
      </a>
    )

    let createAccountLink =
      myAccountCount === 0 ? (
        <div className="grp-menu-item">
          <div
            className={cnames('button create-account', {
              active: active.indexOf('create-account') !== -1,
            })}
            onClick={this._onNavigate.bind(this, '/create-account')}
          >
            <Translate content="header.create_account" />
          </div>
        </div>
      ) : null

    let lock_unlock =
      // eslint-disable-next-line react/prop-types
      this.props.current_wallet && myAccountCount ? (
        <div className="grp-menu-item">
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.locked ? (
            <a
              style={{ padding: '1rem' }}
              href
              onClick={this._toggleLock.bind(this)}
              data-class="unlock-tooltip"
              data-offset="{'left': 50}"
              data-tip={locked_tip}
              data-place="bottom"
              data-html
            >
              <Icon className="icon-14px" name="locked" />
            </a>
          ) : (
            <a
              href
              onClick={this._toggleLock.bind(this)}
              data-class="unlock-tooltip"
              data-offset="{'left': 50}"
              data-tip={unlocked_tip}
              data-place="bottom"
              data-html
            >
              <Icon className="icon-14px" name="unlocked" />
            </a>
          )}
        </div>
      ) : null

    let tradeLink =
      // eslint-disable-next-line react/prop-types
      this.props.lastMarket && active.indexOf('market/') === -1 ? (
        <a
          className={cnames({ active: active.indexOf('market/') !== -1 })}
          /* eslint-disable-next-line react/prop-types */
          onClick={this._onNavigate.bind(this, `/market/${this.props.lastMarket}`)}
        >
          <Translate component="span" content="header.exchange" />
        </a>
      ) : (
        <a
          className={cnames({ active: active.indexOf('market/') !== -1 })}
          onClick={this._onNavigate.bind(this, '/market/USD_BTS')}
        >
          <Translate component="span" content="header.exchange" />
        </a>
      )

    // Account selector: Only active inside the exchange
    let accountsDropDown = null

    if (currentAccount) {
      let account_display_name =
        // eslint-disable-next-line react/prop-types
        currentAccount.length > 20 ? `${currentAccount.slice(0, 20)}..` : currentAccount
      if (tradingAccounts.indexOf(currentAccount) < 0) {
        tradingAccounts.push(currentAccount)
      }

      if (tradingAccounts.length >= 1) {
        let accountsList = tradingAccounts.sort().map((name, index) => {
          return (
            <li key={name} style={index === 0 ? { paddingTop: 10 } : null}>
              <a href onClick={this._accountClickHandler.bind(this, name)}>
                <span className="float-left">
                  <Icon className="icon-14px" name="user" />
                </span>
                <span>{name}</span>
              </a>
            </li>
          )
        })

        let options = [
          { to: '/help', text: 'header.help' },
          { to: '/explorer', text: 'header.explorer' },
        ].map((entry) => {
          return (
            <li className="dropdown-options" key={entry.to}>
              <Translate
                content={entry.text}
                component="a"
                onClick={this._onNavigate.bind(this, entry.to)}
              />
            </li>
          )
        })

        let lockOptions =
          // eslint-disable-next-line react/prop-types
          this.props.current_wallet && myAccountCount ? (
            <li className="dropdown-options">
              <Translate
                /* eslint-disable-next-line react/prop-types */
                content={this.props.locked ? 'header.unlock' : 'header.lock'}
                component="a"
                onClick={this._toggleLock.bind(this)}
              />
            </li>
          ) : null

        accountsDropDown = (
          <Container>
            <Container.Button title="">
              <a style={{ padding: '1rem' }} className="button">
                &nbsp;{account_display_name} &nbsp;
                <Icon className="icon-14px" name="chevron-down" />
              </a>
            </Container.Button>
            <Container.Content>
              <ul className="no-first-element-top-border">
                {options}
                {lockOptions}
                {tradingAccounts.length > 1 ? accountsList : null}
              </ul>
            </Container.Content>
          </Container>
        )
      }
    }

    return (
      <div className="header menu-group primary">
        <div className="show-for-small-only">
          <ul className="primary menu-bar title">
            <li>
              <a href onClick={this._triggerMenu}>
                <Icon className="icon-14px" name="menu" />
              </a>
            </li>
          </ul>
        </div>
        {window.electron ? (
          <div className="grid-block show-for-medium shrink">
            <ul className="menu-bar">
              <li>
                <div style={{ marginLeft: '1rem', height: '3rem' }}>
                  <div
                    style={{ marginTop: '0.5rem' }}
                    onClick={this._onGoBack.bind(this)}
                    className="button outline"
                  >
                    {'<'}
                  </div>
                </div>
              </li>
              <li>
                <div style={{ height: '3rem' }}>
                  <div
                    style={{ marginTop: '0.5rem' }}
                    onClick={this._onGoForward.bind(this)}
                    className="button outline"
                  />
                </div>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="grid-block show-for-medium">
          <ul className="menu-bar">
            <li>{dashboard}</li>
            {!currentAccount ? null : (
              <li>
                <Link
                  to={`/account/${currentAccount}/overview`}
                  className={cnames({ active: active.indexOf('account/') !== -1 })}
                >
                  <Translate content="header.account" />
                </Link>
              </li>
            )}
            {currentAccount || myAccounts.length ? (
              <li>
                <a
                  className={cnames({ active: active.indexOf('transfer') !== -1 })}
                  onClick={this._onNavigate.bind(this, '/transfer')}
                >
                  <Translate component="span" content="header.payments" />
                </a>
              </li>
            ) : null}
            {!(currentAccount || myAccounts.length) ? (
              <li>
                <a
                  className={cnames({ active: active.indexOf('explorer') !== -1 })}
                  onClick={this._onNavigate.bind(this, '/explorer')}
                >
                  <Translate component="span" content="header.explorer" />
                </a>
              </li>
            ) : null}
            <li>{tradeLink}</li>
            {currentAccount && myAccounts.indexOf(currentAccount) !== -1 ? (
              <li>
                <Link to={'/deposit-withdraw/'} activeClassName="active">
                  <Translate content="account.deposit_withdraw" />
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="grid-block show-for-medium shrink">
          <div className="grp-menu-items-group header-right-menu">
            {walletBalance}

            <div className="grid-block shrink overflow-visible account-drop-down">
              {accountsDropDown}
            </div>
            <div className="grp-menu-item">
              <Link
                style={{ padding: '1rem' }}
                to="/settings"
                data-tip={settings}
                data-place="bottom"
              >
                <Icon className="icon-14px" name="cog" />
              </Link>
            </div>
            {lock_unlock}
            {createAccountLink}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(Header, {
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
      starredAccounts: SettingsStore.getState().starredAccounts,
    }
  },
})
