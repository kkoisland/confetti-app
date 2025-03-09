import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { confettiPresets } from '../../data/confettiOptions';

const ConfettiLauncher = () => {
  const [quantity, setQuantity] = useState(confettiPresets.normal.particleCount);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const launchConfetti = () => {
    confetti({
      particleCount: quantity,
      spread: confettiPresets.normal.spread,
      origin: { x: 0.5, y: 0.8 }, // 画面の中央より下の位置から発射
      // colors: confettiPresets.normal.colors,
    });
  };

  return (
    <div>
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
