import React from 'react'
import './App.css'
import Lenis from 'lenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from './Components/LandingPage'
import Login from './Components/Login'
import Blog from './Components/Bloging'

function App() {
  // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.3
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/blog' element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
