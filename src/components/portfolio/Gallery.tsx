import GalleryCard from './GalleryCard'

// Same trick we used for the hero: automatically grab every image
// in this folder, whatever it's named. Add or remove photos later
// and this picks them up with no code changes.
const portfolioFiles = import.meta.glob('/src/assets/images/portfolio/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

// Turn a filename like "beach-wedding-01.jpg" into a readable
// title like "Beach Wedding 01" to show on hover.
function filenameToTitle(path: string): string {
  const filename = path.split('/').pop() ?? ''
  const nameWithoutExtension = filename.replace(/\.[^/.]+$/, '')
  const spaced = nameWithoutExtension.replace(/[-_]/g, ' ')
  return spaced.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function Gallery() {
  const photos = Object.keys(portfolioFiles).map((path) => ({
    url: portfolioFiles[path],
    title: filenameToTitle(path),
  }))

  return (
    <section className="px-6 py-16 sm:px-10 md:px-14">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo) => (
          <GalleryCard key={photo.url} imageUrl={photo.url} title={photo.title} />
        ))}
      </div>
    </section>
  )
}

export default Gallery