import { useMemo, useState } from 'react'
import glossary from '../data/glossary'

function Glossary() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return glossary
    return glossary
      .map((cat) => ({
        ...cat,
        terms: cat.terms.filter(
          (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.terms.length > 0)
  }, [query])

  const totalResults = filtered.reduce((sum, cat) => sum + cat.terms.length, 0)

  return (
    <>
      <span className="pill">Glossary</span>
      <h1>Doctor-Speak, Translated</h1>
      <p className="lede">
        Understanding the words your doctor uses helps you ask sharper questions and catch when something
        doesn't add up. Search or browse by category below.
      </p>

      <input
        type="search"
        className="search-box"
        placeholder="Search a term, e.g. &quot;titration&quot; or &quot;insight&quot;"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search glossary terms"
      />

      {totalResults === 0 && <p className="no-results">No terms match "{query}". Try a different word.</p>}

      {filtered.map((cat) => (
        <div className="glossary-category" key={cat.category}>
          <h2>{cat.category}</h2>
          <dl>
            {cat.terms.map((t) => (
              <div className="term-item" key={t.term}>
                <dt>{t.term}</dt>
                <dd>{t.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </>
  )
}

export default Glossary
