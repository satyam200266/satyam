import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #26d5d2;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #000000;
`

function Footer() {
  return (
    <Container><b>&copy; Copyright:S&V DEVELOPER</b></Container>
  )
}

export default Footer