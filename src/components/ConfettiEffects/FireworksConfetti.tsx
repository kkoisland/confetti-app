import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FireworksConfetti = () => {
  useEffect(() => {
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // 左側と右側からランダムに花火を発射
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // クリーンアップ
    return () => clearInterval(interval);
  }, []);

  return null; // コンポーネントは描画しない
};

export default FireworksConfetti;
