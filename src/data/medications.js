export const lookupTools = [
  {
    name: 'MedlinePlus Drug Information',
    description: 'Plain-language drug information from the U.S. National Library of Medicine — uses, side effects, and precautions in everyday language.',
    url: 'https://medlineplus.gov/druginformation.html',
  },
  {
    name: 'FDA DailyMed',
    description: 'The official, complete prescribing information ("package insert") for FDA-approved medications, including full side effect and interaction data.',
    url: 'https://dailymed.nlm.nih.gov',
  },
  {
    name: 'Drugs.com Interaction Checker',
    description: 'Enter multiple medications (including OTC and supplements) to check for known interactions between them.',
    url: 'https://www.drugs.com/drug_interactions.html',
  },
  {
    name: 'FDA Adverse Event Reporting (FAERS / MedWatch)',
    description: 'Where you can look up — or report — side effects that have occurred with a medication.',
    url: 'https://www.fda.gov/drugs/questions-and-answers-fdas-adverse-event-reporting-system-faers/fda-adverse-events-reporting-system-faers-public-dashboard',
  },
  {
    name: 'Medscape Drug Interaction Checker',
    description: 'A second, free interaction-checking tool — useful for cross-checking results from Drugs.com, since no single checker catches every interaction.',
    url: 'https://reference.medscape.com/drug-interactionchecker',
  },
]

export const interactionTypes = [
  {
    title: 'Drug–drug',
    description: 'Two medications affecting each other\'s levels or effects — the most commonly checked type, and what most interaction checkers focus on.',
  },
  {
    title: 'Drug–food',
    description: 'Certain foods change how a medication is absorbed or broken down — grapefruit and grapefruit juice are the best-known example, affecting several medication classes.',
  },
  {
    title: 'Drug–supplement or herbal',
    description: 'Supplements are not held to the same regulatory standard as medications, and several — St. John\'s Wort especially — have strong, well-documented interactions with prescription drugs.',
  },
  {
    title: 'Drug–alcohol',
    description: 'Alcohol can intensify sedation, affect liver metabolism of a medication, or both — worth asking about specifically, since it\'s easy to overlook as a "medication."',
  },
]

export const interactionMechanisms = [
  {
    title: 'Pharmacokinetic interactions',
    text: 'One substance changes how another is absorbed, metabolized, or eliminated — often because both are processed by the same liver enzymes (commonly the "CYP450" system) — which raises or lowers the actual level of a drug in your body.',
  },
  {
    title: 'Pharmacodynamic interactions',
    text: 'Two substances produce additive, compounding, or opposing effects on the body, even without changing each other\'s blood levels. Combining sedating medications compounding drowsiness, or combining multiple serotonergic medications raising the risk of serotonin syndrome, are both examples.',
  },
]

export const checkingForInteractions = [
  'Give every prescriber and pharmacist your complete list — prescriptions, OTC drugs, supplements, and herbal products — every time, not just at the first visit',
  'Use one pharmacy when possible, so their system can automatically flag interactions across everything you\'re filling',
  'Ask directly whenever anything new is added: "Does this interact with anything I\'m currently taking?"',
  'Run your list through an interaction checker yourself before starting something new, and bring questions it raises to your pharmacist',
  'Re-check when a dose changes, not just when a medication is added — some interactions are dose-dependent',
]

export const interactionRedFlags = [
  'Confusion, agitation, or a fast heart rate that\'s new or worsening',
  'High fever or heavy sweating without a clear cause',
  'Unusual bleeding or bruising',
  'Extreme drowsiness, slowed breathing, or trouble staying awake',
  'A significant, unexplained change in blood pressure',
  'Any symptom that feels sudden, severe, or "not like the usual side effects"',
]

export const halfLifeBasics = {
  title: 'What "half-life" means',
  text: 'A medication\'s half-life is the time it takes for the amount in your body to drop by half. As a general rule of thumb, it takes about 4 to 5 half-lives for a medication to be considered essentially cleared from your system (roughly 94–97% gone) — so a drug with a 24-hour half-life is largely cleared in about 4–5 days, while one with a 2-hour half-life clears in less than a day. The exact number for any specific medication is something to get from your prescriber or pharmacist, not estimate yourself.',
}

export const clearanceFactors = [
  'The specific medication\'s chemical properties — this varies enormously between drugs, even within the same class',
  'Liver and kidney function, since these organs do most of the work metabolizing and eliminating medications',
  'Age — clearance often slows with age',
  'Other medications you\'re taking, which can speed up or slow down how quickly a drug is cleared',
  'Formulation — immediate-release and extended/controlled-release versions of the same medication clear on different timelines',
  'Individual genetic differences in metabolism — some people naturally process certain medications faster or slower than average',
]

export const clearanceDistinctions = [
  {
    title: '"Out of your bloodstream"',
    text: 'The pharmacokinetic clearance described above — when the medication itself is mostly gone from your system.',
  },
  {
    title: '"Effects wearing off"',
    text: 'Not always the same timeline as clearance. Some medications have effects that fade faster than blood levels drop; others have effects that linger after the drug is largely cleared.',
  },
  {
    title: '"Detectable on a drug test"',
    text: 'A different timeline still. Tests often detect a substance or its metabolites — sometimes for much longer than any effect lasts, especially for fat-soluble substances.',
  },
]

export const whyClearanceMatters = [
  'Switching medications safely often requires a specific washout period between certain drug classes (see "washout period" and "cross-taper" in the Doctor-Speak Glossary)',
  'Pausing a medication before surgery — some medications, like blood thinners, need to stop a specific number of days ahead, always on your surgeon or anesthesiologist\'s instruction, not a self-estimate',
  'Restarting a medication after a gap doesn\'t restore full effect immediately — levels have to rebuild',
  'Timing around breastfeeding is its own specialized question, best handled with a lactation-aware prescriber or pharmacist, not a general rule',
  'Starting a new medication too soon after stopping an interacting one (classically with MAOIs) can be dangerous even after symptoms of the first medication have resolved',
]

export const clearanceQuestions = [
  '"What\'s the half-life of this medication, and roughly how long until it\'s out of my system if I stop?"',
  '"Do effects wear off faster or slower than the medication actually clears?"',
  '"Is there a required washout period before starting something new, or before a procedure?"',
  '"Does my liver or kidney function change how long this stays in my system?"',
]

export const understandingSideEffects = [
  {
    heading: 'Common vs. serious',
    text: 'Package inserts list side effects by how often they occurred in trials. "Common" (often listed as occurring in more than 1% or 5% of people) doesn\'t mean severe — many common side effects (nausea, dry mouth, drowsiness) fade within weeks. "Serious" or "rare" side effects are listed separately and are worth knowing in advance, especially ones that need urgent attention.',
  },
  {
    heading: 'Black box warnings',
    text: 'The FDA\'s strongest warning label, reserved for risks that are serious or life-threatening. A black box warning doesn\'t mean a medication is unsafe for you specifically — it means the risk is significant enough that everyone prescribed it should be told about it clearly.',
  },
  {
    heading: '"Start low, go slow"',
    text: 'For many psychiatric medications, starting at a low dose and increasing gradually helps identify the lowest effective dose and reduces the intensity of initial side effects. If side effects are hard to tolerate, ask whether a slower titration schedule is an option before deciding a medication "doesn\'t work."',
  },
  {
    heading: 'Discontinuation effects',
    text: 'Stopping some medications abruptly (particularly certain antidepressants, benzodiazepines, and mood stabilizers) can cause withdrawal-like symptoms. Ask your prescriber about a tapering plan before stopping any medication on your own — and never stop a medication abruptly without medical guidance unless directed to due to a dangerous reaction.',
  },
]

export const questionsToAsk = [
  'What is this medication supposed to do, and how will I know if it\'s working?',
  'How long until I should expect to see an effect?',
  'What are the most common side effects, and which ones should I call about right away?',
  'Are there any foods, supplements, alcohol, or other medications I should avoid with this?',
  'What should I do if I miss a dose?',
  'Is there a black box warning or serious risk I should know about?',
  'Will I need any monitoring, like bloodwork, while taking this?',
  'What\'s the plan if this medication doesn\'t work or causes side effects I can\'t tolerate?',
  'If I need to stop, how should I do that safely?',
]
