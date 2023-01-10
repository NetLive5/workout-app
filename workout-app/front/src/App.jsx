import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import Home from './components/pages/Home/Home'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Home/>} />
        <Route path='/new-workout' element={<NewWorkout/>} />
      </Routes>
    </Router>
  )
}

export default App
