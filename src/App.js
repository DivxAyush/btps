
import Footer from './Components/Footer';
import Header from './Components/Header';
import Section from './Components/Section';
import Courses from './Components/Courses';
import Admission from './Components/Admission';
import Lenis from '@studio-freight/lenis'
import{BrowserRouter,Routes,Route,}from 'react-router-dom'
import { useState } from 'react';
import { counter } from '@fortawesome/fontawesome-svg-core';
function App() {
  const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route  path="/" element={<Section/>}/>
    <Route  path="/Courses" element={<Courses/>}/>
    <Route  path="/Admission" element={<Admission/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
