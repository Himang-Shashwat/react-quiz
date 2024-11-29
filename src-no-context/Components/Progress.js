function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <div className="progress-info">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPoints} Pts.
        </p>
      </div>
    </div>
  );
}

export default Progress;
