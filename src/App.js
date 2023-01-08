import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import botSettings from './File/bot.json'
import Header from './components/Header/Header'
import QuizList from './components/QuizList'

function App() {
  const [cardList, setCardList] = useState([])
  
  const [testObject, setTestObject] = useState([])

  const GetReadyObject = (quiz, index) => {
    let prevTestObject = testObject
    prevTestObject[index] = quiz

    setTestObject(prevTestObject)
  }

  const SendTestInTelegram = () => {
    // console.log(testObject)

    // let request = new XMLHttpRequest()
    // request.open('GET', './File/bot.json', true)
    // request.responseType = 'json'

    // request.onload = () => {
    //   console.log(request.response)
    // }

    // request.send()

    // fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURI(text)}&parse_mode=HTML`)

    // fetch('./File/bot.json').then(response => response.json()).then(res => console.log(res))

    const text = `новый тест: <code>${JSON.stringify(testObject)}</code>`
    axios.get(`https://api.telegram.org/bot${botSettings.token}/sendMessage?chat_id=${botSettings.chatID}&text=${encodeURI(text)}&parse_mode=HTML`)

  }

  return (
    <div className="App">
      <Header />

      <button onClick={() => setCardList([...cardList, 'option'])}>Создать вопрос с вариантами ответа</button>

      <button onClick={() => setCardList([...cardList, 'input'])}>Создать вопрос с вводом ответа</button>

      <hr />
      <QuizList list={cardList} ResultFunction={GetReadyObject} />
      <hr />

      <button onClick={() => SendTestInTelegram()}>Готово</button>
    </div>
  )
}

export default App