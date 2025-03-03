import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FallConfetti = () => {
  useEffect(() => {
    confetti({
      startVelocity: 50,
      spread: 360,
      ticks: 300,
      gravity: 0.5,
      zIndex: 0,
      colors: ['#FF9800', '#FF5722', '#D32F2F'], // 秋のオレンジや赤い葉っぱ
      scalar: 2,
      particleCount: 100,
      origin: { x: 0.5, y: 0 }, // 上から発射
      shapes: ['circle'],
    });
  }, []);

  return null; // コンポーネントは描画しない
};

export default FallConfetti;
