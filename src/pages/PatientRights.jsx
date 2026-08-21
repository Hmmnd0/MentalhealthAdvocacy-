import { Link } from 'react-router-dom'
import { coreRights, invokingRightsPhrases } from '../data/patientRights'

function PatientRights() {
  return (
    <>
      <span className="pill">Patient Rights</span>
      <h1>Patient Rights &amp; Legal Protections</h1>
      <p className="lede">
        Most patients don't learn what protections they actually have until they need one. These are the
        rights that show up most often in mental health care specifically — knowing them in advance makes it
        far easier to notice when something's off and to speak up with confidence.
      </p>

      <div className="disclaimer">
        <strong>Not legal advice.</strong> Rights around involuntary holds, minors' consent, and accommodations
        vary significantly by state and situation. This page is a general starting point — for anything
        high-stakes, confirm specifics with a patient advocate, legal aid organization, or attorney in your
        state. Federal rules cited here (HIPAA, mental health parity) are sourced on the{' '}
        <Link to="/sources">Sources &amp; Methodology</Link> page.
      </div>

      <p style={{ margin: '8px 0 32px' }}>
        Want a quick-reference version? <Link to="/scripts/know-your-rights-card">Get the Know-Your-Rights Card →</Link>
      </p>

      <h2 className="section-title">Core rights</h2>
      <div className="card-grid">
        {coreRights.map((r) => (
          <div className="info-block" key={r.title}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Phrases for invoking these rights</h2>
      <p className="section-subtitle">Saying it out loud, plainly, is often enough to change how a conversation goes.</p>
      <ul className="checklist">
        {invokingRightsPhrases.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <div className="disclaimer" style={{ marginTop: 40 }}>
        Related tools: <Link to="/scripts/medical-records-request">Medical Records Request Letter</Link>,{' '}
        <Link to="/scripts/insurance-appeal">Insurance Appeal Letter</Link>, and{' '}
        <Link to="/scripts/psychiatric-advance-directive">Psychiatric Advance Directive</Link>.
      </div>
    </>
  )
}

export default PatientRights
