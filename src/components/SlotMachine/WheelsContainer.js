import React, { Component } from 'react'
import Wheel from './Wheel'
import { Symbols, RandomSlots } from '../../pages/private/Casino/components/obesyn/helpers'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as SlotMachineActions } from '../../pages/private/Casino/components/obesyn/store/ducks/slots'

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 10px;
  padding: 10px 0;
  background: #e8e7e5;
  display: flex;
  border-radius: 10px;
`

const Image = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: 100%;

  div {
    margin-top: ${(props) => `-${props.slot + 1}00%`};
    font-size: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`

class WheelsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slots: RandomSlots(),
    }
  }

  updateSlots = () => {
    let slotWheels = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      if (this.props.slotMachine.spin) {
        this.setState({ slots: RandomSlots() })
      }
      // eslint-disable-next-line react/prop-types
      if (!this.props.slotMachine.spin && this.props.slotMachine.prize) {
        clearInterval(slotWheels)
        let control = false
        if (!control) {
          control = true
          const finalSlots = [
            Symbols[this.state.slots[0]],
            Symbols[this.state.slots[1]],
            Symbols[this.state.slots[2]],
          ]
          // eslint-disable-next-line react/prop-types
          this.props.getPrize(finalSlots)
        }
      }
    }, 50)
    return this.state.slots
  }

  render() {
    return (
      <Wrapper>
        {this.updateSlots().map((item, index) => (
          <Wheel key={index}>
            <Image slot={item}>
              <div>
                {Symbols.map((symbol) => (
                  <img key={symbol.name} src={symbol.image} alt="" />
                ))}
              </div>
            </Image>
          </Wheel>
        ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  slotMachine: state.slots,
})
const mapDispatchToProps = (dispatch) => bindActionCreators(SlotMachineActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WheelsContainer)
