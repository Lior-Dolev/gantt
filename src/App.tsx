import React from 'react';
import Gantt from './Gantt';
import Row from './Row';

const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
               "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

const rows = [
  {
    name: "יוחנן דו",
    events: [<div>משימה 1</div>, <div>משימה 2</div>, <div>משימה 3</div>] // Tasks in Hebrew
  },
  {
    name: "יעל שמואל",
    events: [<div>משימה א</div>, <div>משימה ב</div>, <div>משימה ג</div>] // Tasks in Hebrew
  },
  {
    name: "מיכאל יונסון",
    events: [<div>משימה X</div>, <div>משימה Y</div>] // Tasks in Hebrew
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
