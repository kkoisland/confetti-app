import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const BasicConfetti = () => {
  useEffect(() => {
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, particleCount: 200, zIndex: 0 };

    confetti({
      ...defaults,
      origin: { x: 0.5, y: 0.5 }, // 真ん中から発射
    });
  }, []); // 空の依存配列で、コンポーネントのマウント時に1回だけ実行

  return null; // コンポーネントは描画しない
};

export default BasicConfetti;
