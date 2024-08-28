import React from 'react';
import './Row.css';

interface Task {
  name: string;
  startTime: string; // Format: "HH:MM"
  endTime: string; // Format: "HH:MM"
}

interface RowProps {
  title: string;
  events: Task[];
}

const Row: React.FC<RowProps> = ({ title, events }) => {
  const calculatePosition = (startTime: string, endTime: string) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
  
    const startPosition = startHour + startMinute / 60; // Convert start time to a decimal hour
    const endPosition = endHour + endMinute / 60; // Convert end time to a decimal hour
  
    const left = ((24 - endPosition) / 24) * 100; // Adjust for RTL by calculating from the right
    const width = ((endPosition - startPosition) / 24) * 100; // Width stays the same
  
    return { left: `${left}%`, width: `${width}%` };
  };
  

  return (
    <div className="gantt-row">
      <div className="gantt-row-title">
        {title}
      </div>
      <div className="gantt-row-events">
        {events.map((event, index) => {
          const { left, width } = calculatePosition(event.startTime, event.endTime);
          return (
            <div key={index} className="gantt-event" style={{ left, width }}>
              {event.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
