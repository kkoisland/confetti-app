import { Typography } from 'antd';
import ScrollAnimation from '../components/ScrollAnimation/ScrollAnimation';

const ScrollAnimationPage = () => {
  return (
    <div>
      <Typography.Title level={2}>Scroll Down to the Bottom...</Typography.Title>
      <ScrollAnimation />
    </div>
  );
};

export default ScrollAnimationPage;
