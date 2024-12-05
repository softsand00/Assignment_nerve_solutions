import React from 'react';

const StrategyCards = ({ strategies, selectedDate }) => {
  if (strategies.length === 0) {
    return <p>No strategies found for {selectedDate}</p>;
  }

  return (
    <div className="cards">
      {strategies.map(strategy => (
        <div key={strategy.name} className="card">
          <h3>{strategy.name}</h3>
          <p>
            {strategy.count} {strategy.count > 1 ? 'Strategies' : 'Strategy'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StrategyCards;
