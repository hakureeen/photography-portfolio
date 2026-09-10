import { Link } from 'react-router-dom'
import { showcases } from './portfolioData'

function ShowcaseGrid() {
  return (
    <main className="px-6 py-16 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {showcases.map((showcase) => (
          <Link
            key={showcase.slug}
            to={`/${showcase.slug}`}
            className="group relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={showcase.cover}
              alt={showcase.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-black/30 p-6 transition-colors duration-300 group-hover:bg-black/50">
              <h2 className="font-display text-3xl italic text-white">
                {showcase.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default ShowcaseGrid