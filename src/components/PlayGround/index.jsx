import { useEffect } from "react";
import { useSelector } from "react-redux";
import { start, click, check, finish } from "@/reducers/gameReducer";
import { useDispatch } from "react-redux";
import Card from "@/components/Card";

const PlayGround = () => {
  const { cards, status } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "ready") {
      dispatch(start());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === "playing") {
      const result = cards.every((card) => card.complete);
      if (result) {
        dispatch(finish());
      }
    }
  }, [cards, status, dispatch]);

  const handleClick = async (name, index) => {
    dispatch(click({ name, index }));
    setTimeout(() => {
      dispatch(check());
    }, 750);
  };

  return (
    <div className="playground">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            card={card.name}
            click={() => handleClick(card.name, index)}
            close={card.close}
            complete={card.complete}
          />
        );
      })}
    </div>
  );
};

export default PlayGround;
