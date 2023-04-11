import styles from "./App.css";
import rates from "./Rate.json";
import Rate from "./components/Rate/Rate";

function App() {
  const rateList = rates.map((rate) => (
    <div key={rate.id}>
      <Rate
        name={rate.name}
        cost={rate.cost}
        speed={rate.speed}
        color={rate.color}
        colorDark={rate.colorDark}
        isSelected={rate.isSelected}
      />
    </div>
  ));
  return <div className={styles.rateCard}>{rateList}</div>;
}

export default App;
