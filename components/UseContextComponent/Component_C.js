import { useContext } from "react";
import { UserContext } from "./UserContext";
import Component_C1 from "./Component_C-1";
import styles from "./Component.module.scss";

export default function Component_C() {
  const message = useContext(UserContext);
  return (
    <div className={styles.component_c}>
      <p className={styles.component_c_heading}>Component_C</p>
      <p className={styles.component_c_value}>{message}</p>
      <div className={styles.component_c_div_c1}>
        <Component_C1 />
      </div>
    </div>
  );
}
