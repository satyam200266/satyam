import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow: auto;
  border: 2px solid #000000;
  border-radius: 1vmin;
`;

const TableHeader = styled.th`
  padding: 15px;
  background-color: #ffbebe;
  color: #000000;
  text-align: left;
`;

const TableData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #000000;
`;

const TableButton = styled.button`
  background-color: #ff6d6d;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const TotalEmployees = styled.div`
  background-color: #ffbebe;
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 12px;
  font-weight: bold;
  border-bottom: 2px solid #000000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`;

// modal/
const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const ModalSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const ModalButton = styled(TableButton)``;

function ManageEmployes() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'satyam' },
    { id: 5, name: 'vivek hacker' },
    { id: 6, name: 'vivek coder' },
    { id: 7, name: 'vivek programer' },
    { id: 8, name: 'satyam vishwakarma' },
    { id: 9, name: 'vivek' },
    { id: 10, name: 'satyam programer' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  

  const removeEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Sr no.</TableHeader>
            <TableHeader>Employee Name</TableHeader>
            <TableHeader>Employee Contact Number</TableHeader>
            <TableHeader>Employee Field</TableHeader>
            <TableHeader>Employee Salary</TableHeader>
            <TableHeader>Employee Joinning Date</TableHeader>
            <TableHeader>Edit Details</TableHeader>
            <TableHeader>Remove</TableHeader>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <TableData>{index + 1}</TableData>
              <TableData>{employee.name}</TableData>
              <TableData>9854763210</TableData>
              <TableData>worker</TableData>
              <TableData>30000</TableData>
              <TableData>25/05/23</TableData>
              <TableData>
                <TableButton onClick={() => openModal(employee)}>
                  Edit
                </TableButton>
              </TableData>
              <TableData>
                <TableButton onClick={() => removeEmployee(employee.id)}>
                  Remove
                </TableButton>
              </TableData>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <TotalEmployees>Total Employees: {employees.length}</TotalEmployees>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Edit Employee Details</h2>
            <ModalInput type="name" placeholder={selectedEmployee.name} />
            <ModalInput type="tel" placeholder="Contact Number" maxLength={10}/>
            <p>Employee Category</p>
            <div>
              <ModalSelect>
                <option hidden>Select Field</option>
                <option value="Labour1">Labour</option>
                <option value="Poslish Man2">Polish Man</option>
                <option value="Cashier3">Cashier</option>
                <option value="Waiter3">Waiter</option>
                <option value="Mechanic4">Mechanic</option>
              </ModalSelect>
            </div>
            <ModalInput type="tel" placeholder="Salary" minLength={3} maxLength={5}/>
            <div>
              <p>Date of joining</p>
              <ModalInput type="date" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
              }}
            >
              <ModalButton>Save Changes</ModalButton>
              <ModalButton onClick={closeModal}>Close</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default ManageEmployes;
