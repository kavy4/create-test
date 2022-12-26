import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import QuizList from './components/QuizList'

function App() {
  const [cardList, setCardList] = useState([])

  return (
    <div className="App">
      <Header />

      <button onClick={() => setCardList([...cardList, 'option'])}>Создать вопрос с вариантами ответа</button>

      <button onClick={() => setCardList([...cardList, 'input'])}>Создать вопрос с вводом ответа</button>

      <hr />
      <QuizList list={cardList} />
      <hr />

      <button>Готово</button>
    </div>
  )
}

export default App