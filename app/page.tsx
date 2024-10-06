import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homeBox}>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.button}`}>
            <Link href="/about" target="_blank">
              About
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.button}`}>
            <Link href="/contact" target="_blank">
              Contact
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.button}`}>
            <Link href="/services" target="_blank">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
