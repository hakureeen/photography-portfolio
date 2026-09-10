interface GalleryCardProps {
  imageUrl: string
  title: string
  onClick?: () => void
}

function GalleryCard({ imageUrl, title, onClick }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-square cursor-pointer overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
    </button>
  )
}

export default GalleryCard