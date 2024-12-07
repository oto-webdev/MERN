import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path='/' />
        </Routes>
      </div>
    </Router>
  )
}

export default App;