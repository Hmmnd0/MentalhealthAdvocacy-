import { correctionsLog, verifiedGroups } from '../data/sources'

function Sources() {
  return (
    <>
      <span className="pill">Sources &amp; Methodology</span>
      <h1>How This Site's Content Is Built</h1>
      <p className="lede">
        An honest account of where this content comes from, what's been independently checked against
        authoritative sources, and what hasn't — so you know how much to lean on any given page.
      </p>

      <div className="info-block">
        <h3>How the content is written</h3>
        <p>
          Most of this site is written from general, well-established medical, pharmacological, and legal
          knowledge — the kind of material that's consistent across textbooks, patient handouts, and major
          health organizations, and unlikely to be wrong or controversial (how a differential diagnosis works,
          what an IEP is, how to phrase a second-opinion request). That's a reasonable standard for
          educational and communication content, but it isn't the same as citing a specific source for every
          claim.
        </p>
      </div>

      <div className="info-block">
        <h3>What's been independently verified</h3>
        <p>
          In August 2026, the highest-stakes content on this site — crisis line phone numbers, key statistics,
          specific legal rules, and medication black-box warnings — was checked against current authoritative
          sources (FDA, HHS, CMS, peer-reviewed and clinical literature, and each organization's own site).
          That pass is listed in full below, including a couple of things it caught and fixed.
        </p>
      </div>

      <div className="disclaimer">
        <strong>What this isn't:</strong> a live-updating database, or a substitute for professional advice.
        Phone numbers, laws, and prescribing information can all change after this was written — where
        precision matters (a specific drug interaction, your state's exact legal rule, your medication's exact
        half-life), this site points you to an authoritative tool or your own provider rather than asserting a
        number that could go stale.
      </div>

      <h2 className="section-title">Verified claims &amp; sources</h2>
      {verifiedGroups.map((group) => (
        <div className="glossary-category" key={group.group}>
          <h2>{group.group}</h2>
          <dl>
            {group.items.map((item) => (
              <div className="term-item" key={item.claim}>
                <dt>{item.claim}</dt>
                <dd>
                  Source:{' '}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.source}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}

      <h2 className="section-title">Corrections log</h2>
      <p className="section-subtitle">Changes made as a direct result of the verification pass above.</p>
      <ul className="checklist">
        {correctionsLog.map((c) => (
          <li key={c.change}>
            <strong>{c.date}:</strong> {c.change}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Sources
