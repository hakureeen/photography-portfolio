import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/images/logoclean.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/reviews', label: 'Reviews' },
  ]

  return (
    <nav className="w-full px-4 py-2 sm:px-6">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Photography logo"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        {/* Desktop / tablet navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile navigation button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col gap-5 px-1 pb-4 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar