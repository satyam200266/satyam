import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import styled from "styled-components"
import Card from "../components/Card.jsx"
import {FaBook} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"
import img from "../img/img2.jpg"

const Container = styled.div`
  background-color: #8efefc;
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



const CardSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;

`

function Homepage() {
  return (
    <Container>
            <CardSection>
                <Card title="View Attendance" Logo={FaBook}/>
                <Card title="View Employe" Logo={IoIosPeople}/>
            </CardSection>
    </Container>
  )
}

export default Homepage