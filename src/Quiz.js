// Quiz.js
import React, { useState } from 'react';
import { quizData } from './data';
import './App.css';

const Quiz=()=>{
    const [current,setCurrent]=useState(0);
    const [score,setScore]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const handleAnswer=(option)=>{
        const correct= quizData[current].answer;
        if(option === correct){
            setScore(score+1);
        }
    
    const next=current+1;
    if(next<quizData.length){
        setCurrent(next);
    }else{
        setShowResult(true);
    }
}
 return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result-box">
          <h2>Quiz Completed ✅</h2>
          <p>
            You scored <strong>{score}</strong> out of {quizData.length}
          </p>
        </div>
      ) : (
        <div className="question-box">
          <h2>Question {current + 1}</h2>
          <p>{quizData[current].question}</p>
          <div className="options">
            {quizData[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;