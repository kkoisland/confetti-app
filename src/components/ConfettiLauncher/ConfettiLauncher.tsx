import React, { useState } from 'react';
import styles from './ConfettiLauncher.module.css';

const ConfettiLauncher = () => {
    const [quantity, setQuantity] = useState(100);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    
    const launchConfetti = () => {
      console.log('Launching confetti with quantity:', quantity);
      // ここにコンフェッティ発射のロジックを追加
  };

    return (
        <div className={styles.launcher}>
            <h2>Confetti Launcher</h2>
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
