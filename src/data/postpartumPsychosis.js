export const comparisonConditions = [
  {
    title: 'Baby blues',
    howCommon: 'Very common — up to 80% of new mothers',
    onset: 'Starts 2–3 days after birth, resolves within about 2 weeks',
    whatItLooksLike: 'Mood swings, weepiness, and mild anxiety, but no loss of touch with reality. Usually needs support, not treatment.',
    emergency: false,
  },
  {
    title: 'Postpartum depression',
    howCommon: 'Common — around 1 in 7 new mothers',
    onset: 'Can start any time in the first year after birth, often building gradually',
    whatItLooksLike: 'Persistent sadness, hopelessness, or loss of interest that doesn\'t lift. Treatable with therapy and/or medication — see a provider, and treat any thoughts of self-harm as urgent.',
    emergency: false,
  },
  {
    title: 'Postpartum anxiety & OCD',
    howCommon: 'Common, and frequently under-recognized',
    onset: 'Can start any time in the first year',
    whatItLooksLike: 'Excessive worry, or intrusive, unwanted thoughts (often about the baby being harmed) that are distressing precisely because the person recognizes they don\'t want them. This "ego-dystonic" quality is a key difference from psychosis. Treatable.',
    emergency: false,
  },
  {
    title: 'Postpartum psychosis',
    howCommon: 'Rare — roughly 1 to 2 per 1,000 births',
    onset: 'Sudden onset, most often within the first 2 weeks after birth (risk continues for several months), and symptoms can escalate within hours to days',
    whatItLooksLike: 'Hallucinations, delusions, severe confusion, and rapid mood swings. A psychiatric emergency requiring immediate treatment, almost always inpatient care.',
    emergency: true,
  },
]

export const warningSigns = [
  'Hallucinations — hearing or seeing things that aren\'t there',
  'Delusions — strange, fixed beliefs that don\'t match reality (about the baby, herself, or people around her)',
  'Severe confusion or disorientation',
  'Rapid, extreme mood swings — euphoria or agitation alternating with despair',
  'Paranoia or sudden, extreme suspiciousness of people close to her',
  'Not sleeping for several nights, or a dramatically reduced need for sleep',
  'Behavior that feels bizarre, erratic, or completely out of character',
  'Racing, disorganized speech or thoughts that are hard to follow',
]

export const riskFactors = [
  'A personal or family history of bipolar disorder or postpartum psychosis — the single biggest risk factor. Research puts recurrence in a future pregnancy at roughly 1 in 3 for those with a prior episode of postpartum psychosis, and it runs higher still — up to around 1 in 2 — for those with bipolar disorder who also have a family history of postpartum psychosis. Ask your care team for guidance specific to your history.',
  'A history of schizoaffective disorder',
  'Significant sleep deprivation',
  'First pregnancy',
  'Stopping psychiatric medication during pregnancy without medical guidance',
]

export const emergencySteps = [
  'Call 911 or go to the nearest emergency room right away',
  'Or call or text 988 (Suicide & Crisis Lifeline) for immediate guidance',
  'Do not leave her alone, and don\'t leave her alone with the baby if you have any safety concern',
  'Call her OB/midwife or psychiatric provider as soon as possible, in addition to — not instead of — emergency care',
  'Afterward, Postpartum Support International\'s HelpLine (1-800-944-4773) can help with follow-up support and finding specialized providers — it is not a crisis line, so use 911 or 988 first if it\'s an emergency',
]

export const treatmentFacts = [
  {
    title: 'This is a medical emergency, not a character flaw',
    text: 'Postpartum psychosis is a biologically driven psychiatric emergency, not something caused by the mother, her parenting, or a lack of willpower. Treating it that way — with urgency and without shame — is part of getting through it.',
  },
  {
    title: 'It almost always requires hospitalization',
    text: 'Inpatient psychiatric care allows for round-the-clock safety monitoring, rapid medication treatment, and protected sleep — sleep deprivation itself can worsen symptoms.',
  },
  {
    title: 'It is highly treatable, and recovery is the expectation',
    text: 'With prompt treatment — antipsychotic medication, mood stabilizers, and in some cases ECT (which has a strong evidence base for rapid response in postpartum psychosis) — the large majority of women fully recover.',
  },
  {
    title: 'Follow-up care matters',
    text: 'Ongoing psychiatric follow-up, and planning ahead for any future pregnancies given the elevated recurrence risk, are both part of a full recovery plan.',
  },
]

export const resources = [
  {
    name: 'Postpartum Support International (PSI)',
    description: 'HelpLine, provider directory, and support groups specifically for perinatal mental health. Call or text 1-800-944-4773 (not a crisis line — for emergencies, use 911 or 988).',
    url: 'https://www.postpartum.net',
  },
  {
    name: 'Action on Postpartum Psychosis (APP)',
    description: 'A UK-based charity specializing specifically in postpartum psychosis, with detailed guides for both those affected and their families.',
    url: 'https://www.app-network.org',
  },
  {
    name: 'MGH Center for Women\'s Mental Health',
    description: 'Research-based, clinician-written resources on perinatal psychiatric conditions, including postpartum psychosis, from Massachusetts General Hospital.',
    url: 'https://womensmentalhealth.org',
  },
]
