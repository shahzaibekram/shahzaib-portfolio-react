import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
