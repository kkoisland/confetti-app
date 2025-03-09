import { Typography } from 'antd';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';

const BackgroundAnimationPage = () => {
  return (
    <div>
      <Typography.Title level={2}>Move your mouse and give it a click!</Typography.Title>
      <BackgroundAnimation />
    </div>
  );
};

export default BackgroundAnimationPage;
