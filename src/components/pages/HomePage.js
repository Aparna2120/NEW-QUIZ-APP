
import React, { useState } from 'react'
import Navbar from './navbar'


const HomePage = () => {


  const questions = [
    {
      questionText: 'Who is Prime Minister of India?',
      answerOptions: [
        { answerText: 'Vijay Rupani', isCorrect: false },
        { answerText: 'Manmohan singh', isCorrect: false },
        { answerText: 'Narendra Modi', isCorrect: true },
        { answerText: 'Deep Patel', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ratan Tata', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Gautam Adani', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the name of the biggest technology company in South Korea?',
      answerOptions: [
        { answerText: 'Samsung', isCorrect: true },
        { answerText: 'Vivo', isCorrect: false },
        { answerText: 'Motorola', isCorrect: false },
        { answerText: 'Nokia', isCorrect: false },
      ],
    },
    {
      questionText: 'What geometric shape is generally used for stop signs?',
      answerOptions: [
        { answerText: 'Decagon', isCorrect: false },
        { answerText: 'Hexagon', isCorrect: false },
        { answerText: 'polygon', isCorrect: false },
        { answerText: 'Octagon', isCorrect: true },
      ],
    },
    {
      questionText: 'How many languages are written from right to left?',
      answerOptions: [
        { answerText: '14', isCorrect: false },
        { answerText: '9', isCorrect: false },
        { answerText: '12', isCorrect: true },
        { answerText: '8', isCorrect: false },
      ],
    },
    {
      questionText: `What is the name of the World's largest ocean?`,
      answerOptions: [
        { answerText: 'Pacific Ocean', isCorrect: true },
        { answerText: 'Atlantic Ocean', isCorrect: false },
        { answerText: 'Arctic Ocean', isCorrect: false },
        { answerText: 'Indian Ocean', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country invented ice cream?',
      answerOptions: [
        { answerText: 'Korea', isCorrect: false },
        { answerText: 'Egypt', isCorrect: false },
        { answerText: 'China', isCorrect: true },
        { answerText: 'India', isCorrect: false },
      ],
    },
    {
      questionText: 'Which Disney Princess talks to the most animals?',
      answerOptions: [
        { answerText: 'Snow White', isCorrect: true },
        { answerText: 'Alice', isCorrect: false },
        { answerText: 'Cinderella', isCorrect: false },
        { answerText: 'Jasmine', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [txt, setTxt] = useState('')


  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
      clearTimeout(downloadTimer)
    }
    else {
      setShowScore(true)
      document.getElementById("countdown").style.display = "none";
    }
  }

  var timeleft = 10;
  var downloadTimer = setInterval(function () {

    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      const nextQuetions = currentQuestion + 1;
      if (nextQuetions < questions.length) {
        setCurrentQuestion(nextQuetions);
      }
      else {
        setShowScore(true)
        document.getElementById("countdown").style.display = "none";
      }

    } else {
      document.getElementById("countdown").innerHTML = timeleft;
   
    }
    timeleft -= 1;

  }, 1000);



  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <div className="primary-button progress">
          Progress : &nbsp;&nbsp;  <span>Question {currentQuestion + 1}/{questions.length}</span>
        </div>

        <div id='countdown'>
          <h2 id='countdown-text'>
          </h2>
        </div>
      </div>

      <div className="app">
        <h1 className='header'>Quiz</h1>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default HomePage



