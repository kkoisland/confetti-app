import { useState } from 'react';
import { Button, Slider, Form, Space, Typography } from 'antd';
import confetti from 'canvas-confetti';
import { confettiPresets } from '../../data/confettiOptions';

const ConfettiLauncher = () => {
  const [quantity, setQuantity] = useState(confettiPresets.normal.particleCount);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
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
    <Space direction="vertical" size="large" style={{ width: '100%', maxWidth: 400 }}>
      <Form layout="vertical">
        <Form.Item label="Quantity">
          <Slider min={10} max={300} value={quantity} onChange={handleQuantityChange} />
          <Typography.Text>{quantity} confettis</Typography.Text>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={launchConfetti}>
        Launch Confetti
      </Button>
    </Space>
  );
};

export default ConfettiLauncher;
