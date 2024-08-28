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

  // Function to detect overlapping events and calculate the row height
  const arrangeEventsInLanes = (events: Task[]) => {
    let lanes: Task[][] = [];

    events.forEach(event => {
      let placed = false;
      for (let lane of lanes) {
        if (!lane.some(e => areOverlapping(e, event))) {
          lane.push(event);
          placed = true;
          break;
        }
      }
      if (!placed) {
        lanes.push([event]);
      }
    });

    return lanes;
  };

  const areOverlapping = (event1: Task, event2: Task) => {
    return event1.startTime < event2.endTime && event1.endTime > event2.startTime;
  };

  const lanes = arrangeEventsInLanes(events);
  const rowHeight = lanes.length * 40; // Adjust height per lane (40px per lane in this example)

  return (
    <div className="gantt-row" style={{ height: `${rowHeight}px` }}>
      <div className="gantt-row-title">
        {title}
      </div>
      <div className="gantt-row-events">
        {lanes.map((lane, laneIndex) => (
          lane.map((event, eventIndex) => {
            const { left, width } = calculatePosition(event.startTime, event.endTime);
            return (
              <div
                key={`${laneIndex}-${eventIndex}`}
                className="gantt-event"
                style={{ left, width, top: `${laneIndex * 40}px` }} // Adjust top based on lane index
              >
                {event.name}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default Row;
