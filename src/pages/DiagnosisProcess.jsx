import { Link } from 'react-router-dom'
import diagnosisProcess from '../data/diagnosisProcess'

function DiagnosisProcess() {
  return (
    <>
      <span className="pill">How Diagnosis Works</span>
      <h1>How a Mental Health Diagnosis Gets Made — and How to Step In</h1>
      <p className="lede">
        A diagnosis usually isn't decided in a single moment — it's built step by step over one or more
        visits. Knowing what a clinician is doing at each stage makes it much easier to ask a question at the
        right time, instead of realizing afterward what you wish you'd said. This isn't a fixed script every
        provider follows exactly, but it reflects the general process behind most mental health evaluations.
      </p>

      <div className="disclaimer">
        <strong>Not medical advice.</strong> This is a general guide to how evaluations typically work, meant
        to help you participate in your own care. Your provider's actual process may differ, and that's not
        necessarily a red flag — use these questions as a starting point, not a checklist they must follow
        exactly.
      </div>

      <p style={{ margin: '8px 0 32px' }}>
        Want all the questions in one printable page?{' '}
        <Link to="/scripts/diagnosis-process-checklist">Get the Diagnostic Process Checklist →</Link>
      </p>

      <div className="timeline">
        {diagnosisProcess.map((step) => (
          <div className="timeline-step" key={step.number}>
            <div className="timeline-marker" aria-hidden="true">
              {step.number}
            </div>
            <div className="timeline-content">
              <h2>{step.title}</h2>
              <p className="timeline-what">
                <strong>What's happening:</strong> {step.whatHappens}
              </p>
              <p className="timeline-engage-label">How you can step in:</p>
              <ul className="checklist">
                {step.howToEngage.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="disclaimer" style={{ marginTop: 40 }}>
        A diagnosis you don't understand or don't agree with is worth questioning at any step — including
        after it's given. See <Link to="/scripts/second-opinion">Requesting a Second Opinion</Link> or{' '}
        <Link to="/scripts/differential-diagnosis">Requesting a Differential Diagnosis</Link> for more direct
        scripts.
      </div>
    </>
  )
}

export default DiagnosisProcess
