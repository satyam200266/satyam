import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #354b94;
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
`

function Footer() {
  return (
    <Container>&copy; Copyright: SatyamHacker.pro</Container>
  )
}

export default Footer