import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

export default function OnlineQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div className="quiz">
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>{questions[current].question}</h2>

      {questions[current].options.map((option) => (
        <button
          key={option}
          className={`option ${
            selected &&
            (option === questions[current].answer
              ? "correct"
              : option === selected
              ? "wrong"
              : "")
          }`}
          onClick={() => handleAnswer(option)}
          disabled={selected}
        >
          {option}
        </button>
      ))}

      <div className="footer">
        <p>Score: {score}</p>
        {selected && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}