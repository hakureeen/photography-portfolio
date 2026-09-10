import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import SplashScreen from './components/layout/SplashScreen'
import Hero from './components/home/Hero'
import ShowcaseGrid from './components/portfolio/ShowcaseGrid'
import ShowcaseGallery from './components/portfolio/ShowcaseGallery'
import About from './components/about/About'
import Reviews from './components/reviews/Reviews'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<ShowcaseGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/:slug" element={<ShowcaseGallery />} />
      </Routes>
    </>
  )
}

export default App