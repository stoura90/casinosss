import React from 'react'
import { Translate } from '@material-ui/icons'
import { ChainStore } from 'graphenejs-lib'
import ChainTypes from '../../Utility/ChainTypes'
import BindToChainState from '../../Utility/BindToChainState'
import WithdrawModalBlocktrades from './WithdrawModalBlocktrades'
import Modal from 'react-foundation-apps/src/modal'
import Trigger from 'react-foundation-apps/src/trigger'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import AccountBalance from '../../Account/AccountBalance'
import BlockTradesDepositAddressCache from './BlockTradesDepositAddressCache'
import AssetName from '../../Utility/AssetName'
import LinkToAccountById from '../../Blockchain/LinkToAccountById'
import PropTypes from 'prop-types'

class BlockTradesGatewayDepositRequest extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    gateway: PropTypes.string,
    deposit_coin_type: PropTypes.string,
    deposit_asset_name: PropTypes.string,
    deposit_account: PropTypes.string,
    receive_coin_type: PropTypes.string,
    account: ChainTypes.ChainAccount,
    issuer_account: ChainTypes.ChainAccount,
    deposit_asset: PropTypes.string,
    deposit_wallet_type: PropTypes.string,
    receive_asset: ChainTypes.ChainAsset,
    deprecated_in_favor_of: ChainTypes.ChainAsset,
    deprecated_message: PropTypes.string,
    action: PropTypes.string,
    supports_output_memos: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.deposit_address_cache = new BlockTradesDepositAddressCache()

    let urls = {
      blocktrades: 'https://api.blocktrades.us/v2',
      openledger: 'https://api.blocktrades.us/ol/v2',
    }

    this.state = {
      receive_address: null,
      url: props.url || urls[props.gateway],
    }

    this._copy = this._copy.bind(this)
    document.addEventListener('copy', this._copy)
  }

  _copy(e) {
    try {
      e.clipboardData.setData('text/plain', this.state.clipboardText)
      e.preventDefault()
    } catch (err) {
      console.error(err)
    }
  }

  UNSAFE_componentWillMount() {
    let account_name = this.props.account.get('name')
    let receive_address = this.deposit_address_cache.getCachedInputAddress(
      this.props.gateway,
      account_name,
      this.props.deposit_coin_type,
      this.props.receive_coin_type,
    )

    if (!receive_address) {
      this.requestDepositAddress()
    }
  }

  requestDepositAddress() {
    let body = {
      inputCoinType: this.props.deposit_coin_type,
      outputCoinType: this.props.receive_coin_type,
      outputAddress: this.props.account.get('name'),
    }

    let body_string = JSON.stringify(body)

    fetch(this.state.url + '/simple-api/initiate-trade', {
      method: 'post',
      headers: new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' }),
      body: body_string,
    }).then(
      (reply) => {
        reply.json().then(
          (json) => {
            // console.log( "reply: ", json )
            let address = { address: json.inputAddress || 'unknown', memo: json.inputMemo }
            this.addDepositAddress(address)
          },
          (error) => {
            // console.log( "error: ",error  );
            this.addDepositAddress({ address: 'unknown', memo: null })
          },
        )
      },
      (error) => {
        // console.log( "error: ",error  );
        this.addDepositAddress({ address: 'unknown', memo: null })
      },
    )
  }

  addDepositAddress(receive_address) {
    let account_name = this.props.account.get('name')
    this.deposit_address_cache.cacheInputAddress(
      this.props.gateway,
      account_name,
      this.props.deposit_coin_type,
      this.props.receive_coin_type,
      receive_address.address,
      receive_address.memo,
    )
    this.setState({ receive_address })
  }

  getWithdrawModalId() {
    // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
    // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
    return (
      'withdraw_asset_' +
      this.props.issuer_account.get('name') +
      '_' +
      this.props.receive_asset.get('symbol')
    )
  }

  onWithdraw() {
    ZfApi.publish(this.getWithdrawModalId(), 'open')
  }

  toClipboard(clipboardText) {
    try {
      this.setState({ clipboardText }, () => {
        document.execCommand('copy')
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    let emptyRow = <div style={{ display: 'none', minHeight: 150 }}></div>
    if (!this.props.account || !this.props.issuer_account || !this.props.receive_asset)
      return emptyRow

    let account_balances_object = this.props.account.get('balances')

    let balance = '0 ' + this.props.receive_asset.get('symbol')
    if (this.props.deprecated_in_favor_of) {
      let has_nonzero_balance = false
      let balance_object_id = account_balances_object.get(this.props.receive_asset.get('id'))
      if (balance_object_id) {
        let balance_object = ChainStore.getObject(balance_object_id)
        if (balance_object) {
          let balance = balance_object.get('balance')
          if (balance != 0) has_nonzero_balance = true
        }
      }
      if (!has_nonzero_balance) return emptyRow
    }

    // let account_balances = account_balances_object.toJS();
    // let asset_types = Object.keys(account_balances);
    // if (asset_types.length > 0) {
    //     let current_asset_id = this.props.receive_asset.get('id');
    //     if( current_asset_id )
    //     {
    //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
    //     }
    // }

    let receive_address = this.state.receive_address
    if (!receive_address) {
      let account_name = this.props.account.get('name')
      receive_address = this.deposit_address_cache.getCachedInputAddress(
        this.props.gateway,
        account_name,
        this.props.deposit_coin_type,
        this.props.receive_coin_type,
      )
    }

    if (!receive_address) {
      this.requestDepositAddress()
      return emptyRow
    }

    let withdraw_modal_id = this.getWithdrawModalId()
    let deposit_address_fragment = null
    let deposit_memo = null
    // if (this.props.deprecated_in_favor_of)
    // {
    //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get('symbol')} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" /></span><ReactTooltip /></span>;
    // }
    // else
    // {
    let clipboardText = ''
    let memoText
    if (this.props.deposit_account) {
      deposit_address_fragment = <span>{this.props.deposit_account}</span>
      clipboardText = this.props.receive_coin_type + ':' + this.props.account.get('name')
      deposit_memo = <span>{clipboardText}</span>
      var withdraw_memo_prefix = this.props.deposit_coin_type + ':'
    } else {
      if (receive_address.memo) {
        // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
        memoText = receive_address.memo
        clipboardText = receive_address.address
        deposit_address_fragment = <span>{receive_address.address}</span>
        deposit_memo = <span>{receive_address.memo}</span>
      } else {
        // This is a client that uses unique deposit addresses to select the output
        clipboardText = receive_address.address
        deposit_address_fragment = <span>{receive_address.address}</span>
      }
      var withdraw_memo_prefix = ''
    }

    if (this.props.action === 'deposit') {
      return (
        <div className="grid-block no-padding no-margin test">
          <div style={{ paddingRight: 40, paddingBottom: 20 }}>
            <Translate component="h4" content="gateway.deposit_summary" />
            <table style={{ width: 'inherit' }} className="table">
              <tbody>
                <tr>
                  <Translate component="td" content="gateway.asset_to_deposit" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    {this.props.deposit_asset}
                  </td>
                </tr>
                <tr>
                  <Translate component="td" content="gateway.asset_to_receive" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <AssetName name={this.props.receive_asset.get('symbol')} />
                  </td>
                </tr>
                <tr>
                  <Translate component="td" content="gateway.intermediate" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <LinkToAccountById account={this.props.issuer_account.get('id')} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="gateway.balance" />:
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <AccountBalance
                      account={this.props.account.get('name')}
                      asset={this.props.receive_asset.get('symbol')}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Translate component="h4" content="gateway.deposit_inst" />
            <span>
              <Translate content="gateway.deposit_to" asset={this.props.deposit_asset} />:
            </span>
            <div style={{ padding: '10px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <table className="table">
                <tbody>
                  <tr>
                    <td>{deposit_address_fragment}</td>
                  </tr>
                  {deposit_memo ? (
                    <tr>
                      <td>memo: {deposit_memo}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
              <div className="button-group" style={{ paddingTop: 10 }}>
                {deposit_address_fragment ? (
                  <div className="button" onClick={this.toClipboard.bind(this, clipboardText)}>
                    Copy address
                  </div>
                ) : null}
                {memoText ? (
                  <div className="button" onClick={this.toClipboard.bind(this, memoText)}>
                    Copy memo
                  </div>
                ) : null}
                <button className={'button'} onClick={this.requestDepositAddress.bind(this)}>
                  <Translate content="gateway.generate_new" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="grid-block no-padding no-margin">
          <div style={{ paddingRight: 40, paddingBottom: 20 }}>
            <Translate component="h4" content="gateway.withdraw_summary" />
            <table style={{ width: 'inherit' }} className="table">
              <tbody>
                <tr>
                  <Translate component="td" content="gateway.asset_to_withdraw" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <AssetName name={this.props.receive_asset.get('symbol')} />
                  </td>
                </tr>
                <tr>
                  <Translate component="td" content="gateway.asset_to_receive" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    {this.props.deposit_asset}
                  </td>
                </tr>
                <tr>
                  <Translate component="td" content="gateway.intermediate" />
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <LinkToAccountById account={this.props.issuer_account.get('id')} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="gateway.balance" />:
                  </td>
                  <td style={{ fontWeight: 'bold', color: '#4A90E2', textAlign: 'right' }}>
                    <AccountBalance
                      account={this.props.account.get('name')}
                      asset={this.props.receive_asset.get('symbol')}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/*<p>When you withdraw {this.props.receive_asset.get('symbol')}, you will receive {this.props.deposit_asset} at a 1:1 ratio (minus fees).</p>*/}
          </div>
          <div>
            <Translate component="h4" content="gateway.withdraw_inst" />
            <span>
              <Translate content="gateway.withdraw_to" asset={this.props.deposit_asset} />:
            </span>
            <div style={{ padding: '10px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>
              <div style={{ paddingTop: 10 }}>
                <button
                  className={'button success'}
                  style={{ width: '100%' }}
                  onClick={this.onWithdraw.bind(this)}
                >
                  <Translate content="gateway.withdraw_now" />{' '}
                </button>
              </div>
            </div>
          </div>
          <Modal id={withdraw_modal_id} overlay={true}>
            <Trigger close={withdraw_modal_id}>
              <a href="#" className="close-button">
                &times;
              </a>
            </Trigger>
            <br />
            <div className="grid-block vertical">
              <WithdrawModalBlocktrades
                account={this.props.account.get('name')}
                issuer={this.props.issuer_account.get('name')}
                asset={this.props.receive_asset.get('symbol')}
                url={this.state.url}
                output_coin_name={this.props.deposit_asset_name}
                output_coin_symbol={this.props.deposit_asset}
                output_coin_type={this.props.deposit_coin_type}
                output_wallet_type={this.props.deposit_wallet_type}
                output_supports_memos={this.props.supports_output_memos}
                memo_prefix={withdraw_memo_prefix}
                modal_id={withdraw_modal_id}
              />
            </div>
          </Modal>
        </div>
      )
    }
  }
}

export default BindToChainState(BlockTradesGatewayDepositRequest, { keep_updating: true })
