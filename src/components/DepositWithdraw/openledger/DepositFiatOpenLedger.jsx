import React from 'react'
import ChainTypes from '../../Utility/ChainTypes'
import BindToChainState from '../../Utility/BindToChainState'
import utils from '../../../common/utils'
import counterpart from 'counterpart'
import AmountSelector from '../../Utility/AmountSelector'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import PropTypes from 'prop-types'

class DepositFiatOpenLedger extends React.Component {
  static propTypes = {
    account: ChainTypes.ChainAccount.isRequired,
    issuer_account: ChainTypes.ChainAccount.isRequired,
    deposit_asset: PropTypes.string,
    receive_asset: ChainTypes.ChainAsset.isRequired,
    rpc_url: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      deposit_amount: null,
      deposit_info: null,
      deposit_error: null,
    }
  }

  onDepositAmountChange({ amount, asset }) {
    this.setState({ deposit_amount: amount })
  }

  onSubmitDeposit() {
    let asset = this.props.receive_asset
    let precision = utils.get_asset_precision(asset.get('precision'))
    let amount = this.state.deposit_amount.replace(/,/g, '')
    console.log('deposit_amount: ', amount)

    let json_rpc_request = {
      jsonrpc: '2.0',
      method: 'getDepositAccount',
      params: {
        bitsharesAccountName: this.props.account.get('name'),
        currency: this.props.deposit_asset,
        amount: amount,
      },
      id: 1,
    }

    let is_deposit_approved_promise = fetch(this.props.rpc_url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      }),
      body: 'rq=' + encodeURIComponent(JSON.stringify(json_rpc_request)),
    }).then((response) => response.json())

    is_deposit_approved_promise
      .then((json_response) => {
        if ('result' in json_response) this.setState({ deposit_info: json_response.result })
        else if ('error' in json_response && 'message' in json_response.error)
          this.setState({ deposit_error: json_response.error.message })
        else
          this.setState({
            deposit_error:
              'Unable to approve deposit, please contact OpenLedger or try again later',
          })
      })
      .catch((error) => {
        this.setState({
          deposit_error: 'Unable to approve deposit, please contact OpenLedger or try again later',
        })
      })
  }

  onClose() {
    // reset the state so the next time the dialog is launched, it doesn't show the old data
    this.setState({
      deposit_amount: null,
      deposit_info: null,
      deposit_error: null,
    })
    // eslint-disable-next-line react/prop-types
    ZfApi.publish(this.props.modal_id, 'close')
  }

  onOpenLink() {
    window.open(this.state.deposit_info.link, '_blank')
  }

  render() {
    if (this.state.deposit_error) {
      // then we've failed to approve them
      return (
        <form className="grid-block vertical full-width-content">
          <div className="grid-container">
            <div className="content-block">
              <h3>Deposit Error</h3>
            </div>
            <div className="content-block">
              <p>{this.state.deposit_error}</p>
            </div>
            <div className="content-block">
              <input
                type="submit"
                className="button"
                onClick={this.onClose.bind(this)}
                value="Close"
              />
            </div>
          </div>
        </form>
      )
    } else if (this.state.deposit_info) {
      // then they've been approved for deposit
      if ('link' in this.state.deposit_info)
        return (
          <form className="grid-block vertical full-width-content">
            <div className="grid-container">
              <div className="content-block">
                <h3>Deposit Information</h3>
              </div>
              <div className="content-block">
                <p>
                  Click <a onClick={this.onOpenLink.bind(this)}>here</a> for deposit instructions
                </p>
              </div>
              <div className="content-block">
                <input
                  type="submit"
                  className="button"
                  onClick={this.onClose.bind(this)}
                  value="Close"
                />
              </div>
            </div>
          </form>
        )

      // old dead code for displaying all returned fields as text
      let table_lines = []
      for (var key in this.state.deposit_info)
        if (this.state.deposit_info.hasOwnProperty(key))
          table_lines.push(
            <tr>
              <td>{key}</td>
              <td>{this.state.deposit_info[key]}</td>
            </tr>,
          )
      return (
        <form className="grid-block vertical full-width-content">
          <div className="grid-container">
            <div className="content-block">
              <h3>Deposit Information</h3>
            </div>
            <div className="content-block">
              <table className="table">
                <tbody>{table_lines}</tbody>
              </table>
            </div>

            <div className="content-block">
              <input
                type="submit"
                className="button"
                onClick={this.onClose.bind(this)}
                value={counterpart.translate('account.perm.cancel')}
              />
              {/* <Trigger close={this.props.modal_id}>
                          <div className="button">Close</a>
                        </Trigger> */}
            </div>
          </div>
        </form>
      )
    } // they haven't clicked deposit, ask them how much they're depositing
    else {
      return (
        <form className="grid-block vertical full-width-content">
          <div className="grid-container">
            <div className="content-block">
              <h3>Deposit {this.props.deposit_asset}</h3>
            </div>
            <div className="content-block">
              <AmountSelector
                label="modal.deposit.amount"
                amount={this.state.deposit_amount}
                asset={this.props.receive_asset.get('id')}
                assets={[this.props.receive_asset.get('id')]}
                placeholder="0.0"
                onChange={this.onDepositAmountChange.bind(this)}
                display_balance={null}
              />
            </div>

            <div className="content-block">
              <input
                type="submit"
                className="button"
                onClick={this.onSubmitDeposit.bind(this)}
                value={counterpart.translate('modal.deposit.submit')}
              />
              <input
                type="submit"
                className=" button"
                onClick={this.onClose.bind(this)}
                value={counterpart.translate('account.perm.cancel')}
              />
              {/* <Trigger close={this.props.modal_id}>
                              <div className="button"><Translate content="account.perm.cancel" /></div>
                          </Trigger> */}
            </div>
          </div>
        </form>
      )
    }
  }
}

export default BindToChainState(DepositFiatOpenLedger, { keep_updating: true })
