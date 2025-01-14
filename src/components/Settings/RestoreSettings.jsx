import React from 'react'
import { BackupRestore } from '../Wallet/Backup'
import ImportKeys from '../Wallet/ImportKeys'
import WalletCreate from '../Wallet/WalletCreate'
import { Translate } from '@material-ui/icons'
import counterpart from 'counterpart'

export default class RestoreSettings extends React.Component {
  constructor() {
    super()
    this.state = {
      restoreType: 0,
      types: ['backup', 'key', 'legacy', 'brainkey'],
    }
  }

  _changeType(e) {
    this.setState({
      restoreType: this.state.types.indexOf(e.target.value),
    })
  }

  render() {
    let { types, restoreType } = this.state
    let options = types.map((type) => {
      return (
        <option key={type} value={type}>
          {counterpart.translate(`settings.backup_${type}`)}{' '}
        </option>
      )
    })

    let content

    switch (types[restoreType]) {
      case 'backup':
        content = (
          <div>
            <BackupRestore />
          </div>
        )
        break

      case 'brainkey':
        content = (
          <div>
            <p style={{ maxWidth: '40rem', paddingBottom: 10 }}>
              <Translate content="settings.restore_brainkey_text" />
            </p>
            <WalletCreate restoreBrainkey={true} />
          </div>
        )
        break

      default:
        content = <ImportKeys privateKey={restoreType === 1} />
        break
    }

    return (
      <div>
        <select
          onChange={this._changeType.bind(this)}
          className="bts-select"
          value={types[restoreType]}
        >
          {options}
        </select>

        {content}
      </div>
    )
  }
}
