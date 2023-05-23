import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlineUserAdd} from "react-icons/ai"
import { req } from '../axisInstance'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    background-color: #ffbebe;
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

    >div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        >svg {
        font-size: 2rem;
    }
    }
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

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

const Input = styled.input`    
    border: inherit;
    outline: none;
    border-bottom: 3px solid #D9D9D9;
    width: 100%;
`
const Select = styled.select`    
    border: inherit;
    outline: none;
    width: 100%;
    border-bottom: 3px solid #D9D9D9;
`

function AddEmploye() { 
    const navigate = useNavigate()
    const [formData, setFormdata] = useState({name: "",number: "", joiningDate: "",salary: "",position: ""})
    const handleChange = (e) => setFormdata(p => ({...p, [e.target.name]: e.target.value}))

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = req.post("/employes",formData)
            navigate("/addAttendance")
        } catch (error) {
            
        }
    }
  return (
    <Container>
        <Wrapper>
        <div>
        <AiOutlineUserAdd/><h1>Employee Details</h1>
        </div>

            <Form onSubmit={handleSubmit}>
                <Input type='name' placeholder='Employee Name' value={formData.name} name='name'  onChange={handleChange}/>
                <Input type='tel' placeholder='Contact Number' maxLength={10} value={formData.number} name='number' onChange={handleChange}/>
                {/* <div>
                <p>Work Catagory</p><Select value={formData.position} name='position' onChange={handleChange}>
                            <option hidden>Select Field</option>
                            <option value="Shope">Shope</option>
                            <option value="Carpenter">Carpenter</option>
                            <option value="Call Center">Call Center</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Garage">Garage</option>
                         </Select>
                         </div> */}
            <div>
                <p>Employee Catagory</p>
                <Select value={formData.position} name='position' onChange={handleChange}>
                <option hidden>Select Field</option>
                <option value="Labour">Labour</option>
                <option value="Poslish Man">Poslish Man</option>
                <option value="Casher">Casher</option>
                <option value="Waiter">Waiter</option>
                <option value="Machanic">Machanic</option>
                </Select>
            </div>
                <Input type='tel' placeholder='Salary' minLength={3} maxLength={5} value={formData.salary} name='salary'  onChange={handleChange}/>
                    <div>
                        <p>Date of joinning</p><Input type='date' value={formData.joiningDate} name='joiningDate' onChange={handleChange}/>
                    </div>                
                <button>Add Employee</button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default AddEmploye