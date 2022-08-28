import styles from "./NavBar.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <div className={styles.navbar_logo}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt=""
            height={30}
            width={30}
          />
        </div>
        <div className={styles.navbar_heading}> All about react hooks</div>
      </div>
      <div className={styles.navbar_right_heading}>
        <Link href="https://reactjs.org/docs/hooks-intro.html">
          More about react hooks
        </Link>
      </div>
    </div>
  );
}
