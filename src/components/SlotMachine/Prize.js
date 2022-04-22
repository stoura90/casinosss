import React, { Component } from 'react'
import styled from 'styled-components'
import { getPrizeValue } from '../../pages/private/Casino/components/obesyn/helpers'

import { connect } from 'react-redux'

const MoneyHole = styled.div`
  display: block;
  width: 80%;
  height: 10px;
  margin: 20px auto;
  max-width: 800px;
  border-radius: 15px;
`

const Prize = styled.h1`
  min-height: 22px;
`

class SlotMachine extends Component {
  Value
  constructor(props) {
    super(props)
    this.state = {
      // eslint-disable-next-line react/prop-types
      arrPrize: this.props.slotMachine.slots,
      value: '',
    }
  }

  render() {
    return (
      <div>
        <MoneyHole />
        {/* eslint-disable-next-line react/prop-types */}
        <Prize>{getPrizeValue(this.props.slotMachine.slots)}</Prize>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  slotMachine: state.slots,
})

export default connect(mapStateToProps)(SlotMachine)
