import { useState } from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HR application</h1>
      <button
  className={styles.menuButton}
  onClick={() => setMenuOpen((prev) => !prev)}
  aria-label="Toggle navigation"
  aria-expanded={menuOpen}
>
  ☰
</button>
      <ul className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;
