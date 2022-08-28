import React, { useState, useEffect } from "react";
import styles from "./UseState.module.scss";

export default function UseState() {
  const [name, setName] = useState("Sachin Tendulkar");

  const updateName = (e) => {
    let value = e.target.value;
    setName(value);
  };

  return (
    <>
      <div className={styles.usestate}>
        <div className={styles.usestate_right_side}>
          <h1 className={styles.heading}>useState Hook</h1>
          <p>
            The useState Hooks return an array in which the first element is the
            state name and the second one is a function to modify the state
            value. In useState, we pass the initial value of the state.
          </p>

          <div className={styles.subheading}>
            <p>The syntax is as follows</p>
            <p>const [count , setCount] = useState(0)</p>
          </div>
          <div>
            <p>Shown below is an exmaple</p>
            <h3>Hello My name is {name}</h3>
          </div>
        </div>

        <div className={styles.usestate_left_side}>
          <div>
            <div>
              <label> Please enter your name to replace the default name</label>
            </div>
            <div>
              <input
                className={styles.usestate_input}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={updateName}
              />
            </div>
          </div>

          <div>{/* <button type="submit">Submit</button> */}</div>
        </div>
      </div>
    </>
  );
}
