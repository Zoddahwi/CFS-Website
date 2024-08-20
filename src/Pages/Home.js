import React from 'react'
import Header from './Header'
import Intro from '../Components/Intro'
import Service from '../Components/Service'
import Article from '../Components/Article'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Service/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default Home
