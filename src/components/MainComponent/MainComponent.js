import React from "react";

import styles from "./MainComponent.module.css";
import Statement from "../Statement/Statement";

const MainComponent = ({
  title,
  projectsName,

  allStatements,
  statementTypes,
}) => {
  return (
    <>
      <div className={styles.teamMain}>
        <div className={styles.teamMainInner}>
          <h2>{title}</h2>
          <div className={styles.teamStatement}>
            <div className={styles.teamProject}>
              {projectsName.map((name, i) => (
                <h4 key={i}>{name}</h4>
              ))}
            </div>
            <div className={styles.userMain}>
              {allStatements.map((el, i) => (
                <Statement data={el} key={i} />
              ))}
            </div>
          </div>

          <div className={styles.statementTypes}>
            {statementTypes.map((statement, i) => (
              <div className={styles.stateMain} key={i}>
                <span
                  className={styles.review}
                  style={{ background: statement.color }}
                ></span>
                <h4>{statement.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
