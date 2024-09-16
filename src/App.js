import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import ProblemSolved from './components/ProblemSolved'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <ProblemSolved/>
      <Contacts/>
      <SocialLinks/>
    </div>
  )
}

export default App
