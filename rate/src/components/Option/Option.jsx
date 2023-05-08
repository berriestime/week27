import React from "react";
import styles from "./Option.scss";

const cn = (...args) => args.join(" ");

const Option = (props) => {
  const handleClick = () => {
    props.clickHandler(props.value);
  };
  return (
    <div
      className={cn(
        styles.rateCard,
        props.isSelected ? styles["selected"] : ""
      )}
      onClick={handleClick}
    >
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
  );
};

export default Option;
