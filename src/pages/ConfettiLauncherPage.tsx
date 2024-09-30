import React, { useState } from 'react';
import ConfettiLauncher from '../components/ConfettiLauncher/ConfettiLauncher';
import D3Chart from '../components/D3Chart/D3Chart';

const ConfettiLauncherPage = () => {
  const [data, setData] = useState<number[]>([]);
  const handleConfettiLaunch = (quantity: number) => {
    setData((prevData) => [...prevData, quantity]);
  };
  return (
    <div>
      <h1>Confetti Launcher</h1>
      <D3Chart data={data} />
      <ConfettiLauncher onLaunch={handleConfettiLaunch} />
    </div>
  );
};

export default ConfettiLauncherPage;
