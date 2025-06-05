import React from 'react'
import Header from './components/Header'
import './App.css'
import Section1 from './components/Main/Section1'
import Card1 from './components/Main/Section2.jsx/Card1'
import Card2 from './components/Main/Section2.jsx/Card2'
import Card3 from './components/Main/Section2.jsx/Card3'
import Card4 from './components/Main/Section2.jsx/Card4'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Section1/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Footer/>
    </div>
  )
}

export default App