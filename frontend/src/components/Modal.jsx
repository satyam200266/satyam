import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffbebe;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #918d8d;
`;


const Button = styled.button`
  background: #ff6d6d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 16px;
  cursor: pointer;
  margin-right: 0.5rem;
`;

function Modal({children,isOpen, setModal, callback}) {



  return (
    <>
        {isOpen && <ModalOverlay>
      <ModalContent>
          {children}
          <div>
          <Button onClick={callback}>Submit</Button>
          <Button onClick={() => setModal(false)}>Cancel</Button>
          </div>
      </ModalContent>
    </ModalOverlay>
    }
    </>
  );
}

export default Modal;
