import { useState } from 'react';
import styles from './ConfettiGallery.module.css';
// import BasicConfetti from '../ConfettiEffects/BasicConfetti'; // BasicConfettiをインポート

const getRandomSize = () => Math.floor(Math.random() * (200 - 100 + 1)) + 100; // ランダムな大きさ

const ConfettiGallery = () => {
  const colors = [
    'rgba(255, 102, 204, 0.5)', // ピンク
    'rgba(51, 204, 51, 0.5)', // 緑
    'rgba(102, 204, 255, 0.5)', // 水色
    'rgba(255, 102, 0, 0.5)', // オレンジ
    'rgba(255, 51, 51, 0.5)', // 赤
    'rgba(51, 51, 255, 0.5)', // 青
    'rgba(255, 165, 0, 0.5)', // 黄色
  ];

  const columns = 3; // 列数

  const [positions, setPositions] = useState(
    colors.map(() => getRandomSize()) // 初期サイズをランダムに
  );

  // グリッド状に配置するための計算
  const getPosition = (index: number) => {
    const row = Math.floor(index / columns); // 行を計算
    const column = index % columns; // 列を計算

    // 少しランダムにずらす(重なり)
    const randomOffsetX = Math.random() * 10 - 5;
    const randomOffsetY = Math.random() * 10 - 5;

    return {
      top: `${row * 28 + 10 + randomOffsetY}%`, // 色を増やす場合、ここで高さを調節する
      left: `${column * 30 + 10 + randomOffsetX}%`, // 30%の間隔で配置し、少しランダムにずらす
    };
  };

  const randomizePositions = () => {
    setPositions(colors.map(() => getRandomSize())); // ランダムにサイズを更新
  };

  return (
    <div>
      <button onClick={randomizePositions}>Shuffle Circles</button>
      <div className={styles.container}>
        {colors.map((color, index) => {
          const position = getPosition(index);
          return (
            <div
              key={index}
              className={styles.circle}
              style={{
                backgroundColor: color,
                width: `${positions[index]}px`,
                height: `${positions[index]}px`,
                top: position.top,
                left: position.left,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConfettiGallery;
