import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: teal;
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 15px 10px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    >svg {
        font-size: 3rem;
    }
    >p {
        font-size: 1rem;
    }

`
function Card({title, Logo}) {
  return (
    <Container>
        <Logo/>
        <p>{title}</p>
    </Container>
  )
}

export default Card