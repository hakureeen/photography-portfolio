interface GalleryCardProps {
  imageUrl: string
  title: string
}

// A single photo in the grid. Shows just the photo normally,
// and fades in a dark overlay + title text when you hover over it.
function GalleryCard({ imageUrl, title }: GalleryCardProps) {
  return (
    // "group" lets the overlay below react to hovering on this
    // whole card, not just the image itself.
    <div className="group relative aspect-square overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay: invisible by default (opacity-0), fades in on hover. */}
      <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/50">
        <p className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard