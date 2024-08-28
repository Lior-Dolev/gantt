import React from 'react';
import Gantt from './Gantt';
import Row from './Row';

const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
               "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

const rows = [
  {
    name: "יוחנן דו",
    events: [
      { name: "משימה 1", startTime: "08:00", endTime: "10:00" },
      { name: "משימה 2", startTime: "11:00", endTime: "12:30" },
      { name: "משימה 3", startTime: "13:00", endTime: "15:00" }
    ]
  },
  {
    name: "יעל שמואל",
    events: [
      { name: "משימה א", startTime: "09:00", endTime: "11:00" },
      { name: "משימה ב", startTime: "12:00", endTime: "13:30" },
      { name: "משימה ג", startTime: "14:00", endTime: "15:00" }
    ]
  },
  {
    name: "מיכאל יונסון",
    events: [
      { name: "משימה X", startTime: "08:30", endTime: "09:30" },
      { name: "משימה Y", startTime: "10:00", endTime: "11:00" }
    ]
  },
];

const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
};

const App: React.FC = () => {
  return (
    <Gantt
      hours={hours}
      rows={rows.map((row, index) => (
        <Row key={index} title={row.name} events={row.events} />
      ))}
      date={getCurrentDate()} // Today's date as the first row title
    />
  );
};

export default App;
