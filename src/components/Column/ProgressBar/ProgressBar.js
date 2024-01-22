import React, { useEffect, useState } from "react";

import styles from "./ProgressBar.module.css";
const ProgressBar = ({ width, background }) => {
  const [progressValue, setProgressValue] = useState(0);
  // const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: width,
    background: background,
  };

  useEffect(() => {
    setProgressValue(width);
  }, [progressValue, width]);
  return (
    <>
      <div className={styles.progress} style={progressStyle} />
    </>
  );
};

export default ProgressBar;
