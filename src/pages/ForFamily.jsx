import { Link } from 'react-router-dom'
import {
  conditionSigns,
  conversationStarters,
  crisisRedFlags,
  generalChanges,
  supporterResources,
  whatNotToDo,
} from '../data/familySupport'

function ForFamily() {
  return (
    <>
      <span className="pill">For Family &amp; Friends</span>
      <h1>Recognizing Signs in Someone You Love</h1>
      <p className="lede">
        You don't need a clinical background to notice that someone you care about isn't themselves. This
        page is meant to help you put a name to what you're seeing, know when it's urgent, and figure out how
        to bring it up — not to diagnose them yourself.
      </p>

      <div className="disclaimer">
        <strong>This isn't a diagnostic tool.</strong> Only a qualified professional can diagnose a mental
        health condition. The goal here is to help you notice patterns worth a conversation or a professional
        evaluation — not to label your loved one on your own.
      </div>

      <h2 className="section-title">General changes worth noticing</h2>
      <p className="section-subtitle">None of these alone means much — but a cluster of them, or a real shift from someone's baseline, is worth paying attention to.</p>
      <ul className="checklist">
        {generalChanges.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2 className="section-title">What you might notice, by condition</h2>
      <p className="section-subtitle">Plain-language descriptions of what family and friends often see first — not clinical criteria.</p>
      <div className="card-grid">
        {conditionSigns.map((c) => (
          <div className="info-block" key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.whatYouMightNotice}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Crisis red flags — act now</h2>
      <div className="crisis-box">
        <p>
          If you notice any of these, don't wait for a scheduled appointment. Call or text{' '}
          <strong>988</strong> for the Suicide &amp; Crisis Lifeline, or call <strong>911</strong> if there's
          immediate danger.
        </p>
        <ul className="checklist" style={{ marginTop: 14 }}>
          {crisisRedFlags.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <h2 className="section-title">Starting the conversation</h2>
      <ul className="checklist">
        {conversationStarters.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2 className="section-title">What not to do</h2>
      <ul className="checklist">
        {whatNotToDo.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>

      <p style={{ margin: '28px 0 0' }}>
        Ready to track what you're seeing over time?{' '}
        <Link to="/scripts/loved-one-behavior-log">Get the What I've Noticed Log →</Link> And if you're going
        with them to an appointment, see{' '}
        <Link to="/scripts/advocating-for-someone">Advocating for a Family Member or Loved One</Link>.
      </p>

      <h2 className="section-title">Support for you, too</h2>
      <p className="section-subtitle">Supporting someone else is real work — these are built specifically for people in your position.</p>
      <div className="card-grid">
        {supporterResources.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="card">
            <h3>{r.name}</h3>
            <p>{r.description}</p>
          </a>
        ))}
      </div>
    </>
  )
}

export default ForFamily
