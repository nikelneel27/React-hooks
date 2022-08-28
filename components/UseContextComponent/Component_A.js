import { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./Component.module.scss";

export default function Component_A() {
  const message = useContext(UserContext);
  return (
    <div className={styles.component_a}>
      <p className={styles.component_c_heading}>Component_A</p>
      <p className={styles.component_c_value}>{message}</p>
    </div>
  );
}
