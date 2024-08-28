import React from 'react';
import './Gantt.css';
import Row from './Row'; // Import the Row component

interface GanttProps {
  hours: string[]; // The array of hours (e.g., ["00:00", "01:00", "02:00", ...])
  rows: React.ReactNode[]; // The array of Row components
  date: string; // The current date
}

const Gantt: React.FC<GanttProps> = ({ hours, rows, date }) => {
  return (
    <div className="gantt-container">
      {/* First row with the date title and hours */}
      <Row title={date} events={hours.map(hour => ({ name: hour, startTime: hour, endTime: hour }))} /> 
      
      {/* Render the other rows */}
      <div className="gantt-rows">
        {rows}
      </div>
    </div>
  );
};

export default Gantt;
