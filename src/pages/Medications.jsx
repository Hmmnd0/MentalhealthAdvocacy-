import { Link } from 'react-router-dom'
import {
  checkingForInteractions,
  clearanceDistinctions,
  clearanceFactors,
  clearanceQuestions,
  halfLifeBasics,
  interactionMechanisms,
  interactionRedFlags,
  interactionTypes,
  lookupTools,
  questionsToAsk,
  understandingSideEffects,
  whyClearanceMatters,
} from '../data/medications'

function Medications() {
  return (
    <>
      <span className="pill">Medication Info</span>
      <h1>Medication Side Effects &amp; Interactions</h1>
      <p className="lede">
        This page helps you understand how to research and ask about medications — it does not list specific
        drug side effects, interactions, or clearance times, since those change over time and depend on your
        individual health. Always confirm with your prescriber or pharmacist, and use the tools below for
        authoritative, up-to-date information.
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

      <h2 className="section-title">Understanding drug interactions</h2>
      <p className="section-subtitle">A few different things can interact with a medication — not just other prescriptions.</p>
      <div className="card-grid">
        {interactionTypes.map((t) => (
          <div className="info-block" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
          </div>
        ))}
      </div>

      <p className="section-subtitle" style={{ marginTop: 28 }}>How interactions actually happen, at the mechanism level.</p>
      <div className="card-grid">
        {interactionMechanisms.map((m) => (
          <div className="info-block" key={m.title}>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </div>
        ))}
      </div>

      <p className="section-subtitle" style={{ marginTop: 28 }}>How to actually check, every time.</p>
      <ul className="checklist">
        {checkingForInteractions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <p className="section-subtitle" style={{ marginTop: 28 }}>Signs of a possible interaction — tell your provider right away, or seek emergency care if severe.</p>
      <div className="crisis-box">
        <ul className="checklist">
          {interactionRedFlags.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <h2 className="section-title">How long medications stay in your system</h2>
      <div className="info-block">
        <h3>{halfLifeBasics.title}</h3>
        <p>{halfLifeBasics.text}</p>
      </div>

      <p className="section-subtitle" style={{ marginTop: 28 }}>Why it varies so much from person to person, and drug to drug.</p>
      <ul className="checklist">
        {clearanceFactors.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <p className="section-subtitle" style={{ marginTop: 28 }}>Three different timelines people often mix up.</p>
      <div className="card-grid">
        {clearanceDistinctions.map((d) => (
          <div className="info-block" key={d.title}>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>

      <p className="section-subtitle" style={{ marginTop: 28 }}>Why this matters in practice.</p>
      <ul className="checklist">
        {whyClearanceMatters.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>

      <p className="section-subtitle" style={{ marginTop: 28 }}>Questions to ask your prescriber or pharmacist.</p>
      <ul className="checklist">
        {clearanceQuestions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      <p style={{ margin: '28px 0 0' }}>
        Want to look up a medication class instead — like what an SSRI or a benzodiazepine generally is?{' '}
        <Link to="/medication-database">Browse the Medication Database →</Link>
      </p>

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
