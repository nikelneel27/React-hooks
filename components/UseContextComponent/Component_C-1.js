import { useContext } from "react";
import { UserContext } from "./UserContext";
import styles from "./Component.module.scss";

export default function Component_C1() {
  const message = useContext(UserContext);
  return (
    <div className={styles.component_c1}>
      <p className={styles.component_c_heading}>Component_C-1</p>
      <p className={styles.component_c_value}>{message}</p>
    </div>
  );
}
