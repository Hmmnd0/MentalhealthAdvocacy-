import { Link } from 'react-router-dom'
import { lookupTools, questionsToAsk, understandingSideEffects } from '../data/medications'

function Medications() {
  return (
    <>
      <span className="pill">Medication Info</span>
      <h1>Medication Side Effects &amp; Interactions</h1>
      <p className="lede">
        This page helps you understand how to research and ask about medications — it does not list specific
        drug side effects, since those change over time and depend on your individual health. Always confirm
        with your prescriber or pharmacist, and use the tools below for authoritative, up-to-date information.
      </p>

      <div className="disclaimer">
        <strong>Not medical advice.</strong> Never start, stop, or change a dose based on information from
        this page. If you think you're having a serious reaction, call your prescriber, your pharmacist, or{' '}
        <strong>911</strong>. Poison Control is available 24/7 at <strong>1-800-222-1222</strong>.
      </div>

      <h2 className="section-title">Understanding what you read</h2>
      {understandingSideEffects.map((item) => (
        <div className="info-block" key={item.heading}>
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
        </div>
      ))}

      <h2 className="section-title">Look it up yourself</h2>
      <p className="section-subtitle">Authoritative, free tools for checking side effects and interactions.</p>
      <div className="card-grid">
        {lookupTools.map((tool) => (
          <a key={tool.name} href={tool.url} target="_blank" rel="noreferrer" className="card">
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
          </a>
        ))}
      </div>

      <h2 className="section-title">Questions to ask about a new medication</h2>
      <ul className="checklist">
        {questionsToAsk.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <p style={{ marginTop: 28 }}>
        Want a structured way to track how a new medication is going?{' '}
        <Link to="/scripts/medication-checkin">Use the Medication Check-In form →</Link>
      </p>
    </>
  )
}

export default Medications
