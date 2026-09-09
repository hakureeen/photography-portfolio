interface GalleryCardProps {
  imageUrl: string
  title: string
}

function GalleryCard({ imageUrl, title }: GalleryCardProps) {
  return (

    <div className="group relative aspect-square overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/50">
        <p className="text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard
