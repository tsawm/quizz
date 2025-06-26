import { useState, useEffect } from 'react';
import questionsData from './questions.json';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set questions from the imported JSON
    setQuestions(questionsData);
    setLoading(false);
  }, []);

  // Only proceed if questions are loaded and the current index is valid
  const question = questions.length > 0 && current < questions.length ? questions[current] : null;

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

  if (loading) {
    return <div className="container"><p>Loading questions...</p></div>;
  }

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
