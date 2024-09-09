import React from 'react'
import Header from './Header'
import Intro from '../Components/Intro'
import Service from '../Components/Service'
import Footer from '../Components/Footer'
import Article from '../Components/Article'



const Home = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Service/>
      <Article/>
      {/* <Slider/> */}
      <Footer/>
    </div>
  )
}
export default Home
