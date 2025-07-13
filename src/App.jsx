import { useState } from 'react'

function App() {

  const [currQuest, setCurrQuest] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
      { answerText: 'Arctic Ocean', isCorrect: false },
    ],
  },
  {
    questionText: 'Which language runs in a web browser?',
    answerOptions: [
      { answerText: 'Python', isCorrect: false },
      { answerText: 'Java', isCorrect: false },
      { answerText: 'C', isCorrect: false },
      { answerText: 'JavaScript', isCorrect: true },
    ],
  },
  {
    questionText: 'What year did World War II end?',
    answerOptions: [
      { answerText: '1945', isCorrect: true },
      { answerText: '1939', isCorrect: false },
      { answerText: '1940', isCorrect: false },
      { answerText: '1942', isCorrect: false },
    ],
  },
  {
    questionText: 'Which element has the chemical symbol O?',
    answerOptions: [
      { answerText: 'Osmium', isCorrect: false },
      { answerText: 'Oxygen', isCorrect: true },
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Oganesson', isCorrect: false },
    ],
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    answerOptions: [
      { answerText: 'Vincent Van Gogh', isCorrect: false },
      { answerText: 'Pablo Picasso', isCorrect: false },
      { answerText: 'Leonardo da Vinci', isCorrect: true },
      { answerText: 'Michelangelo', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest prime number?',
    answerOptions: [
      { answerText: '0', isCorrect: false },
      { answerText: '1', isCorrect: false },
      { answerText: '2', isCorrect: true },
      { answerText: '3', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the boiling point of water?',
    answerOptions: [
      { answerText: '90°C', isCorrect: false },
      { answerText: '100°C', isCorrect: true },
      { answerText: '80°C', isCorrect: false },
      { answerText: '110°C', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country won the FIFA World Cup in 2018?',
    answerOptions: [
      { answerText: 'Germany', isCorrect: false },
      { answerText: 'Brazil', isCorrect: false },
      { answerText: 'France', isCorrect: true },
      { answerText: 'Croatia', isCorrect: false },
    ],
  },
  {
    questionText: 'Which company owns Instagram?',
    answerOptions: [
      { answerText: 'Google', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Meta (Facebook)', isCorrect: true },
      { answerText: 'Snapchat', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet has the most moons?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: true },
      { answerText: 'Uranus', isCorrect: false },
    ],
  },
  {
    questionText: 'Which Indian city is known as the "Pink City"?',
    answerOptions: [
      { answerText: 'Jaipur', isCorrect: true },
      { answerText: 'Udaipur', isCorrect: false },
      { answerText: 'Mumbai', isCorrect: false },
      { answerText: 'Delhi', isCorrect: false },
    ],
  },
  {
    questionText: 'Which organ is responsible for pumping blood?',
    answerOptions: [
      { answerText: 'Lungs', isCorrect: false },
      { answerText: 'Kidneys', isCorrect: false },
      { answerText: 'Liver', isCorrect: false },
      { answerText: 'Heart', isCorrect: true },
    ],
  },
];

  const nextQuestion = () => {
    const next = currQuest + 1;
    if(next < questions.length){
      setCurrQuest(next);
    }else{
      setShowScore(true);
    }
    setAnswered(false);
    setSelectedAns(null);
  }

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAns(index);
    if(isCorrect){
        setScore(score + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Quiz App</h2>
        {showScore ? <div> You scored {score} of {questions.length}
          </div> : 
          <div>
        <p className="fw-semibold">{questions[currQuest].questionText}</p>

        <div className="d-grid gap-2 mb-3">
          {questions[currQuest].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOption(index, option.isCorrect)}
              className={`btn ${
                answered
                  ? option.isCorrect
                    ? 'btn-success'
                    : selectedAns === index
                    ? 'btn-danger'
                    : 'btn-outline-secondary'
                  : 'btn-outline-primary'
              }`}
              disabled={answered}
            >
              {option.answerText}
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={nextQuestion}
          disabled={!answered}
        >
          Next Question
        </button>

        <p className="text-center text-muted mt-3">
          Question {currQuest + 1} of {questions.length}
        </p>
        </div>}
      </div>
    </div>
  );
}

export default App;