import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import styles from './ScrollAnimation.module.css';

const ScrollAndHoverConfetti = () => {
  const [scrollY, setScrollY] = useState(0);

  // スクロール時のConfetti発生
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // スクロール位置が100pxを超えたらConfettiを発生
    if (currentScrollY > 100) {
      confetti({
        particleCount: 50,
        spread: 180,
        origin: { x: Math.random(), y: Math.random() },
        shapes: ['circle'],
        startVelocity: 30,
      });
    }
  };

  const handleMouseEnter = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.5, y: 0.6 },
      startVelocity: 50, // 初速を大きく
      shapes: ['star'],
      scalar: 2, // Confettiのスケールを大きく
    });
  };

  // スクロールイベントの監視
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <h1>Scroll Down to the Bottom...</h1>
      <div className={styles.container}>
        <h1>Then, Hover the Yellow Circle to See Big Stars!</h1>

        <div style={{ height: '2000px' }}></div>

        {/* 丸いボタンにホバーでConfetti発生 */}
        <div onMouseEnter={handleMouseEnter} className={styles.circle} />
      </div>
    </>
  );
};

export default ScrollAndHoverConfetti;
