import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #fff;
  flex-grow: 1;
  margin: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  border: 5px solid #f1f1f1;
  padding: 5%;
`

// eslint-disable-next-line react/prop-types
const Wheel = ({ children }) => <Wrapper>{children}</Wrapper>

export default Wheel
