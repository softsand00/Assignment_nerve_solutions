export const getStrategiesForDate = (view, date, strategyArray) => {
    const viewData = strategyArray.find(item => item.View === view)?.Value;
    if (!viewData || !viewData[date]) return [];
  
    const strategies = viewData[date];
    const strategyCounts = strategies.reduce((acc, strategy) => {
      acc[strategy] = (acc[strategy] || 0) + 1;
      return acc;
    }, {});
  
    return Object.entries(strategyCounts).map(([name, count]) => ({
      name,
      count,
    }));
  };
  