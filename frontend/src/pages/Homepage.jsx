import React, { useEffect, useState } from 'react'
import styled from "styled-components"
// import Card from "../components/Card.jsx"
// import {FaBook} from "react-icons/fa"
// import {IoIosPeople} from "react-icons/io"
import HeatMap from '../components/HeatMap.jsx'
import { req } from '../axisInstance.js'

const Container = styled.div`
  background-color: #ffbebe;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 70px);
    >*{
        margin: 1rem;
    }
    /* >img{
      height: 100%;
    } */
`
const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333;
  width: 1500px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #007bff;
  }
`;

// Styled Option component
const Option = styled.option`
  color: #333;
`;

// const CardSection = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 1rem;
//     width: 80%;
// `


  
function Homepage() {
    const [employes, setEmployes] = useState([])
    const [selectedEmployes, setSelectedEmployes] = useState(localStorage.getItem("name") || "")
    const [attendence, setAttendence] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const {data} = await req.get(`/employes`)
                setEmployes(data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])
    useEffect(() => {
        if(!selectedEmployes.length) return 
        (async () => {
            try {
                const {data} = await req.get(`/attendence/${selectedEmployes}`)
                setAttendence(data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[selectedEmployes])


    const handleSelectChange = (e) => {
        localStorage.setItem("name", e.target.value )
        setSelectedEmployes(e.target.value)
    }
  return (
    <Container>
            {/* <CardSection>
                <Card title="View Attendance" Logo={FaBook}/>
                <Card title="View Employe" Logo={IoIosPeople}/>
            </CardSection> */}
            <div>
            <h2 style={{padding: '2px'}}>Employee Details :-</h2>
            <section>
                <Select value={selectedEmployes} onChange={handleSelectChange}>
                    <Option hidden>Select Your Name</Option>
                    {employes.map(e => <option key={e._id} value={e._id} >{e.name}</option>)}
                </Select>
            </section>
            </div>
            <section>
                <HeatMap userData={attendence}/>
            </section>

            <div style={{ backgroundColor: '#ffffff', padding: '20px', width: '1500px',borderRadius: '4px' }}>
                <h2 style={{ padding: '2px' }}>Notice :-</h2>
                    <a style={{ color: '#000000' }}>
                        At our company, we believe in the power of teamwork and the potential within each and every one of our employees. We encourage you to embrace challenges as opportunities for growth and innovation. Your dedication, creativity, and determination are the driving forces behind our collective success. Together, we can achieve extraordinary things and make a lasting impact in the world.
                    </a>
            </div>

            <div>
                <h2 style={{ padding: '2px' }}>Employee Feedback :-</h2>
                <textarea id="employee-feedback" name="employee-feedback" rows="5" placeholder="Enter your feedback here" style={{ width: '1500px', borderRadius: '4px' }}></textarea>
                <button type="submit" style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', width: '100px', height: '30px', padding: '2px', backgroundColor: '#ff6d6d', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
            </div>
    </Container>
  )
}

export default Homepage