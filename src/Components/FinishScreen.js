function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const pointPercent = (points / maxPoints) * 100;

  let emoji;

  if (pointPercent === 100) emoji = "🥇";
  if (pointPercent >= 80 && pointPercent < 100) emoji = "🎉";
  if (pointPercent >= 50 && pointPercent < 80) emoji = "😁";
  if (pointPercent >= 0 && pointPercent < 50) emoji = "🤔";
  if (pointPercent === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> / {maxPoints}{" "}
        ({Math.ceil(pointPercent)}%)
      </p>
      <p className="highscore">Highscore: {highscore} Points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
