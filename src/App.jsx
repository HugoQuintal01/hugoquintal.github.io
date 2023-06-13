import React from 'react'
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import FirstSection from './components/firstSection/FirstSection'
import CssSection from './components/cssSection/CssSection'
import Cursor from './components/cursor/Cursor'




const App = () => {

  return (
    <>
    <Cursor/>
    <Header/>
    <FirstSection/>
    <AboutMe/>
    <About/>
    <CssSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App