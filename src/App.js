import React, { useState } from 'react';
import './App.css';
import { dateArray, strategyArray } from './data';
import { getStrategiesForDate } from './utils/filterStrategies';
import Toggle from './Components/Toggle';
import Dropdown from './Components/Dropdown';
import StrategyCards from './Components/StrategyCards';


function App() {
  const [selectedView, setSelectedView] = useState('Bearish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategies = getStrategiesForDate(selectedView, selectedDate, strategyArray);

  return (
    <div className="App">
      <Toggle selectedView={selectedView} onSelectView={setSelectedView} />
      <Dropdown selectedDate={selectedDate} onSelectDate={setSelectedDate} dateArray={dateArray} />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
}

export default App;
