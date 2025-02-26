import React, { useEffect , useState} from 'react'
import styled from 'styled-components'
import { req } from '../axisInstance'
import {VscAdd} from "react-icons/vsc"
import AddAtendance from '../components/AttendenceTable'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #adcfff;
    box-sizing: border-box;
`
const Wrapper = styled.div`
    width: 1200px;
    max-width: 90%;
`
const Title = styled.h1`
    font-size: 1.25rem;
`
const FilterSection = styled.form`
    max-width: 100%;
    display: flex;
    padding: 1.5rem 1rem;
    background-color: white;
    box-sizing: border-box;
    gap: 0.5rem;
    border-radius: 1vmin;

    @media (max-width: 650px) {
        flex-direction: column;
    }

    > * {
        background-color: #F4F5F7;
        border: #F4F5F7 1px solid;
        border-radius: 1vmin;
        padding: 1rem 0.8rem; 
    }

    > input:focus {
        background-color: white;
    }
    > select:focus {
        background-color: white;
    }
`
const SearchOrder = styled.input`
    padding: 0.7rem 0.5rem;
    outline: none;
    flex: 2;   

    /* Chrome, Safari, Edge, Opers to hide number controlls */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
-moz-appearance: textfield;
    }
`
const Sections = styled.select`
    flex: 1;
`
const Options = styled.option`

`
const Search = styled.button`
    flex: 1;
    background-color: #ff6d6d;
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; 
    :hover {
        background-color: #02a8a8;
    }
`
const LoadMoreBtn = styled.p`
    margin: 1rem auto;
    width: max-content;
    cursor: pointer;
    :hover {
        text-decoration: underline;
        color: teal;
    }
`

function AddAttendence() {
    
    const [employes, setEmployes] = useState([])
   
    const fetch = async () => {
        try {
            const {data} = await req.get(`/employes/all`)
            setEmployes(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetch()
    }, [])

    const search = async (e) => {
        console.log("search")
    }

  return (
<Container>
            <h1 style={{marginTop: '4px'}}>Add Attendence</h1>
        <Wrapper>
            {/* <FilterSection onSubmit={search}>
                <SearchOrder type="number" placeholder='Search Employee Name' onChange={(e) => handleS(e, {type: "search"})}></SearchOrder>
                <Sections>
                    <Options hidden>Status</Options>
                    <Options value="pending">Pending</Options>
                    <Options value="processing">Processing</Options>
                    <Options value="delivered">Delivered</Options>
                    <Options value="" >All</Options>
                </Sections>
                <Sections>
                    <Options value="" hidden>Sort</Options>
                    <Options value="price-asc">Price Low to high</Options>
                    <Options value="price-desc">Price High to low</Options>
                    <Options value="newest">New Orders</Options>
                    <Options value="oldest">Old Orders (default)</Options>
                </Sections>
                <Search><VscAdd/>Search</Search>
            </FilterSection> */}
            <AddAtendance employes={employes} setEmployes={setEmployes} />
        </Wrapper>
    </Container>
  )
}

export default AddAttendence
