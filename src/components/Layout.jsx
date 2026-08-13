import { NavLink, Outlet } from 'react-router-dom'

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
          <nav className="main-nav" aria-label="Main">
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
