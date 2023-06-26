import React from 'react'
import './home.css'
import Header from '../homeComponents/header/Header'
import Announcement from '../homeComponents/annoucement/Announcement'
import Services from '../homeComponents/services/Services'
import Products from '../homeComponents/products/Products'
import Agents from '../homeComponents/agent/Agents'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Announcement/>
        <Services/>
        <Products/>
        <Agents/>
    </div>
  )
}

export default Home