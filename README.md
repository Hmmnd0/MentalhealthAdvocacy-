# Patient Voice

A free website that helps patients (and the people supporting them) advocate for themselves at doctor's
appointments, with a focus on mental health care. Built with React + Vite.

## What's included

- **Doctor-Speak Glossary** — plain-English explanations of clinical terms patients encounter, organized by
  category (getting a diagnosis, treatment & medication, mental health specific terms, patient rights).
- **Scripts & Printable Forms** — fill-in-the-blank scripts and templates: a symptom/mood tracker, a script
  for describing symptoms, a script for requesting a differential diagnosis, a medication check-in form, a
  second opinion script, an appointment prep checklist, a caregiver advocacy script, and letter templates for
  requesting medical records or appealing an insurance denial. Each page has a "Print / Save as PDF" button.
- **Mental Health Helplines** — national crisis lines (988, Crisis Text Line, SAMHSA, NAMI, and more) plus
  directories for finding local providers, support groups, and low-cost care.
- **Medication Info** — general education on how to read side effect information and understand drug
  interactions, with links to authoritative lookup tools (MedlinePlus, FDA DailyMed, Drugs.com Interaction
  Checker).

This site is educational only — it is not medical, legal, or insurance advice, and does not replace a
licensed healthcare provider.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build     # production build
npm run lint       # run oxlint
```

## Project structure

```
src/
  components/Layout.jsx   # header, nav, crisis banner, footer
  pages/                  # one file per route
  data/                   # glossary terms, scripts/forms, helplines, medication info
```

Content lives in `src/data/*.js` — edit those files to add or update terms, scripts, helplines, or
medication resources without touching page markup.
