import classNames from "classnames";

const Card = ({ click, close, complete, framework }) => {
  const classes = classNames({
    card: true,
    opened: !close,
    matched: complete,
  });

  const clicked = (framework) => {
    click(framework);
  };

  return (
    <div className={classes} onClick={() => clicked(framework)}>
      <div className="front">?</div>
      <div className="back">
        <img
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            framework +
            ".png"
          }
        />
      </div>
    </div>
  );
};

export default Card;
