import React, { useState } from 'react';
import { fetchQuizQuestion } from './API';

//components
import QuestionCard from './components/QuestionCard';

//Types
import { Difficulty } from './API'

const TOTAL_QUESTIONS = 10;

const App =()  =>{
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia= async () =>{

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="Quiz">
    <h1>REACT QUIZ</h1>
    <button className="start" onClick={startTrivia}>
     Start
    </button> 
    <p className="score">Score:</p>
    <p>Loading Questions...</p>
    {/* <QuestionCard 
    questionNr={number + 1}
    totalQuestions={TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].ansers}
    userAnswer={userAnswers ? userAnsers[number] : undefined}
    callback={checkAnswerS}
    /> */}
    <button className="next" onClick={nextQuestion}></button>
    </div>
   
  );
}

export default App;
