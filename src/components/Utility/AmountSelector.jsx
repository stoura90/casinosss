import React from 'react'
import { Translate } from '@material-ui/icons'
import { ChainStore } from 'graphenejs-lib'
import ChainTypes from '../Utility/ChainTypes'
import BindToChainState from '../Utility/BindToChainState'
import FormattedAsset from './FormattedAsset'
import PropTypes from 'prop-types'

class AssetOption extends React.Component {
  static propTypes = {
    asset: ChainTypes.ChainObject,
    asset_id: PropTypes.string,
  }

  render() {
    let symbol = this.props.asset ? this.props.asset.get('symbol') : this.props.asset_id
    return <option value={this.props.asset_id}>{symbol}</option>
  }
}
AssetOption = BindToChainState(AssetOption)

class AssetSelector extends React.Component {
  static propTypes = {
    value: PropTypes.string, // asset id
    assets: PropTypes.array, // a translation key for the label
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: props.value || props.assets[0],
    }
  }

  onChange(event) {
    let asset = ChainStore.getAsset(event.target.value)
    this.props.onChange(asset)
    this.setState({
      selected: asset ? asset.get('id') : '1.3.0',
    })
  }

  render() {
    if (this.props.assets.length === 0) return null
    var options = this.props.assets.map(function (value) {
      return <AssetOption key={value} asset={value} asset_id={value} />
    })

    if (this.props.assets.length == 1) {
      return <FormattedAsset asset={this.props.assets[0]} amount={0} hide_amount={true} />
    } else {
      return (
        <select
          value={this.state.selected}
          className="form-control"
          onChange={this.onChange.bind(this)}
        >
          {options}
        </select>
      )
    }
  }
}

class AmountSelector extends React.Component {
  static propTypes = {
    label: PropTypes.string, // a translation key for the label
    asset: ChainTypes.ChainAsset.isRequired, // selected asset by default
    assets: PropTypes.array,
    amount: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    disabled: false,
  }

  componentDidMount() {
    this.onAssetChange(this.props.asset)
  }

  formatAmount(v) {
    // TODO: use asset's precision to format the number
    if (!v) v = ''
    if (typeof v === 'number') v = v.toString()
    let value = v.trim().replace(/,/g, '')
    // value = utils.limitByPrecision(value, this.props.asset.get("precision"));
    while (value.substring(0, 2) == '00') value = value.substring(1)
    if (value[0] === '.') value = '0' + value
    else if (value.length) {
      let n = Number(value)
      if (isNaN(n)) {
        value = parseFloat(value)
        if (isNaN(value)) return ''
      }
      let parts = (value + '').split('.')
      value = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      if (parts.length > 1) value += '.' + parts[1]
    }
    return value
  }

  _onChange(event) {
    let amount = event.target.value
    this.setState({ amount })
    this.props.onChange({ amount: amount, asset: this.props.asset })
  }

  onAssetChange(selected_asset) {
    this.setState({ selected_asset })
    this.props.onChange({ amount: this.props.amount, asset: selected_asset })
  }

  render() {
    let value = this.formatAmount(this.props.amount)
    return (
      // eslint-disable-next-line react/prop-types
      <div className="amount-selector" style={this.props.style}>
        {/* eslint-disable-next-line react/prop-types */}
        <div className="float-right">{this.props.display_balance}</div>
        <Translate component="label" content={this.props.label} />
        <div className="inline-label">
          <input
            /* eslint-disable-next-line react/prop-types */
            disabled={this.props.disabled}
            type="text"
            value={value || ''}
            placeholder={this.props.placeholder}
            onChange={this._onChange.bind(this)}
            tabIndex={this.props.tabIndex}
          />
          <span className="form-label select">
            <AssetSelector
              /* eslint-disable-next-line react/prop-types */
              ref={this.props.refCallback}
              value={this.props.asset.get('id')}
              assets={this.props.assets}
              onChange={this.onAssetChange.bind(this)}
            />
          </span>
        </div>
      </div>
    )
  }
}
AmountSelector = BindToChainState(AmountSelector)

export default AmountSelector
