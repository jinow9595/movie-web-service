import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const clickEvent = () => setCounter(test => test + 1);

  console.log("run everytime");

  const once = () => {
    console.log("run only once"); // API 호출 등
  };

  useEffect(once, []);

  return (
    <div>
      <h1 className={styles.title}>hello</h1>
      <Button text={"nothing"} />
      <button onClick={clickEvent}>{counter}</button>
    </div>
  );
}

export default App;
