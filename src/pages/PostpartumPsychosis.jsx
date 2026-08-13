import { Link } from 'react-router-dom'
import {
  comparisonConditions,
  emergencySteps,
  resources,
  riskFactors,
  treatmentFacts,
  warningSigns,
} from '../data/postpartumPsychosis'

function PostpartumPsychosis() {
  return (
    <>
      <span className="pill">Postpartum Psychosis</span>
      <h1>Postpartum Psychosis: What It Is, and Why It's an Emergency</h1>
      <p className="lede">
        Postpartum psychosis is rare, but it moves fast and it's serious — knowing the warning signs before
        they show up is one of the most useful things a new parent or their support system can do.
      </p>

      <div className="crisis-box">
        <p>
          <strong>If you're seeing the warning signs below right now, this is a medical emergency.</strong>{' '}
          Call <strong>911</strong> or go to the nearest emergency room, or call or text <strong>988</strong>.
          Don't wait to see if it passes.
        </p>
      </div>

      <div className="disclaimer">
        <strong>Not a diagnostic tool.</strong> This page is meant to help you recognize when something needs
        urgent professional attention — only a clinician can diagnose postpartum psychosis.
      </div>

      <h2 className="section-title">How it's different from baby blues, PPD, and PPA</h2>
      <p className="section-subtitle">
        These conditions are often confused with each other. Knowing which one you're looking at changes how
        urgently you need to act.
      </p>
      <div className="card-grid">
        {comparisonConditions.map((c) => (
          <div className="info-block" key={c.title}>
            <h3>
              {c.title}
              {c.emergency ? ' — Emergency' : ''}
            </h3>
            <p style={{ marginBottom: 8 }}>
              <strong>How common:</strong> {c.howCommon}
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong>Onset:</strong> {c.onset}
            </p>
            <p>{c.whatItLooksLike}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Warning signs</h2>
      <p className="section-subtitle">Onset is usually sudden, within the first two weeks after birth, and symptoms can escalate within hours to days.</p>
      <ul className="checklist">
        {warningSigns.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>

      <h2 className="section-title">Risk factors worth knowing in advance</h2>
      <p className="section-subtitle">Especially useful to discuss with a provider during pregnancy, not after.</p>
      <ul className="checklist">
        {riskFactors.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <h2 className="section-title">If you suspect postpartum psychosis</h2>
      <div className="crisis-box">
        <ul className="checklist">
          {emergencySteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <h2 className="section-title">Treatment &amp; recovery</h2>
      <div className="card-grid">
        {treatmentFacts.map((t) => (
          <div className="info-block" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>

      <p style={{ margin: '28px 0 0' }}>
        Preparing before delivery? <Link to="/scripts/postpartum-psychosis-action-plan">Get the Postpartum Psychosis Action Plan →</Link>{' '}
        And for recognizing changes in someone you love more broadly, see{' '}
        <Link to="/for-family">For Family &amp; Friends</Link>.
      </p>

      <h2 className="section-title">Resources</h2>
      <div className="card-grid">
        {resources.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="card">
            <h3>{r.name}</h3>
            <p>{r.description}</p>
          </a>
        ))}
      </div>
    </>
  )
}

export default PostpartumPsychosis
