import React, { useState } from "react";
import Option from "./../Option/Option.jsx";
import options from "./../../Rate.json";
import styles from "./../Selection/Selection.scss";

// const Selection = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const rateList = options.map((option) => (
//     <div key={option.id}>
//       <Option
//         name={option.name}
//         cost={option.cost}
//         speed={option.speed}
//         color={option.color}
//         colorDark={option.colorDark}
//         isSelected={selectedOption === option.id}
//         clickHandler={setSelectedOption}
//         value={option.id}
//       />
//     </div>
//   ));
//   return <div className={styles.rateCard}>{rateList}</div>;
// };

const Selection = () => {
  const [selectedID, setSelectedID] = useState(null);
  const rateList = options.map(
    ({ id, name, cost, color, speed, colorDark }) => (
      <Option
        key={id}
        name={name}
        cost={cost}
        speed={speed}
        color={color}
        colorDark={colorDark}
        isSelected={selectedID === id}
        clickHandler={setSelectedID}
        value={id}
      />
    )
  );
  return <div className={styles.rateCard}>{rateList}</div>;
};

export default Selection;
