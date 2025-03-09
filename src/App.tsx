import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConfettiLauncherPage from './pages/ConfettiLauncherPage';
import BackgroundAnimationPage from './pages/BackgroundAnimationPage';
import ScrollAnimationPage from './pages/ScrollAnimationPage';
import ConfettiGalleryPage from './pages/ConfettiGalleryPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App shared-styles">
        <Header />
        <Routes>
          <Route path="/confetti" element={<ConfettiLauncherPage />} />
          <Route path="/background" element={<BackgroundAnimationPage />} />
          <Route path="/scroll" element={<ScrollAnimationPage />} />
          <Route path="/gallery" element={<ConfettiGalleryPage />} />
          <Route path="/" element={<ConfettiLauncherPage />} /> {/* デフォルトページ */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
