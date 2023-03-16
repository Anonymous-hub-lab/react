import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './component/Header'

import Home from './pages/Home'


const App = () => {

  const [date, setDate] = useState(new Date());


  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return (
    <div>
      <h1> {date.getHours()}:
        {date.getMinutes()}:
        {date.getSeconds()}:
        {date.getMilliseconds()}</h1>

      <Routes>
        <Route path='/' element={<Home />} />





      </Routes>

    </div>
  )
}

export default App