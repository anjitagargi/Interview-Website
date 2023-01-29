import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service';
import Footer from '../../components/Footer/Footer';
import Review from '../../components/Review/Review';
import AppPage from '../../components/AppPage/AppPage';
import Contributor from '../../components/Contributor/Contributor.js';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <div className="top_section">
        <Navbar />
        <Hero />
      </div>
      <Service />
      <AppPage/>
      <Contributor/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home