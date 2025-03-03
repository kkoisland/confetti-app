// CherryBlossomConfetti.tsx
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const CherryBlossomConfetti = () => {
  useEffect(() => {
    confetti({
      startVelocity: 50,
      spread: 180,
      ticks: 800, // Confettiがゆっくり消えるように長くする
      gravity: 0.5,
      zIndex: 0,
      colors: ['#FFB6C1', '#FF69B4', '#FFC0CB'],
      scalar: 2,
      origin: { x: 0.5, y: 0 }, // 上から発射
      shapes: ['circle'],
    });
  }, []);

  return null; // コンポーネントは描画しない
};

export default CherryBlossomConfetti;

// import { useEffect } from 'react';
// import confetti from 'canvas-confetti';

// const CherryBlossomConfetti = () => {
//   useEffect(() => {
//     const duration = 5 * 1000; // 5 seconds
//     const animationEnd = Date.now() + duration;
//     let skew = 1;

//     const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

//     const frame = () => {
//       const timeLeft = animationEnd - Date.now();
//       const ticks = Math.max(200, 500 * (timeLeft / duration));
//       skew = Math.max(0.8, skew - 0.001);

//       confetti({
//         particleCount: 50,
//         startVelocity: 0,
//         ticks: ticks,
//         origin: {
//           x: Math.random(),
//           // since particles fall down, skew start toward the top
//           y: Math.random() * skew - 0.2,
//         },
//         colors: ['#FFB6C1', '#FF69B4', '#FFC0CB'],
//         shapes: ['circle'],
//         gravity: randomInRange(0.4, 0.6),
//         scalar: randomInRange(0.4, 2),
//         drift: randomInRange(-0.4, 0.4),
//       });

//       if (timeLeft > 0) {
//         requestAnimationFrame(frame);
//       }
//     };

//     frame(); // エフェクトを開始

//     return () => {
//       // コンポーネントがアンマウントされるときにクリーンアップ
//     };
//   }, []);

//   return null; // コンポーネントは描画しない
// };

// export default CherryBlossomConfetti;
