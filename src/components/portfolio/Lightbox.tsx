import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { PortfolioPhoto } from './portfolioData'

interface LightboxProps {
  photos: PortfolioPhoto[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index]
  const goPrev = () => onNavigate((index - 1 + photos.length) % photos.length)
  const goNext = () => onNavigate((index + 1) % photos.length)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
      >
        <X size={32} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-2 text-white/70 transition-colors hover:text-white sm:left-6"
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={photo.url}
        alt={photo.title}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          goNext()
        }}
        aria-label="Next photo"
        className="absolute right-2 text-white/70 transition-colors hover:text-white sm:right-6"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}

export default Lightbox