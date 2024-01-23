import React, { useEffect, useState } from "react";
import { calculateWidthPercentage } from "../../utils";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, maxValue, background }) => {
  const [progressPercentage, setProgressPercentage] = useState("0%");
  console.log(value);
  useEffect(() => {
    const percentage = calculateWidthPercentage(value, maxValue);
    setProgressPercentage(percentage);
  }, [value, maxValue]);

  const progressStyle = {
    width: progressPercentage,
    background: background,
    height: "100%",
    position: "relative",
  };

  return (
    <div className={styles.progress}>
      <div style={progressStyle}>
        <h4 className={styles.label}>{value}</h4>
      </div>
    </div>
  );
};

export default ProgressBar;
