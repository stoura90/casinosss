import React, { Component } from 'react'
import classNames from 'classnames'
import { Translate } from '@material-ui/icons'
import PropTypes from 'prop-types'

class PasswordInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    confirmation: PropTypes.bool,
    wrongPassword: PropTypes.bool,
    noValidation: PropTypes.bool,
    noLabel: PropTypes.bool,
  }

  static defaultProps = {
    confirmation: false,
    wrongPassword: false,
    noValidation: false,
    noLabel: false,
  }

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.state = { value: '', error: null, wrong: false, doesnt_match: false }
  }

  value() {
    // eslint-disable-next-line react/no-string-refs
    let node = this.refs.password
    return node ? node.value : ''
  }

  clear() {
    // eslint-disable-next-line react/no-string-refs
    this.refs.password.value = ''
    // eslint-disable-next-line react/no-string-refs
    if (this.props.confirmation) this.refs.confirm_password.value = ''
  }

  focus() {
    // eslint-disable-next-line react/no-string-refs
    this.refs.password.focus()
  }

  valid() {
    return (
      !(this.state.error || this.state.wrong || this.state.doesnt_match) &&
      this.state.value.length >= 8
    )
  }

  handleChange(e) {
    e.preventDefault()
    e.stopPropagation()
    // eslint-disable-next-line react/no-string-refs
    const confirmation = this.props.confirmation ? this.refs.confirm_password.value : true
    // eslint-disable-next-line react/no-string-refs
    const password = this.refs.password.value
    const doesnt_match = this.props.confirmation ? confirmation && password !== confirmation : false
    let state = {
      valid:
        !this.state.error &&
        !this.state.wrong &&
        !(this.props.confirmation && doesnt_match) &&
        confirmation &&
        password.length >= 8,
      value: password,
      doesnt_match,
    }
    if (this.props.onChange) this.props.onChange(state)
    this.setState(state)
  }

  onKeyDown(e) {
    if (this.props.onEnter && e.keyCode === 13) this.props.onEnter(e)
  }

  render() {
    let password_error = null,
      confirmation_error = null
    if (this.state.wrong || this.props.wrongPassword) password_error = <div>Incorrect password</div>
    else if (this.state.error) password_error = <div>{this.state.error}</div>
    if (
      !this.props.noValidation &&
      !password_error &&
      this.state.value.length > 0 &&
      this.state.value.length < 8
    )
      password_error = 'Password must be 8 characters or more'
    if (this.state.doesnt_match) confirmation_error = <div>Confirmation doesnot match Password</div>
    let password_class_name = classNames('form-group', { 'has-error': password_error })
    let password_confirmation_class_name = classNames('form-group', {
      'has-error': this.state.doesnt_match,
    })
    let { noLabel } = this.props

    return (
      <div>
        <div className={password_class_name}>
          {noLabel ? null : <Translate component="label" content="wallet.password" />}
          <section>
            <input
              name="password"
              type="password"
              /* eslint-disable-next-line react/no-string-refs */
              ref="password"
              autoComplete="off"
              onChange={this.handleChange}
              onKeyDown={this.onKeyDown}
              placeholder="Enter password"
            />
          </section>
          {password_error}
        </div>
        {this.props.confirmation ? (
          <div className={password_confirmation_class_name}>
            {noLabel ? null : <Translate component="label" content="wallet.confirm" />}
            <section>
              <input
                name="confirm_password"
                type="password"
                /* eslint-disable-next-line react/no-string-refs */
                ref="confirm_password"
                autoComplete="off"
                placeholder="Confirm password"
                onChange={this.handleChange}
              />
            </section>
            {confirmation_error}
          </div>
        ) : null}
      </div>
    )
  }
}

export default PasswordInput
