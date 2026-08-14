import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/glossary', label: 'Doctor-Speak Glossary' },
  { to: '/diagnosis-process', label: 'How Diagnosis Works' },
  { to: '/care-options', label: 'Care Options' },
  { to: '/provider-bias', label: 'Recognizing Bias' },
  { to: '/patient-rights', label: 'Patient Rights' },
  { to: '/youth-school', label: 'Youth & School' },
  { to: '/for-family', label: 'For Family & Friends' },
  { to: '/postpartum-psychosis', label: 'Postpartum Psychosis' },
  { to: '/scripts', label: 'Scripts & Forms' },
  { to: '/helplines', label: 'Helplines' },
  { to: '/medications', label: 'Medication Info' },
  { to: '/about', label: 'About' },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <div className="crisis-strip">
        In crisis right now? Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), or call{' '}
        <strong>911</strong> if there is immediate danger.
      </div>
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              PV
            </span>
            Patient Voice
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <nav id="main-nav" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Patient Voice</strong> — free tools to help you advocate for yourself at the doctor's office.
          </div>
          <div>Educational resource only. Not medical, legal, or insurance advice.</div>
        </div>
      </footer>
    </>
  )
}

export default Layout
