import React from 'react'
import Navbar from '../components/Navbar'
import Services from './Services'
import Blog from './Blog'
import Hero from './Hero' 
import About from './About'
import Team from './Team'
import Footer from './Footer'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Blog />
        <Team />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;
