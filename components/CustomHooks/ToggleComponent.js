import React from "react";
import useToggle from "./useToggle";
import styles from "./ToggleComponent.module.scss";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className={styles.ToggleComponent}>
      <div className={styles.ToggleComponent_left}>
        <h3 className={styles.ToogleComponent_left_heading}>Custom Hooks</h3>
        <p>
          Custom Hooks are functions. Usually, they start with the word “use”
          (important convention).
        </p>
        <p>
          "Unlike a React component, a custom Hook doesn’t need to have a
          specific signature. We can decide what it takes as arguments, and
          what, if anything, it should return. In other words, it’s just like a
          normal function"
        </p>
        <p>
          Custom Hooks allow us to access the React ecosystem in terms of hooks,
          which means we have access to all the known hooks like useState,
          useMemo, useEffect, etc.
        </p>
        <p>This mechanism enables the separation of logic and view.</p>
      </div>

      <div className={styles.ToggleComponent_right}>
        <div>
          <p>{value.toString()}</p>
        </div>
        <div>
          <button onClick={toggleValue}>Toggle value</button>
          <button onClick={() => toggleValue(true)}>Make the value True</button>
          <button onClick={() => toggleValue(false)}>
            Make the value False
          </button>
        </div>
      </div>
    </div>
  );
}
