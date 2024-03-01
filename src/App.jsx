import React from 'react'
import Header from './sections/Header'
import Collections from './sections/Collections'
import Hero from './sections/Hero'
import BestSellers from './sections/BestSellers'
import Banner from './sections/Banner'
import NewArrivals from './sections/NewArrivals'
import Clients from './sections/Clients'
import Blogs from './sections/Blogs'
import Footer from './sections/Footer'
import { DarkModeProvider } from './Components/DarkmodeContext'

const App = () => {
  return (
   <>
   <DarkModeProvider>
   <Header />
   <Hero />
   <Collections />
   <BestSellers />
   <Banner />
   <NewArrivals />
   <Clients />
   <Blogs />
   <Footer />
   </DarkModeProvider>
   </>
  )
}

export default App