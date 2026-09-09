import { useEffect, useState } from 'react'
const heroFiles = import.meta.glob('/src/assets/images/hero/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const portfolioFiles = import.meta.glob('/src/assets/images/portfolio/**/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const heroImages = Object.keys(heroFiles)
  .sort()
  .map((filename) => heroFiles[filename])

const portfolioImages = Object.values(portfolioFiles)

const SECONDS_PER_IMAGE = 4000
const THUMBS_PER_PAGE = 4

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length)
    }, SECONDS_PER_IMAGE)
    return () => clearInterval(timer)
  }, [])

  const [thumbnails] = useState(() => {
    return [...portfolioImages].sort(() => Math.random() - 0.5)
  })

  const [page, setPage] = useState(0)
  const totalPages = Math.max(1, Math.ceil(thumbnails.length / THUMBS_PER_PAGE))
  const visibleThumbnails = thumbnails.slice(
    page * THUMBS_PER_PAGE,
    page * THUMBS_PER_PAGE + THUMBS_PER_PAGE
  )

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages)
  const goNext = () => setPage((p) => (p + 1) % totalPages)

  return (
    <section className="grid min-h-[92vh] grid-cols-1 md:grid-cols-[2fr_3fr]">
      <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14">
        <p className="mb-6 text-lg text-[#9a968f]">Time Stories Photography</p>

        <h1 className="font-display mb-8 max-w-[12ch] text-6xl italic leading-tight sm:text-7xl">
          When moments become timeless.
        </h1>

        <p className="mb-10 max-w-[38ch] text-xl leading-relaxed text-[#9a968f]">
          From quiet glances to joyful celebrations, we capture emotions as
          they unfold naturally — turning fleeting seconds into memories you
          can relive forever.
        </p>

        <a
          href="/portfolio"
          className="w-fit border-b border-[#c97a3d] pb-1 text-lg hover:opacity-70"
        >
          View the portfolio →
        </a>
      </div>

      <div className="grid grid-rows-[1fr_110px]">
        <div className="relative overflow-hidden">
          {heroImages.map((imageUrl, index) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="flex h-[110px] overflow-hidden border-t border-[#2b2926] bg-[#161513]">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photos"
            className="flex w-8 flex-shrink-0 items-center justify-center text-lg text-[#9a968f] transition hover:text-[#c97a3d]"
          >
            ‹
          </button>

          <div className="grid h-full flex-1 grid-cols-4 overflow-hidden">
            {visibleThumbnails.map((imageUrl) => (
              <img
                key={imageUrl}
                src={imageUrl}
                alt=""
                className="h-full w-full border-l border-[#2b2926] object-cover"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next photos"
            className="flex w-8 flex-shrink-0 items-center justify-center border-l border-[#2b2926] text-lg text-[#9a968f] transition hover:text-[#c97a3d]"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero