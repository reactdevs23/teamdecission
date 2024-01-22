import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeadingBox.module.css";
const HeadingBox = ({ data }) => {
  return (
    <div
      className={`${styles.progressMidTop} ${
        styles[`items-${data.column.length}`]
      }  ${data.column.length > 3 && styles[`items-3`]}`}
    >
      <FontAwesomeIcon icon={data.icon} size="3x" />
      <h3>{data.title}</h3>
    </div>
  );
};

export default HeadingBox;
