import React, { useState, useMemo } from "react";
import styles from "./UseMemoComponent.module.scss";

export default function UseMemoComponent() {
  const [isEvenVal, setIsEvenVal] = useState(true);
  const [theme, setTheme] = useState(false);
  const [number, setNumber] = useState(false);

  const changeTheme = () => {
    console.log("hello change theme", theme);
    setTheme((theme) => !theme);
  };
  const isEven = (number) => {
    console.log("inside is even");
    for (let i = 0; i <= 1000000000; i++) {}
    setIsEvenVal(number % 2 === 0);
  };

  const checkIsEven = useMemo(() => isEven(number), [number]);

  return (
    <div className={styles.useMemo}>
      <div className={styles.useMemo_left}>
        <p className={styles.useMemo_left_heading}>useMemo</p>
        <p>
          useMemo is a Hook that will only recompute the cached value when one
          of the dependencies has changed. This optimization leads to avoiding
          expensive calculations on every render.
        </p>
      </div>
      <div className={styles.useMemo_right}>
        <div
          className={
            theme ? styles.useMemo_right_dark : styles.useMemo_right_light
          }
        >
          <p>Please enter a number</p>
          <input
            className={styles.useMemo_right_input}
            type="number"
            placeholder="please enter a number"
            onChange={(e) => setNumber(e.target.value)}
          />
          {/* <button onClick={checkIsEven}>Submit</button> */}
          {console.log("isEvenVal", isEvenVal)}
          {console.log("isEvenVal", number)}

          <div className={styles.useMemo_right_input_result}>
            <p
              className={
                isEvenVal
                  ? styles.useMemo_right_input_result_true
                  : styles.useMemo_right_input_result_false
              }
            >
              {isEvenVal === true
                ? "The number is even "
                : "Entered number is not even"}
            </p>
          </div>
          <div className={styles.changeTheme_btn}>
            <button onClick={() => changeTheme()}>Change Theme</button>
          </div>
        </div>
      </div>
    </div>
  );
}
