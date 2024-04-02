import InputPad from "./InputPad";
import Screen from "./Screen";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Root}>
      <Screen />
      <InputPad />
    </div>
  );
}

export default App;
