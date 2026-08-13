const glossary = [
  {
    category: 'Getting a Diagnosis',
    terms: [
      {
        term: 'Differential diagnosis',
        definition:
          'The list of possible conditions that could explain your symptoms, before testing narrows it down. Asking "What\'s on my differential?" or "What else could this be?" invites your doctor to consider alternatives instead of anchoring on the first idea.',
      },
      {
        term: 'Rule out',
        definition:
          'To use a test or exam to eliminate a possible cause from the differential diagnosis. "We\'re ruling out thyroid issues" means they\'re checking whether that\'s the cause, not confirming it.',
      },
      {
        term: 'Etiology',
        definition: 'The cause or origin of a condition. "Unknown etiology" means the cause hasn\'t been identified yet.',
      },
      {
        term: 'Idiopathic',
        definition: 'Medical jargon for "we don\'t know what\'s causing this." It is not a diagnosis by itself — you can still ask what monitoring or next steps make sense.',
      },
      {
        term: 'Prognosis',
        definition: 'The expected course or outcome of a condition — how it\'s likely to progress with or without treatment.',
      },
      {
        term: 'Chief complaint',
        definition: 'The main reason for your visit, in your own words. Doctors often write this down first — stating it clearly and specifically helps focus the visit.',
      },
      {
        term: 'Baseline',
        definition: 'Your normal, day-to-day state before the current problem started. Describing your baseline helps a doctor see what has actually changed.',
      },
      {
        term: 'Acute vs. chronic',
        definition: 'Acute means sudden or short-term; chronic means ongoing or long-term (often defined as lasting 3+ months).',
      },
      {
        term: 'Comorbidity / comorbid condition',
        definition: 'A second condition that exists alongside the main one (e.g., anxiety and IBS). Comorbidities can affect diagnosis and treatment choices.',
      },
      {
        term: 'Referral',
        definition: 'Formal permission or a request for you to see a specialist. You can ask directly: "Can I get a referral to a specialist for this?"',
      },
    ],
  },
  {
    category: 'Treatment & Medication',
    terms: [
      {
        term: 'Titration / titrate',
        definition: 'Gradually adjusting a medication dose up or down to find the most effective, best-tolerated level.',
      },
      {
        term: 'Cross-taper',
        definition: 'Slowly decreasing one medication while slowly increasing another, so you\'re never off treatment entirely during a switch.',
      },
      {
        term: 'Washout period',
        definition: 'A gap where you take no medication (or none of a certain type) before starting a new one, often required for safety between certain drug classes.',
      },
      {
        term: 'PRN',
        definition: 'Latin for "as needed" — a medication you take only when symptoms occur, not on a fixed schedule.',
      },
      {
        term: 'Off-label use',
        definition: 'Prescribing an approved medication for a condition or in a way not officially approved by regulators, based on clinical evidence or experience. It\'s legal and common, but worth asking about.',
      },
      {
        term: 'Efficacy',
        definition: 'How well a treatment works under study conditions — distinct from "effectiveness," which is how well it works in everyday real-world use.',
      },
      {
        term: 'Adverse effect / side effect',
        definition: 'An unintended effect of a medication. "Adverse event" is often used for anything that happens during treatment, whether or not it\'s proven to be caused by the drug.',
      },
      {
        term: 'Contraindication',
        definition: 'A specific reason (another condition, medication, or factor) that makes a treatment potentially harmful for you and generally inadvisable.',
      },
      {
        term: 'Black box warning',
        definition: 'The FDA\'s strongest safety warning, printed in a bordered box on a medication\'s label, highlighting a serious or life-threatening risk.',
      },
      {
        term: 'Polypharmacy',
        definition: 'Taking multiple medications at once (commonly defined as 5 or more). Worth flagging so your care team can check for interactions.',
      },
      {
        term: 'Standard of care',
        definition: 'The treatment approach generally accepted by the medical community as appropriate for a given condition.',
      },
      {
        term: 'Palliative care',
        definition: 'Care focused on relieving symptoms and improving quality of life, which can be used alongside curative treatment — not only at end of life.',
      },
    ],
  },
  {
    category: 'Mental Health Specific',
    terms: [
      {
        term: 'Affect',
        definition: 'The outward, observable expression of emotion (facial expression, tone, body language) — described by clinicians as e.g. "flat," "blunted," or "labile." Distinct from "mood," which is your internally reported emotional state.',
      },
      {
        term: 'Anhedonia',
        definition: 'Reduced ability to feel pleasure or interest in activities you used to enjoy — a core symptom clinicians screen for in depression.',
      },
      {
        term: 'Ideation (suicidal / homicidal)',
        definition: 'Thoughts about suicide or harming someone else. Clinicians distinguish "passive" ideation (wishing you weren\'t alive) from "active" ideation (thoughts of acting), and ask about "plan" and "intent" — being specific and honest here shapes your safety plan.',
      },
      {
        term: 'Insight',
        definition: 'A clinical term for how much a person recognizes and understands their own condition or symptoms — used in mental status exams.',
      },
      {
        term: 'Psychomotor changes',
        definition: 'Observable changes in physical movement or speed linked to mental state — e.g. "psychomotor retardation" (slowed movement/speech) or "agitation" (restlessness).',
      },
      {
        term: 'Prodrome / prodromal',
        definition: 'Early, often subtle symptoms that appear before a fuller episode of illness develops.',
      },
      {
        term: 'Remission',
        definition: 'A period where symptoms have substantially decreased or disappeared. It does not always mean "cured" — ongoing monitoring or maintenance treatment may still matter.',
      },
      {
        term: 'Relapse',
        definition: 'The return of symptoms after a period of improvement or remission.',
      },
      {
        term: 'Treatment-resistant / refractory',
        definition: 'A condition that hasn\'t responded adequately to standard treatment attempts (often defined as two or more adequate trials). This label can open the door to other options — ask what "adequate trial" means in your case.',
      },
      {
        term: 'Dual diagnosis / co-occurring disorder',
        definition: 'Having both a mental health condition and a substance use disorder at the same time, which often calls for integrated treatment.',
      },
      {
        term: 'Involuntary hold (5150 / civil commitment)',
        definition: 'A legal process allowing short-term hospitalization without consent when someone is judged an immediate danger to themselves or others. Rules and names (e.g. "5150" in California) vary by state — ask your local NAMI affiliate about your state\'s specific process and your rights.',
      },
      {
        term: 'Mental status exam (MSE)',
        definition: 'A structured observation clinicians use to assess appearance, mood, affect, thought process, and cognition during a visit — similar in spirit to a physical exam, but for mental state.',
      },
    ],
  },
  {
    category: 'Your Rights & the Visit Itself',
    terms: [
      {
        term: 'Informed consent',
        definition: 'Your right to receive enough information about a treatment\'s risks, benefits, and alternatives to decide whether to accept it — and to ask questions before agreeing.',
      },
      {
        term: 'Second opinion',
        definition: 'Consulting another qualified provider to confirm or challenge a diagnosis or treatment plan. This is a normal, expected part of care, not an insult to your doctor.',
      },
      {
        term: 'Iatrogenic',
        definition: 'Caused by medical treatment itself, e.g. a side effect or complication that resulted from the care provided rather than the original condition.',
      },
      {
        term: 'Discharge summary',
        definition: 'A written summary of care given (often after a hospital stay or ER visit), including diagnosis, treatment, and follow-up plan. You are entitled to a copy.',
      },
      {
        term: 'Prior authorization',
        definition: 'A requirement from your insurer that a doctor get approval before a medication or procedure is covered. Delays here are common — asking your doctor\'s office to submit supporting documentation quickly can help.',
      },
      {
        term: 'Advance directive',
        definition: 'A legal document stating your wishes for care (and who can decide for you) if you\'re unable to communicate them yourself — relevant for both physical and mental health crises.',
      },
    ],
  },
]

export default glossary
