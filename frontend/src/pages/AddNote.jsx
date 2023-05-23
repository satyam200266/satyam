import React, {useState} from 'react'
import Modal from '../components/Modal'
import styled from "styled-components"

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
  const [note, setNote] = useState('');
  const handleSubmit = () => {
    console.log("Hello Submited")
  }
  return (
    <Modal isOpen={isOpen} setModal={setModal} callback={handleSubmit}>
        <TextArea value={note} onChange={e => setNote(e.target.value)} placeholder="Enter your note" />
    </Modal>
  )
}

export default AddNote
