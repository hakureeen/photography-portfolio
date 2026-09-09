import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'

interface SplashScreenProps {
  onFinish: () => void
}

const DISPLAY_MS = 800 // logo stays fully visible
const FADE_MS = 3300 // fade-out transition

function SplashScreen({ onFinish }: SplashScreenProps) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), DISPLAY_MS)
    const finishTimer = setTimeout(onFinish, DISPLAY_MS + FADE_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-[600ms] ease-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <img
        src={logo}
        alt=""
        className="h-auto w-4/5 max-w-4xl sm:w-2/3"
      />
    </div>
  )
}

export default SplashScreen