import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class TransitionWrapper extends React.Component {
  static defaultProps = {
    component: 'span',
    enterTimeout: 2000,
  }

  constructor() {
    super()

    this.state = {
      animateEnter: false,
    }

    this.timer = null
  }

  componentDidMount() {
    this.enableAnimation()
  }

  resetAnimation() {
    this.setState({
      animateEnter: false,
    })

    this.enableAnimation()
  }

  enableAnimation() {
    this.timer = setTimeout(() => {
      if (this.timer) {
        this.setState({
          animateEnter: true,
        })
      }
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    this.timer = null
  }

  render() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.children) {
      // eslint-disable-next-line react/prop-types
      return React.createElement(this.props.component)
    } else {
      return (
        <ReactCSSTransitionGroup
          /* eslint-disable-next-line react/prop-types */
          className={this.props.className}
          /* eslint-disable-next-line react/prop-types */
          component={this.props.component}
          /* eslint-disable-next-line react/prop-types */
          transitionName={this.props.transitionName}
          /* eslint-disable-next-line react/prop-types */
          transitionEnterTimeout={this.props.enterTimeout}
          transitionEnter={this.state.animateEnter}
          transitionLeave={false}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.children}
        </ReactCSSTransitionGroup>
      )
    }
  }
}
