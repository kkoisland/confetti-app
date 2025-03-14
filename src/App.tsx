import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ConfettiLauncherPage from './pages/ConfettiLauncherPage';
import BackgroundAnimationPage from './pages/BackgroundAnimationPage';
import ScrollAnimationPage from './pages/ScrollAnimationPage';
import ConfettiGalleryPage from './pages/ConfettiGalleryPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
    <HashRouter>
      <div className={`App ${theme === 'dark' ? 'theme-dark' : 'theme-light'} shared-styles`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/confetti" element={<ConfettiLauncherPage />} />
          <Route path="/background" element={<BackgroundAnimationPage />} />
          <Route path="/scroll" element={<ScrollAnimationPage />} />
          <Route path="/gallery" element={<ConfettiGalleryPage />} />
          <Route path="/" element={<ConfettiLauncherPage />} /> {/* デフォルトページ */}
        </Routes>
        <Footer theme={theme} />
      </div>
    </HashRouter>
  );
}

export default App;
