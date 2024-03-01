import React from 'react';
import Header from './Section/Header'
import Hero from './Section/Hero'
import Collections from './Section/Collections'
import BestSellers from './Section/BestSellers'
import Banner from './Section/Banner'
import NewArrival from './Section/NewArrival'
import Clients from '.Section/Clients'
import Blogs from './Section/Blogs'
import Footer from './Section/Footer'



const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Collections />
    <BestSellers />
    <Banner />
    <NewArrival />
    <Clients />
    <Blogs />
    <Footer />
    </>
  )
}

export default App