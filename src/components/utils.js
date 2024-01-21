const calculateMaxLegends = (data) => {
  return Math.max(
    ...data
      .flat()
      .map((project) =>
        Math.max(...project.map((statement) => statement.legends))
      )
  );
};

const calculateWidth = (legends, maxLegends) => {
  const maxWidthPercentage = 100;
  return (legends / maxLegends) * maxWidthPercentage;
};
export { calculateMaxLegends, calculateWidth };
