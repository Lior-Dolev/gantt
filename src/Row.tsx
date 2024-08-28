import React from 'react';
import './Row.css';

interface RowProps {
  title: string;
  events: React.ReactNode[];
}

const Row: React.FC<RowProps> = ({ title, events }) => {
  return (
    <div className="gantt-row">
      <div className="gantt-row-title">
        {title}
      </div>
      <div className="gantt-row-events">
        {events.map((event, index) => (
          <div key={index} className="gantt-event">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
