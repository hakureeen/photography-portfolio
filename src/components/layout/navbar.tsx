import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logoclean.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/reviews', label: 'Reviews' },
  ]

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `text-lg transition-opacity hover:opacity-70 ${
      isActive ? 'text-[#c97a3d]' : ''
    }`

  return (
    <nav className="w-full px-4 py-2 sm:px-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Photography logo"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop / tablet navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClassName}>
              {link.label}
            </NavLink>
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
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={linkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar