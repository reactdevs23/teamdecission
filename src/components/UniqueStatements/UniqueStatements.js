import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./UniqueStatements.module.css"; // Replace with your actual CSS module path

const UniqueStatements = ({ title, statements }) => {
  return (
    <div className={styles.progressMid}>
      <div className={styles.progressMidTop}>
        <FontAwesomeIcon icon={faUser} size="3x" />
        <h3>{title}</h3>
      </div>
      <div className={`${styles.progressMain} ${styles.proMain2}`}>
        <div className={styles.proMainInner}>
          {statements.map((el, i) => (
            <div className={styles.progressInner} key={i}>
              <div className={styles.proMainStart}>
                <div
                  className={`${styles.progressPink} ${styles.progressPink2}`}
                  style={{ background: el.projectA.color }}
                ></div>
                <h4>{el.projectA.value}</h4>
              </div>
              <div className={styles.proMainStart}>
                <div
                  className={`${styles.progressPurple} ${styles.progressPurple2}`}
                  style={{ background: el.projectB.color }}
                ></div>
                <h4>{el.projectB.value}</h4>
              </div>
              <div className={styles.proMainStart}>
                <div
                  className={`${styles.progressPink} ${styles.progressPink2}`}
                  style={{ background: el.projectC.color }}
                ></div>
                <h4>{el.projectC.value}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniqueStatements;
