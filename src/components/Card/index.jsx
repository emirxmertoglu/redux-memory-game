import classNames from "classnames";

const Card = ({ click, close, complete, card }) => {
  const classes = classNames({
    card: true,
    opened: !close,
    matched: complete,
  });

  return (
    <div className={classes} onClick={click}>
      <div className="front">?</div>
      <div className="back">
        <img
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            card +
            ".png"
          }
        />
      </div>
    </div>
  );
};

export default Card;
