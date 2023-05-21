import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { req } from '../axisInstance'

const TableWrapper = styled.div`
    margin-top: 20px;   
    overflow: auto;
    border: 1px solid #d5d6d7;
    border-radius: 1vmin;
`
const Table = styled.table`
    width: 100%; 
    min-width: 1000px;   
    border-collapse: collapse;  
    overflow: auto  ;
`
const Thead = styled.thead`
    background-color: teal;
    color: white;
`
const Tbody = styled.tbody`
    background-color: white;

    > :nth-last-child() {
        border-bottom: 2px solid teal;
        background-color: red;
    }
    
`
const Td = styled.td`
    padding: 0.60rem 1rem;
    vertical-align: middle;
    margin-top: auto;

    > svg{
        color: rgb(171,171,171);
        :hover {
            color: rgb(130,130,130);
        }
    }
`
const Tr = styled.tr`
    border-bottom: 1px solid #d5d6d7;

`
const CheckBoxWrapper = styled.div`
    >input {
        margin-right: 0.2rem;
    }
`
const CheckBoxContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`


//status//
const statusColors = {
    pending: { background: "FDF6B2", color: "C6783B" },
    processing: { background: "DEF7EC", color: "87A66E" },
    delivered: { background: "E1EFFE", color: "3F91FA" }
};  
const Status = styled.p`
    font-weight: 500;
    margin: 0;
    text-align: center;
    border-radius: 50px;
    background-color: #${({ status }) => statusColors[status]?.background};
    color: #${({ status }) => statusColors[status]?.color};
`;
//status END//

const Select = styled.select`
    height: 2rem;
    border-radius: 0.5vmin;
    border: 1px solid lightgrey;
    background-color: #F9FAFB;
    padding: 0 0.5rem;
`
const Options = styled.option`
    
`

function AddAtendance({employes, setEmployes}) {
    const navigate = useNavigate()

const handleAttandence = async (userInfo, action, index) => {
    console.log({index})
    req
    try {
        const {data} = await req.post(`/attendence/add/${userInfo._id}/${action}`)
        console.log(data)
        setEmployes(p => {
            const newData = [...p]
            newData[index] = {...newData[index], attendences: [data]}
            return newData
        })
    } catch (error) {
        console.log(error)
    }
}

  return ( <>
    <TableWrapper>
        <Table>
            <Thead>
                <tr>
                    <Td>NO.</Td>
                    <Td>NAME</Td>
                    <Td>PHONE</Td>
                    <Td>EMPLOYEE FIELD</Td>
                    <Td>ATTENDENCE</Td>
                </tr>
                
            </Thead>
            <Tbody>
                {employes?.map((o, index) => {
                    return <Tr key={o._id}>
                        <Td>{index+1}</Td>
                        <Td>{o.name}</Td>
                        <Td>{o.number}</Td>
                        <Td>{o.position}</Td>
                        <Td>
                            <CheckBoxContainer>
                                {o.attendences?.length ? "Attendence is Already marked" :
                                [{key: 1, lable: "present"}, {key: 0, lable: "absent"}, {key: 2, lable: "Half Day"}].map((e) => {
                                    return <CheckBoxWrapper key={e.key}>
                                        <input name={o._id} id={`${o._id}${e.lable}`} type='radio' onClick={() => handleAttandence(o, e.key, index)} />
                                        <label htmlFor={`${o._id}${e.lable}`}>{e.lable}</label>
                                    </CheckBoxWrapper>
                                })
                                }
                            </CheckBoxContainer>
                        </Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
    </TableWrapper>
    </>
    
  )
}

export default AddAtendance