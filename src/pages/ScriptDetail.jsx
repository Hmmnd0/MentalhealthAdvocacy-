import { Link, useParams } from 'react-router-dom'
import scripts from '../data/scripts'

function FieldsSection({ fields }) {
  return (
    <>
      {fields.map((f) => (
        <div className="field-group" key={f.label}>
          <label htmlFor={f.label}>{f.label}</label>
          {f.type === 'textarea' ? (
            <textarea id={f.label} name={f.label} />
          ) : (
            <input id={f.label} name={f.label} type="text" />
          )}
        </div>
      ))}
    </>
  )
}

function ChecklistSection({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function TableSection({ columns, rows }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="print-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function LetterSection({ text }) {
  return <div className="letter-box">{text}</div>
}

function ScriptDetail() {
  const { id } = useParams()
  const script = scripts.find((s) => s.id === id)

  if (!script) {
    return (
      <>
        <Link to="/scripts" className="back-link">
          ← Back to Scripts &amp; Forms
        </Link>
        <h1>Form not found</h1>
        <p>That script or form doesn't exist. Head back to browse the full list.</p>
      </>
    )
  }

  return (
    <>
      <Link to="/scripts" className="back-link">
        ← Back to Scripts &amp; Forms
      </Link>

      <div className="script-detail-header">
        <span className="pill">Printable</span>
        <h1>{script.title}</h1>
      </div>
      <p className="lede">{script.purpose}</p>
      <p className="script-meta">
        <strong>When to use it:</strong> {script.whenToUse}
      </p>

      <div className="print-btn-row">
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          🖨️ Print / Save as PDF
        </button>
      </div>

      {script.sections.map((section) => (
        <div className="script-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.type === 'fields' && <FieldsSection fields={section.fields} />}
          {section.type === 'checklist' && <ChecklistSection items={section.items} />}
          {section.type === 'table' && <TableSection columns={section.columns} rows={section.rows} />}
          {section.type === 'letter' && <LetterSection text={section.text} />}
        </div>
      ))}

      <div className="disclaimer">
        This template is provided for general informational purposes and isn't legal or medical advice.
        Adapt it to your situation, and consult a professional (a doctor, patient advocate, or lawyer) for
        anything complex or high-stakes.
      </div>
    </>
  )
}

export default ScriptDetail
