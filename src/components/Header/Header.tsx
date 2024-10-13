import styles from './Header.module.css';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
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
      <button
        onClick={toggleTheme}
        className={`${styles.themeToggleButton} ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}
      >
        {theme === 'light' ? '☼' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
