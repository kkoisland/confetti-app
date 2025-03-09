import { Tabs } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: 'Confetti Launcher', key: '/' },
    { label: 'Background Animation', key: '/background' },
    { label: 'Scroll Animation', key: '/scroll' },
    { label: 'Interactive Gallery', key: '/gallery' },
  ];

  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
      <Tabs
        activeKey={location.pathname}
        onChange={(key) => navigate(key)}
        items={items}
        type="line"
        centered
      />
      <button
        onClick={toggleTheme}
        style={{
          marginLeft: 'auto',
          padding: '8px',
          fontSize: '24px',
          border: 'none', // 枠線を消す
          background: 'none', // 背景色を消す
          cursor: 'pointer', // マウスカーソルをポインターに
          outline: 'none', // フォーカス時の枠を消す
        }}
      >
        {theme === 'light' ? '☼' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
