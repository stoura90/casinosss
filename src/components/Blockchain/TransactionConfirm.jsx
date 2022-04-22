import React from 'react'
import Modal from 'react-foundation-apps/src/modal'
import ZfApi from 'react-foundation-apps/src/utils/foundation-api'
import Transaction from './Transaction'
import { Translate } from '@material-ui/icons'
import TransactionConfirmActions from '../../actions/TransactionConfirmActions'
import TransactionConfirmStore from '../../stores/TransactionConfirmStore'
import { connect } from 'alt-react'
import Icon from '../Icon/Icon'
import LoadingIndicator from '../LoadingIndicator'
import WalletDb from '../../stores/WalletDb'
import AccountStore from '../../stores/AccountStore'
import AccountSelect from '../../components/Forms/AccountSelect'
import { ChainStore } from 'graphenejs-lib'
import utils from '../../common/utils'

class TransactionConfirm extends React.Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (!nextProps.transaction) {
      return false
    }

    return !utils.are_equal_shallow(nextProps, this.props)
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.closed) {
      ZfApi.publish('transaction_confirm_modal', 'open')
    } else {
      ZfApi.publish('transaction_confirm_modal', 'close')
    }
  }

  onConfirmClick(e) {
    e.preventDefault()

    // eslint-disable-next-line react/prop-types
    if (this.props.propose) {
      TransactionConfirmActions.close()
      const propose_options = {
        // eslint-disable-next-line react/prop-types
        fee_paying_account: ChainStore.getAccount(this.props.fee_paying_account).get('id'),
      }
      // eslint-disable-next-line react/prop-types
      this.props.transaction.update_head_block().then(() => {
        // eslint-disable-next-line react/prop-types
        WalletDb.process_transaction(this.props.transaction.propose(propose_options), null, true)
      })
      // eslint-disable-next-line react/prop-types
    } else TransactionConfirmActions.broadcast(this.props.transaction)
  }

  onCloseClick(e) {
    e.preventDefault()
    TransactionConfirmActions.close()
  }

  onProposeClick(e) {
    e.preventDefault()
    TransactionConfirmActions.togglePropose()
  }

  onProposeAccount(fee_paying_account) {
    ChainStore.getAccount(fee_paying_account)
    TransactionConfirmActions.proposeFeePayingAccount(fee_paying_account)
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { broadcast, broadcasting } = this.props

    // eslint-disable-next-line react/prop-types
    if (!this.props.transaction || this.props.closed) {
      return null
    }
    let button_group,
      header,
      confirmButtonClass = 'button'
    // eslint-disable-next-line react/prop-types
    if (this.props.propose && !this.props.fee_paying_account) confirmButtonClass += ' disabled'

    // eslint-disable-next-line react/prop-types
    if (this.props.error || this.props.included) {
      // eslint-disable-next-line react/prop-types
      header = this.props.error ? (
        <div style={{ minHeight: 100 }} className="grid-content modal-header has-error">
          <Translate component="h3" content="transaction.broadcast_fail" />
          {/* eslint-disable-next-line react/prop-types */}
          <h6>{this.props.error}</h6>
        </div>
      ) : (
        <div style={{ minHeight: 100 }} className="grid-content modal-header">
          <div className="float-left">
            <Icon name="checkmark-circle" size="4x" className="success" />
          </div>
          <Translate component="h3" content="transaction.transaction_confirmed" />
          <h6>
            {/* eslint-disable-next-line react/prop-types */}
            {/* eslint-disable-next-line react/prop-types */}#{this.props.trx_id}@
            {this.props.trx_block_num}
          </h6>
        </div>
      )
      button_group = (
        <div className="button-group">
          <div className="button" onClick={this.onCloseClick.bind(this)}>
            <Translate content="transfer.close" />
          </div>
        </div>
      )
    } else if (broadcast) {
      header = (
        <div style={{ minHeight: 100 }} className="grid-content modal-header">
          <Translate component="h3" content="transaction.broadcast_success" />
          <Translate component="h6" content="transaction.waiting" />
        </div>
      )
      button_group = (
        <div className="button-group">
          <div className="button" onClick={this.onCloseClick.bind(this)}>
            <Translate content="transfer.close" />
          </div>
        </div>
      )
    } else if (broadcasting) {
      header = (
        <div style={{ minHeight: 100 }} className="grid-content modal-header">
          <Translate component="h3" content="transaction.broadcasting" />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <LoadingIndicator type="three-bounce" />
          </div>
        </div>
      )
      button_group = <div style={{ height: 55 }}></div>
    } else {
      header = (
        <div style={{ minHeight: 100 }} className="grid-content modal-header">
          <Translate component="h3" content="transaction.confirm" />
        </div>
      )
      button_group = (
        <div className="button-group">
          <div className="grid-block full-width-content">
            <div className={confirmButtonClass} onClick={this.onConfirmClick.bind(this)}>
              {/* eslint-disable-next-line react/prop-types */}
              {this.props.propose ? (
                <Translate content="propose" />
              ) : (
                <Translate content="transfer.confirm" />
              )}
            </div>
            <div className="button" onClick={this.onCloseClick.bind(this)}>
              <Translate content="account.perm.cancel" />
            </div>
          </div>
        </div>
      )
    }

    return (
      // eslint-disable-next-line react/no-string-refs
      <div ref="transactionConfirm">
        <Modal
          id="transaction_confirm_modal"
          /* eslint-disable-next-line react/no-string-refs */
          ref="modal"
          overlay={true}
          overlayClose={!broadcasting}
        >
          <div style={{ minHeight: 350 }} className="grid-block vertical no-padding no-margin">
            {!broadcasting ? (
              <div className="close-button" onClick={this.onCloseClick.bind(this)}>
                &times;
              </div>
            ) : null}
            {header}
            <div
              className="grid-content shrink"
              style={{ maxHeight: '60vh', overflowY: 'auto', overflowX: 'hidden' }}
            >
              <Transaction
                key={Date.now()}
                /* eslint-disable-next-line react/prop-types */
                trx={this.props.transaction.serialize()}
                index={0}
                no_links={true}
              />
            </div>

            {/* P R O P O S E   F R O M */}
            {/* eslint-disable-next-line react/prop-types */}
            {this.props.propose ? (
              <div className="full-width-content form-group">
                <label>
                  <Translate content="account.propose_from" />
                </label>
                <AccountSelect
                  account_names={AccountStore.getMyAccounts()}
                  onChange={this.onProposeAccount.bind(this)}
                />
              </div>
            ) : null}

            <div className="grid-block shrink" style={{ paddingTop: '1rem' }}>
              {button_group}

              {/* P R O P O S E   T O G G L E */}
              {/* eslint-disable-next-line react/prop-types */}
              {!this.props.transaction.has_proposed_operation() && !(broadcast || broadcasting) ? (
                <div className="align-right grid-block">
                  <label style={{ paddingTop: '0.5rem', paddingRight: '0.5rem' }}>
                    <Translate content="propose" />:
                  </label>
                  <div className="switch" onClick={this.onProposeClick.bind(this)}>
                    {/* eslint-disable-next-line react/prop-types */}
                    <input type="checkbox" checked={this.props.propose} />
                    <label />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

TransactionConfirm = connect(TransactionConfirm, {
  listenTo() {
    return [TransactionConfirmStore]
  },
  getProps() {
    return TransactionConfirmStore.getState()
  },
})

export default TransactionConfirm
