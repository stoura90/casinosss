import React from 'react'
import { Translate } from '@material-ui/icons'
import market_utils from '../../common/market_utils'
import counterpart from 'counterpart'
import MarketsActions from '../../actions/MarketsActions'
import { ChainStore } from 'graphenejs-lib'
import MarketLink from '../Utility/MarketLink'
import { OrderRow, TableHeader } from '../../pages/private/exchange/pages/ETHBTC/MyOpenOrders'

class AccountOrders extends React.Component {
  _cancelLimitOrder(orderID, e) {
    e.preventDefault()

    MarketsActions.cancelLimitOrder(
      // eslint-disable-next-line react/prop-types
      this.props.account.get('id'),
      orderID, // order id to cancel
    ).catch((err) => {
      console.log('cancel order error:', err)
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { account } = this.props
    let cancel = counterpart.translate('account.perm.cancel')
    let markets = {}

    let marketOrders = {}

    // eslint-disable-next-line react/prop-types
    if (!account.get('orders')) {
      return null
    }
    // eslint-disable-next-line react/prop-types
    account.get('orders').forEach((orderID) => {
      let order = ChainStore.getObject(orderID).toJS()
      let base = ChainStore.getAsset(order.sell_price.base.asset_id)
      let quote = ChainStore.getAsset(order.sell_price.quote.asset_id)
      if (base && quote) {
        let baseID = parseInt(order.sell_price.base.asset_id.split('.')[2], 10)
        let quoteID = parseInt(order.sell_price.quote.asset_id.split('.')[2], 10)

        let marketID =
          quoteID > baseID
            ? `${quote.get('symbol')}_${base.get('symbol')}`
            : `${base.get('symbol')}_${quote.get('symbol')}`

        if (!markets[marketID]) {
          if (quoteID > baseID) {
            markets[marketID] = {
              base: {
                id: base.get('id'),
                symbol: base.get('symbol'),
                precision: base.get('precision'),
              },
              quote: {
                id: quote.get('id'),
                symbol: quote.get('symbol'),
                precision: quote.get('precision'),
              },
            }
          } else {
            markets[marketID] = {
              base: {
                id: quote.get('id'),
                symbol: quote.get('symbol'),
                precision: quote.get('precision'),
              },
              quote: {
                id: base.get('id'),
                symbol: base.get('symbol'),
                precision: base.get('precision'),
              },
            }
          }
        }

        let marketBase = ChainStore.getAsset(markets[marketID].base.id)
        let marketQuote = ChainStore.getAsset(markets[marketID].quote.id)

        if (!marketOrders[marketID]) {
          marketOrders[marketID] = []
        }

        let { price } = market_utils.parseOrder(order, marketBase, marketQuote)
        marketOrders[marketID].push(
          <OrderRow
            ref={markets[marketID].base.symbol}
            key={order.id}
            order={order}
            base={marketBase}
            quote={marketQuote}
            cancel_text={cancel}
            showSymbols={false}
            invert={true}
            onCancel={this._cancelLimitOrder.bind(this, order.id)}
            price={price.full}
          />,
        )
      }
    })

    let tables = []

    let marketIndex = 0
    for (let market in marketOrders) {
      if (marketOrders[market].length) {
        tables.push(
          <div key={market} style={marketIndex > 0 ? { paddingTop: '1rem' } : {}}>
            <h5 style={{ paddingLeft: 20, marginBottom: 5 }}>
              <MarketLink quote={markets[market].quote.id} base={markets[market].base.id} />
            </h5>
            <div className="exchange-bordered">
              <table className="table table-striped text-right ">
                <TableHeader
                  baseSymbol={markets[market].base.symbol}
                  quoteSymbol={markets[market].quote.symbol}
                />
                <tbody>
                  {marketOrders[market].sort((a, b) => {
                    return a.props.price - b.props.price
                  })}
                </tbody>
              </table>
            </div>
          </div>,
        )
        marketIndex++
      }
    }

    return (
      <div className="grid-content no-overflow" style={{ minWidth: '50rem', paddingBottom: 15 }}>
        {!tables.length ? (
          <p>
            <Translate content="account.no_orders" />
          </p>
        ) : null}
        {tables}
      </div>
    )
  }
}

export default AccountOrders
