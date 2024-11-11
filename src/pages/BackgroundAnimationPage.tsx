import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';

const BackgroundAnimationPage = () => {
  console.log('BackgroundAnimationPage rendered');
  return (
    <div>
      <h2>Move your mouse and give it a click!</h2>
      <BackgroundAnimation />
    </div>
  );
};

export default BackgroundAnimationPage;
