import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import Home from './components/pages/Home/Home'
import Auth from './components/pages/Auth/Auth'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Home/>} />
        <Route path='/new-workout' element={<NewWorkout/>} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </Router>
  )
}

export default App
