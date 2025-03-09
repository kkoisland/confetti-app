import { Typography } from 'antd';
import styles from './Footer.module.css';

const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <Typography.Title level={5}>© 2025 kkoisland</Typography.Title>
    </footer>
  );
};

export default Footer;
