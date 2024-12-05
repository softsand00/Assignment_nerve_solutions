import React from 'react';

const Dropdown = ({ selectedDate, onSelectDate, dateArray }) => {
  return (
    <select value={selectedDate} onChange={e => onSelectDate(e.target.value)}>
      {dateArray.map(date => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
