import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import img from '../img/img3.jpg';
import {AiOutlineMenu} from "react-icons/ai"
import AddNote from '../pages/AddNote';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/user';

const Container = styled.div`
position: sticky;
top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  gap: 1rem;
  height: 70px;
  background-color: #3563c7;

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 70%;

  > img {
    height: 100%;
  }

  > h1 {
    height: max-content;
  }
  cursor: pointer;
`;

const Right = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;
  width: 200px;

  &:hover {
    background-color: #ffbebe;
  }
`;

const DropdownButton = styled.a`
  cursor: pointer;
  font-size: 40px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NavBar() {
    
    const dispatch = useDispatch()
    const user = useSelector(s => s.user.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isAddNotOpen, setIsAddNoteOpen] = useState(false)
  return (
    <Container>
      <Left onClick={() => navigate('/')}>
        <img src="https://static.thenounproject.com/png/3627272-200.png" alt="Logo" />
        <h3>Employee Administration</h3>
      </Left>
      <Right>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            {/* <Link to="/register">Register</Link> */}
          </>
        ) : (
          <>
            <DropdownButton onClick={toggleDropdown}><b><AiOutlineMenu/></b></DropdownButton>
            <Dropdown isOpen={isDropdownOpen} onMouseUp={toggleDropdown}>
              <DropdownItem to="/addAttendance">Add Attendance</DropdownItem>
              <DropdownItem to="/addEmploye">Add Employees</DropdownItem>
              <DropdownItem onClick={() => setIsAddNoteOpen(true)}>Add Note</DropdownItem>
              <DropdownItem to="/manageEmployes">Manage Employees</DropdownItem>
              <DropdownItem to="/Setting">Settings</DropdownItem>
              <DropdownItem onClick={() => dispatch(logout())}>Logout</DropdownItem>
            </Dropdown>
          </>
        )}
      </Right>
      <AddNote isOpen={isAddNotOpen} setModal={setIsAddNoteOpen} />
    </Container>
  );
}

export default NavBar;
