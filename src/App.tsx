import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ConfettiLauncherPage from './pages/ConfettiLauncherPage';
import BackgroundAnimationPage from './pages/BackgroundAnimationPage';
import ScrollAnimationPage from './pages/ScrollAnimationPage';
import InteractiveGalleryPage from './pages/InteractiveGalleryPage';
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
    <BrowserRouter>
      {/* ページルーティング */}
      <div className={`App ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/confetti" element={<ConfettiLauncherPage />} />
          <Route path="/background" element={<BackgroundAnimationPage />} />
          <Route path="/scroll" element={<ScrollAnimationPage />} />
          <Route path="/gallery" element={<InteractiveGalleryPage />} />
          <Route path="/" element={<ConfettiLauncherPage />} /> {/* デフォルトページ */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
