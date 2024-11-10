import React from 'react';
import confetti from 'canvas-confetti';
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../../store/slices/quantitySlice';
import { RootState } from '../../store';
import styles from './ConfettiLauncher.module.css';

const ConfettiLauncher = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.quantity.value);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    dispatch(setQuantity(newQuantity));
  };

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
          onChange={handleQuantityChange}
        />
        <span>{quantity} confettis</span>
      </div>
      <button onClick={launchConfetti}>Launch Confetti</button>
    </div>
  );
};

export default ConfettiLauncher;
