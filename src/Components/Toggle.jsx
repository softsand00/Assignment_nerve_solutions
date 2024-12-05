import React from 'react';

const Toggle = ({ selectedView, onSelectView }) => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

  return (
    <div className="toggle">
      {views.map(view => (
        <button
          key={view}
          className={selectedView === view ? 'active' : ''}
          onClick={() => onSelectView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
