import './App.css'
import React from 'react'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
