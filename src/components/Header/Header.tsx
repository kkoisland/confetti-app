import { Link } from 'react-router-dom';
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
            <Link to="/">Confetti Launcher</Link>
          </li>
          <li>
            <Link to="/background">Background Animation</Link>
          </li>
          <li>
            <Link to="/scroll">Scroll Animation</Link>
          </li>
          <li>
            <Link to="/gallery">Interactive Gallery</Link>
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
