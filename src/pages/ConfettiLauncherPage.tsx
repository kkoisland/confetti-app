// import ConfettiLauncher from '../components/ConfettiLauncher/ConfettiLauncher';

// const ConfettiLauncherPage = () => {
//   return (
//     <div>
//       <h2>Slide to change the amount of confetti!</h2>
//       <ConfettiLauncher />
//     </div>
//   );
// };

// export default ConfettiLauncherPage;

import ConfettiLauncher from '../components/ConfettiLauncher/ConfettiLauncher';
import { Typography } from 'antd';

const ConfettiLauncherPage = () => {
  return (
    <div>
      <Typography.Title level={2}>Slide to change the amount of confetti!</Typography.Title>
      <ConfettiLauncher />
    </div>
  );
};

export default ConfettiLauncherPage;
