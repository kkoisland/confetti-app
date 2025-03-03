import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const BasicConfetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 200,
      startVelocity: 30,
      spread: 360,
      ticks: 300,
      zIndex: 0,
      origin: { x: 0.5, y: 0.3 }, // 真ん中から発射
    });
  }, []); // 空の依存配列で、コンポーネントのマウント時に1回だけ実行

  return null; // コンポーネントは描画しない
};

export default BasicConfetti;
