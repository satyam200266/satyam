import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import img from "../img/img3.jpg"

const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 10px;
     gap: 1rem;
     height: 70px;
     background-color: #26d5d2;

     a {
        color: black;
        text-decoration: none;
        font-size: 1.3rem;
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
    >h1{
        height: max-content;
    }
    cursor: pointer;
`
const Right = styled.div`
    >link{
        height: 100%;
    }
`

function NavBar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const navigate = useNavigate()

    const handleLogout = () => {
        setUser(false)    
        navigate("/") 
        localStorage.clear()
    }
  return (
    <Container>
        <Left onClick={() => navigate('/')}>
            <img src="https://static.thenounproject.com/png/3627272-200.png"/>
            <h1><b>Employee Administration</b></h1>
        </Left>
        <Right>
            {!user ? <>
                <Link to="login"><b>Login</b></Link>
                <Link to="/register"><b>Register</b></Link>
            </>:
            <>
                <Link to="/addEmploye"><b>Add Employes</b></Link>
                <Link to="/addAttendance"><b>Add Attendence</b></Link>
                <p onClick={handleLogout}><b>Logout</b></p>
            </>
            }

        </Right>
    </Container>
  )
}

export default NavBar