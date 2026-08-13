import { Link } from 'react-router-dom'
import scripts from '../data/scripts'

function Scripts() {
  return (
    <>
      <span className="pill">Scripts &amp; Forms</span>
      <h1>Scripts &amp; Printable Forms</h1>
      <p className="lede">
        Fill these out on screen or print them blank to write on by hand. Each one is designed to be brought
        into an appointment — they're prompts, not requirements, so skip anything that doesn't apply.
      </p>

      <div className="card-grid">
        {scripts.map((s) => (
          <Link key={s.id} to={`/scripts/${s.id}`} className="card">
            <h3>{s.title}</h3>
            <p>{s.purpose}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Scripts
