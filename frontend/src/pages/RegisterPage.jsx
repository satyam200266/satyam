import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);
`
const Wrapper = styled.div`
    border-radius: 0.5rem;
    background-color: white;
    width: 400px;
    max-width: 90%;
    height: max-content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.1);
    >img {
        width: 20%;
        margin-bottom: 3rem;
    }
    gap: 1rem;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    >input {
        border: inherit;
        outline: none;
        border-bottom: 3px solid #D9D9D9;
    }
    >button {
        background: rgb(82,121,255);
        background: linear-gradient(90deg, rgba(82,121,255,1) 0%, rgba(161,0,235,1) 100%);
        padding: 0.5rem 0;
        border-radius: 50px;
        border: none;
        color: white;
        text-transform: uppercase;
    }
`


function RegisterPage() {
  return (
    <Container>
        <Wrapper>
            <h1>Register</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"/>
            <Form>
                <input type='text' placeholder='Name'/>
                <input type='tel' placeholder='Phone no.'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>Register</button>
            </Form>
            <p style={{marginTop: "3rem"}}>Already have an Account? <Link to="/login">Login</Link></p>
        </Wrapper>
    </Container>
  )
}

export default RegisterPage