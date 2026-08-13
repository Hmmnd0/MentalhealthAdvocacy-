import { Link } from 'react-router-dom'
import { actionSteps, affirmingDirectories, biasCategories, visitTells } from '../data/providerBias'

function ProviderBias() {
  return (
    <>
      <span className="pill">Recognizing Bias</span>
      <h1>Is Bias Affecting Your Care?</h1>
      <p className="lede">
        Sometimes something feels off in a visit and it's hard to name why. Bias in healthcare — around race,
        gender, weight, age, disability, sexuality, or class — is well documented in research, and it tends to
        show up as a pattern rather than one bad moment. Knowing the common shapes it takes makes it easier to
        notice, document, and respond to.
      </p>

      <div className="disclaimer">
        <strong>This isn't an accusation tool.</strong> A single frustrating visit doesn't prove bias, and
        good providers have off days. This page is meant to help you notice patterns across visits, not judge
        any one interaction in isolation.
      </div>

      <p style={{ margin: '8px 0 32px' }}>
        Want to track this over time? <Link to="/scripts/was-i-heard-log">Get the Was I Heard? Visit Log →</Link>
      </p>

      <h2 className="section-title">Patterns worth watching for</h2>
      <p className="section-subtitle">
        These are documented patterns in healthcare research, not a checklist that applies to every provider —
        use them to notice, not to assume.
      </p>
      <div className="card-grid">
        {biasCategories.map((cat) => (
          <div className="info-block" key={cat.title}>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Signs across visits, not just one</h2>
      <p className="section-subtitle">Bias usually reveals itself as a repeated pattern. Watch for these across multiple appointments.</p>
      <ul className="checklist">
        {visitTells.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2 className="section-title">What you can do about it</h2>
      <ul className="checklist">
        {actionSteps.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h2 className="section-title">Identity-affirming provider directories</h2>
      <p className="section-subtitle">
        If a pattern of bias is showing up, it's reasonable to look for a provider with more direct experience
        in your community or identity.
      </p>
      <div className="card-grid">
        {affirmingDirectories.map((d) => (
          <a key={d.name} href={d.url} target="_blank" rel="noreferrer" className="card">
            <h3>{d.name}</h3>
            <p>{d.description}</p>
          </a>
        ))}
      </div>

      <div className="disclaimer" style={{ marginTop: 40 }}>
        Also worth using: <Link to="/scripts/second-opinion">Requesting a Second Opinion</Link> and{' '}
        <Link to="/scripts/differential-diagnosis">Requesting a Differential Diagnosis</Link> — both give you
        direct language for pushing past an explanation that doesn't sit right.
      </div>
    </>
  )
}

export default ProviderBias
