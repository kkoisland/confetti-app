import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>
            <a href="/">Confetti Launcher</a>
          </li>
          <li>
            <a href="/background">Background Animation</a>
          </li>
          <li>
            <a href="/scroll">Scroll Animation</a>
          </li>
          <li>
            <a href="/gallery">Interactive Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
