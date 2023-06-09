import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { start } from "@/reducers/gameReducer";

const PlayAgain = () => {
  const { status } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(start());
  };
  return (
    <button
      type="button"
      className="play-again"
      disabled={status === "playing" ? true : false}
      onClick={handleClick}
    >
      Play Again
    </button>
  );
};

export default PlayAgain;
