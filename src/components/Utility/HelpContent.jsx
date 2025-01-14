import React from 'react'
import { reduce, zipObject } from 'lodash'
import counterpart from 'counterpart'
import utils from '../../common/utils'
import PropTypes from 'prop-types'
import Help from '../Help'

let HelpData = {}

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1
}

function split_into_sections(str) {
  let sections = str.split(/\[#\s?(.+?)\s?\]/)
  if (sections.length === 1) return sections[0]
  if (sections[0].length < 4) sections.splice(0, 1)
  sections = reduce(
    sections,
    (result, n) => {
      let last = result.length > 0 ? result[result.length - 1] : null
      if (!last || last.length === 2) {
        last = [n]
        result.push(last)
      } else last.push(n)
      return result
    },
    [],
  )
  return zipObject(sections)
}

function adjust_links(str) {
  return str.replace(/\<a\shref\=\"(.+?)\"/gi, (match, text, options = null) => {
    if (text.indexOf('#/') === 0) return `<a href="${text}" onclick="_onClickLink(event)"`
    if (text.indexOf('http') === 0) return `<a href="${text}" target="_blank"`
    let page = endsWith(text, '.md') ? text.substr(0, text.length - 3) : text
    let res = `<a href="${!!options.hash ? '#' : ''}/help/${page}" onclick="_onClickLink(event)"`
    return res
  })
}

// console.log("-- HelpData -->", HelpData);

class HelpContent extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    section: PropTypes.string,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    window._onClickLink = this.onClickLink.bind(this)
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-next-line react/prop-types
    let locale = this.props.locale || counterpart.getLocale() || 'en'

    // Only load helpData for the current locale as well as the fallback 'en'
    Help.keys()
      .filter((a) => {
        return a.indexOf(`/${locale}/`) !== -1 || a.indexOf('/en/') !== -1
      })
      .forEach(function (filename) {
        var res = filename.match(/\/(.+?)\/(.+)\./)
        let locale = res[1]
        let key = res[2]
        let help_locale = HelpData[locale]
        if (!help_locale) HelpData[locale] = help_locale = {}
        let content = Help(filename)
        help_locale[key] = split_into_sections(adjust_links(content))
      })
  }

  onClickLink(e) {
    e.preventDefault()
    let path = e.target.hash.split('/').filter((p) => p && p !== '#')
    if (path.length === 0) return false
    let route = '/' + path.join('/')
    this.context.router.push(route)
    return false
  }

  setVars(str) {
    return str.replace(/(\{.+?\})/gi, (match, text) => {
      let key = text.substr(1, text.length - 2)
      let value = this.props[key] !== undefined ? this.props[key] : text
      if (value.amount && value.asset)
        value = utils.format_asset(value.amount, value.asset, false, false)
      if (value.date) value = utils.format_date(value.date)
      if (value.time) value = utils.format_time(value.time)
      //console.log("-- var -->", key, value);
      return value
    })
  }
  render() {
    // eslint-disable-next-line react/prop-types
    let locale = this.props.locale || counterpart.getLocale() || 'en'

    if (!HelpData[locale]) {
      console.error(`missing locale '${locale}' help files, rolling back to 'en'`)
      locale = 'en'
    }
    let value = HelpData[locale][this.props.path]

    if (!value && locale !== 'en') {
      console.warn(
        `missing path '${this.props.path}' for locale '${locale}' help files, rolling back to 'en'`,
      )
      value = HelpData['en'][this.props.path]
    }
    // eslint-disable-next-line react/prop-types
    if (!value && this.props.alt_path) {
      console.warn(
        // eslint-disable-next-line react/prop-types
        `missing path '${this.props.path}' for locale '${locale}' help files, rolling back to alt_path '${this.props.alt_path}'`,
      )
      // eslint-disable-next-line react/prop-types
      value = HelpData[locale][this.props.alt_path]
    }
    // eslint-disable-next-line react/prop-types
    if (!value && this.props.alt_path && locale != 'en') {
      console.warn(
        // eslint-disable-next-line react/prop-types
        `missing alt_path '${this.props.alt_path}' for locale '${locale}' help files, rolling back to 'en'`,
      )
      // eslint-disable-next-line react/prop-types
      value = HelpData['en'][this.props.alt_path]
    }

    if (!value) {
      console.error(` file not found '${this.props.path}' for locale '${locale}'`)
      return !null
    }
    if (this.props.section) value = value[this.props.section]
    if (!value) {
      console.error(` section not found ${this.props.path}#${this.props.section}`)
      return null
    }
    return (
      <div
        /* eslint-disable-next-line react/prop-types */
        style={this.props.style}
        className="help-content"
        dangerouslySetInnerHTML={{ __html: this.setVars(value) }}
      />
    )
  }
}

export default HelpContent
