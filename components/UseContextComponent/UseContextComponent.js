import React, { useState } from "react";
import Component_B from "./Component_B";
import Component_A from "./Component_A";
import Component_C from "./Component_C";
import { UserContext } from "./UserContext";
import styles from "./UseContextComponent.module.scss";

export default function UseContextComponent() {
  const [value, setValue] = useState("Default-name : Sachin Tendulkar");

  const submitHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  // console.log(value);

  return (
    <div className={styles.usecontext}>
      <div className={styles.usecontext_left}>
        <p className={styles.usecontext_left_heading}>useContext</p>
        <p>
          Accepts a context object (the value returned from React.createContext)
          and returns the current context value for that context.
        </p>

        <p>
          The current context value is determined by the value prop of the
          nearest MyContext.Provider above the calling component in the tree.
        </p>
        <p>const value = useContext(MyContext)</p>
        <p>
          When the nearest MyContext.Provider above the component updates, this
          Hook will trigger a re-render with the latest context value passed to
          that MyContext provider.
        </p>

        <p>
          If you’re familiar with the context API before Hooks,
          useContext(MyContext) is equivalent to static contextType = MyContext
          in a class, or to MyContext.Consumer{" "}
        </p>
        <p>
          useContext(MyContext) only lets you read the context and subscribe to
          its changes. You still need a MyContext.Provider above in the tree to
          provide the value for this context
        </p>
      </div>
      <div className={styles.usecontext_right}>
        <p className={styles.usecontext_right_heading}>Example</p>
        <div className={styles.usecontext_right_container}>
          <div className={styles.usecontext_right_container_input}>
            <p>Please enter user name</p>
            <input
              type="text"
              placeholder={value}
              onChange={(e) => submitHandler(e)}
            />
          </div>
          <div className={styles.usecontext_right_container_components}>
            <UserContext.Provider value={value}>
              <div className={styles.usecontext_right_container_component}>
                <Component_A />
              </div>
              <div className={styles.usecontext_right_container_component}>
                <Component_B />
              </div>
              <div className={styles.usecontext_right_container_component}>
                <Component_C />
              </div>
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
