import React from 'react'
import Navbar from '../components/Navbar'
import Services from './Services'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Services />
        <Blog />
    </div>
  )
}

export default Home