import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./TotalStatementsOfEachPorject.module.css";

const TotalStatementsOfEachPorject = ({
  title,
  projectA,
  projectB,
  projectC,
}) => {
  return (
    <div className={styles.progressLast}>
      <div className={styles.progressMidTop}>
        <FontAwesomeIcon icon={faListCheck} size="3x" />
        <h3>{title}</h3>
      </div>

      <div className={styles.progressMain}>
        <div className={styles.progressInner}>
          <div className={styles.proMainStart}>
            <div
              className={styles.progressPurple}
              style={{ background: projectA.positive.color }}
            ></div>
            <h4>{projectA.positive.value}</h4>
          </div>
          <div className={`${styles.proMainStart} ${styles.progMar2}`}>
            <div
              className={`${styles.progressPink} ${styles.proPink2}`}
              style={{ background: projectA.negative.color }}
            ></div>
            <h4>{projectA.negative.value}</h4>
          </div>
          <div className={`${styles.proMainStart} ${styles.proMar3}`}>
            <div
              className={styles.progressPink}
              style={{ background: projectB.positive.color }}
            ></div>
            <h4>{projectB.positive.value}</h4>
          </div>
          <div className={`${styles.proMainStart} ${styles.progMar2}`}>
            <div
              className={`${styles.progressPurple} ${styles.proPurple2}`}
              style={{ background: projectB.negative.color }}
            ></div>
            <h4>{projectB.negative.value}</h4>
          </div>

          <div className={`${styles.proMainStart} ${styles.proMar3}`}>
            <div
              className={`${styles.progressPurple} ${styles.proPurple2}`}
              style={{ background: projectC.positive.color }}
            ></div>
            <h4>{projectC.positive.value}</h4>
          </div>
          <div className={`${styles.proMainStart} ${styles.progMar2}`}>
            <div
              className={`${styles.progressPink} ${styles.proPink2}`}
              style={{ background: projectC.negative.color }}
            ></div>
            <h4>{projectC.negative.value}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalStatementsOfEachPorject;
