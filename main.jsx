import React from 'react'
import Header from './components/Header/header'
import HeroSection from './components/heroSection/HeroSection'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
      </div>
    </div>
  )
}