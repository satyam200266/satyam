import React, { useEffect, useState } from 'react'
import styled from "styled-components"
// import Card from "../components/Card.jsx"
// import {FaBook} from "react-icons/fa"
// import {IoIosPeople} from "react-icons/io"
import HeatMap from '../components/HeatMap.jsx'
import { req } from '../axisInstance.js'
import { useDispatch, useSelector } from 'react-redux'
import { addNotice } from '../redux/notice.js'

const Container = styled.div`
    padding: 0 0 2rem 0;
  background-color: #ffbebe;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 70px);
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
    const notice = useSelector(p => p.notice.notice)
    console.log(notice)
    const dispatch = useDispatch()
    const [employes, setEmployes] = useState([])
    const [selectedEmployes, setSelectedEmployes] = useState(localStorage.getItem("name") || "")
    const [attendence, setAttendence] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const [emp, not] = await Promise.all([
                    req.get(`/employes`),
                    req.get("/notice")
                ])
                dispatch(addNotice(not.data))
                setEmployes(emp.data)
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

            {notice && <div style={{ backgroundColor: '#ffffff', padding: '20px', width: '1500px',borderRadius: '4px' }}>
                <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2 style={{ padding: '2px' }}>Notice :-</h2> <small>{new Date(notice?.createdAt).toString()}</small>
                </div>
                <p>{notice?.title}</p>
            </div>}
    </Container>
  )
}

export default Homepage
