import React from 'react';
import './Gantt.css';
import Row from './Row';

interface GanttProps {
  hours: string[];
  rows: React.ReactNode[];
  date: string;
}

const Gantt: React.FC<GanttProps> = ({ hours, rows, date }) => {
  return (
    <div className="gantt-container">
      <Row title={date} events={hours.map(hour => <div>{hour}</div>)} /> {/* First row with hours */}
      <div className="gantt-rows">
        {rows}
      </div>
    </div>
  );
};

export default Gantt;
