import { choosingProviderQuestions, levelsOfCare, providerTypes, therapyModalities } from '../data/careOptions'

function CareOptions() {
  return (
    <>
      <span className="pill">Care Options</span>
      <h1>Understanding Your Care Options</h1>
      <p className="lede">
        "You should see someone" doesn't tell you much on its own — there are several kinds of providers,
        several therapy approaches, and several levels of intensity, and picking among them is easier once you
        know what each one actually is.
      </p>

      <h2 className="section-title">Who's who: types of providers</h2>
      <p className="section-subtitle">What each type of provider can (and can't) do.</p>
      <div className="card-grid">
        {providerTypes.map((p) => (
          <div className="info-block" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Common therapy approaches</h2>
      <p className="section-subtitle">In plain language, without the acronyms left unexplained.</p>
      <div className="card-grid">
        {therapyModalities.map((t) => (
          <div className="info-block" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Levels of care</h2>
      <p className="section-subtitle">From least to most intensive — more support is available than "therapy" or "the hospital."</p>
      <div className="card-grid">
        {levelsOfCare.map((l) => (
          <div className="info-block" key={l.title}>
            <h3>{l.title}</h3>
            <p>{l.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Choosing a provider: questions to ask</h2>
      <p className="section-subtitle">A first session is as much an interview as it is treatment — these questions help you tell early if it's a good fit.</p>
      <ul className="checklist">
        {choosingProviderQuestions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </>
  )
}

export default CareOptions
