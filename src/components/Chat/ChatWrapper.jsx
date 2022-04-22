import React from 'react'
import Chat from './Chat'
import { Translate } from '@material-ui/icons'
import SettingsActions from '../../actions/SettingsActions'

export default class ChatWrapper extends React.Component {
  onToggleChat(e) {
    e.preventDefault()
    // eslint-disable-next-line react/prop-types
    let showChat = !this.props.showChat

    SettingsActions.changeViewSetting({
      showChat: showChat,
    })
  }

  _onEnableChat(e) {
    e.preventDefault()
    SettingsActions.changeSetting({
      setting: 'disableChat',
      value: false,
    })
  }

  render() {
    // eslint-disable-next-line react/prop-types
    let { showChat, dockedChat } = this.props
    let content

    let chatStyle = {
      display: !showChat ? 'none' : !dockedChat ? 'block' : 'inherit',
      float: !dockedChat ? 'right' : null,
      height: !dockedChat ? 35 : null,
      margin: !dockedChat ? '0 .5em' : null,
      width: !dockedChat ? 350 : 300,
      marginRight: !dockedChat ? '1rem' : null,
    }

    // eslint-disable-next-line react/prop-types
    if (this.props.disable) {
      content = showChat ? (
        <div className="chatbox">
          <div className="grid-block main-content vertical flyout">
            <div className="chatbox-title grid-block shrink">
              <Translate content="chat.disabled" />
              <a onClick={this.onToggleChat.bind(this)} className="chatbox-close">
                &times;
              </a>
            </div>

            <div className="grid-block vertical no-overflow chatbox-content">
              <div
                className="grid-content"
                /* eslint-disable-next-line react/no-string-refs */
                ref="chatbox"
                style={{
                  textAlign: 'center',
                  paddingTop: 120,
                }}
              >
                <div onClick={this._onEnableChat.bind(this)} className="button">
                  <Translate content="chat.enable" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <a className="toggle-controlbox" onClick={this.onToggleChat.bind(this)}>
          <span className="chat-toggle">
            <Translate content="chat.button" />
          </span>
        </a>
      )
    } else {
      content = <Chat {...this.props} />
    }

    return (
      <div
        id="chatbox"
        className={dockedChat ? 'chat-docked grid-block' : 'chat-floating'}
        style={{
          // eslint-disable-next-line react/prop-types
          bottom: this.props.footerVisible && !dockedChat ? 36 : null,
          height: !dockedChat ? 35 : null,
        }}
      >
        {content}
      </div>
    )
  }
}
