import { useEffect } from "react";
import { useSelector } from "react-redux";
import { start, handleClick } from "@/reducers/playgroundReducer";
import { useDispatch } from "react-redux";
import Card from "@/components/Card";

const PlayGround = () => {
  const { finalizedFrameworks } = useSelector((state) => state.playground);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(start());
  }, [dispatch]);

  return (
    <div className="playground">
      {finalizedFrameworks.map((framework, index) => {
        return (
          <Card
            key={index}
            framework={framework.name}
            click={() => dispatch(handleClick({ name: framework.name, index }))}
            close={framework.close}
            complete={framework.complete}
          />
        );
      })}
    </div>
  );
};

export default PlayGround;
