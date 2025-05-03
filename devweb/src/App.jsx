import React from 'react'
import HeroSection from './Components/HeroSection'
import RecentProjects from './Components/RecentProjects'
import BestServices from './Components/BestServices'
import Me from './Components/Me'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <br />
      <HeroSection />
      <RecentProjects />
      <BestServices />
      <Me />
      <Contact />
      <Footer />
    </div>
  )
}

export default App