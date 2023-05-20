import styled from 'styled-components'
import { req } from '../axisInstance'
import { useNavigate } from 'react-router-dom'

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

const handleStateChange = async (id, e) => {
    const { value } = e.target;
    try {
        const {data} = await req.put(`/api/orders/status/${id}`, {status: value})
        // setOrders(p => p.map((o) => {
        //     if(o._id === id) {
        //         return {...o, orderStatus: value}
        //     }
        //     return o;
        // }))
    } catch (error) {
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
                {employes?.map((o, i) => {
                    return <Tr key={o._id}>
                        <Td>{++i}</Td>
                        <Td>{o.name}</Td>
                        <Td>{o.number}</Td>
                        <Td>{o.position}</Td>
                        <Td>
                            <CheckBoxContainer>
                                {["present", "absent", "Half Day"].map((e, i) => {
                                    return <CheckBoxWrapper>
                                        <input name={o._id} id={`${o._id}${e}`} type='radio'/>
                                        <label htmlFor={`${o._id}${e}`}>{e}</label>
                                    </CheckBoxWrapper>
                                })}
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