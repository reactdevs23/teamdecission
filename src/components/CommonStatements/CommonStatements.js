import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./CommonStatement.module.css";

const CommonStatements = ({ title, projectA, projectB, projectC }) => {
  return (
    <div className={styles.userBox}>
      <div className={styles.userBoxInner}>
        <FontAwesomeIcon icon={faUsers} size="3x" />

        <h3>{title}</h3>
      </div>
      <div className={styles.progressMain}>
        <div className={styles.progressInner}>
          <div className={styles.progressDiv}>
            <div
              className={styles.progressPurple}
              style={{ background: projectA.positive.color }}
            ></div>
            <h4>{projectA.positive.value}</h4>
          </div>
          <div className={styles.progressDiv + " " + styles.progMar}>
            <div
              className={styles.progressPurple + " " + styles.progressPurpleSm}
              style={{ background: projectB.positive.color }}
            ></div>
            <h4>{projectB.positive.value}</h4>
          </div>
          <div className={styles.progressDiv + " " + styles.progMar2}>
            <div
              className={styles.progressPink}
              style={{ background: projectB.negative.color }}
            ></div>
            <h4>{projectB.negative.value}</h4>
          </div>
          <div className={styles.progressDiv + " " + styles.progMar}>
            <div
              className={styles.progressPurple}
              style={{ background: projectC.positive.color }}
            ></div>
            <h4>{projectC.positive.value}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonStatements;
