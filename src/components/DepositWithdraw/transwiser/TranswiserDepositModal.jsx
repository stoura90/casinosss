import React from 'react'
import Trigger from 'react-foundation-apps/src/trigger'
import { Translate } from '@material-ui/icons'
import ChainTypes from '../../Utility/ChainTypes'
import BindToChainState from '../../Utility/BindToChainState'
import AccountBalance from '../../Account/AccountBalance'
import PropTypes from 'prop-types'

class TranswiserDepositModal extends React.Component {
  static propTypes = {
    issuerAccount: ChainTypes.ChainAccount.isRequired,
    depositUrl: PropTypes.string.isRequired,
    qr: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    modalId: PropTypes.string.isRequired,
    inventoryAsset: ChainTypes.ChainAsset.isRequired,
  }

  constructor(props) {
    super(props)
  }

  gotoShop() {
    window.open(this.props.depositUrl)
  }

  render() {
    return (
      <div className="grid-block vertical full-width-content">
        <div className="grid-container">
          <div className="content-block">
            <h3>
              <Translate
                content="gateway.transwiser.deposit_title"
                asset={this.props.inventoryAsset.get('symbol')}
              />
            </h3>
          </div>
          <div className="content-block">
            <label>
              <Translate content="gateway.inventory" />
            </label>
            <AccountBalance
              account={this.props.issuerAccount.get('name')}
              asset={this.props.inventoryAsset.get('symbol')}
            />
          </div>
          <div className="content-block">
            <label>
              <Translate content="gateway.transwiser.visit_weidian" />
            </label>
            <a
              onClick={this.gotoShop.bind(this)}
              href={this.props.depositUrl}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.depositUrl}
            </a>
          </div>
          <div className="content-block">
            <label>
              <Translate content="gateway.scan_qr" />
            </label>
            <img src={this.props.qr} />
          </div>
          {/*
                   <br/>
                   <div className="content-block">
                       <label><Translate content="transfer.fee" /></label>
                       {this.props.fee}
                   </div>
                   */}
          <div className="content-block">
            <Trigger close={this.props.modalId}>
              <div className="button">
                <Translate content="modal.ok" />
              </div>
            </Trigger>
          </div>
        </div>
      </div>
    )
  }
}

export default BindToChainState(TranswiserDepositModal, { keep_updating: true })
