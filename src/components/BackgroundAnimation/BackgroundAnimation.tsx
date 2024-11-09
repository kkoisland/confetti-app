import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import styles from './BackgroundAnimation.module.css';

interface BackgroundAnimationProps {
  quantity: number;
}

// ランダムな色を生成する関数
const getRandomColor = () => {
  const letters = '0123456789ABCDEF'; // 16進数の数字とアルファベット
  let color = '#'; // 生成される色の先頭には "#" をつける
  for (let i = 0; i < 6; i++) {
    // lettersからランダムに1文字を選び、colorに追加
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // 生成されたランダムな色を返す
};

const BackgroundAnimation = ({ quantity }: BackgroundAnimationProps) => {
  console.log('quantity is:', quantity);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
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
  };

  const handleClick = (event: MouseEvent) => {
    const colorCount = Math.floor(Math.random() * 5) + 1; // 1から5色のランダムな色を生成
    const colorsArray = Array.from({ length: colorCount }, getRandomColor); // colorCount分の色を生成

    confetti({
      particleCount: quantity, // パーティクルの数
      spread: 70, // 花吹雪の広がり
      origin: {
        x: event.clientX / window.innerWidth, // クリックした位置のX座標
        y: event.clientY / window.innerHeight, // クリックした位置のY座標
      },
      // colors: [getRandomColor(), getRandomColor(), getRandomColor()],
      colors: colorsArray,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

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
