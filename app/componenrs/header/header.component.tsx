import logo from "./logo.svg";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles["header"]}>
    <img src={logo} alt="Showcase Cinemas" width={200} />
  </header>
);

export { Header };
