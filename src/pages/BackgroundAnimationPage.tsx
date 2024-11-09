import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';

interface BackgroundAnimationPageProps {
  quantity: number;
}

const BackgroundAnimationPage = ({ quantity }: BackgroundAnimationPageProps) => {
  return (
    <div>
      <h2>Move your mouse and give it a click!</h2>
      <BackgroundAnimation quantity={quantity} />
    </div>
  );
};

export default BackgroundAnimationPage;
