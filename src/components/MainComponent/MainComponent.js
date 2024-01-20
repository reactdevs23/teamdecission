import React from "react";
import CommonStatements from "../CommonStatements/CommonStatements";
import UniqueStatements from "../UniqueStatements/UniqueStatements";
import TotalStatementsOfEachPorject from "../TotalStatementsOfEachPorject/TotalStatementsOfEachPorject";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  title,
  projectsName,
  commonStateMents,
  uniqueStateMentToEachTeamMember,
  totalStateMents,

  statements,
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
              <CommonStatements {...commonStateMents} />
              <UniqueStatements {...uniqueStateMentToEachTeamMember} />
              <TotalStatementsOfEachPorject {...totalStateMents} />
            </div>
          </div>
          <div
            className={`${styles.teamStatement} ${styles.statement2} ${styles.stateReviews}`}
          >
            <div className={styles.stateMain}>
              <span
                className={styles.purpleReview}
                style={{ background: statements.positive.color }}
              ></span>
              <h4>{statements.positive.text}</h4>
            </div>
            <div className={`${styles.stateMain} ${styles.stateMain2}`}>
              <span
                className={`${styles.pinkReview}`}
                style={{ background: statements.negative.color }}
              ></span>
              <h4>{statements.negative.text}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
