import { Provider } from 'react-redux';
import store from './store';
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
    <Provider store={store}>
      <BrowserRouter>
        <div className={`App ${theme === 'dark' ? 'theme-dark' : 'theme-light'} shared-styles`}>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/confetti" element={<ConfettiLauncherPage />} />
            <Route path="/background" element={<BackgroundAnimationPage />} />
            <Route path="/scroll" element={<ScrollAnimationPage />} />
            <Route path="/gallery" element={<InteractiveGalleryPage />} />
            <Route path="/" element={<ConfettiLauncherPage />} /> {/* デフォルトページ */}
          </Routes>
          <Footer theme={theme} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
