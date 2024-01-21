import React, { useState } from 'react';
import './styles/app.css'
function App() {
  var questions=[
    {
      question:"what is your name?",
      answers:[
        {answerText:"kaung htet aung",isCorrect:true},
        {answerText:"kaung htet",isCorrect:false},
        {answerText:"kaung  aung",isCorrect:false},
      ]
    },
    {
      question:"what is your nam?",
      answers:[
        {answerText:"kaung htet aung",isCorrect:true},
        {answerText:"kaung htet",isCorrect:false},
        {answerText:"kaung  aung",isCorrect:false},
      ]
    },
    {
      question:"what is your na?",
      answers:[
        {answerText:"kaung htet aung",isCorrect:false},
        {answerText:"kaung htet",isCorrect:true},
        {answerText:"kaung  aung",isCorrect:false},
      ]
    },
    {
      question:"what is your n?",
      answers:[
        {answerText:"kaung htet aung",isCorrect:true},
        {answerText:"kaung htet",isCorrect:false},
        {answerText:"kaung  aung",isCorrect:false},
      ]
    },
    
  ]

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);
  const next=(isCorrect)=>{
    if(isCorrect===true){
       setScore(score+1)
    }
   // alert(`you are ${isCorrect}`)
    const next=currentQuestion+1;
    if(next<questions.length){
      setcurrentQuestion(next)
    }else{
      setShowScore(true)

    }
  }
  return (
    <div className="app">
      {showScore?
         (
           <h2>you are score {score} out of {questions.length}</h2>
         ):(
          <>
          <h3>{ questions[currentQuestion].question}</h3>
       
          {
             questions[currentQuestion].answers.map(ans=>{
              return(
                <button 
                   className='btn'
                   onClick={()=>{next(ans.isCorrect)}}>
                    {ans.answerText}
                </button>
              )
              
             })
          }
        </>
         )
      }
    
    </div>
  );
}

export default App;
