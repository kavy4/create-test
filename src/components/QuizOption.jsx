import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuizOption = ({index}) => {
  const quizSessionStorage = `question${index}`

  if (!sessionStorage.getItem(quizSessionStorage)) {
    sessionStorage.setItem(quizSessionStorage, JSON.stringify({ id: uuidv4(), question: '', answers: ['', '', ''] }))
  }

  const quizSessionStorageBody = JSON.parse(sessionStorage.getItem(quizSessionStorage))
  
  const [question, setQuestion] = useState(quizSessionStorageBody.question)

  const [answer1, setAnswer1] = useState(quizSessionStorageBody.answers[0])
  const [answer2, setAnswer2] = useState(quizSessionStorageBody.answers[1])
  const [answer3, setAnswer3] = useState(quizSessionStorageBody.answers[2])

  const CreateSessionStorage = (setState, event) => {
    if (setState == 'setQuestion') {
      setQuestion(event)
      sessionStorage.setItem(quizSessionStorage, JSON.stringify({ id: quizSessionStorageBody.id, question: event, answers: [answer1, answer2, answer3] }))
    }
    else {
      if (setState == 'setAnswer1') {
        setAnswer1(event)
        sessionStorage.setItem(quizSessionStorage, JSON.stringify({ id: quizSessionStorageBody.id, question: question, answers: [event, answer2, answer3] }))
      }
      else {
        if (setState == 'setAnswer2') {
          setAnswer2(event)
          sessionStorage.setItem(quizSessionStorage, JSON.stringify({ id: quizSessionStorageBody.id, question: question, answers: [answer1, event, answer3] }))
        }
        else {
          setAnswer3(event)
          sessionStorage.setItem(quizSessionStorage, JSON.stringify({ id: quizSessionStorageBody.id, question: question, answers: [answer1, answer2, event] }))
        }
      }
    }
  }
  
  return (
    <div className='quiz-card'>
        <label>Вопрос {question}</label>
        <input type="text" value={question} onChange={event => CreateSessionStorage('setQuestion', event.target.value)} />

        <div className='quiz-group'>
            <label>Ответ 1 {answer1}</label>
            <input type="text" value={answer1} onChange={event => CreateSessionStorage('setAnswer1', event.target.value)} />
        </div>

        <div className='quiz-group'>
            <label>Ответ 2 {answer2}</label>
            <input type="text" value={answer2} onChange={event => CreateSessionStorage('setAnswer2', event.target.value)} />
        </div>

        <div className='quiz-group'>
            <label>Ответ 3 {answer3}</label>
            <input type="text" value={answer3} onChange={event => CreateSessionStorage('setAnswer3', event.target.value)} />
        </div>
    </div>
  )
}

export default QuizOption