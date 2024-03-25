import React from 'react';
import './App.css'

// components import
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features';
import Creative from './components/Creative/Creative';
import AboutUs from './components/AboutUs/AboutUs';
import Testimonials from './components/Testimonials/Testimonials';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Creative/>
      <AboutUs/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App