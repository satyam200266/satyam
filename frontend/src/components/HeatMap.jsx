import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'react-calendar-heatmap/dist/styles.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import { styled } from 'styled-components';

const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getStatus = (data) => {
    switch (data?.count) {
        case 1:
            return "Present"
        case 2:
            return "Half-Day"
        default:
            return "Absent"
    }

}

const Container = styled.div`
  width: 1000px;
`;

const Tooltip = styled.div`
  position: absolute;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 14px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
`;
function HeatMapChart({ userData }) {
    const tooltipRef = useRef(null);
    const [hoverData, setHoverdData] = useState(userData[0] || {
        date: "",
        status: "",
        Remark: ""
    });
    const [startEndDate, setDtartEndDate] = useState({start: "", end: ""})

    useEffect(() => {
        if(!userData.length) return 
        console.log({userData})
        let [year, month, day] = userData[0]?.date.split('-');
        setDtartEndDate({
            start: `${year}-${parseInt(month) - 1}-${day}`,
            end: `${parseInt(year, 10) + 1}-${month}-${day}`
        });
    },[userData])

    const handleMouseEnter = (event, value, t) => {
        const tooltip = tooltipRef.current;
        tooltip.style.opacity = 1;
        tooltip.animate({
            left : `${event.clientX}px` ,
            top :`${event.clientY}px`
        }, {duration: 2000, fill: "forwards"})
        setHoverdData(value)
      };
    

      const handleMouseLeave = () => {
        const tooltip = tooltipRef.current;
        tooltip.style.opacity = 0;
      };
    

  return (
    <Container id="chart">
      {userData.length?
        <>
        <CalendarHeatmap
        gutterSize={0.5}
        startDate={startEndDate.start} 
        endDate={startEndDate.end} 
        values={userData.map((e) => ({ ...e, count: e.status }))}
        weekdayLabels={weeks}
        showWeekdayLabels={true}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.count}`;
          }}
      />
      <Tooltip ref={tooltipRef}>
        <p>Date: {hoverData?.date || "N/A"}</p>
        <p>Status: {getStatus(hoverData)}</p>
        <p>remark: {hoverData?.remark || "N/A"}</p>
      </Tooltip>
      </>  
      : <p>No Data Found!!</p>
    }
    </Container>
  );
}

export default HeatMapChart;
