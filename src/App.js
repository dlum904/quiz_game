
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const questions = {
    1: {
      type: "Single Answer",
      question: "Where would you find the Empire State building?",
      options: ["New York", "Los Angeles", "San Francisco", "New Orleans"],
      answer: "New York"
    },
    2: {
      type: "Multiple Answer",
      question: "Identify the components of a PC",
      options: ["Processor", "Memory", "Hard Disk", "CD-ROM Drive", "Printer"],
      answer: ["Processor", "Memory", "Hard Disk", "CD-ROM Drive"]
    },
    3: {
      type: "Single Answer Fill in the Blank",
      question: "_____ is a character in the film 'The Matrix'.",
      instructions: "Select your answer by draggin an option into position. Then click OK",
      options: ["R2D2", "Neo", "Ripley"],
      answer: ["Neo"]
    }
  }

  const [score, setScore] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(1);

  // when we submit the question, we will setScore and setCurrentQuestion to advance to next question
  const submit = () => {

  }
  
  return currentQuestion === 1 ? (
    <div className="App">
      {questions[currentQuestion].question}
      {questions[currentQuestion].options.map((ele,idx) => {
        return (
            <div key={idx}>
              <label className="questionLabel"/>{idx}
              {ele}
            </div>
        )
      })}
    </div>
  ) : currentQuestion === 2 ? (
    <div className="App">
      2
    </div>
  ) :
  (
    <div className="App">
      3
    </div>
  )
  // return (
  //   <div className="App">
  //     {questions[currentQuestion].question}
  //     {questions[currentQuestion].options}
  //   </div>
  // );
}

export default App;
