import { useDispatch } from "react-redux";
import { start } from "@/reducers/gameReducer";

const PlayAgain = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(start());
    }
  };

  return (
    <button type="button" className="play-again" onClick={handleClick}>
      Play Again
    </button>
  );
};

export default PlayAgain;
