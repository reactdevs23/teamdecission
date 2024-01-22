import React from "react";

import styles from "./MainComponent.module.css";
import Column from "../Column/Column";
import HeadingBox from "../HeadingBox/HeadingBox";

const MainComponent = ({
  title,
  projectsName,

  allColumn,
  labels,
}) => {
  return (
    <div className={styles.teamMain}>
      <div className={styles.teamMainInner}>
        <h2>{title}</h2>
        <div className={styles.teamStatement}>
          <div className={styles.teamProject}>
            {projectsName.map((name, i) => (
              <h4 key={i}>{name}</h4>
            ))}
          </div>
          <div>
            <div className={styles.userMain}>
              {allColumn.map((el, id) => (
                <HeadingBox key={id} data={el} />
              ))}
            </div>
            <div className={styles.userMain}>
              {allColumn.map((data, i) => (
                <Column data={data} key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.labelContainer}>
          {labels.map((labels, i) => (
            <div className={styles.stateMain} key={i}>
              <span
                className={styles.review}
                style={{ background: labels.color }}
              ></span>
              <h4>{labels.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
