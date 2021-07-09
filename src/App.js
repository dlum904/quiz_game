
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const questions = {
    1: {
      type: "Single Answer",
      question: "Where would you find the Empire State building?",
      options: ["New York", "Los Angeles", "San Francisco", "New Orleans"],
      answer: ["New York"]
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

 
  const [currentQuestion, setCurrentQuestion] = useState(1);

  let score = 0;
  let choice = [];
  // when we submit the question, we will setScore and setCurrentQuestion to advance to next question
  const submit = () => {
    console.log("sumbitted")
    // debugger
    if (checkAnswer()) {
      score += 100
      alert("correct")
    } else alert("wrong");
    setCurrentQuestion(currentQuestion + 1);
  }
  
  const checkAnswer = () => {
    let answerArray = questions[currentQuestion].answer.sort();
    let choiceArray = choice.sort();
    let output = true;
    debugger
    answerArray.forEach((ele, idx) => {
      if (answerArray[idx] !== choiceArray[idx]) output = false;
    })
    return output;
  }

  const updateChoice = (ele) => {
    if (choice.includes(ele)) {
      debugger
      choice = choice.filter((el) => el !== ele)
    } else choice.push(ele);
    debugger
  }

  return currentQuestion === 1 ? (
    // QUESTION 1
    <div className="App">
      {questions[currentQuestion].question}
      {questions[currentQuestion].options.map((ele,idx) => {
        return (
          <li key={idx}>
            <label >{ele}</label>
            <input
            type="radio"
            onClick={()=>updateChoice(ele)}
              />
          </li>
        )
      })}
      <button type="submit" onClick={() => submit()}>Submit</button>
    </div>
  ) : currentQuestion === 2 ? (
    // QUESTION 2
      <div className="App">
        {questions[currentQuestion].question}
          {questions[currentQuestion].options.map((ele, idx) => {
            return (
              <li key={idx}>
                <label >{ele}</label>
                <input
                  type="checkbox"
                  onChange={() => updateChoice(ele)}
                />
              </li>
            )
          })}
        <button type="submit" onClick={() => submit()}>Submit</button>
      </div>
  ) :
    // QUESTION 3
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
