import React from 'react'
import Immutable from 'immutable'
import counterpart from 'counterpart'
import Utils from '../../common/utils'
import accountUtils from '../../common/account_utils'
import WalletApi from '../../api/WalletApi'
import WalletDb from '../../stores/WalletDb.js'
import { PublicKey } from 'graphenejs-lib'
import AccountPermissionsList from './AccountPermissionsList'
import PubKeyInput from '../Forms/PubKeyInput'
import { Tabs, Tab } from '../Utility/Tabs'
import HelpContent from '../Utility/HelpContent'
import { RecentTransactions } from './RecentTransactions'
import { Translate } from '@material-ui/icons'

let wallet_api = new WalletApi()

class AccountPermissions extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOwner: false }
    this.onPublish = this.onPublish.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-next-line react/prop-types
    this.updateAccountData(this.props.account)
    // eslint-disable-next-line react/prop-types
    accountUtils.getFinalFeeAsset(this.props.account, 'account_update')
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (nextProps.account !== this.props.account) this.updateAccountData(nextProps.account)
  }

  permissionsFromImmutableObj(auths) {
    let threshold = auths.get('weight_threshold')
    let account_auths = auths.get('account_auths')
    let key_auths = auths.get('key_auths')
    let address_auths = auths.get('address_auths')

    let accounts = account_auths.map((a) => a.get(0))
    let keys = key_auths.map((a) => a.get(0))
    let addresses = address_auths.map((a) => a.get(0))

    let weights = account_auths.reduce((res, a) => {
      res[a.get(0)] = a.get(1)
      return res
    }, {})
    weights = key_auths.reduce((res, a) => {
      res[a.get(0)] = a.get(1)
      return res
    }, weights)
    weights = address_auths.reduce((res, a) => {
      res[a.get(0)] = a.get(1)
      return res
    }, weights)

    return { threshold, accounts, keys, addresses, weights }
  }

  permissionsToJson(threshold, accounts, keys, addresses, weights) {
    let res = { weight_threshold: threshold }
    res['account_auths'] = accounts
      .sort(Utils.sortID)
      .map((a) => [a, weights[a]])
      .toJS()
    res['key_auths'] = keys
      .sort(Utils.sortID)
      .map((a) => [a, weights[a]])
      .toJS()
    res['address_auths'] = addresses
      .sort(Utils.sortID)
      .map((a) => [a, weights[a]])
      .toJS()
    return res
  }

  updateAccountData(account) {
    let active = this.permissionsFromImmutableObj(account.get('active'))
    let owner = this.permissionsFromImmutableObj(account.get('owner'))
    let memo_key = account.get('options').get('memo_key')
    let state = {
      active_accounts: active.accounts,
      active_keys: active.keys,
      active_addresses: active.addresses,
      owner_accounts: owner.accounts,
      owner_keys: owner.keys,
      owner_addresses: owner.addresses,
      active_weights: active.weights,
      owner_weights: owner.weights,
      active_threshold: active.threshold,
      owner_threshold: owner.threshold,
      memo_key: memo_key,
      prev_active_accounts: active.accounts,
      prev_active_keys: active.keys,
      prev_active_addresses: active.addresses,
      prev_owner_accounts: owner.accounts,
      prev_owner_keys: owner.keys,
      prev_owner_addresses: owner.addresses,
      prev_active_weights: active.weights,
      prev_owner_weights: owner.weights,
      prev_active_threshold: active.threshold,
      prev_owner_threshold: owner.threshold,
      prev_memo_key: memo_key,
    }
    this.setState(state)
  }

  isChanged() {
    let s = this.state
    return (
      s.active_accounts !== s.prev_active_accounts ||
      s.active_keys !== s.prev_active_keys ||
      s.active_addresses !== s.prev_active_addresses ||
      s.owner_accounts !== s.prev_owner_accounts ||
      s.owner_keys !== s.prev_owner_keys ||
      s.owner_addresses !== s.prev_owner_addresses ||
      s.active_threshold !== s.prev_active_threshold ||
      s.owner_threshold !== s.prev_owner_threshold ||
      s.memo_key !== s.prev_memo_key
    )
  }

  didChange(type, s = this.state) {
    if (type === 'memo') {
      return s.memo_key !== s.prev_memo_key
    }
    let didChange = false
    ;['_keys', '_active_addresses', '_accounts', '_threshold'].forEach((key) => {
      let current = type + key
      if (s[current] !== s['prev_' + current]) {
        didChange = true
      }
    })
    return didChange
  }

  onPublish() {
    let s = this.state
    // eslint-disable-next-line react/prop-types
    let updated_account = this.props.account.toJS()

    // Set fee asset
    updated_account.fee = {
      amount: 0,
      asset_id: accountUtils.getFinalFeeAsset(updated_account.id, 'account_update'),
    }

    let updateObject = {
      account: updated_account.id,
    }

    if (this.didChange('active')) {
      updateObject.active = this.permissionsToJson(
        s.active_threshold,
        s.active_accounts,
        s.active_keys,
        s.active_addresses,
        s.active_weights,
      )
    }
    /* Also include owner keys if the user has indicated it is necessary using the checkbox */
    if (this.didChange('owner') || this.state.isOwner) {
      updateObject.owner = this.permissionsToJson(
        s.owner_threshold,
        s.owner_accounts,
        s.owner_keys,
        s.owner_addresses,
        s.owner_weights,
      )
    }
    if (s.memo_key && this.didChange('memo') && this.isValidPubKey(s.memo_key)) {
      updateObject.new_options = { memo_key: s.memo_key }
    }

    // console.log("-- AccountPermissions.onPublish -->", updateObject, s.memo_key);
    var tr = wallet_api.new_transaction()
    tr.add_type_operation('account_update', updateObject)
    WalletDb.process_transaction(tr, null, true)
  }

  isValidPubKey(value) {
    return !!PublicKey.fromPublicKeyString(value)
  }

  onReset() {
    let s = this.state
    this.setState({
      active_accounts: s.prev_active_accounts,
      active_keys: s.prev_active_keys,
      active_addresses: s.prev_active_addresses,
      owner_accounts: s.prev_owner_accounts,
      owner_keys: s.prev_owner_keys,
      owner_addresses: s.prev_owner_addresses,
      active_weights: s.prev_active_weights,
      owner_weights: s.prev_owner_weights,
      active_threshold: s.prev_active_threshold,
      owner_threshold: s.prev_owner_threshold,
      memo_key: s.prev_memo_key,
    })
  }

  onAddItem(collection, item_value, weight) {
    let state = {}
    let list = collection + (Utils.is_object_id(item_value) ? '_accounts' : '_keys')
    state[list] = this.state[list].push(item_value)
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state[collection + '_weights'][item_value] = weight
    this.setState(state)
  }

  onRemoveItem(collection, item_value, listSuffix) {
    let state = {}
    let list = collection + listSuffix

    state[list] = this.state[list].filter((i) => i !== item_value)
    this.setState(state)
  }

  onThresholdChanged(var_name, event) {
    let value = parseInt(event.target.value.trim())
    let state = {}
    state[var_name] = value
    this.setState(state)
  }

  validateAccount(collection, account) {
    return null
  }

  sumUpWeights(accounts, keys, addresses, weights) {
    let sum = accounts.reduce((sum, a) => sum + weights[a], 0)
    sum = keys.reduce((sum, a) => sum + weights[a], sum)
    return addresses.reduce((sum, a) => sum + weights[a], sum)
  }

  onMemoKeyChanged(memo_key) {
    this.setState({ memo_key })
  }

  render() {
    let error1, error2

    let { active_accounts, active_keys, active_addresses, active_weights } = this.state
    let { owner_accounts, owner_keys, owner_addresses, owner_weights } = this.state

    let threshold = this.state.active_threshold > 0 ? this.state.active_threshold : 0
    let weights_total = this.sumUpWeights(
      active_accounts,
      active_keys,
      active_addresses,
      active_weights,
    )
    if (this.didChange('active') && weights_total < threshold)
      error1 = counterpart.translate('account.perm.warning1', { weights_total, threshold })

    threshold = this.state.owner_threshold > 0 ? this.state.owner_threshold : 0
    weights_total = this.sumUpWeights(owner_accounts, owner_keys, owner_addresses, owner_weights)
    if (this.didChange('owner') && weights_total < threshold)
      error2 = counterpart.translate('account.perm.warning2', { weights_total, threshold })

    let publish_buttons_class =
      'button' +
      (!(error1 || error2) && this.isChanged() && this.isValidPubKey(this.state.memo_key)
        ? ''
        : ' disabled')
    let reset_buttons_class = 'button outline' + (this.isChanged() ? '' : ' disabled')

    let accountsList = Immutable.Set()
    // eslint-disable-next-line react/prop-types
    accountsList = accountsList.add(this.props.account.get('id'))
    return (
      <div className="grid-content">
        <div className="generic-bordered-box">
          <Tabs
            setting="permissionsTabs"
            tabsClass="no-padding bordered-header"
            contentClass="grid-content no-overflow"
          >
            <Tab title="account.perm.active">
              <HelpContent style={{ maxWidth: '800px' }} path="components/AccountPermActive" />
              <form className="threshold">
                <label className="horizontal">
                  <Translate content="account.perm.threshold" /> &nbsp; &nbsp;
                  <input
                    type="number"
                    placeholder="0"
                    size="5"
                    value={this.state.active_threshold}
                    onChange={this.onThresholdChanged.bind(this, 'active_threshold')}
                    autoComplete="off"
                    tabIndex={1}
                  />
                </label>
              </form>
              <AccountPermissionsList
                label="account.perm.add_permission_label"
                accounts={active_accounts}
                keys={active_keys}
                weights={active_weights}
                addresses={active_addresses}
                validateAccount={this.validateAccount.bind(this, 'active')}
                onAddItem={this.onAddItem.bind(this, 'active')}
                onRemoveItem={this.onRemoveItem.bind(this, 'active')}
                placeholder={counterpart.translate('account.perm.account_name_or_key')}
                tabIndex={2}
              />
              <br />
              {error1 ? <div className="content-block has-error">{error1}</div> : null}

              <div>
                <label
                  className="inline-block"
                  style={{
                    position: 'relative',
                    top: -10,
                    margin: 0,
                  }}
                  data-place="bottom"
                  data-tip={counterpart.translate('tooltip.sign_owner')}
                >
                  <span>
                    <Translate content="account.perm.sign_owner" />
                    :&nbsp;&nbsp;
                  </span>
                </label>
                <div
                  className="switch"
                  onClick={() => {
                    this.setState({ isOwner: !this.state.isOwner })
                  }}
                >
                  <input type="checkbox" checked={this.state.isOwner} />
                  <label />
                </div>
              </div>
            </Tab>

            <Tab title="account.perm.owner">
              <HelpContent style={{ maxWidth: '800px' }} path="components/AccountPermOwner" />
              <form className="threshold">
                <label className="horizontal">
                  <Translate content="account.perm.threshold" /> &nbsp; &nbsp;
                  <input
                    type="number"
                    placeholder="0"
                    size="5"
                    value={this.state.owner_threshold}
                    onChange={this.onThresholdChanged.bind(this, 'owner_threshold')}
                    autoComplete="off"
                    tabIndex={4}
                  />
                </label>
              </form>
              <AccountPermissionsList
                label="account.perm.add_permission_label"
                accounts={owner_accounts}
                keys={owner_keys}
                weights={owner_weights}
                addresses={owner_addresses}
                validateAccount={this.validateAccount.bind(this, 'owner')}
                onAddItem={this.onAddItem.bind(this, 'owner')}
                onRemoveItem={this.onRemoveItem.bind(this, 'owner')}
                placeholder={counterpart.translate('account.perm.account_name_or_key')}
                tabIndex={5}
              />
              <br />
              {error2 ? <div className="content-block has-error">{error2}</div> : null}
            </Tab>

            <Tab title="account.perm.memo_key">
              <HelpContent style={{ maxWidth: '800px' }} path="components/AccountPermMemo" />
              <PubKeyInput
                /* eslint-disable-next-line react/no-string-refs */
                ref="memo_key"
                value={this.state.memo_key}
                label="account.perm.memo_public_key"
                placeholder="Public Key"
                onChange={this.onMemoKeyChanged.bind(this)}
                tabIndex={7}
              />
            </Tab>
          </Tabs>

          <div style={{ padding: 15 }}>
            <button className={publish_buttons_class} onClick={this.onPublish} tabIndex={8}>
              <Translate content="account.perm.publish" />
            </button>
            <button className={reset_buttons_class} onClick={this.onReset} tabIndex={9}>
              <Translate content="account.perm.reset" />
            </button>
          </div>
        </div>

        <RecentTransactions
          accountsList={accountsList}
          limit={25}
          compactView={false}
          filter="account_update"
          style={{ paddingTop: '2rem' }}
        />
      </div>
    )
  }
}

export default AccountPermissions
