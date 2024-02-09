import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Tracks from './Pages/Tracks'
import innerpage1 from './Homeinnerpages/Innerpage_1'
import Footer from './Component/Footer'

const App = () =>{
  return (
   <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/tracks' element={<Tracks />}/>
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
