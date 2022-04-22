import React from 'react'
import { Translate } from '@material-ui/icons'
import FormattedAsset from '../Utility/FormattedAsset'
import { ChainStore } from 'graphenejs-lib'
import Utils from '../../common/utils'
import WalletActions from '../../actions/WalletActions'
import { Apis } from 'graphenejs-ws'

class VestingBalance extends React.Component {
  _onClaim(claimAll, e) {
    e.preventDefault()
    // eslint-disable-next-line react/prop-types
    WalletActions.claimVestingBalance(this.props.account.id, this.props.vb, claimAll)
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { account, vb } = this.props
    // eslint-disable-next-line react/prop-types
    if (!this.props.vb) {
      return null
    }
    // let vb = ChainStore.getObject( this.props.vb );
    // if (!vb) {
    //     return null;
    // }

    let cvbAsset,
      vestingPeriod,
      remaining,
      earned,
      secondsPerDay = 60 * 60 * 24,
      availablePercent,
      balance
    if (vb) {
      // eslint-disable-next-line react/prop-types
      balance = vb.balance.amount
      // eslint-disable-next-line react/prop-types
      cvbAsset = ChainStore.getAsset(vb.balance.asset_id)
      // eslint-disable-next-line react/prop-types
      earned = vb.policy[1].coin_seconds_earned
      // eslint-disable-next-line react/prop-types
      vestingPeriod = vb.policy[1].vesting_seconds

      availablePercent = earned / (vestingPeriod * balance)
    }

    // eslint-disable-next-line react/prop-types
    let account_name = account.name

    if (!cvbAsset) {
      return null
    }

    if (!balance) {
      return null
    }

    return (
      <div style={{ paddingBottom: '1rem' }}>
        <div className="">
          <div className="grid-content no-padding">
            {/* eslint-disable-next-line react/prop-types */}
            <Translate component="h5" content="account.vesting.balance_number" id={vb.id} />

            <table className="table key-value-table">
              <tbody>
                <tr>
                  <td>
                    <Translate content="account.member.cashback" />{' '}
                  </td>
                  <td>
                    {/* eslint-disable-next-line react/prop-types */}
                    <FormattedAsset amount={vb.balance.amount} asset={vb.balance.asset_id} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="account.member.earned" />
                  </td>
                  <td>
                    {Utils.format_number(
                      Utils.get_asset_amount(earned / secondsPerDay, cvbAsset),
                      0,
                    )}{' '}
                    <Translate content="account.member.coindays" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="account.member.required" />
                  </td>
                  <td>
                    {Utils.format_number(
                      Utils.get_asset_amount(
                        // eslint-disable-next-line react/prop-types
                        (vb.balance.amount * vestingPeriod) / secondsPerDay,
                        cvbAsset,
                      ),
                      0,
                    )}{' '}
                    <Translate content="account.member.coindays" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="account.member.remaining" />
                  </td>
                  <td>
                    {Utils.format_number(
                      (vestingPeriod * (1 - availablePercent)) / secondsPerDay,
                      2,
                    )}{' '}
                    days
                  </td>
                </tr>
                <tr>
                  <td>
                    <Translate content="account.member.available" />
                  </td>
                  <td>
                    {Utils.format_number(availablePercent * 100, 2)}% /{' '}
                    <FormattedAsset
                      /* eslint-disable-next-line react/prop-types */
                      amount={availablePercent * vb.balance.amount}
                      asset={cvbAsset.get('id')}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: 'right' }}>
                    <button onClick={this._onClaim.bind(this, false)} className="button outline">
                      <Translate content="account.member.claim" />
                    </button>
                    <button onClick={this._onClaim.bind(this, true)} className="button outline">
                      <Translate content="account.member.claim_all" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

class AccountVesting extends React.Component {
  constructor() {
    super()

    this.state = {
      vbs: null,
    }
  }

  UNSAFE_componentWillMount() {
    Apis.instance()
      .db_api()
      // eslint-disable-next-line react/prop-types
      .exec('get_vesting_balances', [this.props.account.get('id')])
      .then((vbs) => {
        this.setState({ vbs })
      })
      .catch((err) => {
        console.log('error:', err)
      })
  }

  render() {
    let { vbs } = this.state
    // eslint-disable-next-line react/prop-types
    if (!vbs || !this.props.account || !this.props.account.get('vesting_balances')) {
      return null
    }

    // eslint-disable-next-line react/prop-types
    let account = this.props.account.toJS()

    let balances = vbs
      .map((vb) => {
        if (vb.balance.amount) {
          return <VestingBalance key={vb.id} vb={vb} account={account} />
        }
      })
      .filter((a) => {
        return !!a
      })

    return (
      <div className="grid-content" style={{ overflowX: 'hidden' }}>
        <div className="grid-content">
          <Translate content="account.vesting.explain" component="p" />
          {!balances.length ? (
            <h4 style={{ paddingTop: '1rem' }}>
              <Translate content={'account.vesting.no_balances'} />
            </h4>
          ) : (
            balances
          )}
        </div>
      </div>
    )
  }
}

AccountVesting.VestingBalance = VestingBalance
export default AccountVesting
