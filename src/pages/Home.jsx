import { Link } from 'react-router-dom'

const features = [
  {
    to: '/glossary',
    icon: '📖',
    title: 'Doctor-Speak Glossary',
    description: 'Plain-English explanations of clinical terms — differential diagnosis, contraindication, titration, and more.',
  },
  {
    to: '/diagnosis-process',
    icon: '🧭',
    title: 'How Diagnosis Works',
    description: 'Step-by-step walkthrough of how a mental health diagnosis gets made, with questions to ask at each stage.',
  },
  {
    to: '/care-options',
    icon: '🧩',
    title: 'Understanding Your Care Options',
    description: 'Provider types, therapy approaches, and levels of care explained in plain language, plus questions to ask when choosing someone new.',
  },
  {
    to: '/provider-bias',
    icon: '⚖️',
    title: 'Recognizing Provider Bias',
    description: 'Patterns that suggest bias around race, gender, weight, age, or identity in your care, and how to document and respond to them.',
  },
  {
    to: '/patient-rights',
    icon: '🛡️',
    title: 'Patient Rights & Legal Protections',
    description: 'Informed consent, the right to refuse treatment, mental health parity, and other protections most patients never learn about in advance.',
  },
  {
    to: '/youth-school',
    icon: '🎒',
    title: 'Youth & School Mental Health',
    description: 'IEPs vs. 504 plans, FERPA vs. HIPAA, and how to advocate for a child across both the school and healthcare systems.',
  },
  {
    to: '/for-family',
    icon: '💙',
    title: 'For Family & Friends',
    description: 'Signs to watch for in a loved one, crisis red flags, how to start the conversation, and support for you as a caregiver.',
  },
  {
    to: '/scripts',
    icon: '📝',
    title: 'Scripts & Printable Forms',
    description: 'Fill-in-the-blank scripts, symptom trackers, and letter templates to bring to your next appointment.',
  },
  {
    to: '/helplines',
    icon: '☎️',
    title: 'Mental Health Helplines',
    description: 'National crisis lines plus tools to find local support, therapists, and low-cost care near you.',
  },
  {
    to: '/medications',
    icon: '💊',
    title: 'Medication Info',
    description: 'How to understand side effects and interactions, and where to look up authoritative drug information.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <span className="pill">Free &amp; educational</span>
        <h1>Walk into your next appointment prepared to be heard.</h1>
        <p className="lede">
          Patient Voice gives you the vocabulary, scripts, and resources to communicate clearly with doctors,
          push for a real explanation, and advocate for yourself or a loved one — especially around mental
          health care.
        </p>
        <div className="hero-actions">
          <Link to="/scripts" className="btn btn-primary">
            Get a printable script
          </Link>
          <Link to="/glossary" className="btn btn-secondary">
            Browse the glossary
          </Link>
        </div>
      </section>

      <h2 className="section-title">What's here</h2>
      <p className="section-subtitle">Tools built for the moments patients say are hardest to navigate.</p>
      <div className="card-grid">
        {features.map((f) => (
          <Link key={f.to} to={f.to} className="card">
            <span className="card-icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </Link>
        ))}
      </div>

      <div className="disclaimer">
        <strong>This is not medical advice.</strong> Patient Voice provides educational information and
        communication tools only. It does not diagnose, treat, or replace a licensed healthcare provider. If
        you are in crisis, call or text <strong>988</strong>, or call <strong>911</strong> for emergencies.
      </div>
    </>
  )
}

export default Home
