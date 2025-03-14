import { useState } from 'react';
import styles from './ConfettiGallery.module.css';
import BasicConfetti from '../ConfettiEffects/BasicConfetti';
import FireworksConfetti from '../ConfettiEffects/FireworksConfetti';
import CherryBlossomConfetti from '../ConfettiEffects/CherryBlossomConfetti';
import SnowConfetti from '../ConfettiEffects/SnowConfetti';
import FreshLeavesConfetti from '../ConfettiEffects/FreshLeavesConfetti';
import FallConfetti from '../ConfettiEffects/FallConfetti';
import ChristmasStarsConfetti from '../ConfettiEffects/ChristmasStarsConfetti';

const getRandomSize = () => Math.floor(Math.random() * (200 - 100 + 1)) + 100; // ランダムな大きさ
const columns = 3; // 列数

const colors = {
  yellow: 'rgba(255, 165, 0, 0.5)',
  pink: 'rgba(255, 102, 204, 0.5)',
  green: 'rgba(51, 204, 51, 0.5)',
  lightBlue: 'rgba(102, 204, 255, 0.5)',
  orange: 'rgba(255, 102, 0, 0.5)',
  red: 'rgba(255, 51, 51, 0.5)',
  blue: 'rgba(51, 51, 255, 0.5)',
};

const ConfettiGallery = () => {
  const [positions, setPositions] = useState(
    Object.values(colors).map(() => getRandomSize()) // 初期サイズをランダムに
  );

  const [confettiName, setConfettiName] = useState<string>('');
  const [showBasicConfetti, setShowBasicConfetti] = useState<boolean>(false);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);
  const [showCherryBlossom, setShowCherryBlossom] = useState<boolean>(false);
  const [showSnowConfetti, setShowSnowConfetti] = useState<boolean>(false);
  const [showFreshLeavesConfetti, setShowFreshLeavesConfetti] = useState<boolean>(false);
  const [showFallConfetti, setShowFallConfetti] = useState<boolean>(false);
  const [showChristmasStarsConfetti, setShowChristmasStarsConfetti] = useState<boolean>(false);

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
    setPositions(Object.values(colors).map(() => getRandomSize())); // ランダムにサイズを更新
    setShowBasicConfetti(false);
  };

  const handleCircleClick = (color: string) => {
    if (color === colors.yellow) {
      setShowBasicConfetti(false);
      setTimeout(() => {
        setShowBasicConfetti(true);
        setConfettiName('This is Basic Confetti!');
      }, 0);
    }
    if (color === colors.blue) {
      setShowFireworks(false);
      setTimeout(() => {
        setShowFireworks(true);
        setConfettiName('This is Fireworks Confetti!');
      }, 0);
    }
    if (color === colors.pink) {
      setShowCherryBlossom(false);
      setTimeout(() => {
        setShowCherryBlossom(true);
        setConfettiName('This is Cherry Blossom Confetti!');
      }, 0);
    }
    if (color === colors.lightBlue) {
      setShowSnowConfetti(false);
      setTimeout(() => {
        setShowSnowConfetti(true);
        setConfettiName('This is Snow Confetti!');
      }, 0);
    }
    if (color === colors.green) {
      setShowFreshLeavesConfetti(false);
      setTimeout(() => {
        setShowFreshLeavesConfetti(true);
        setConfettiName('This is Fresh Leaves Confetti!');
      }, 0);
    }
    if (color === colors.orange) {
      setShowFallConfetti(false);
      setTimeout(() => {
        setShowFallConfetti(true);
        setConfettiName('This is Fall Confetti!');
      }, 0);
    }
    if (color === colors.red) {
      setShowChristmasStarsConfetti(false);
      setTimeout(() => {
        setShowChristmasStarsConfetti(true);
        setConfettiName('This is Christmas Stars Confetti!');
      }, 0);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          randomizePositions();
          setConfettiName('');
        }}
      >
        Shuffle Circles
      </button>
      <h3>{confettiName}</h3>
      <div className={styles.container}>
        {Object.entries(colors).map(([colorName, color], index) => {
          const position = getPosition(index);
          return (
            <div
              key={colorName}
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
      {showFireworks && <FireworksConfetti />}
      {showCherryBlossom && <CherryBlossomConfetti />}
      {showSnowConfetti && <SnowConfetti />}
      {showFreshLeavesConfetti && <FreshLeavesConfetti />}
      {showFallConfetti && <FallConfetti />}
      {showChristmasStarsConfetti && <ChristmasStarsConfetti />}
    </div>
  );
};

export default ConfettiGallery;
