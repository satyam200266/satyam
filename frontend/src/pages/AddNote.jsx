import React, {useState} from 'react'
import Modal from '../components/Modal'
import styled from "styled-components"
import { req } from '../axisInstance';
import { addNotice, deleteNotice } from '../redux/notice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const TextArea = styled.textarea`
  width: 500px;
  min-height: 250px;
  max-height: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`;


function AddNote({isOpen, setModal}) {
    const dispatch = useDispatch()
  const [note, setNote] = useState('');
  const handleSubmit = async () => {
    try {
        const {data} = await req.post("/notice", {title: note})
        note ? dispatch(addNotice(data)) : dispatch(deleteNotice())
        setModal(false)
        toast.success("Note added Successfully!!")
    } catch (error) {
        console.log(error.response.data.message)
    }
  }
  return (
    <Modal isOpen={isOpen} setModal={setModal} callback={handleSubmit}>
        <TextArea value={note} onChange={e => setNote(e.target.value)} placeholder="Enter your note" />
    </Modal>
  )
}

export default AddNote
