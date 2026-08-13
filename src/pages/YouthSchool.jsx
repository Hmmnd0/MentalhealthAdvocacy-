import { Link } from 'react-router-dom'
import { ferpaVsHipaa, iepVs504, pediatricianTips, youthResources } from '../data/youthSchool'

function YouthSchool() {
  return (
    <>
      <span className="pill">Youth &amp; School</span>
      <h1>Youth &amp; School Mental Health</h1>
      <p className="lede">
        Advocating for a child or teen means navigating two systems at once — healthcare and school — that
        don't always talk to each other. Here's how the pieces fit together.
      </p>

      <div className="disclaimer">
        <strong>Not legal advice.</strong> Special education law (IDEA), Section 504, and minors' consent to
        their own mental healthcare are all governed by federal and state rules that vary by location. Confirm
        specifics with your school district or a special education advocate for anything high-stakes.
      </div>

      <h2 className="section-title">IEP vs. 504 plan</h2>
      <p className="section-subtitle">Two different paths to support at school, often confused with each other.</p>
      <div className="card-grid">
        {iepVs504.map((item) => (
          <div className="info-block" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <p style={{ margin: '20px 0 0' }}>
        Ready to start the process? <Link to="/scripts/iep-504-request-letter">Get the Evaluation Request Letter →</Link>
      </p>

      <h2 className="section-title">FERPA vs. HIPAA</h2>
      <p className="section-subtitle">Two different privacy laws apply, depending on where the record was created.</p>
      <div className="card-grid">
        {ferpaVsHipaa.map((item) => (
          <div className="info-block" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Talking to a pediatrician</h2>
      <ul className="checklist">
        {pediatricianTips.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2 className="section-title">More resources</h2>
      <div className="card-grid">
        {youthResources.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="card">
            <h3>{r.name}</h3>
            <p>{r.description}</p>
          </a>
        ))}
      </div>
    </>
  )
}

export default YouthSchool
