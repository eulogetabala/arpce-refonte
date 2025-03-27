import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Cible from '../Components/Cible'
import Actu from '../Components/Actu'
import Video from '../Components/Video'
import Call from '../Components/Call'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div>
     <NavBar />
     <Hero />
     <About />
     <Cible />
     <Actu />
     <Video />
     <Call />
     <Footer />
    </div>
  )
}

export default Home
