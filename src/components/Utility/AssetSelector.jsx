import React from 'react'
import { Translate } from '@material-ui/icons'
import { ChainValidation } from 'graphenejs-lib'
import ChainTypes from '../Utility/ChainTypes'
import BindToChainState from '../Utility/BindToChainState'
import counterpart from 'counterpart'
import PropTypes from 'prop-types'

/**
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

class AssetSelector extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired, // a translation key for the label
    error: PropTypes.string, // the error message override
    placeholder: PropTypes.string, // the placeholder text to be displayed when there is no user_input
    onChange: PropTypes.func, // a method to be called any time user input changes
    onFound: PropTypes.func, // a method to be called when existing account is selected
    assetInput: PropTypes.string, // the current value of the account selector, the string the user enters
    asset: ChainTypes.ChainAsset, // account object retrieved via BindToChainState decorator (not input)
    tabIndex: PropTypes.number, // tabindex property to be passed to input tag
    disableActionButton: PropTypes.string, // use it if you need to disable action button
  }

  static defaultProps = {
    disabled: false,
  }

  // can be used in parent component: this.refs.asset_selector.getAsset()
  getAsset() {
    return this.props.asset
  }

  getError() {
    let error = this.props.error
    if (!error && this.props.assetInput && !this.getNameType(this.props.assetInput))
      error = counterpart.translate('asset.errors.invalid')
    return error
  }

  getNameType(value) {
    if (!value) return null
    // if(value[0] === "#" && utils.is_object_id("1.2." + value.substring(1))) return "id";
    if (!ChainValidation.is_valid_symbol_error(value, true)) return 'symbol'
    return null
  }

  onInputChanged(event) {
    let value = event.target.value.trim().toUpperCase() //.toLowerCase();
    if (this.props.onChange && value !== this.props.assetInput) this.props.onChange(value)
  }

  onKeyDown(event) {
    if (event.keyCode === 13) this.onFound(event)
  }

  componentDidMount() {
    if (this.props.onFound && this.props.asset) this.props.onFound(this.props.asset)
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (this.props.onFound && newProps.asset !== this.props.asset)
      this.props.onFound(newProps.asset)
  }

  onFound(e) {
    e.preventDefault()
    if (this.props.onFound && !this.getError() && !this.props.disableActionButton) {
      if (this.props.asset) this.props.onFound(this.props.asset)
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { disabled } = this.props
    let error // = this.getError();
    let lookup_display
    if (!disabled) {
      if (this.props.asset) {
        lookup_display = this.props.asset.get('symbol')
      } else if (!error && this.props.assetInput) {
        error = counterpart.translate('explorer.asset.not_found', { name: this.props.assetInput })
      }
    }
    return (
      // eslint-disable-next-line react/prop-types
      <div className="account-selector no-overflow" style={this.props.style}>
        <div>
          <div className="header-area">
            {error ? null : (
              <div className="right-label">
                &nbsp; <span>{lookup_display}</span>
              </div>
            )}
            <Translate component="label" content={this.props.label} />
          </div>
          <div className="input-area">
            <span className="inline-label">
              <input
                /* eslint-disable-next-line react/prop-types */
                disabled={this.props.disabled}
                type="text"
                value={this.props.assetInput || ''}
                placeholder={counterpart.translate('explorer.assets.symbol')}
                /* eslint-disable-next-line react/no-string-refs */
                ref="user_input"
                onChange={this.onInputChanged.bind(this)}
                onKeyDown={this.onKeyDown.bind(this)}
                tabIndex={this.props.tabIndex}
              />
              {/* eslint-disable-next-line react/prop-types */}
              {this.props.children}
            </span>
          </div>
          <div className="error-area" style={{ paddingBottom: '10px' }}>
            <span>{error}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default BindToChainState(AssetSelector)
