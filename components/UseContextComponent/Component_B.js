import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./Component.module.scss";

export default function Component_B() {
  const msg = useContext(UserContext);

  return (
    <div className={styles.component_b}>
      <p className={styles.component_c_heading}>Component_B</p>
      <p className={styles.component_c_value}>{msg}</p>
    </div>
  );
}
