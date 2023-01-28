import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <div className="top_section">
        <Navbar />
        <Hero />
      </div>
      <Service />
      <Footer/>
    </div>
  )
}

export default Home