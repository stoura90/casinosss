import React from 'react'
import Ps from 'perfect-scrollbar'
import Utils from '../../../../../common/utils'
import SettingsActions from '../../../../../actions/SettingsActions'
import classnames from 'classnames'
import PriceText from '../../../../../components/Utility/PriceText'
import TransitionWrapper from '../../../../../components/Utility/TransitionWrapper'
import AssetName from '../../../../../components/Utility/AssetName'
import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import { Translate } from '@material-ui/icons'
class OrderBookRowVertical extends React.Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (nextProps.order.market_base !== this.props.order.market_base) return false
    // eslint-disable-next-line react/prop-types
    return nextProps.order.ne(this.props.order) || nextProps.index !== this.props.index
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { order, quote, base, final } = this.props
    // eslint-disable-next-line react/prop-types
    const isBid = order.isBid()
    // eslint-disable-next-line react/prop-types
    const isCall = order.isCall()
    let integerClass = isCall ? 'orderHistoryCall' : isBid ? 'orderHistoryBid' : 'orderHistoryAsk'

    // eslint-disable-next-line react/prop-types
    let price = <PriceText price={order.getPrice()} quote={quote} base={base} />

    return (
      // eslint-disable-next-line react/prop-types
      <tr onClick={this.props.onClick} className={classnames({ 'final-row': final })}>
        <td>
          {Utils.format_number(
            order[isBid ? 'amountForSale' : 'amountToReceive']().getAmount({ real: true }),
            // eslint-disable-next-line react/prop-types
            base.get('precision'),
          )}
        </td>
        <td>
          {Utils.format_number(
            order[isBid ? 'amountToReceive' : 'amountForSale']().getAmount({ real: true }),
            // eslint-disable-next-line react/prop-types
            quote.get('precision'),
          )}
        </td>
        <td className={integerClass}>{price}</td>
      </tr>
    )
  }
}

class OrderBookRowHorizontal extends React.Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (nextProps.order.market_base !== this.props.order.market_base) return false
    return (
      // eslint-disable-next-line react/prop-types
      nextProps.order.ne(this.props.order) ||
      // eslint-disable-next-line react/prop-types
      nextProps.position !== this.props.position ||
      // eslint-disable-next-line react/prop-types
      nextProps.index !== this.props.index
    )
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { order, quote, base, position } = this.props
    // eslint-disable-next-line react/prop-types
    const isBid = order.isBid()
    // eslint-disable-next-line react/prop-types
    const isCall = order.isCall()

    let integerClass = isCall ? 'orderHistoryCall' : isBid ? 'orderHistoryBid' : 'orderHistoryAsk'

    // eslint-disable-next-line react/prop-types
    let price = <PriceText price={order.getPrice()} quote={quote} base={base} />
    let amount = isBid
      ? Utils.format_number(
          // eslint-disable-next-line react/prop-types
          order.amountToReceive().getAmount({ real: true }),
          // eslint-disable-next-line react/prop-types
          quote.get('precision'),
        )
      : // eslint-disable-next-line react/prop-types
        Utils.format_number(order.amountForSale().getAmount({ real: true }), quote.get('precision'))
    let value = isBid
      ? // eslint-disable-next-line react/prop-types
        Utils.format_number(order.amountForSale().getAmount({ real: true }), base.get('precision'))
      : Utils.format_number(
          // eslint-disable-next-line react/prop-types
          order.amountToReceive().getAmount({ real: true }),
          // eslint-disable-next-line react/prop-types
          base.get('precision'),
        )
    let total = isBid
      ? // eslint-disable-next-line react/prop-types
        Utils.format_number(order.totalForSale().getAmount({ real: true }), base.get('precision'))
      : // eslint-disable-next-line react/prop-types
        Utils.format_number(order.totalToReceive().getAmount({ real: true }), base.get('precision'))

    return (
      // eslint-disable-next-line react/prop-types
      <tr onClick={this.props.onClick}>
        {position === 'left' ? (
          <td>{total}</td>
        ) : (
          <td style={{ width: '25%' }} className={integerClass}>
            {price}
          </td>
        )}
        <td>{position === 'left' ? value : amount}</td>
        <td>{position === 'left' ? amount : value}</td>
        {position === 'right' ? (
          <td>{total}</td>
        ) : (
          <td style={{ width: '25%' }} className={integerClass}>
            {price}
          </td>
        )}
      </tr>
    )
  }
}

class OrderBook extends React.Component {
  constructor(props) {
    super()
    this.state = {
      scrollToBottom: true,
      // eslint-disable-next-line react/prop-types
      flip: props.flipOrderBook,
      showAllBids: false,
      showAllAsks: false,
    }

    this._updateHeight = this._updateHeight.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log("calls changed:", !Immutable.is(nextProps.calls, this.props.calls), nextProps.calls && nextProps.calls.toJS(), this.props.calls && this.props.calls.toJS());
  //     const callsChanged = didOrdersChange(nextProps.calls, this.props.calls);
  //     const limitsChanged = didOrdersChange(nextProps.orders, this.props.orders);
  //     console.log("callsChanged:", callsChanged, "limitsChanged", limitsChanged);
  //     return (
  //         !Immutable.is(nextProps.orders, this.props.orders) ||
  //         !Immutable.is(nextProps.calls, this.props.calls) ||
  //         nextProps.horizontal !== this.props.horizontal ||
  //         !utils.are_equal_shallow(nextProps.latest, this.props.latest) ||
  //         nextProps.smallScreen !== this.props.smallScreen ||
  //         nextProps.wrapperClass !== this.props.wrapperClass ||
  //         !utils.are_equal_shallow(nextState, this.state)
  //     );
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (!nextProps.marketReady) {
      this.setState({
        scrollToBottom: true,
      })
    }

    // Change of market or direction
    // eslint-disable-next-line react/prop-types
    if (nextProps.base !== this.props.base || nextProps.quote !== this.props.quote) {
      this.setState({
        scrollToBottom: true,
      })

      // eslint-disable-next-line react/no-string-refs
      if (this.refs.askTransition) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.askTransition.resetAnimation()
      }

      // eslint-disable-next-line react/no-string-refs
      if (this.refs.bidTransition) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.bidTransition.resetAnimation()
      }
    }
  }

  _updateHeight() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.horizontal) {
      // eslint-disable-next-line react/no-string-refs
      let containerHeight = this.refs.orderbook_container.offsetHeight
      // eslint-disable-next-line react/no-string-refs
      let priceHeight = this.refs.center_text.offsetHeight
      // eslint-disable-next-line react/no-string-refs
      let asksHeight = this.refs.asksWrapper.offsetHeight

      let newAsksHeight = Math.floor((containerHeight - priceHeight) / 2)
      let newBidsHeight = containerHeight - priceHeight - asksHeight - 2
      if (
        newAsksHeight !== this.state.vertAsksHeight ||
        newBidsHeight !== this.state.vertBidsHeight
      ) {
        this.setState(
          {
            vertAsksHeight: newAsksHeight,
            vertBidsHeight: newBidsHeight,
          },
          this.psUpdate,
        )
      }
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this._updateHeight, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._updateHeight, false)
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.horizontal) {
      this._updateHeight()

      // eslint-disable-next-line react/no-string-refs
      let asksContainer = this.refs.vert_asks
      Ps.initialize(asksContainer)
      // eslint-disable-next-line react/no-string-refs
      let bidsContainer = this.refs.vert_bids
      Ps.initialize(bidsContainer)
    } else {
      // eslint-disable-next-line react/no-string-refs
      let bidsContainer = this.refs.hor_bids
      Ps.initialize(bidsContainer)
      // eslint-disable-next-line react/no-string-refs
      let asksContainer = this.refs.hor_asks
      Ps.initialize(asksContainer)
    }
  }

  psUpdate() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.horizontal) {
      // eslint-disable-next-line react/no-string-refs
      let asksContainer = this.refs.vert_asks
      Ps.update(asksContainer)
      if (this.state.scrollToBottom) {
        asksContainer.scrollTop = asksContainer.scrollHeight
      }
      // eslint-disable-next-line react/no-string-refs
      let bidsContainer = this.refs.vert_bids
      Ps.update(bidsContainer)
    } else {
      // eslint-disable-next-line react/no-string-refs
      let bidsContainer = this.refs.hor_bids
      Ps.update(bidsContainer)
      // eslint-disable-next-line react/no-string-refs
      let asksContainer = this.refs.hor_asks
      Ps.update(asksContainer)
    }
  }

  componentDidUpdate() {
    this._updateHeight()
  }

  _onBidScroll(e) {
    if (e.target.scrollTop < e.target.scrollHeight - this.state.vertAsksHeight) {
      if (this.state.scrollToBottom) {
        this.setState({
          scrollToBottom: false,
        })
      }
    } else {
      this.setState({
        scrollToBottom: false,
      })
    }
  }

  _flipBuySell() {
    SettingsActions.changeViewSetting({
      flipOrderBook: !this.state.flip,
    })

    this.setState({ flip: !this.state.flip })
  }

  _onToggleShowAll(type) {
    if (type === 'asks') {
      this.setState({
        showAllAsks: !this.state.showAllAsks,
      })

      if (this.state.showAllAsks) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.hor_asks.scrollTop = 0
      }
    } else {
      this.setState({
        showAllBids: !this.state.showAllBids,
      })

      if (this.state.showAllBids) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.hor_bids.scrollTop = 0
      }
    }
  }

  render() {
    let {
      // eslint-disable-next-line react/prop-types
      combinedBids,
      // eslint-disable-next-line react/prop-types
      combinedAsks,
      // eslint-disable-next-line react/prop-types
      highestBid,
      // eslint-disable-next-line react/prop-types
      lowestAsk,
      // eslint-disable-next-line react/prop-types
      quote,
      // eslint-disable-next-line react/prop-types
      base,
      // eslint-disable-next-line react/prop-types
      totalAsks,
      // eslint-disable-next-line react/prop-types
      totalBids,
      // eslint-disable-next-line react/prop-types
      quoteSymbol,
      // eslint-disable-next-line react/prop-types
      baseSymbol,
      // eslint-disable-next-line react/prop-types
      horizontal,
    } = this.props
    let { showAllAsks, showAllBids } = this.state

    let bidRows = null,
      askRows = null

    if (base && quote) {
      bidRows = combinedBids
        // eslint-disable-next-line react/prop-types
        .filter((a) => {
          if (this.state.showAllBids) {
            return true
          }
          // eslint-disable-next-line react/prop-types
          return a.getPrice() >= highestBid.getPrice() / 5
        })
        .map((order, index) => {
          return horizontal ? (
            <OrderBookRowHorizontal
              index={index}
              key={order.getPrice() + (order.isCall() ? '_call' : '')}
              order={order}
              /* eslint-disable-next-line react/prop-types */
              onClick={this.props.onClick.bind(this, order)}
              base={base}
              quote={quote}
              position={!this.state.flip ? 'left' : 'right'}
            />
          ) : (
            <OrderBookRowVertical
              index={index}
              key={order.getPrice() + (order.isCall() ? '_call' : '')}
              order={order}
              /* eslint-disable-next-line react/prop-types */
              onClick={this.props.onClick.bind(this, order)}
              base={base}
              quote={quote}
              final={index === 0}
            />
          )
        })

      // eslint-disable-next-line react/prop-types
      let tempAsks = combinedAsks.filter((a) => {
        if (this.state.showAllAsks) {
          return true
        }
        // eslint-disable-next-line react/prop-types
        return a.getPrice() <= lowestAsk.getPrice() * 5
      })
      if (!horizontal) {
        tempAsks.sort((a, b) => {
          return b.getPrice() - a.getPrice()
        })
      }
      askRows = tempAsks.map((order, index) => {
        return horizontal ? (
          <OrderBookRowHorizontal
            index={index}
            key={order.getPrice() + (order.isCall() ? '_call' : '')}
            order={order}
            /* eslint-disable-next-line react/prop-types */
            onClick={this.props.onClick.bind(this, order)}
            base={base}
            quote={quote}
            type={order.type}
            position={!this.state.flip ? 'right' : 'left'}
          />
        ) : (
          <OrderBookRowVertical
            index={index}
            key={order.getPrice() + (order.isCall() ? '_call' : '')}
            order={order}
            /* eslint-disable-next-line react/prop-types */
            onClick={this.props.onClick.bind(this, order)}
            base={base}
            quote={quote}
            type={order.type}
            final={0 === index}
          />
        )
      })
    }

    // eslint-disable-next-line react/prop-types
    if (this.props.horizontal) {
      let totalBidsLength = bidRows.length
      let totalAsksLength = askRows.length

      if (!showAllBids) {
        bidRows.splice(10, bidRows.length)
      }

      if (!showAllAsks) {
        askRows.splice(10, askRows.length)
      }

      let leftHeader = (
        // eslint-disable-next-line react/no-string-refs
        <thead ref="leftHeader">
          <tr key="top-header" className="top-header">
            <th style={{ width: '25%', textAlign: 'center' }}>
              <Translate className="header-sub-title" content="exchange.total" />
              <span className="header-sub-title">
                {' '}
                (<AssetName name={baseSymbol} />)
              </span>
            </th>
            <th style={{ width: '25%', textAlign: 'center' }}>
              <span className="header-sub-title">
                <AssetName name={baseSymbol} />
              </span>
            </th>
            <th style={{ width: '25%', textAlign: 'center' }}>
              <span className="header-sub-title">
                <AssetName name={quoteSymbol} />
              </span>
            </th>
            <th style={{ width: '25%', textAlign: 'right' }}>
              <Translate
                className={(this.state.flip ? 'ask-total' : 'bid-total') + ' header-sub-title'}
                content="exchange.price"
              />
            </th>
          </tr>
        </thead>
      )

      let rightHeader = (
        // eslint-disable-next-line react/no-string-refs
        <thead ref="rightHeader">
          <tr key="top-header" className="top-header">
            <th style={{ width: '25%', textAlign: 'right' }}>
              <Translate
                className={(!this.state.flip ? 'ask-total' : 'bid-total') + ' header-sub-title'}
                content="exchange.price"
              />
            </th>
            <th style={{ width: '25%', textAlign: 'center' }}>
              <span className="header-sub-title">
                <AssetName name={quoteSymbol} />
              </span>
            </th>
            <th style={{ width: '25%', textAlign: 'center' }}>
              <span className="header-sub-title">
                <AssetName name={baseSymbol} />
              </span>
            </th>
            <th style={{ width: '25%', textAlign: 'right' }}>
              <Translate className="header-sub-title" content="exchange.total" />
              <span className="header-sub-title">
                {' '}
                (<AssetName name={baseSymbol} />)
              </span>
            </th>
          </tr>
        </thead>
      )

      return (
        <div
          className={classnames(
            // eslint-disable-next-line react/prop-types
            this.props.wrapperClass,
            'grid-block orderbook no-padding small-vertical medium-horizontal align-spaced no-overflow small-12 xlarge-8',
          )}
        >
          <div
            className={classnames(
              'small-12 medium-6 middle-content',
              this.state.flip ? 'order-1' : 'order-2',
            )}
          >
            <div className="exchange-bordered">
              <div className="exchange-content-header ask">
                <Translate content="exchange.asks" />
                {this.state.flip ? (
                  <span>
                    <span
                      onClick={this._flipBuySell.bind(this)}
                      style={{ cursor: 'pointer', fontSize: '1rem' }}
                    >
                      {' '}
                      &#8646;
                    </span>
                    {/* eslint-disable-next-line react/prop-types */}
                    {!this.props.smallScreen ? (
                      <span
                        /* eslint-disable-next-line react/prop-types */
                        onClick={this.props.moveOrderBook}
                        style={{ cursor: 'pointer', fontSize: '1rem' }}
                      >
                        {' '}
                        &#8645;
                      </span>
                    ) : null}
                  </span>
                ) : null}
                <div style={{ lineHeight: '16px' }} className="float-right header-sub-title">
                  <Translate content="exchange.total" />
                  <span>: </span>
                  {/* eslint-disable-next-line react/prop-types */}
                  {Utils.format_number(totalAsks, quote.get('precision'))}
                  <span>
                    {' '}
                    (<AssetName name={quoteSymbol} />)
                  </span>
                </div>
              </div>
              <table className="table order-table table-hover text-right no-overflow">
                {!this.state.flip ? rightHeader : leftHeader}
              </table>
              <div
                className="grid-block"
                /* eslint-disable-next-line react/no-string-refs */
                ref="hor_asks"
                style={{ paddingRight: !showAllAsks ? 0 : 15, overflow: 'hidden', maxHeight: 210 }}
              >
                <table
                  style={{ paddingBottom: 5 }}
                  className="table order-table table-hover text-right no-overflow"
                >
                  <TransitionWrapper
                    /* eslint-disable-next-line react/no-string-refs */
                    ref="askTransition"
                    className="orderbook orderbook-top"
                    component="tbody"
                    transitionName="newrow"
                  >
                    {askRows}
                  </TransitionWrapper>
                </table>
              </div>
              {totalAsksLength > 10 ? (
                <div className="orderbook-showall">
                  <a onClick={this._onToggleShowAll.bind(this, 'asks')}>
                    <Translate content={showAllAsks ? 'exchange.hide' : 'exchange.show_asks'} />
                    {!showAllAsks ? <span> ({totalAsksLength})</span> : null}
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div
            className={classnames(
              'small-12 medium-6 middle-content',
              this.state.flip ? 'order-2' : 'order-1',
            )}
          >
            <div className="exchange-bordered">
              <div className="exchange-content-header bid">
                <Translate content="exchange.bids" />
                {!this.state.flip ? (
                  <span>
                    <span
                      onClick={this._flipBuySell.bind(this)}
                      style={{ cursor: 'pointer', fontSize: '1rem' }}
                    >
                      {' '}
                      &#8646;
                    </span>
                    <span
                      /* eslint-disable-next-line react/prop-types */
                      onClick={this.props.moveOrderBook}
                      style={{ cursor: 'pointer', fontSize: '1rem' }}
                    >
                      {' '}
                      &#8645;
                    </span>
                  </span>
                ) : null}
                <div style={{ lineHeight: '16px' }} className="float-right header-sub-title">
                  <Translate content="exchange.total" />
                  <span>: </span>
                  {/* eslint-disable-next-line react/prop-types */}
                  {Utils.format_number(totalBids, base.get('precision'))}
                  <span>
                    {' '}
                    (<AssetName name={baseSymbol} />)
                  </span>
                </div>
              </div>
              <table className="table order-table table-hover text-right">
                {this.state.flip ? rightHeader : leftHeader}
              </table>
              <div
                className="grid-block"
                /* eslint-disable-next-line react/no-string-refs */
                ref="hor_bids"
                style={{ paddingRight: !showAllBids ? 0 : 15, overflow: 'hidden', maxHeight: 210 }}
              >
                <table
                  style={{ paddingBottom: 5 }}
                  className="table order-table table-hover text-right"
                >
                  <TransitionWrapper
                    /* eslint-disable-next-line react/no-string-refs */
                    ref="bidTransition"
                    className="orderbook orderbook-bottom"
                    component="tbody"
                    transitionName="newrow"
                  >
                    {bidRows}
                  </TransitionWrapper>
                </table>
              </div>
              {totalBidsLength > 10 ? (
                <div className="orderbook-showall">
                  <a onClick={this._onToggleShowAll.bind(this, 'bids')}>
                    <Translate content={showAllBids ? 'exchange.hide' : 'exchange.show_bids'} />
                    {!showAllBids ? <span> ({totalBidsLength})</span> : null}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )
    } else {
      // Vertical orderbook
      return (
        <div className="left-order-book no-padding no-overflow">
          <div
            className="grid-block shrink left-orderbook-header"
            style={{ paddingRight: 15, zIndex: 10 }}
          >
            <table className="table expand order-table table-hover text-right">
              <thead>
                <tr>
                  <th style={{ paddingBottom: 8, textAlign: 'right', borderBottomColor: '#777' }}>
                    <span className="header-sub-title">
                      <AssetName name={baseSymbol} />
                    </span>
                  </th>
                  <th style={{ paddingBottom: 8, textAlign: 'right', borderBottomColor: '#777' }}>
                    <span className="header-sub-title">
                      <AssetName name={quoteSymbol} />
                    </span>
                  </th>
                  <th style={{ paddingBottom: 8, textAlign: 'right', borderBottomColor: '#777' }}>
                    <Translate className="header-sub-title" content="exchange.price" />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="grid-block vertical no-padding"
            /* eslint-disable-next-line react/no-string-refs */
            ref="orderbook_container"
            style={{ width: '100%' }}
          >
            {/* eslint-disable-next-line react/no-string-refs */}
            <div id="asksWrapper" style={{ overflow: 'hidden' }} ref="asksWrapper">
              <div
                onScroll={this._onBidScroll.bind(this)}
                className="grid-block"
                /* eslint-disable-next-line react/no-string-refs */
                ref="vert_asks"
                style={{ overflow: 'hidden', maxHeight: this.state.vertAsksHeight || 300 }}
              >
                <div
                  style={{
                    paddingRight: 10,
                    width: '100%',
                    height: '100%',
                    display: 'table-cell',
                    verticalAlign: 'bottom',
                  }}
                >
                  <table
                    style={{ position: 'relative', bottom: 0 }}
                    className="table order-table table-hover text-right"
                  >
                    <TransitionWrapper
                      /* eslint-disable-next-line react/no-string-refs */
                      ref="askTransition"
                      className="ps-container orderbook-top"
                      component="tbody"
                      transitionName="newrow"
                    >
                      {askRows}
                    </TransitionWrapper>
                  </table>
                </div>
              </div>
            </div>
            {/* eslint-disable-next-line react/no-string-refs */}
            <div ref="center_text" style={{ minHeight: 35 }}>
              {/* eslint-disable-next-line react/no-string-refs */}
              <div key="spread" className="orderbook-latest-price" ref="centerRow">
                <div
                  className="text-center spread"
                  data-place="right"
                  data-tip={counterpart.translate('tooltip.latest_price')}
                >
                  {/* eslint-disable-next-line react/prop-types */}
                  {this.props.latest ? (
                    // eslint-disable-next-line react/prop-types
                    <span className={this.props.changeClass}>
                      {/* eslint-disable-next-line react/prop-types */}
                      <PriceText preFormattedPrice={this.props.latest} />{' '}
                      <AssetName name={baseSymbol} />/<AssetName name={quoteSymbol} />
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <div id="bidsWrapper" style={{ overflow: 'hidden' }}>
              <div
                className="grid-block"
                /* eslint-disable-next-line react/no-string-refs */
                ref="vert_bids"
                style={{ overflow: 'hidden', height: this.state.vertBidsHeight || 300 }}
              >
                <div
                  style={{
                    paddingRight: 10,
                    width: '100%',
                    height: '100%',
                    display: 'table-cell',
                    verticalAlign: 'top',
                  }}
                >
                  <table className="table order-table table-hover text-right">
                    <TransitionWrapper
                      /* eslint-disable-next-line react/no-string-refs */
                      ref="bidTransition"
                      className="ps-container orderbook-top"
                      component="tbody"
                      transitionName="newrow"
                    >
                      {bidRows}
                    </TransitionWrapper>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ width: '100%', borderTop: '1px solid grey' }}
            className="align-center grid-block footer shrink bottom-header"
          >
            {/* eslint-disable-next-line react/prop-types */}
            <div onClick={this.props.moveOrderBook} className="button outline">
              <Translate content="exchange.horizontal" />
            </div>
          </div>
        </div>
      )
    }
  }
}

OrderBook.defaultProps = {
  bids: [],
  asks: [],
  orders: {},
}

OrderBook.propTypes = {
  bids: PropTypes.array.isRequired,
  asks: PropTypes.array.isRequired,
  orders: PropTypes.object.isRequired,
}

export default OrderBook
