import { useState, useEffect } from 'react';
import ConfettiLauncher from './components/ConfettiLauncher/ConfettiLauncher';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    document.body.className = theme; // 'light' or 'dark'
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className={`theme-toggle-button ${theme}`}>
        {theme === 'light' ? '☼' : '🌙'}
      </button>
      <ConfettiLauncher />
    </div>
  );
}

export default App;
