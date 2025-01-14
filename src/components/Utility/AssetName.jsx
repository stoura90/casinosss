import React from 'react'
import utils from '../../common/utils'
import asset_utils from '../../common/asset_utils'
import ChainTypes from './ChainTypes'
import BindToChainState from './BindToChainState'
import PropTypes from 'prop-types'

class AssetName extends React.Component {
  static propTypes = {
    asset: ChainTypes.ChainAsset.isRequired,
    replace: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    replace: true,
    noPrefix: false,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.replace !== this.props.replace || nextProps.name !== this.props.replace
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { name, replace, asset, noPrefix } = this.props
    let isBitAsset = asset.has('bitasset')
    let isPredMarket = isBitAsset && asset.getIn(['bitasset', 'is_prediction_market'])

    let { name: replacedName, prefix } = utils.replaceName(
      name,
      isBitAsset && !isPredMarket && asset.get('issuer') === '1.2.0',
    )
    // let prefix = isBitAsset && !isPredMarket ? <span>bit</span> :
    // 			 replacedName !== this.props.name ? <span>{replacedPrefix}</span> : null;

    if (replace && replacedName !== this.props.name) {
      let desc = asset_utils.parseDescription(asset.getIn(['options', 'description']))
      let tooltip = `<div><strong>${this.props.name}</strong><br />${
        desc.short ? desc.short : desc.main
      }</div>`
      return (
        <div
          className="tooltip inline-block"
          data-tip={tooltip}
          data-place="bottom"
          data-html={true}
        >
          <span className="asset-prefix-replaced">{prefix}</span>
          <span>{replacedName}</span>
        </div>
      )
    } else {
      return (
        <span>
          {!noPrefix ? prefix : null}
          {name}
        </span>
      )
    }
  }
}

AssetName = BindToChainState(AssetName)

export default class AssetNameWrapper extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <AssetName {...this.props} asset={this.props.name} />
  }
}
