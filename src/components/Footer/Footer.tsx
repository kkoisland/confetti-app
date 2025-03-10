import styles from './Footer.module.css';

const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <p>@ 2025 kkoisland</p>
    </footer>
  );
};

export default Footer;
