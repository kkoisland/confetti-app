import React from 'react';
import styles from './ConfettiGallery.module.css';

const getRandomSize = () => Math.floor(Math.random() * (200 - 100 + 1)) + 100; // ランダムな大きさ

const ConfettiGallery = () => {
  const colors = [
    'rgba(255, 102, 204, 0.5)', // ピンク
    'rgba(51, 204, 51, 0.5)', // 緑
    'rgba(102, 204, 255, 0.5)', // 水色
    'rgba(255, 102, 0, 0.5)', // オレンジ
    'rgba(255, 51, 51, 0.5)', // 赤
    'rgba(51, 51, 255, 0.5)', // 青
  ];
  // const radius = [120, 150, 150, 130, 140, 110]; // 丸の大きさをランダムに設定
  const radius = colors.map(() => getRandomSize());

  const columns = 3; // 列数

  // グリッド状に配置するための計算
  const getPosition = (index: number) => {
    const row = Math.floor(index / columns); // 行を計算
    const column = index % columns; // 列を計算

    // 少しランダムにずらす
    const randomOffsetX = Math.random() * 20 - 10; // -10%〜10%の間でランダムにずらす
    const randomOffsetY = Math.random() * 20 - 10; // -10%〜10%の間でランダムにずらす

    return {
      top: `${row * 40 + 10 + randomOffsetY}%`, // 40%の間隔で配置し、少しランダムにずらす
      left: `${column * 30 + 10 + randomOffsetX}%`, // 30%の間隔で配置し、少しランダムにずらす
    };
  };

  return (
    <div className={styles.container}>
      {colors.map((color, index) => {
        const position = getPosition(index);
        return (
          <div
            key={index}
            className={styles.circle}
            style={{
              backgroundColor: color,
              width: `${radius[index]}px`,
              height: `${radius[index]}px`,
              top: position.top, // ランダムにずらした位置
              left: position.left, // ランダムにずらした位置
            }}
          />
        );
      })}
    </div>
  );
};

export default ConfettiGallery;
