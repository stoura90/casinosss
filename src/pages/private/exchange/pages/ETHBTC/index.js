import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import '../../stoc.css'
import NavBar from '../../../../../components/layout/Navbar'
import Highcharts from 'highcharts'
import { debounce } from 'lodash'
import Asset from '../../../../../components/Blockchain/Asset'
import { LimitOrderCreate, Price } from '../../../../../common/MarketClasses'
import SettingsActions from '../../../../../actions/SettingsActions'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'perfect-scrollbar'
import Utils from '../../../../../common/utils'
import NotificationActions from '../../../../../actions/NotificationActions'
import MarketsActions from '../../../../../actions/MarketsActions'
import { ChainStore, FetchChain } from 'graphenejs-lib'
import { cloneDeep } from 'lodash'
import market_utils from '../../../../../common/market_utils'
import assetUtils from '../../../../../common/asset_utils'
import cnames from 'classnames'
import BuySell from './BuySell'
import OrderBook from './OrderBook'
require('./exchange.scss')
Highcharts.setOptions({
  global: {
    useUTC: false,
  },
})
class Exchange extends Component {
  constructor(props) {
    super(props)

    this.state = this._initialState(props)

    this._getWindowSize = debounce(this._getWindowSize.bind(this), 150)
  }

  _initialState(props) {
    let ws = props.viewSettings
    let bid = {
      forSaleText: '',
      toReceiveText: '',
      priceText: '',
      for_sale: new Asset({
        asset_id: props.baseAsset.get('id'),
        precision: props.baseAsset.get('precision'),
      }),
      to_receive: new Asset({
        asset_id: props.quoteAsset.get('id'),
        precision: props.quoteAsset.get('precision'),
      }),
    }
    bid.price = new Price({ base: bid.for_sale, quote: bid.to_receive })
    let ask = {
      forSaleText: '',
      toReceiveText: '',
      priceText: '',
      for_sale: new Asset({
        asset_id: props.quoteAsset.get('id'),
        precision: props.quoteAsset.get('precision'),
      }),
      to_receive: new Asset({
        asset_id: props.baseAsset.get('id'),
        precision: props.baseAsset.get('precision'),
      }),
    }
    ask.price = new Price({ base: ask.for_sale, quote: ask.to_receive })

    return {
      history: [],
      buySellOpen: ws.get('buySellOpen', true),
      bid,
      ask,
      flipBuySell: ws.get('flipBuySell', false),
      favorite: false,
      showDepthChart: ws.get('showDepthChart', false),
      leftOrderBook: ws.get('leftOrderBook', false),
      buyDiff: false,
      sellDiff: false,
      indicators: ws.get('indicators', {
        rsi: false,
        sma: false,
        atr: false,
        ema: false,
      }),
      buySellTop: ws.get('buySellTop', true),
      buyFeeAssetIdx: ws.get('buyFeeAssetIdx', 0),
      sellFeeAssetIdx: ws.get('sellFeeAssetIdx', 0),
      indicatorSettings: ws.get('indicatorSettings') || {
        rsi: {
          period: 14,
          overbought: 70,
          oversold: 30,
        },
        sma: {
          period: 5,
        },
        atr: {
          period: 14,
        },
        ema: {
          period: 10,
          index: 0,
        },
      },
      height: window.innerHeight,
      width: window.innerWidth,
      chartHeight: ws.get('chartHeight', 425),
      currentPeriod: 3600 * 24 * 30,
    }
  }

  static propTypes = {
    marketCallOrders: PropTypes.object.isRequired,
    activeMarketHistory: PropTypes.object.isRequired,
    viewSettings: PropTypes.object.isRequired,
    priceData: PropTypes.array.isRequired,
    volumeData: PropTypes.array.isRequired,
    quoteAsset: PropTypes.array.isRequired,
    baseAsset: PropTypes.array.isRequired,
    marketReady: PropTypes.object.isRequired,
    sub: PropTypes.array.isRequired,
    bucketSize: PropTypes.object.isRequired,
    highestBid: PropTypes.array.isRequired,
    lowestAsk: PropTypes.array.isRequired,
    marketData: PropTypes.object.isRequired,
    currentAccount: PropTypes.array.isRequired,
    buyAssetAmount: PropTypes.object.isRequired,
    buyAsset: PropTypes.object.isRequired,
    subToMarket: PropTypes.object.isRequired,
    lowestCallPrice: PropTypes.object.isRequired,
    feedPrice: PropTypes.object.isRequired,
    marketLimitOrders: PropTypes.object.isRequired,
    invertedCalls: PropTypes.object.isRequired,
    starredMarkets: PropTypes.object.isRequired,
    marketStats: PropTypes.array,
    totals: PropTypes.object.isRequired,
  }

  static defaultProps = {
    marketCallOrders: [],
    activeMarketHistory: {},
    viewSettings: {},
    priceData: [],
    volumeData: [],
    quoteAsset: [],
    baseAsset: [],
    marketReady: {},
    sub: [],
    bucketSize: {},
    highestBid: [],
    lowestAsk: [],
    marketData: {},
    currentAccount: [],
    buyAssetAmount: {},
    buyAsset: {},
    subToMarket: {},
    lowestCallPrice: {},
    feedPrice: {},
    marketLimitOrders: {},
    invertedCalls: {},
    starredMarkets: {},
    marketStats: [],
    totals: {},
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-string-refs
    let centerContainer = this.refs.center
    if (centerContainer) {
      PerfectScrollbar.initialize(centerContainer)
    }
    SettingsActions.changeViewSetting.defer({
      lastMarket: this.props.quoteAsset.get('symbol') + '_' + this.props.baseAsset.get('symbol'),
    })

    window.addEventListener('resize', this._getWindowSize, false)
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.marketReady && !this.props.marketReady) {
      return false
    }
    return true
  }

  _getWindowSize() {
    let { innerHeight, innerWidth } = window
    if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
      this.setState({
        height: innerHeight,
        width: innerWidth,
      })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.quoteAsset.get('symbol') !== this.props.quoteAsset.get('symbol') ||
      nextProps.baseAsset.get('symbol') !== this.props.baseAsset.get('symbol')
    ) {
      this.setState(this._initialState(nextProps))

      return SettingsActions.changeViewSetting({
        lastMarket: nextProps.quoteAsset.get('symbol') + '_' + nextProps.baseAsset.get('symbol'),
      })
    }

    if (this.props.sub && nextProps.bucketSize !== this.props.bucketSize) {
      return this._changeBucketSize(nextProps.bucketSize)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._getWindowSize, false)
  }

  _getFee(asset) {
    let fee = Utils.estimateFee('limit_order_create', [], ChainStore.getObject('2.0.0')) || 0
    const coreFee = new Asset({
      amount: fee,
    })
    if (!asset || asset.get('id') === '1.3.0') return coreFee

    const cer = asset.getIn(['options', 'core_exchange_rate']).toJS()

    const cerBase = new Asset({
      asset_id: cer.base.asset_id,
      amount: cer.base.amount,
      precision: ChainStore.getAsset(cer.base.asset_id).get('precision'),
    })
    const cerQuote = new Asset({
      asset_id: cer.quote.asset_id,
      amount: cer.quote.amount,
      precision: ChainStore.getAsset(cer.quote.asset_id).get('precision'),
    })
    const cerPrice = new Price({
      base: cerBase,
      quote: cerQuote,
    })
    const convertedFee = coreFee.times(cerPrice)

    return convertedFee
  }

  _verifyFee(fee, sellAmount, sellBalance, coreBalance) {
    let coreFee = this._getFee()

    let sellSum = fee.getAmount() + sellAmount
    if (fee.asset_id === '1.3.0') {
      if (coreFee.getAmount() <= coreBalance) {
        return '1.3.0'
      } else {
        return null
      }
    } else {
      if (sellSum <= sellBalance) {
        // Sufficient balance in asset to pay fee
        return fee.asset_id
      } else if (coreFee.getAmount() <= coreBalance && fee.asset_id !== '1.3.0') {
        // Sufficient balance in core asset to pay fee
        return '1.3.0'
      } else {
        return null // Unable to pay fee in either asset
      }
    }
  }

  _createLimitOrderConfirm(
    buyAsset,
    sellAsset,
    sellBalance,
    coreBalance,
    feeAsset,
    type,
    short = true,
    e,
  ) {
    e.preventDefault()
    let { highestBid, lowestAsk } = this.props.marketData
    let current = this.state[type === 'sell' ? 'ask' : 'bid']

    sellBalance = current.for_sale.clone(
      sellBalance ? parseInt(ChainStore.getObject(sellBalance).toJS().balance, 10) : 0,
    )
    coreBalance = new Asset({
      amount: coreBalance ? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10) : 0,
    })

    let fee = this._getFee(feeAsset)

    let feeID = this._verifyFee(
      fee,
      current.for_sale.getAmount(),
      sellBalance.getAmount(),
      coreBalance.getAmount(),
    )
    if (!feeID) {
      return NotificationActions.addNotification({
        message: 'Insufficient funds to pay fees',
        level: 'error',
      })
    }

    if (type === 'buy' && lowestAsk) {
      let diff = this.state.bid.price.toReal() / lowestAsk.getPrice()
      if (diff > 1.2) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.buy.show()
        return this.setState({
          buyDiff: diff,
        })
      }
    } else if (type === 'sell' && highestBid) {
      let diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice())
      if (diff > 1.2) {
        // eslint-disable-next-line react/no-string-refs
        this.refs.sell.show()
        return this.setState({
          sellDiff: diff,
        })
      }
    }

    let isPredictionMarket = sellAsset.getIn(['bitasset', 'is_prediction_market'])

    if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
      return NotificationActions.addNotification({
        message:
          'Insufficient funds to place current. Required: ' +
          current.for_sale.getAmount() +
          ' ' +
          sellAsset.get('symbol'),
        level: 'error',
      })
    }
    //
    if (!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)) {
      return NotificationActions.addNotification({
        message: 'Please enter a valid amount and price',
        level: 'error',
      })
    }
    //
    if (type === 'sell' && isPredictionMarket && short) {
      return this._createPredictionShort(feeID)
    }

    this._createLimitOrder(type, feeID)
  }

  _createLimitOrder(type, feeID) {
    let current = this.state[type === 'sell' ? 'ask' : 'bid']
    const order = new LimitOrderCreate({
      for_sale: current.for_sale,
      to_receive: current.to_receive,
      seller: this.props.currentAccount.get('id'),
      fee: {
        asset_id: feeID,
        amount: 0,
      },
    })

    console.log('order:', JSON.stringify(order.toObject()))
    return MarketsActions.createLimitOrder2(order)
      .then((result) => {
        if (result.error) {
          if (result.error.message !== 'wallet locked')
            NotificationActions.addNotification({
              message:
                'Unknown error. Failed to place order for ' +
                current.to_receive.getAmount({ real: true }) +
                ' ' +
                current.to_receive.asset_id,
              level: 'error',
            })
        }
        // console.log("order success");
      })
      .catch((e) => {
        console.log('order failed:', e)
      })
  }

  _createPredictionShort(feeID) {
    let current = this.state.ask
    const order = new LimitOrderCreate({
      for_sale: current.for_sale,
      to_receive: current.to_receive,
      seller: this.props.currentAccount.get('id'),
      fee: {
        asset_id: feeID,
        amount: 0,
      },
    })

    Promise.all([
      FetchChain(
        'getAsset',
        this.props.quoteAsset.getIn(['bitasset', 'options', 'short_backing_asset']),
      ),
    ]).then((assets) => {
      let [backingAsset] = assets
      let collateral = new Asset({
        amount: order.amount_for_sale.getAmount(),
        asset_id: backingAsset.get('id'),
        precision: backingAsset.get('precision'),
      })

      MarketsActions.createPredictionShort(order, collateral).then((result) => {
        if (result.error) {
          if (result.error.message !== 'wallet locked')
            NotificationActions.addNotification({
              message:
                'Unknown error. Failed to place order for ' +
                this.props.buyAssetAmount +
                ' ' +
                this.props.buyAsset.symbol,
              level: 'error',
            })
        }
      })
    })
  }

  _forceBuy(type, feeAsset, sellBalance, coreBalance) {
    let current = this.state[type === 'sell' ? 'ask' : 'bid']
    // Convert fee to relevant asset fee and check if user has sufficient balance
    sellBalance = current.for_sale.clone(
      sellBalance ? parseInt(ChainStore.getObject(sellBalance).get('balance'), 10) : 0,
    )
    coreBalance = new Asset({
      amount: coreBalance ? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10) : 0,
    })
    let fee = this._getFee(feeAsset)
    let feeID = this._verifyFee(
      fee,
      current.for_sale.getAmount(),
      sellBalance.getAmount(),
      coreBalance.getAmount(),
    )

    if (feeID) {
      this._createLimitOrder(type, feeID)
    } else {
      console.error('Unable to pay fees, aborting limit order creation')
    }
  }

  _forceSell(type, feeAsset, sellBalance, coreBalance) {
    let current = this.state[type === 'sell' ? 'ask' : 'bid']
    // Convert fee to relevant asset fee and check if user has sufficient balance
    sellBalance = current.for_sale.clone(
      sellBalance ? parseInt(ChainStore.getObject(sellBalance).get('balance'), 10) : 0,
    )
    coreBalance = new Asset({
      amount: coreBalance ? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10) : 0,
    })
    let fee = this._getFee(feeAsset)
    let feeID = this._verifyFee(
      fee,
      current.for_sale.getAmount(),
      sellBalance.getAmount(),
      coreBalance.getAmount(),
    )

    if (feeID) {
      this._createLimitOrder(type, feeID)
    } else {
      console.error('Unable to pay fees, aborting limit order creation')
    }
  }

  _cancelLimitOrder(orderID, e) {
    e.preventDefault()
    let { currentAccount } = this.props
    MarketsActions.cancelLimitOrder(
      currentAccount.get('id'),
      orderID, // order id to cancel
    )
  }

  _changeBucketSize(size, e) {
    if (e) e.preventDefault()
    if (size !== this.props.bucketSize) {
      MarketsActions.changeBucketSize.defer(size)
      let currentSub = this.props.sub.split('_')
      MarketsActions.unSubscribeMarket.defer(currentSub[0], currentSub[1])
      this.props.subToMarket(this.props, size)
    }
  }

  _changeZoomPeriod(size, e) {
    e.preventDefault()
    if (size !== this.state.currentPeriod) {
      this.setState({
        currentPeriod: size,
      })
      SettingsActions.changeViewSetting({
        currentPeriod: size,
      })
    }
  }

  _depthChartClick(base, quote, power, e) {
    e.preventDefault()
    let { bid, ask } = this.state

    bid.price = new Price({
      base: this.state.bid.for_sale,
      quote: this.state.bid.to_receive,
      real: e.xAxis[0].value / power,
    })
    bid.priceText = bid.price.toReal()

    ask.price = new Price({
      base: this.state.ask.to_receive,
      quote: this.state.ask.for_sale,
      real: e.xAxis[0].value / power,
    })
    ask.priceText = ask.price.toReal()
    let newState = {
      bid,
      ask,
      depthLine: bid.price.toReal(),
    }

    this._setForSale(bid, true) || this._setReceive(bid, true)
    this._setReceive(ask) || this._setForSale(ask)

    this.setState(newState)
  }

  _flipBuySell() {
    SettingsActions.changeViewSetting({
      flipBuySell: !this.state.flipBuySell,
    })

    this.setState({ flipBuySell: !this.state.flipBuySell })
  }

  _toggleOpenBuySell() {
    SettingsActions.changeViewSetting({
      buySellOpen: !this.state.buySellOpen,
    })

    this.setState({ buySellOpen: !this.state.buySellOpen })
  }

  _toggleCharts() {
    SettingsActions.changeViewSetting({
      showDepthChart: !this.state.showDepthChart,
    })

    this.setState({ showDepthChart: !this.state.showDepthChart })
  }

  _moveOrderBook() {
    SettingsActions.changeViewSetting({
      leftOrderBook: !this.state.leftOrderBook,
    })

    this.setState({ leftOrderBook: !this.state.leftOrderBook })
  }

  _currentPriceClick(type, price) {
    const isBid = type === 'bid'
    let current = this.state[type]
    current.price = price[isBid ? 'invert' : 'clone']()
    current.priceText = current.price.toReal()
    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid)
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid)
    }
    this.forceUpdate()
  }

  _orderbookClick(order) {
    const isBid = order.isBid()
    /*
     * Because we are using a bid order to construct an ask and vice versa,
     * totalToReceive becomes forSale, and totalForSale becomes toReceive
     */
    let forSale = order.totalToReceive({ noCache: true })
    // let toReceive = order.totalForSale({noCache: true});
    let toReceive = forSale.times(order.sellPrice())

    let newPrice = new Price({
      base: isBid ? toReceive : forSale,
      quote: isBid ? forSale : toReceive,
    })

    let current = this.state[isBid ? 'bid' : 'ask']
    current.price = newPrice
    current.priceText = newPrice.toReal()

    let newState = {
      // If isBid is true, newState defines a new ask order and vice versa
      [isBid ? 'ask' : 'bid']: {
        for_sale: forSale,
        forSaleText: forSale.getAmount({ real: true }),
        to_receive: toReceive,
        toReceiveText: toReceive.getAmount({ real: true }),
        price: newPrice,
        priceText: newPrice.toReal(),
      },
    }

    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid)
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid)
    }
    this.setState(newState)
  }

  _borrowQuote() {
    // eslint-disable-next-line react/no-string-refs
    this.refs.borrowQuote.show()
  }

  _borrowBase() {
    // eslint-disable-next-line react/no-string-refs
    this.refs.borrowBase.show()
  }

  _onSelectIndicators() {
    // eslint-disable-next-line react/no-string-refs
    this.refs.indicators.show()
  }

  _getSettlementInfo() {
    let { lowestCallPrice, feedPrice, quoteAsset } = this.props

    let showCallLimit = false
    if (feedPrice) {
      if (feedPrice.inverted) {
        showCallLimit = lowestCallPrice <= feedPrice.toReal()
      } else {
        showCallLimit = lowestCallPrice >= feedPrice.toReal()
      }
    }
    return !!(
      showCallLimit &&
      lowestCallPrice &&
      !quoteAsset.getIn(['bitasset', 'is_prediction_market'])
    )
  }

  _changeIndicator(key) {
    let indicators = cloneDeep(this.state.indicators)
    indicators[key] = !indicators[key]
    this.setState({
      indicators: indicators,
    })

    SettingsActions.changeViewSetting({
      indicators: indicators,
    })
  }

  _changeIndicatorSetting(key, setting, e) {
    e.preventDefault()
    let indicatorSettings = cloneDeep(this.state.indicatorSettings)
    indicatorSettings[key][setting] = parseInt(e.target.value, 10)

    this.setState({
      indicatorSettings: indicatorSettings,
    })

    SettingsActions.changeViewSetting({
      indicatorSettings: indicatorSettings,
    })
  }

  onChangeFeeAsset(type, e) {
    e.preventDefault()
    if (type === 'buy') {
      this.setState({
        buyFeeAssetIdx: e.target.value,
      })

      SettingsActions.changeViewSetting({
        buyFeeAssetIdx: e.target.value,
      })
    } else {
      this.setState({
        sellFeeAssetIdx: e.target.value,
      })

      SettingsActions.changeViewSetting({
        sellFeeAssetIdx: e.target.value,
      })
    }
  }

  onChangeChartHeight(increase) {
    let newHeight = this.state.chartHeight + (increase ? 20 : -20)

    this.setState({
      chartHeight: newHeight,
    })

    SettingsActions.changeViewSetting({
      chartHeight: newHeight,
    })
  }

  _getFeeAssets(quote, base, coreAsset) {
    let { currentAccount } = this.props

    function addMissingAsset(target, asset) {
      if (target.indexOf(asset) === -1) {
        target.push(asset)
      }
    }

    let sellFeeAssets = [coreAsset, quote === coreAsset ? base : quote]
    addMissingAsset(sellFeeAssets, quote)
    addMissingAsset(sellFeeAssets, base)
    let sellFeeAsset

    let buyFeeAssets = [coreAsset, base === coreAsset ? quote : base]
    addMissingAsset(buyFeeAssets, quote)
    addMissingAsset(buyFeeAssets, base)
    let buyFeeAsset

    let balances = {}

    currentAccount
      .get('balances', [])
      .filter((balance, id) => {
        return ['1.3.0', quote.get('id'), base.get('id')].indexOf(id) >= 0
      })
      .forEach((balance, id) => {
        let balanceObject = ChainStore.getObject(balance)
        balances[id] = {
          balance: balanceObject ? parseInt(balanceObject.get('balance'), 10) : 0,
          fee: this._getFee(ChainStore.getAsset(id)),
        }
      })

    // Sell asset fee
    sellFeeAssets = sellFeeAssets.filter((a) => {
      if (!balances[a.get('id')]) {
        return false
      }
      return balances[a.get('id')].balance > balances[a.get('id')].fee.getAmount()
    })

    if (!sellFeeAssets.length) {
      sellFeeAsset = coreAsset
      sellFeeAssets.push(coreAsset)
    } else {
      sellFeeAsset = sellFeeAssets[Math.min(sellFeeAssets.length - 1, this.state.sellFeeAssetIdx)]
    }

    // Buy asset fee
    buyFeeAssets = buyFeeAssets.filter((a) => {
      if (!balances[a.get('id')]) {
        return false
      }
      return balances[a.get('id')].balance > balances[a.get('id')].fee.getAmount()
    })

    if (!buyFeeAssets.length) {
      buyFeeAsset = coreAsset
      buyFeeAssets.push(coreAsset)
    } else {
      buyFeeAsset = buyFeeAssets[Math.min(buyFeeAssets.length - 1, this.state.buyFeeAssetIdx)]
    }

    let sellFee = this._getFee(sellFeeAsset)
    let buyFee = this._getFee(buyFeeAsset)

    return {
      sellFeeAsset,
      sellFeeAssets,
      sellFee,
      buyFeeAsset,
      buyFeeAssets,
      buyFee,
    }
  }

  _toggleBuySellPosition() {
    this.setState({
      buySellTop: !this.state.buySellTop,
    })

    SettingsActions.changeViewSetting({
      buySellTop: !this.state.buySellTop,
    })
  }

  _setReceive(state, isBid) {
    if (state.price.isValid() && state.for_sale.hasAmount()) {
      state.to_receive = state.for_sale.times(state.price, isBid)
      state.toReceiveText = state.to_receive.getAmount({ real: true }).toString()
      return true
    }
    return false
  }

  _setForSale(state, isBid) {
    if (state.price.isValid() && state.to_receive.hasAmount()) {
      state.for_sale = state.to_receive.times(state.price, isBid)
      state.forSaleText = state.for_sale.getAmount({ real: true }).toString()
      return true
    }
    return false
  }

  _setPrice(state) {
    if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
      state.price = new Price({
        base: state.for_sale,
        quote: state.to_receive,
      })
      state.priceText = state.price.toReal().toString()
      return true
    }
    return false
  }

  _onInputPrice(type, e) {
    let current = this.state[type]
    const isBid = type === 'bid'
    current.price = new Price({
      base: current[isBid ? 'for_sale' : 'to_receive'],
      quote: current[isBid ? 'to_receive' : 'for_sale'],
      real: parseFloat(e.target.value) || 0,
    })

    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid)
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid)
    }

    current.priceText = e.target.value
    this.forceUpdate()
  }

  _onInputSell(type, e) {
    let current = this.state[type]
    const isBid = type === 'bid'
    current.for_sale.setAmount({ real: parseFloat(e.target.value) || 0 })

    if (current.price.isValid()) {
      this._setReceive(current, isBid)
    } else {
      this._setPrice(current)
    }

    current.forSaleText = e.target.value
    this.forceUpdate()
  }

  _onInputReceive(type, e) {
    let current = this.state[type]
    const isBid = type === 'bid'
    current.to_receive.setAmount({ real: parseFloat(e.target.value) || 0 })

    if (current.price.isValid()) {
      this._setForSale(current, isBid)
    } else {
      this._setPrice(current)
    }

    current.toReceiveText = e.target.value
    this.forceUpdate()
  }

  isMarketFrozen() {
    let { baseAsset, quoteAsset } = this.props

    let baseWhiteList = baseAsset.getIn(['options', 'whitelist_markets']).toJS()
    let quoteWhiteList = quoteAsset.getIn(['options', 'whitelist_markets']).toJS()
    let baseBlackList = baseAsset.getIn(['options', 'blacklist_markets']).toJS()
    let quoteBlackList = quoteAsset.getIn(['options', 'blacklist_markets']).toJS()

    if (quoteWhiteList.length && quoteWhiteList.indexOf(baseAsset.get('id') === -1)) {
      return { isFrozen: true, frozenAsset: quoteAsset.get('symbol') }
    }
    if (baseWhiteList.length && baseWhiteList.indexOf(quoteAsset.get('id') === -1)) {
      return { isFrozen: true, frozenAsset: baseAsset.get('symbol') }
    }

    if (quoteBlackList.length && quoteBlackList.indexOf(baseAsset.get('id') !== -1)) {
      return { isFrozen: true, frozenAsset: quoteAsset.get('symbol') }
    }
    if (baseBlackList.length && baseBlackList.indexOf(quoteAsset.get('id') !== -1)) {
      return { isFrozen: true, frozenAsset: baseAsset.get('symbol') }
    }

    return { isFrozen: false }
  }
  render() {
    let {
      currentAccount,
      marketLimitOrders,
      marketCallOrders,
      marketData,
      activeMarketHistory,
      invertedCalls,
      starredMarkets,
      quoteAsset,
      baseAsset,
      lowestCallPrice,
      marketStats,
      marketReady,
      totals,
    } = this.props

    const {
      combinedBids,
      combinedAsks,
      lowestAsk,
      highestBid,
      flatBids,
      flatAsks,
      flatCalls,
      flatSettles,
    } = marketData

    let {
      bid,
      ask,
      leftOrderBook,
      showDepthChart,
      buyDiff,
      sellDiff,
      indicators,
      indicatorSettings,
      width,
      buySellTop,
    } = this.state

    const { isFrozen, frozenAsset } = this.isMarketFrozen()

    let base = null,
      quote = null,
      accountBalance = null,
      quoteBalance = null,
      baseBalance = null,
      coreBalance = null,
      quoteSymbol,
      baseSymbol,
      showCallLimit = false,
      latestPrice,
      changeClass

    let isNullAccount = currentAccount.get('id') === '1.2.3'

    if (quoteAsset.size && baseAsset.size && currentAccount.size) {
      base = baseAsset
      quote = quoteAsset
      baseSymbol = base.get('symbol')
      quoteSymbol = quote.get('symbol')

      accountBalance = currentAccount.get('balances').toJS()

      if (accountBalance) {
        for (let id in accountBalance) {
          if (id === quote.get('id')) {
            quoteBalance = accountBalance[id]
          }
          if (id === base.get('id')) {
            baseBalance = accountBalance[id]
          }
          if (id === '1.3.0') {
            coreBalance = accountBalance[id]
          }
        }
      }

      showCallLimit = this._getSettlementInfo()
    }

    let quoteIsBitAsset = quoteAsset.get('bitasset_data_id') ? true : false
    let baseIsBitAsset = baseAsset.get('bitasset_data_id') ? true : false

    let spread = lowestAsk && highestBid ? lowestAsk.getPrice() - highestBid.getPrice() : 0

    // Latest price
    if (activeMarketHistory.size) {
      // Orders come in pairs, first is driver. Third entry is first of second pair.
      let latest_two = activeMarketHistory.take(3)
      let latest = latest_two.first()
      let second_latest = latest_two.last()
      let paysAsset,
        receivesAsset,
        isAsk = false
      if (latest.pays.asset_id === base.get('id')) {
        paysAsset = base
        receivesAsset = quote
        isAsk = true
      } else {
        paysAsset = quote
        receivesAsset = base
      }
      let flipped = base.get('id').split('.')[2] > quote.get('id').split('.')[2]
      latestPrice = market_utils.parse_order_history(
        latest,
        paysAsset,
        receivesAsset,
        isAsk,
        flipped,
      )

      isAsk = false
      if (second_latest) {
        if (second_latest.pays.asset_id === base.get('id')) {
          paysAsset = base
          receivesAsset = quote
          isAsk = true
        } else {
          paysAsset = quote
          receivesAsset = base
        }

        let oldPrice = market_utils.parse_order_history(
          second_latest,
          paysAsset,
          receivesAsset,
          isAsk,
          flipped,
        )
        changeClass =
          latestPrice.full === oldPrice.full
            ? ''
            : latestPrice.full - oldPrice.full > 0
            ? 'change-up'
            : 'change-down'
      }
    }

    // Fees
    let coreAsset = ChainStore.getAsset('1.3.0')
    if (!coreAsset) {
      return null
    }

    let { sellFeeAsset, sellFeeAssets, sellFee, buyFeeAsset, buyFeeAssets, buyFee } =
      this._getFeeAssets(quote, base, coreAsset)

    // Decimals
    let hasPrediction =
      base.getIn(['bitasset', 'is_prediction_market']) ||
      quote.getIn(['bitasset', 'is_prediction_market'])

    let description = null

    if (hasPrediction) {
      description = quoteAsset.getIn(['options', 'description'])
      description = assetUtils.parseDescription(description).main
    }

    let smallScreen = false
    if (width < 1000) {
      smallScreen = true
      leftOrderBook = false
    }

    let orderMultiplier = leftOrderBook ? 2 : 1

    let buyForm = isFrozen ? null : (
      <BuySell
        smallScreen={smallScreen}
        isOpen={this.state.buySellOpen}
        onToggleOpen={this._toggleOpenBuySell.bind(this)}
        className={cnames(
          'small-12 no-padding middle-content',
          { disabled: isNullAccount },
          leftOrderBook || smallScreen ? 'medium-6' : 'medium-6 xlarge-4',
          this.state.flipBuySell
            ? `order-${buySellTop ? 2 : 5 * orderMultiplier} sell-form`
            : `order-${buySellTop ? 1 : 4 * orderMultiplier} buy-form`,
        )}
        type="bid"
        amount={bid.toReceiveText}
        price={bid.priceText}
        total={bid.forSaleText}
        quote={quote}
        base={base}
        amountChange={this._onInputReceive.bind(this, 'bid')}
        priceChange={this._onInputPrice.bind(this, 'bid')}
        setPrice={this._currentPriceClick.bind(this)}
        totalChange={this._onInputSell.bind(this, 'bid')}
        balance={baseBalance}
        onSubmit={this._createLimitOrderConfirm.bind(
          this,
          quote,
          base,
          baseBalance,
          coreBalance,
          buyFeeAsset,
          'buy',
        )}
        balancePrecision={base.get('precision')}
        quotePrecision={quote.get('precision')}
        totalPrecision={base.get('precision')}
        currentPrice={lowestAsk.getPrice()}
        currentPriceObject={lowestAsk}
        account={currentAccount.get('name')}
        fee={buyFee}
        feeAssets={buyFeeAssets}
        feeAsset={buyFeeAsset}
        onChangeFeeAsset={this.onChangeFeeAsset.bind(this, 'buy')}
        isPredictionMarket={base.getIn(['bitasset', 'is_prediction_market'])}
        onFlip={!this.state.flipBuySell ? this._flipBuySell.bind(this) : null}
        onTogglePosition={this._toggleBuySellPosition.bind(this)}
      />
    )

    let sellForm = isFrozen ? null : (
      <BuySell
        smallScreen={smallScreen}
        isOpen={this.state.buySellOpen}
        onToggleOpen={this._toggleOpenBuySell.bind(this)}
        className={cnames(
          'small-12 no-padding middle-content',
          { disabled: isNullAccount },
          leftOrderBook || smallScreen ? 'medium-6' : 'medium-6 xlarge-4',
          this.state.flipBuySell
            ? `order-${buySellTop ? 1 : 4 * orderMultiplier} buy-form`
            : `order-${buySellTop ? 2 : 5 * orderMultiplier} sell-form`,
        )}
        type="ask"
        amount={ask.forSaleText}
        price={ask.priceText}
        total={ask.toReceiveText}
        quote={quote}
        base={base}
        amountChange={this._onInputSell.bind(this, 'ask')}
        priceChange={this._onInputPrice.bind(this, 'ask')}
        setPrice={this._currentPriceClick.bind(this)}
        totalChange={this._onInputReceive.bind(this, 'ask')}
        balance={quoteBalance}
        onSubmit={this._createLimitOrderConfirm.bind(
          this,
          base,
          quote,
          quoteBalance,
          coreBalance,
          sellFeeAsset,
          'sell',
        )}
        balancePrecision={quote.get('precision')}
        quotePrecision={quote.get('precision')}
        totalPrecision={base.get('precision')}
        currentPrice={highestBid.getPrice()}
        currentPriceObject={highestBid}
        account={currentAccount.get('name')}
        fee={sellFee}
        feeAssets={sellFeeAssets}
        feeAsset={sellFeeAsset}
        onChangeFeeAsset={this.onChangeFeeAsset.bind(this, 'sell')}
        isPredictionMarket={quote.getIn(['bitasset', 'is_prediction_market'])}
        onFlip={this.state.flipBuySell ? this._flipBuySell.bind(this) : null}
      />
    )

    let orderBook = (
      <OrderBook
        latest={latestPrice}
        changeClass={changeClass}
        orders={marketLimitOrders}
        calls={marketCallOrders}
        invertedCalls={invertedCalls}
        combinedBids={combinedBids}
        combinedAsks={combinedAsks}
        highestBid={highestBid}
        lowestAsk={lowestAsk}
        totalBids={totals.bid}
        totalAsks={totals.ask}
        base={base}
        quote={quote}
        baseSymbol={baseSymbol}
        quoteSymbol={quoteSymbol}
        onClick={this._orderbookClick.bind(this)}
        horizontal={!leftOrderBook}
        moveOrderBook={this._moveOrderBook.bind(this)}
        flipOrderBook={this.props.viewSettings.get('flipOrderBook')}
        marketReady={marketReady}
        wrapperClass={`order-${buySellTop ? 3 : 1} xlarge-order-${buySellTop ? 4 : 1}`}
      />
    )
    return (
      <Container className="root-page">
        <Row>
          <Col xl={3} className="d-none d-xl-block col-xl-38">
            <NavBar />
          </Col>
          <Col xl={9}>
            <div className="grid-block page-layout market-layout">
              {/* Left Column - Open Orders */}
              {leftOrderBook ? (
                <div className="grid-block left-column shrink no-overflow">{orderBook}</div>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Exchange
