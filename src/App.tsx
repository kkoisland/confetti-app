import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ConfettiLauncherPage from './pages/ConfettiLauncherPage';
import BackgroundAnimationPage from './pages/BackgroundAnimationPage';
import ScrollAnimationPage from './pages/ScrollAnimationPage';
import InteractiveGalleryPage from './pages/InteractiveGalleryPage';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );
  const [quantity, setQuantity] = useState(100); // quantityの状態をuseStateで追加
  //   const quantityRef = useRef(100); // quantityの最新値を保持するリファレンス
  //   const [quantity, setQuantity] = useState(quantityRef.current); // quantityの初期値をリファレンスから取得

  //   const handleQuantityChange: React.Dispatch<React.SetStateAction<number>> = (newQuantity) => {
  //     if (typeof newQuantity === 'number') {
  //       quantityRef.current = newQuantity; // 最新値をリファレンスに保存
  //       setQuantity(newQuantity); // quantityの状態を更新
  //     }
  //   };

  useEffect(() => {
    document.body.className = theme; // 'light' or 'dark'
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  console.log('App.tsx: quantity', quantity);

  return (
    <BrowserRouter>
      s
      <div className={`App ${theme === 'dark' ? 'theme-dark' : 'theme-light'} shared-styles`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/confetti"
            element={<ConfettiLauncherPage quantity={quantity} setQuantity={setQuantity} />}
          />
          <Route
            path="/background"
            element={<BackgroundAnimationPage key={quantity} quantity={quantity} />}
          />
          <Route path="/scroll" element={<ScrollAnimationPage />} />
          <Route path="/gallery" element={<InteractiveGalleryPage />} />
          <Route
            path="/"
            element={<ConfettiLauncherPage quantity={quantity} setQuantity={setQuantity} />}
          />{' '}
          {/* デフォルトページ */}
        </Routes>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
