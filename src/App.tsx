import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ConfettiLauncher from './components/ConfettiLauncher/ConfettiLauncher';
import ConfettiLauncherPage from './pages/ConfettiLauncherPage';
import BackgroundAnimationPage from './pages/BackgroundAnimationPage';
import ScrollAnimationPage from './pages/ScrollAnimationPage';
import InteractiveGalleryPage from './pages/InteractiveGalleryPage';
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
    <BrowserRouter>
      {/* ナビゲーションバー */}
      <nav>
        <ul>
          <li>
            <Link to="/confetti">Confetti Launcher</Link>
          </li>
          <li>
            <Link to="/background">Background Animation</Link>
          </li>
          <li>
            <Link to="/scroll">Scroll Animation</Link>
          </li>
          <li>
            <Link to="/gallery">Interactive Gallery</Link>{' '}
          </li>
        </ul>
      </nav>

      {/* テーマ切り替えボタン */}
      <button onClick={toggleTheme} className={`theme-toggle-button ${theme}`}>
        {theme === 'light' ? '☼' : '🌙'}
      </button>

      {/* ページルーティング */}
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/confetti" element={<ConfettiLauncherPage />} />
          <Route path="/background" element={<BackgroundAnimationPage />} />
          <Route path="/scroll" element={<ScrollAnimationPage />} />
          <Route path="/gallery" element={<InteractiveGalleryPage />} />
          <Route path="/" element={<ConfettiLauncherPage />} /> {/* デフォルトページ */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
