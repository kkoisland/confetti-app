import { useState } from 'react';
import styles from './ConfettiGallery.module.css';
import BasicConfetti from '../ConfettiEffects/BasicConfetti';

const getRandomSize = () => Math.floor(Math.random() * (200 - 100 + 1)) + 100; // ランダムな大きさ
const columns = 3; // 列数

const ConfettiGallery = () => {
  const yellow = 'rgba(255, 165, 0, 0.5)';
  const pink = 'rgba(255, 102, 204, 0.5)';
  const green = 'rgba(51, 204, 51, 0.5)';
  const lightBlue = 'rgba(102, 204, 255, 0.5)';
  const orange = 'rgba(255, 102, 0, 0.5)';
  const red = 'rgba(255, 51, 51, 0.5)';
  const blue = 'rgba(51, 51, 255, 0.5)';

  const colors = [yellow, pink, green, lightBlue, orange, red, blue];
  const [positions, setPositions] = useState(
    colors.map(() => getRandomSize()) // 初期サイズをランダムに
  );

  const [showBasicConfetti, setShowBasicConfetti] = useState(false);

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
    setShowBasicConfetti(false);
  };

  const handleCircleClick = (color: string) => {
    if (color === yellow) {
      setShowBasicConfetti(false); // 最初にfalseにリセット
      setTimeout(() => {
        setShowBasicConfetti(true); // 再度trueにしてConfettiを発射
      }, 0); // 即時に発火させるため、タイムアウトを0msに設定
    }
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
              onClick={() => handleCircleClick(color)}
            />
          );
        })}
      </div>
      {showBasicConfetti && <BasicConfetti />}
    </div>
  );
};

export default ConfettiGallery;
