import React from 'react'
import Navbar from '../components/Navbar'
import Services from './Services'
import Blog from './Blog'
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
      <About />
        <Services />
        <Blog />
    </div>
  );
};

export default Home;
