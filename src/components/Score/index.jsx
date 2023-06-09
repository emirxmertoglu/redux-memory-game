import { useSelector } from "react-redux";

const Score = () => {
  const { point } = useSelector((state) => state.game);
  return (
    <h2 className="score">
      Score: <span>{point}</span>
    </h2>
  );
};

export default Score;
