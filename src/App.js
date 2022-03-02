import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const clickEvent = () => setCounter(test => test + 1);
  return (
    <div>
      <h1 className={styles.title}>hello</h1>
      <Button text={"nothing"} />
      <button onClick={clickEvent}>{counter}</button>
    </div>
  );
}

export default App;
