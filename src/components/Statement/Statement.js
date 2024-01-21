import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Statement.module.css"; // Replace with your actual CSS module path
import { calculateMaxLegends, calculateWidth } from "../utils";
import ProgressBar from "./ProgressBar/ProgressBar";

const Statement = ({ data }) => {
  const maxLegends = calculateMaxLegends(data.statements);

  return (
    <div className={styles.progressMid}>
      <div className={styles.progressMidTop}>
        <FontAwesomeIcon icon={data.icon} size="3x" />
        <h3>{data.title}</h3>
      </div>
      <div className={`${styles.progressMain} ${styles.proMain2}`}>
        <div className={styles.proMainInner}>
          {data.statements.map((projects, id) => (
            <div className={styles.progressInner} key={id}>
              {projects.map((project, projectId) => (
                <div className={styles.statementContainer} key={projectId}>
                  {project.map((statement, statementId) => (
                    <div className={styles.proMainStart} key={statementId}>
                      <ProgressBar
                        legends={statement.legends}
                        maxLegends={maxLegends}
                        background={statement.color}
                      />
                      <h4>{statement.legends}</h4>
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

export default Statement;
