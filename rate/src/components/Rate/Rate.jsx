import React from "react";
import styles from "./../Rate/Rate.scss";

function Rate(props) {
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
