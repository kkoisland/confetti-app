import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { quantityAtom } from '../../store/atoms';
import confetti from 'canvas-confetti';
import styles from './ConfettiLauncher.module.css';

const ConfettiLauncher = () => {
  // const [quantity, setQuantity] = useState(100);
  const [quantity, setQuantity] = useAtom(quantityAtom);

  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuantity(parseInt(event.target.value, 10));
  // };

  const launchConfetti = () => {
    confetti({
      particleCount: quantity,
      spread: 70,
      // origin: { y: 0.6 } // original
      origin: { x: 0.5, y: 0.8 }, // 画面の中央より下の位置から発射
    });
  };

  return (
    <div className={styles.launcher}>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="range"
          id="quantity"
          name="quantity"
          min="10"
          max="300"
          value={quantity}
          onChange={() => {}}
          // onChange={handleQuantityChange}
        />
        <span>{quantity} confettis</span>
      </div>
      {/* <button onClick={launchConfetti}>Launch Confetti</button> */}
      <button onClick={() => setQuantity(quantity + 1)}>Increase Quantity</button>
    </div>
  );
};

export default ConfettiLauncher;
