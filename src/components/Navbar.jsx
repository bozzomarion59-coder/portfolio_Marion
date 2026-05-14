import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SECTIONS = [
  { id: 'about', label: 'À propos' },
  { id: 'alternance', label: 'Alternance' },
  { id: 'skills', label: 'Compétences' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    if (onHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={() => handleNav('top')}>
          <img src="/portfolio_Marion/images/Logo.png" alt="" className="nav__logo" />
          <span>Marion Bozzo</span>
        </Link>

        <button
          className="nav__toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav__links ${open ? 'is-open' : ''}`}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              {onHome ? (
                <a href={`#${s.id}`} onClick={() => handleNav(s.id)}>
                  {s.label}
                </a>
              ) : (
                <Link to={`/#${s.id}`} onClick={() => setOpen(false)}>
                  {s.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://github.com/bozzomarion59-coder"
              target="_blank"
              rel="noreferrer"
              className="nav__cta"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
