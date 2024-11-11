import ConfettiLauncher from '../components/ConfettiLauncher/ConfettiLauncher';

const ConfettiLauncherPage = () => {
  console.log('ConfettiLauncherPage rendered');
  return (
    <div>
      <h2>Slide to change the amount of confetti!</h2>
      <ConfettiLauncher />
    </div>
  );
};

export default ConfettiLauncherPage;
