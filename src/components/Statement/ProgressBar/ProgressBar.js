import React, { useEffect, useState } from "react";
import { calculateWidth } from "../../utils";
import styles from "./ProgressBar.module.css";
const ProgressBar = ({ legends, maxLegends, background }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
    background: background,
  };

  useEffect(() => {
    setProgressValue(calculateWidth(legends, maxLegends));
  }, [progressValue, legends, maxLegends]);
  return (
    <>
      <div className={styles.progress} style={progressStyle} />
    </>
  );
};

export default ProgressBar;
