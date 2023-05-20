import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 10px;
     gap: 1rem;
     height: 70px;
     background-color: #95c2dd;

     a {
        color: black;
        text-decoration: none;
     }

    > div {
        display: flex;
        gap: 1rem;
    }
`
const Left = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    >img {
        height: 100%;
    }
    >h2{
        height: max-content;
    }
    cursor: pointer;
`
const Right = styled.div`
`

function NavBar() {
    const navigate = useNavigate()
  return (
    <Container>
        <Left onClick={() => navigate('/')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"/>
            <h2>Satyam</h2>
        </Left>
        <Right>
            <Link to="login">Login</Link>
            <Link to="/register">Register</Link>
        </Right>
    </Container>
  )
}

export default NavBar