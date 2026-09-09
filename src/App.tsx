import { useState } from 'react'
import Navbar from './components/layout/navbar'
import SplashScreen from './components/layout/SplashScreen'
import Hero from './components/home/Hero'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Navbar />
      <Hero />
    </>
  )
}

export default App