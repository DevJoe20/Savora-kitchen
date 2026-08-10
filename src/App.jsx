// import { useState } from 'react'

import About from "./components/About"
import FinalCta from "./components/FinalCta"
import Footer from "./components/Footer"
import Gallery from "./components/Gallary"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PolpularMenu from "./components/PopularMenu"
import Testimonial from "./components/Testimonial"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <PolpularMenu />
        <WhyChooseUs />
        <About />
        <Gallery />
        <Testimonial />
        <FinalCta />
        <Footer />
      </div>
    </>
  )
}

export default App
