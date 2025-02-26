import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { req } from '../axisInstance'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/user'

const Container = styled.div`
    background-color: #adcfff;
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
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    >*{
        width: 100%;
    }
    >input {
        border: inherit;
        outline: none;
        border-bottom: 3px solid #D9D9D9;

    }
    >button {
        background: #3563c7;
        /* background: linear-gradient(90deg, rgba(82,121,255,1) 0%, rgba(161,0,235,1) 100%); */
        padding: 0.5rem 0;
        border-radius: 50px;
        border: none;
        color: white;
        text-transform: uppercase;
        cursor: pointer;
    }
`

const ErrorComponent = styled.div`
    background-color: #ffb9b9;
    color: red;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    display: flex;
    justify-content: center;
`


function Login() {
 const dispatch = useDispatch()
const [formData, setFormData] = useState({email: "", password: ""})
const [error, setError] = useState("")

 const handleOnChange = (e) => setFormData(p => ({...p, [e.target.name] : e.target.value}))

 const onSubmit = async (e) => {
    e.preventDefault()
    try {
        const {data} = await req.post("auth/login", formData)
        dispatch(login(data))
    } catch (error) {
        setError(error.response.data.message)
    }
 }
 
  return (
    <Container>
        <Wrapper>
            <h1>Welcome</h1>
            <img src="https://static.thenounproject.com/png/3627272-200.png"/>
            <Form onSubmit={onSubmit}>
                <input name="email" onChange={handleOnChange} value={formData.email} type='email' placeholder='Email'/>
                <input name="password" onChange={handleOnChange} value={formData.password} type='password' placeholder='Password'/>
                {error && 
                    <ErrorComponent>
                        <p>{error}</p>
                    </ErrorComponent>
                }
                <button>Login</button>
            </Form>
            <p style={{marginTop: "3rem"}}>Dont have an Account? <Link to="/register">Sign Up</Link></p>
        </Wrapper>
    </Container>
  )
}

export default Login