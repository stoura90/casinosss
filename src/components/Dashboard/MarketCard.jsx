import React from 'react'
import ChainTypes from '../Utility/ChainTypes'
import BindToChainState from '../Utility/BindToChainState'
import AssetName from '../Utility/AssetName'
import assetUtils from '../../common/asset_utils'
import cnames from 'classnames'
import MarketsActions from '../../actions/MarketsActions'
import MarketsStore from '../../stores/MarketsStore'
import { connect } from 'alt-react'
import utils from '../../common/utils'
import { Translate } from '@material-ui/icons'
import PropTypes from 'prop-types'

class MarketCard extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    quote: ChainTypes.ChainAsset.isRequired,
    base: ChainTypes.ChainAsset.isRequired,
    invert: PropTypes.bool,
  }

  static defaultProps = {
    invert: true,
  }

  constructor() {
    super()

    this.statsInterval = null
  }

  shouldComponentUpdate(nextProps) {
    return !utils.are_equal_shallow(nextProps, this.props)
  }

  UNSAFE_componentWillMount() {
    MarketsActions.getMarketStats.defer(this.props.quote, this.props.base)
    this.statsChecked = new Date()
    this.statsInterval = setInterval(
      MarketsActions.getMarketStats.bind(this, this.props.quote, this.props.base),
      35 * 1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.statsInterval)
  }

  goToMarket(e) {
    e.preventDefault()
    this.context.router.push(
      `/market/${this.props.base.get('symbol')}_${this.props.quote.get('symbol')}`,
    )
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { base, quote, marketStats } = this.props

    let desc = assetUtils.parseDescription(base.getIn(['options', 'description']))
    function getImageName(asset) {
      let symbol = asset.get('symbol')
      if (symbol === 'OPEN.BTC') return symbol
      let imgName = asset.get('symbol').split('.')
      return imgName.length === 2 ? imgName[1] : imgName[0]
    }
    let imgName = getImageName(base)

    let marketID = base.get('symbol') + '_' + quote.get('symbol')
    // eslint-disable-next-line react/prop-types
    let stats = marketStats.get(marketID)
    let changeClass = !stats
      ? ''
      : parseFloat(stats.change) > 0
      ? 'change-up'
      : parseFloat(stats.change) < 0
      ? 'change-down'
      : ''

    if (imgName === 'BTS') {
      imgName = getImageName(quote)
    }

    return (
      <div
        /* eslint-disable-next-line react/prop-types */
        className={cnames('grid-block no-overflow fm-container', this.props.className)}
        onClick={this.goToMarket.bind(this)}
      >
        <div className="grid-block vertical shrink">
          <img
            ref={imgName.toLowerCase()}
            onError={() => {
              // eslint-disable-next-line react/no-string-refs
              this.refs[imgName.toLowerCase()].src = 'asset-symbols/bts.png'
            }}
            style={{ maxWidth: 70 }}
            src={'asset-symbols/' + imgName.toLowerCase() + '.png'}
            alt=""
          />
        </div>
        <div className="grid-block vertical no-overflow">
          {/* eslint-disable-next-line react/prop-types */}
          <div className="fm-title" style={{ visibility: this.props.new ? 'visible' : 'hidden' }}>
            <Translate content="exchange.new" />
          </div>
          <div className="fm-name">
            {desc.short_name ? (
              <span>{desc.short_name}</span>
            ) : (
              <AssetName name={base.get('symbol')} />
            )}
          </div>
          <div className="fm-volume">
            {!stats || !stats.close
              ? null
              : utils.format_price(
                  stats.close.quote.amount,
                  base,
                  stats.close.base.amount,
                  quote,
                  true,
                  this.props.invert,
                )}
          </div>
          <div className="fm-volume">
            {!stats ? null : utils.format_volume(stats.volumeBase, quote.get('precision'))}{' '}
            <AssetName name={quote.get('symbol')} />
          </div>
          <div className={cnames('fm-change', changeClass)}>{!stats ? null : stats.change}%</div>
        </div>
      </div>
    )
  }
}

MarketCard = BindToChainState(MarketCard)

class MarketCardWrapper extends React.Component {
  render() {
    return <MarketCard {...this.props} />
  }
}

export default connect(MarketCardWrapper, {
  listenTo() {
    return [MarketsStore]
  },
  getProps() {
    return {
      marketStats: MarketsStore.getState().allMarketStats,
    }
  },
})
