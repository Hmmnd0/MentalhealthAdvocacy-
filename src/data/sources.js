export const verifiedGroups = [
  {
    group: 'Crisis & support line contact info',
    items: [
      {
        claim: '988 Suicide & Crisis Lifeline — call or text 988',
        source: '988lifeline.org / SAMHSA',
        url: 'https://988lifeline.org',
      },
      {
        claim: 'Crisis Text Line — text HOME to 741741',
        source: 'crisistextline.org',
        url: 'https://www.crisistextline.org',
      },
      {
        claim: 'SAMHSA National Helpline — 1-800-662-4357',
        source: 'SAMHSA.gov',
        url: 'https://www.samhsa.gov/find-help/helplines/national-helpline',
      },
      {
        claim: 'NAMI HelpLine — 1-800-950-6264, or text "NAMI" to 62640',
        source: 'nami.org',
        url: 'https://www.nami.org/nami-helpline/',
      },
      {
        claim: 'Veterans Crisis Line — 988 then press 1, or text 838255',
        source: 'veteranscrisisline.net',
        url: 'https://www.veteranscrisisline.net',
      },
      {
        claim: 'Trans Lifeline — 877-565-8860',
        source: 'translifeline.org',
        url: 'https://translifeline.org',
      },
      {
        claim: 'The Trevor Project — 1-866-488-7386, or text START to 678678',
        source: 'thetrevorproject.org',
        url: 'https://www.thetrevorproject.org',
      },
      {
        claim: 'Postpartum Support International HelpLine — 1-800-944-4773',
        source: 'postpartum.net',
        url: 'https://postpartum.net/get-help/psi-helpline/',
      },
      {
        claim: 'National Domestic Violence Hotline — 1-800-799-7233, or text START to 88788',
        source: 'thehotline.org',
        url: 'https://www.thehotline.org',
      },
      {
        claim: 'NEDA Helpline — 1-800-931-2237',
        source: 'nationaleatingdisorders.org',
        url: 'https://www.nationaleatingdisorders.org',
      },
      {
        claim: 'Poison Control — 1-800-222-1222',
        source: 'poison.org',
        url: 'https://www.poison.org',
      },
    ],
  },
  {
    group: 'Postpartum psychosis',
    items: [
      {
        claim: 'Incidence of roughly 1 to 2 per 1,000 births',
        source: 'StatPearls (NCBI) / Action on Postpartum Psychosis',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK544304/',
      },
      {
        claim: 'Onset most often within the first 2 weeks postpartum; risk continues for several months',
        source: 'StatPearls (NCBI)',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK544304/',
      },
      {
        claim: 'Recurrence risk in a future pregnancy — roughly 1 in 3 after a prior episode, higher (up to roughly 1 in 2) with bipolar disorder plus a family history of postpartum psychosis',
        source: 'MGH Center for Women\'s Mental Health, citing peer-reviewed meta-analyses',
        url: 'https://womensmentalhealth.org/posts/recurrence-of-postpartum-psychosis/',
      },
    ],
  },
  {
    group: 'Patient rights & legal claims',
    items: [
      {
        claim: 'HIPAA right to a copy of your medical records, generally within 30 days of a written request',
        source: 'U.S. Department of Health & Human Services (HHS.gov)',
        url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html',
      },
      {
        claim: 'Mental Health Parity and Addiction Equity Act — mental health/substance use coverage no more restrictive than medical/surgical coverage',
        source: 'Centers for Medicare & Medicaid Services (CMS.gov)',
        url: 'https://www.cms.gov/marketplace/private-health-insurance/mental-health-parity-addiction-equity',
      },
    ],
  },
  {
    group: 'Medication black-box / boxed warnings',
    items: [
      {
        claim: 'SSRIs/SNRIs — increased suicidal thoughts and behavior in children, teens, and young adults',
        source: 'FDA (via New England Journal of Medicine coverage of the 2004/2007 warnings)',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMp078015',
      },
      {
        claim: 'Benzodiazepines — 2020 boxed warning update on abuse, addiction, physical dependence, and withdrawal',
        source: 'FDA.gov',
        url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class',
      },
      {
        claim: 'Antipsychotics — increased mortality risk in older adults with dementia-related psychosis',
        source: 'Tulane PharmWiki, summarizing the FDA warning',
        url: 'https://tmedweb.tulane.edu/pharmwiki/doku.php/antipsychotics_black_box_warning',
      },
      {
        claim: 'Z-drugs (zolpidem, eszopiclone, zaleplon) — boxed warning on complex sleep behaviors',
        source: 'FDA.gov',
        url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-adds-boxed-warning-risk-serious-injuries-caused-sleepwalking-certain-prescription-insomnia',
      },
      {
        claim: 'Lamotrigine — boxed warning on serious, potentially life-threatening rash, and why slow titration matters',
        source: 'Peer-reviewed literature on lamotrigine dosing and Stevens-Johnson syndrome risk',
        url: 'https://psychiatrictimes.com/view/how-minimize-lamotrigines-adverse-effects',
      },
    ],
  },
]

export const correctionsLog = [
  {
    date: 'August 2026',
    change: 'Fixed NAMI HelpLine text keyword — corrected from "HelpLine" to "NAMI" (text to 62640).',
  },
  {
    date: 'August 2026',
    change: 'Updated the LGBTQ+ provider directory link and name to match GLMA\'s current site structure and its partnership with the Tegan and Sara Foundation.',
  },
  {
    date: 'August 2026',
    change: 'Removed specific dollar figures for Open Path Collective\'s sliding-scale pricing, since exact rates are set by Open Path and can change — pointed to their site instead.',
  },
  {
    date: 'August 2026',
    change: 'Revised the postpartum psychosis recurrence-risk statistic from a single "1-in-2" figure to a more accurate range (roughly 1 in 3 after a prior episode, rising toward 1 in 2 with bipolar disorder plus a family history), and softened the onset claim to reflect that risk continues for months, not just the first two weeks.',
  },
]
