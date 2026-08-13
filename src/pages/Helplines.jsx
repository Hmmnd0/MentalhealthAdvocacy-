import { findLocalResources, nationalHelplines } from '../data/helplines'

function Helplines() {
  return (
    <>
      <span className="pill">Helplines &amp; Support</span>
      <h1>Mental Health Helplines &amp; Local Support</h1>
      <p className="lede">
        If you or someone you know is in immediate danger, call <strong>911</strong>. For urgent emotional
        distress that isn't an immediate emergency, the lines below are staffed 24/7 unless noted.
      </p>

      <div className="disclaimer">
        <strong>In crisis right now?</strong> Call or text <strong>988</strong> to reach the Suicide &amp;
        Crisis Lifeline, any time, for any kind of emotional crisis — not just suicidal thoughts.
      </div>

      <h2 className="section-title">National helplines</h2>
      <p className="section-subtitle">Free and confidential, available anywhere in the U.S.</p>
      <div className="help-list">
        {nationalHelplines.map((h) => (
          <div className="help-card" key={h.name}>
            <h3>{h.name}</h3>
            <p className="help-contact">{h.contact}</p>
            <p>{h.description}</p>
            <a href={h.url} target="_blank" rel="noreferrer">
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <h2 className="section-title">Find local support</h2>
      <p className="section-subtitle">
        Directories that help you find providers, support groups, and treatment programs in your own
        community.
      </p>
      <div className="help-list">
        {findLocalResources.map((r) => (
          <div className="help-card" key={r.name}>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
            <a href={r.url} target="_blank" rel="noreferrer">
              Visit site →
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Helplines
