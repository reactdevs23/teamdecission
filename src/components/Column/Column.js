import React from "react";

import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./Column.module.css";

const Column = ({ data }) => {
  return (
    <div
      className={`${styles.progressMid} ${
        styles[`items-${data.column.length}`]
      }  ${data.column.length > 3 && styles[`items-3`]}`}
    >
      <div className={`${styles.progressMain} ${styles.proMain2}`}>
        <div className={styles.proMainInner}>
          {data.column.map((projects, id) => (
            <div className={styles.progressInner} key={id}>
              {projects.map((project, projectId) => (
                <div className={styles.statementContainer} key={projectId}>
                  {project.map((statement, statementId) => (
                    <div className={styles.proMainStart} key={statementId}>
                      <ProgressBar
                        width={statement.width}
                        background={statement.color}
                      />
                      <h4>{statement.numericValue}</h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
