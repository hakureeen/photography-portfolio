import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShowcase } from './portfolioData'
import GalleryCard from './GalleryCard'
import Lightbox from './Lightbox'

function ShowcaseGallery() {
  const { slug } = useParams<{ slug: string }>()
  const showcase = slug ? getShowcase(slug) : undefined
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!showcase) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="text-lg text-[#9a968f]">Showcase not found.</p>
        <Link
          to="/portfolio"
          className="mt-6 inline-block w-fit border-b border-[#c97a3d] pb-1 hover:opacity-70"
        >
          ← Back to Portfolio
        </Link>
      </main>
    )
  }

  return (
    <main className="px-6 py-16 sm:px-10 md:px-14">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="font-display text-4xl italic">{showcase.name}</h1>
        <Link
          to="/portfolio"
          className="text-sm text-[#9a968f] transition-opacity hover:opacity-70"
        >
          ← Back to Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {showcase.photos.map((photo, index) => (
          <GalleryCard
            key={photo.url}
            imageUrl={photo.url}
            title={photo.title}
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={showcase.photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </main>
  )
}

export default ShowcaseGallery