import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing'

const App = () => {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Landing />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
