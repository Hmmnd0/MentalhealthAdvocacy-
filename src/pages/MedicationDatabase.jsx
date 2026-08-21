import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import medicationClasses from '../data/medicationClasses'

function MedClassCard({ med }) {
  return (
    <div className="med-class-card">
      <div className="med-class-header">
        <h3>{med.className}</h3>
      </div>
      <p className="med-class-examples">
        <strong>Common examples:</strong> {med.commonExamples.join(', ')}
      </p>
      <p>
        <strong>What it treats:</strong> {med.whatItTreats}
      </p>
      <p>
        <strong>How it works:</strong> {med.howItWorks}
      </p>
      <p>
        <strong>Onset:</strong> {med.onsetTimeline}
      </p>
      <p className="med-class-subhead">Common side effects</p>
      <div className="chip-row">
        {med.commonSideEffects.map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>
      <div className="warning-box">
        <strong>Serious warnings:</strong> {med.seriousWarnings}
      </div>
      <div className="warning-box">
        <strong>Interaction caution:</strong> {med.majorInteractionNote}
      </div>
      <p>
        <strong>Stopping this medication class:</strong> {med.discontinuation}
      </p>
    </div>
  )
}

function MedicationDatabase() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return medicationClasses
    return medicationClasses
      .map((group) => ({
        ...group,
        classes: group.classes.filter(
          (med) =>
            med.className.toLowerCase().includes(q) ||
            med.commonExamples.some((e) => e.toLowerCase().includes(q)) ||
            med.whatItTreats.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.classes.length > 0)
  }, [query])

  const totalResults = filtered.reduce((sum, group) => sum + group.classes.length, 0)

  return (
    <>
      <span className="pill">Medication Database</span>
      <h1>Medication Class Reference</h1>
      <p className="lede">
        Search by medication class, condition, or a specific drug name (generic or brand) — like "Zoloft" or
        "SSRI" — to find general information on what it treats, how it works, timelines, and class-wide
        warnings.
      </p>

      <div className="disclaimer">
        <strong>Not medical advice, and not exhaustive.</strong> This covers common medication classes at a
        general level — not every medication, dose, or individual interaction. It doesn't replace prescribing
        information, your pharmacist, or your prescriber. For checking a specific interaction or your own
        medication's clearance time, see the tools and questions on the{' '}
        <Link to="/medications">Medication Info</Link> page. The black-box/boxed warnings referenced below are
        sourced on the <Link to="/sources">Sources &amp; Methodology</Link> page.
      </div>

      <input
        type="search"
        className="search-box"
        placeholder='Search a class, drug, or condition, e.g. "SSRI," "Xanax," or "ADHD"'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search medication database"
      />

      {totalResults === 0 && <p className="no-results">No matches for "{query}". Try a different term.</p>}

      {filtered.map((group) => (
        <div className="glossary-category" key={group.category}>
          <h2>{group.category}</h2>
          {group.classes.map((med) => (
            <MedClassCard med={med} key={med.id} />
          ))}
        </div>
      ))}
    </>
  )
}

export default MedicationDatabase
