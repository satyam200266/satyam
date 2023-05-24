import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeatMap from '../components/HeatMap.jsx';
import { req } from '../axisInstance.js';
import { useDispatch, useSelector } from 'react-redux';
import { addNotice } from '../redux/notice.js';

const Container = styled.div`
  padding: 0 1rem 2rem 1rem;
  background-color: #adcfff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px);
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #007bff;
  }
`;

const Option = styled.option`
  color: #333;
`;

const RotatedHeatMap = styled(HeatMap)`
  transform: rotate(-90deg);
  width: 100vh;
  height: 100%;
  max-height: 80vh;
`;

function Homepage() {
  const notice = useSelector((state) => state.notice.notice);
  const dispatch = useDispatch();
  const [employes, setEmployes] = useState([]);
  const [selectedEmployes, setSelectedEmployes] = useState(
    localStorage.getItem('name') || ''
  );
  const [attendence, setAttendence] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [emp, not] = await Promise.all([
          req.get('/employes'),
          req.get('/notice'),
        ]);
        dispatch(addNotice(not.data));
        setEmployes(emp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedEmployes.length) return;

    const fetchAttendance = async () => {
      try {
        const { data } = await req.get(`/attendence/${selectedEmployes}`);
        setAttendence(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAttendance();
  }, [selectedEmployes]);

  const handleSelectChange = (e) => {
    localStorage.setItem('name', e.target.value);
    setSelectedEmployes(e.target.value);
  };

  return (
    <Container>
      <div>
      <h1>DashBoard</h1>
      </div>
      <div>
        <h4 style={{ padding: '2px'}}>Employee Details:-</h4>
        <section>
          <Select value={selectedEmployes} onChange={handleSelectChange}>
            <Option hidden>Select Your Name</Option>
            {employes.map((e) => (
              <option key={e._id} value={e._id}>
                {e.name}
              </option>
            ))}
          </Select>
        </section>
      </div>
      <section style={{ width: "max-content", maxWidth: '90%', overflowX: 'auto', margin: "1rem 0" }}>
        <RotatedHeatMap userData={attendence} />
      </section>

      {notice && (
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            width: '100%',
            borderRadius: '4px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' , margin: "0 1rem"}}>
            <h3 style={{ padding: '2px' }}>Notice:-</h3>
              <small>
                {new Date(notice?.createdAt).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}
              </small>
          </div>
          <p>{notice?.title}</p>
        </div>
      )}
    </Container>
  );
}

export default Homepage;
