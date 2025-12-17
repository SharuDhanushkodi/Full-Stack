import { useState } from "react";

export default function Polling() {
  const [poll] = useState({
    question: "Which programming language do you prefer?",
    options: ["JavaScript", "Python", "Java", "C++"],
  });

  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0,
    "C++": 0,
  });

  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (option) => {
    if (hasVoted) return;

    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
    setHasVoted(true);
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="poll">
      <h2>{poll.question}</h2>

      {!hasVoted ? (
        poll.options.map((option) => (
          <button
            key={option}
            className="poll-btn"
            onClick={() => handleVote(option)}
          >
            {option}
          </button>
        ))
      ) : (
        <div className="results">
          {poll.options.map((option) => {
            const percent =
              totalVotes === 0
                ? 0
                : Math.round((votes[option] / totalVotes) * 100);

            return (
              <div key={option} className="result-item">
                <span>
                  {option} — {votes[option]} votes ({percent}%)
                </span>
                <div className="bar">
                  <div
                    className="bar-fill"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}