import React from "react";
import styles from "./../Rate/Rate.css";

function Rate(props) {
  console.log(props.isSelected ? styles["selected"] : "");
  console.log(props.isSelected);
  return (
    <div className={props.isSelected ? styles["selected"] : ""}>
      <div className={styles.rateCard}>
        <div className={styles[props.colorDark]}>
          <div className={styles.nameRateCard}>{props.name}</div>
        </div>
        <div className={styles[props.color]}>
          <div className={styles.block}></div>
          <div className={styles["costRateCard"]}>
            {props.cost}
            <div className={styles.costBlock}>руб</div>
            <div className={styles.monthBlock}>/мес</div>
          </div>
          <div className={styles.block}></div>
        </div>
        <div className={styles.speedRateCard}>до {props.speed} Мбит/сек</div>
        <div className={styles["info"]}>
          Объем включенного трафика не ограничен
        </div>
      </div>
    </div>
  );
}

export default Rate;
