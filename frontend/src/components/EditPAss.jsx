import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  > form {
    width: 100%;

    > p {
      margin-top: 0.5rem;
    }
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

function EditPAss({ isOpen, setModal }) {
  const handleSubmit = () => {
    console.log('hemloo');
  };

  return (
    <div>
      <Modal callback={handleSubmit} isOpen={isOpen} setModal={setModal}>
        <Content>
          <form>
            <p>Current Password</p>
            <Input type="text" placeholder="Current Password" />
            <p>New Password</p>
            <Input type="text" placeholder="New Password" />
            <p>Confirm New Password</p>
            <Input type="text" placeholder="Confirm New Password" />
          </form>
        </Content>
      </Modal>
    </div>
  );
}

export default EditPAss;
