import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { getRandomColor } from '../../utils/colorUtils';
import styles from './BackgroundAnimation.module.css';

const BackgroundAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // マウス移動時の処理
  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    confetti({
      particleCount: 1, // パーティクルの数
      startVelocity: 30, // 初速度
      spread: 360, // 花吹雪の広がり
      origin: {
        x: event.clientX / window.innerWidth, // 横方向の位置
        y: event.clientY / window.innerHeight, // 縦方向の位置
      },
      colors: [getRandomColor()], // ランダムな色を一つ適用
    });
  }, []);

  // クリック時の処理
  const handleClick = useCallback((event: MouseEvent) => {
    const colorsArray = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, getRandomColor);

    confetti({
      particleCount: 200, // パーティクルの数
      spread: 70, // 花吹雪の広がり
      origin: {
        x: event.clientX / window.innerWidth, // クリックした位置のX座標
        y: event.clientY / window.innerHeight, // クリックした位置のY座標
      },
      colors: colorsArray,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]); // useCallbackを依存配列に追加

  const backgroundPositionStyle = {
    backgroundPosition: `${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%`,
  };

  return (
    <div className={styles.background} style={backgroundPositionStyle}>
      {/* 背景の動的アニメーションを追加する領域 */}
    </div>
  );
};

export default BackgroundAnimation;
