// Column.js

import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./Column.module.css";
import { calculateMaxValues } from "../utils";

const Column = ({ data }) => {
  const { maxHourlyValue, maxMonthlyValue } = calculateMaxValues(data.column);

  return (
    <div
      className={`${styles.progressMid} ${
        styles[`items-${data.column.length}`]
      }  ${data.column.length > 3 && styles[`items-3`]}`}
    >
      <div className={`${styles.progressMain} ${styles.proMain2}`}>
        <div className={styles.proMainInner}>
          {data.column.map((projects, id) => {
            const { maxHourlyValue, maxMonthlyValue } =
              calculateMaxValues(projects);
            return (
              <div className={styles.progressInner} key={id}>
                {projects.map((project, projectId) => (
                  <div className={styles.statementContainer} key={projectId}>
                    {project.map((el, i) => (
                      <div className={styles.proMainStart} key={i}>
                        <ProgressBar
                          value={el.numericValue}
                          maxValue={
                            el.type === "hourly"
                              ? maxHourlyValue
                              : maxMonthlyValue
                          }
                          background={el.color}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Column;
