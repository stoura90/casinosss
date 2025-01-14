/** Generic set of components for dealing with data in the ChainStore */
import React, { Component, Children } from 'react'
import { connect } from 'alt-react'
import ChainTypes from '../Utility/ChainTypes'
import BindToChainState from '../Utility/BindToChainState'
import AccountStore from '../../stores/AccountStore'
import { pairs } from 'lodash'

class ResolveLinkedAccountsChainState extends Component {
  static propTypes = {
    linkedAccounts: ChainTypes.ChainAccountsList.isRequired,
  }

  render() {
    let linkedAccounts = []
    pairs(this.props.linkedAccounts).forEach((account) => {
      if (!account[1]) return
      console.log('... account.toJS()', account[1].toJS())
      linkedAccounts.push(account[1])
    })
    // eslint-disable-next-line react/prop-types
    let child = Children.only(this.props.children)
    if (!child)
      return (
        <span>
          {linkedAccounts.map((a) => (
            // eslint-disable-next-line react/jsx-key
            <br>{a.toJS()}</br>
          ))}
        </span>
      )
    // Pass the list to a child reactjs component as this.props.resolvedLinkedAccounts
    child = React.cloneElement(child, { linkedAccounts })
    return <span>{child}</span>
  }
}
ResolveLinkedAccountsChainState = BindToChainState(ResolveLinkedAccountsChainState)

class ResolveLinkedAccounts extends Component {
  render() {
    return (
      <ResolveLinkedAccountsChainState
        /* eslint-disable-next-line react/prop-types */
        linkedAccounts={this.props.linkedAccounts}
        /* eslint-disable-next-line react/no-children-prop,react/prop-types */
        children={this.props.children}
      />
    )
  }
}

ResolveLinkedAccounts = connect(ResolveLinkedAccounts, {
  listenTo() {
    return [AccountStore]
  },
  getProps() {
    return AccountStore.getState()
  },
})

export default ResolveLinkedAccounts
