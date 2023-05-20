import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import styled from "styled-components"
import Card from "../components/Card.jsx"
import {FaBook} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >*{
        margin: 1rem;
    }
`

const Slider = styled(SimpleImageSlider)`
    
`

const CardSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;

`

const images = [
    { url: "https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80" },
    { url: "https://plus.unsplash.com/premium_photo-1667760701840-6d2e8ab46af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=694&q=80" },
    { url: "https://plus.unsplash.com/premium_photo-1681449855904-167a7ce9edef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
    { url: "https://images.unsplash.com/photo-1684444161166-7128f0f3db08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
    { url: "https://images.unsplash.com/photo-1684110727290-9696b04d3e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80" },
  ];

function Homepage() {
  return (
    <Container>
        <h1>Satyam pro Hacker, coder, Progrmer.</h1>
        <Slider
            images={images}
            width="80%"
            height={"50vh"}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={1}
            />

            <CardSection>
                <Card title="View Attendance" Logo={FaBook}/>
                <Card title="View Employe" Logo={IoIosPeople}/>
            </CardSection>
    </Container>
  )
}

export default Homepage