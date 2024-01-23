// utils.js

const calculateMaxValues = (column) => {
  let maxHourlyValue = 0;
  let maxMonthlyValue = 0;

  column.forEach((costs) => {
    costs.forEach((cost) => {
      if (cost.type === "hourly" && cost.numericValue > maxHourlyValue) {
        maxHourlyValue = cost.numericValue;
      }
      if (cost.type === "monthly" && cost.numericValue > maxMonthlyValue) {
        maxMonthlyValue = cost.numericValue;
      }
    });
  });

  return { maxHourlyValue, maxMonthlyValue };
};

// utils.js

const calculateWidthPercentage = (value, maxValue) => {
  const percentage = (value / maxValue) * 100;
  console.log(percentage);
  return `${percentage}%`;
};

export { calculateWidthPercentage, calculateMaxValues };
