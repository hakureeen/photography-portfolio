import { useState } from 'react'
import Navbar from './components/layout/navbar'
import SplashScreen from './components/layout/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Photography Portfolio
        </h1>
      </main>
    </>
  )
}

export default App