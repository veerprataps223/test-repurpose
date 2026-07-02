import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">Re</span>loop
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>
            Book a call
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
