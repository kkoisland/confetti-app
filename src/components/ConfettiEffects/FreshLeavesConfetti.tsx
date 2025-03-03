import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FreshLeavesConfetti = () => {
  useEffect(() => {
    confetti({
      startVelocity: 50,
      spread: 360,
      ticks: 300,
      gravity: 0.5,
      zIndex: 0,
      colors: ['#4CAF50', '#81C784', '#388E3C'], // 緑色の葉っぱ
      scalar: 2,
      particleCount: 100,
      origin: { x: 0.5, y: 0 }, // 上から発射
      shapes: ['circle'],
    });
  }, []);

  return null; // コンポーネントは描画しない
};

export default FreshLeavesConfetti;

// import { useEffect } from 'react';
// import confetti from 'canvas-confetti';

// const FreshLeavesConfetti = () => {
//   useEffect(() => {
//     const duration = 5 * 1000; // 5秒
//     const animationEnd = Date.now() + duration;

//     const defaults = {
//       startVelocity: 0, // 初速を低くしてゆっくりと落ちる
//       spread: 180, // 幅を広くする
//       ticks: 100,
//       zIndex: 0,
//       colors: ['#4CAF50', '#81C784', '#388E3C'], // 緑色の葉っぱ
//       scalar: 1.5, // 大きさを少し小さく
//       gravity: 0.1, // 重力を少しだけ強くして落ちやすくする
//     };

//     const frame = () => {
//       const timeLeft = animationEnd - Date.now();
//       if (timeLeft <= 0) return;

//       const particleCount = 50 * (timeLeft / duration);

//       confetti({
//         ...defaults,
//         particleCount,
//         origin: { x: Math.random(), y: Math.random() - 0.2 }, // ランダムな位置から発射
//       });

//       requestAnimationFrame(frame);
//     };

//     frame(); // エフェクトを開始

//     return () => {}; // コンポーネントがアンマウントされるときにクリーンアップ
//   }, []);

//   return null; // コンポーネントは描画しない
// };

// export default FreshLeavesConfetti;
