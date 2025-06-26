import { useState } from 'react';
import { questions } from './questions';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[current];

  const handleOptionClick = (index) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="container">
      {current < questions.length ? (
        <>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((opt, index) => (
              <li key={index}>
                <button
                  className={`option-btn ${
                    showAnswer
                      ? index === question.correctIndex
                        ? 'correct'
                        : index === selected
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => handleOptionClick(index)}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
          {showAnswer && (
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          )}
        </>
      ) : (
        <h2>🎉 You've completed the quiz!</h2>
      )}
    </div>
  );
}

export default App;
