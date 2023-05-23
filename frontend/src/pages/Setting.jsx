
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import EditPAss from '../components/EditPAss';


const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
    padding: 3rem 0;
    width: 1200px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const MainSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  >*{
    width: max-content;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #777;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  max-width: 100%;

  >form {
    width: 100%;

    >p {
      margin-top: 0.5rem;
    }
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;
const FakeInput = styled.div`
box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #777;
  }
`;

const AddressContainer = styled.div`
  width: 500px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`
const AddressMain = styled.div`

`
const Edit = styled.p`
  text-decoration: underline;
  cursor: pointer;
`

const navMap = {
  1: "Password",
  2: "About Us"
}


const UserSettings = () => {
  const [isActivated, setIsActivated] = useState(1)
  // const {firstName, lastName, email, number} = user;

  const [userDataForm, setUserDataForm] = useState({firstName: "", lastName: "", email: "", number: ""})

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDataForm(p => ({...p, [name]: value}))
  }
  
const [isEditPassOpen, setIsEditPAssOpen] = useState()
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Settings</Title>
          <MainSection>
          <Navigation>
            <NavLink onClick={() => setIsActivated(1)}>Security Setting</NavLink>
            <NavLink onClick={() => setIsActivated(2)}>About</NavLink>
          </Navigation>
          <Content>
            <Title>{navMap[isActivated]}</Title>
            {isActivated === 1 &&
                        <form>
                        <p style={{marginBottom: '5px'}}>Change Password</p>
                        <FakeInput>************* <Edit onClick={() => setIsEditPAssOpen(true)} >Edit</Edit></FakeInput>
                      </form>
              }
            {isActivated === 2 && 
            <AddressContainer>
              <AddressMain>
              <a style={{ color: '#000000' }}>
                        At our company, we believe in the power of teamwork and the potential within each and every one of our employees. We encourage you to embrace challenges as opportunities for growth and innovation. Your dedication, creativity, and determination are the driving forces behind our collective success. Together, we can achieve extraordinary things and make a lasting impact in the world.
                    </a>
              </AddressMain>
              {/* <Edit>Edit</Edit> */}
            </AddressContainer>
            }
          </Content>
          </MainSection>
        </Wrapper>
      </Container>
      <EditPAss isOpen={isEditPassOpen} setModal={setIsEditPAssOpen} />
    </>
  );
}
export default UserSettings;
