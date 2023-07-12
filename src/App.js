import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import Category from './pages/Category'
import Details from './pages/Details'
import Search from './pages/Search'




const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/movie/:category' element={<Category />}></Route>

          <Route path='/movie/detail/:id' element={<Details />}></Route>
          <Route path='/searchmovie/:search' element={<Search />}></Route>
        </Route>



      </Routes>
    </div>
  )
}

export default App