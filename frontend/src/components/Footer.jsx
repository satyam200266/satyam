import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #ff6d6d;
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