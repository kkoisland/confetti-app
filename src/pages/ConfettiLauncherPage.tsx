import ConfettiLauncher from '../components/ConfettiLauncher/ConfettiLauncher';

interface ConfettiLauncherPageProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ConfettiLauncherPage = ({ quantity, setQuantity }: ConfettiLauncherPageProps) => {
  return (
    <div>
      <h2>Slide to change the amount of confetti!</h2>
      <ConfettiLauncher quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default ConfettiLauncherPage;
