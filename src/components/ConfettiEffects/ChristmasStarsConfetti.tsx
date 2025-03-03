import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ChristmasStarsConfetti = () => {
  useEffect(() => {
    const shoot = () => {
      confetti({
        spread: 360,
        ticks: 300,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 30,
        colors: ['#FF0000', '#008000', '#FFD700', '#C0C0C0', '#0000FF'],
        particleCount: 40,
        scalar: 1.2,
        shapes: ['star'],
        origin: { x: 0.5, y: 0.3 },
      });

      confetti({
        spread: 360,
        ticks: 300,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 30,
        colors: ['#FF0000', '#008000', '#FFD700', '#C0C0C0', '#0000FF'],
        particleCount: 10,
        scalar: 0.75,
        shapes: ['circle'],
        origin: { x: 0.5, y: 0.3 },
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }, []);

  return null; // コンポーネントは描画しない
};

export default ChristmasStarsConfetti;
