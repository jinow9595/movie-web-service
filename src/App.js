import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const clickEvent = () => setCounter(test => test + 1);
  const changeEvent = (event) => {
    setKeyword(event.target.value)
  };

  console.log("run everytime");

  const once = () => {
    console.log("run only once"); // API 호출 등
  };

  useEffect(once, []);

  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]); //keyword가 변경될 때마다 실행될 메서드

  return (
    <div>
      <input onChange={changeEvent} value={keyword} type="text" placeholder="search..." />
      <h1 className={styles.title}>hello</h1>
      <Button text={"nothing"} />
      <button onClick={clickEvent}>{counter}</button>
    </div>
  );
}

export default App;
