import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './component/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />




      </Routes>

    </div>
  )
}

export default App
