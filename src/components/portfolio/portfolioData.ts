const portfolioFiles = import.meta.glob('/src/assets/images/portfolio/**/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export interface PortfolioPhoto {
  url: string
  title: string
}

export interface Showcase {
  slug: string
  name: string
  cover: string
  photos: PortfolioPhoto[]
}

// give a folder a nicer display name than its raw folder name.
const SHOWCASE_NAMES: Record<string, string> = {
  Showcase1: 'AJ & Jermaine',
  Showcase2: 'JL & DA',
}

function filenameToTitle(path: string): string {
  const filename = path.split('/').pop() ?? ''
  const nameWithoutExtension = filename.replace(/\.[^/.]+$/, '')
  const spaced = nameWithoutExtension.replace(/[-_]/g, ' ')
  return spaced.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

// e.g. "/src/assets/images/portfolio/Showcase1/photo.jpg" -> "Showcase1"
function folderNameFromPath(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 2] ?? 'Portfolio'
}

function autoDisplayName(folderName: string): string {
  return folderName.replace(/([a-z])([0-9])/i, '$1 $2')
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const showcaseMap = new Map<string, Showcase>()

Object.keys(portfolioFiles)
  .sort()
  .forEach((path) => {
    const folderName = folderNameFromPath(path)
    const name = SHOWCASE_NAMES[folderName] ?? autoDisplayName(folderName)
    const slug = slugify(name)
    const url = portfolioFiles[path]
    const photo: PortfolioPhoto = { url, title: filenameToTitle(path) }

    const existing = showcaseMap.get(slug)
    if (existing) {
      existing.photos.push(photo)
    } else {
      showcaseMap.set(slug, {
        slug,
        name,
        cover: url,
        photos: [photo],
      })
    }
  })

export const showcases: Showcase[] = Array.from(showcaseMap.values())

export function getShowcase(slug: string): Showcase | undefined {
  return showcases.find((showcase) => showcase.slug === slug)
}