const diagnosisProcess = [
  {
    number: 1,
    title: 'Intake & History Gathering',
    whatHappens:
      'Before or during the first visit, the clinician collects your "chief complaint," history of the present problem, past psychiatric and medical history, family history, and social/substance use history — often through intake forms plus direct questions.',
    howToEngage: [
      'Bring a written symptom timeline so nerves don\'t make you forget details — see the Symptom & Mood Tracker.',
      '"What information do you need from me to get an accurate picture?"',
      'Disclose everything, including substances, supplements, and past diagnoses that feel embarrassing or unrelated — they can change the picture.',
      '"Is there a formal biopsychosocial history you go through, or should I lead?"',
    ],
  },
  {
    number: 2,
    title: 'Clinical Interview & Mental Status Exam',
    whatHappens:
      'The clinician asks about mood, thoughts, sleep, appetite, energy, and behavior, while observing your affect, speech, thought process, and insight — this observation is called a mental status exam (MSE).',
    howToEngage: [
      'Answer honestly even when it feels uncomfortable — omissions here are the most common source of a missed or wrong diagnosis.',
      '"What are you listening for when you ask that?" — it\'s fair to ask what a question is trying to assess.',
      'If a question doesn\'t capture what you\'re experiencing, say so and add context rather than picking the closest-fitting answer.',
      'Bring your own language too — "Here\'s how I\'d describe it in my own words, beyond the checklist" often surfaces details a yes/no answer misses.',
    ],
  },
  {
    number: 3,
    title: 'Screening Tools & Rating Scales',
    whatHappens:
      'Standardized questionnaires — like the PHQ-9 (depression), GAD-7 (anxiety), MDQ (mania), or PCL-5 (PTSD) — score your symptoms against research-based cutoffs. These flag likely conditions; they don\'t diagnose by themselves.',
    howToEngage: [
      '"What does my score mean, and where is the cutoff?"',
      '"Is this scale enough on its own, or does a diagnosis need more than this score?"',
      'Ask for a copy of your scored results so you can track change over time and bring them to future visits.',
      'If a scale doesn\'t capture something you\'re feeling, mention it directly — scales are a starting point, not the full story.',
    ],
  },
  {
    number: 4,
    title: 'Applying Diagnostic Criteria',
    whatHappens:
      'The clinician checks your symptoms against a specific criteria set (usually the DSM-5-TR) — this means counting how many required symptoms you have, how long they\'ve lasted, and whether they cause real distress or impairment.',
    howToEngage: [
      '"Which specific criteria am I meeting, and which am I not?"',
      '"What\'s the full diagnostic name and code, so I can look into it further?" (see the Doctor-Speak Glossary for terms like "differential diagnosis")',
      '"How many of the required symptoms do I have, and for how long have they needed to last?"',
      '"What level of distress or impairment counts — and how did we establish that for me?"',
    ],
  },
  {
    number: 5,
    title: 'Ruling Out Other Causes',
    whatHappens:
      'Many psychiatric symptoms overlap with medical conditions (thyroid disorders, vitamin deficiencies, neurological issues), substance use, or other psychiatric conditions. A thorough clinician rules these out before finalizing a diagnosis, sometimes via labs or a referral to your primary care doctor.',
    howToEngage: [
      '"What else could this be, and how are we ruling it out?" — this is the differential diagnosis script, worth using here directly.',
      '"Should I get bloodwork — thyroid, vitamin D, B12 — before we settle on a diagnosis?"',
      'Disclose all substance use (including alcohol, cannabis, and recreational drugs) honestly — it materially changes the differential.',
      '"Could a medication I\'m already taking be causing or worsening this?"',
    ],
  },
  {
    number: 6,
    title: 'Collateral Information (When Relevant)',
    whatHappens:
      'With your consent, a clinician may want input from family, a partner, or records from other providers — especially useful when symptoms affect self-awareness (e.g., mania, memory concerns) or in child/adolescent assessments.',
    howToEngage: [
      '"Would it help to hear from my [partner/parent/previous therapist]? I\'m open to that."',
      'You can also decline — collateral information generally requires your consent, so ask what will and won\'t be shared.',
      'Ask what release-of-information paperwork is needed if you want records sent from a past provider.',
    ],
  },
  {
    number: 7,
    title: 'Case Formulation & Working Diagnosis',
    whatHappens:
      'The clinician synthesizes everything into a working diagnosis plus a "case formulation" — their explanation of why this is happening, including biological, psychological, and social contributing factors. Early on, this is often labeled "provisional" and may be refined over time.',
    howToEngage: [
      '"Is this a confirmed or provisional diagnosis, and what would change it?"',
      '"Can you walk me through your reasoning — what pointed you here over other possibilities?"',
      '"Could more than one thing be going on at once?" (see "comorbidity" in the glossary)',
      '"What would make you reconsider this diagnosis down the road?"',
    ],
  },
  {
    number: 8,
    title: 'Sharing the Diagnosis With You',
    whatHappens:
      'The clinician explains the diagnosis, what it means, and typically its general prognosis. How much detail is shared varies a lot by provider and visit length — you\'re entitled to ask for more.',
    howToEngage: [
      '"Can you explain that in plain language, without the clinical terms?"',
      '"How confident are you in this diagnosis, on a scale of a hunch to certain?"',
      '"Can I get a written summary of this — the diagnosis name, code, and your reasoning — for my records?"',
      'If something doesn\'t sit right, it\'s reasonable to say so: "That doesn\'t quite match what I\'m experiencing — can we revisit this?"',
    ],
  },
  {
    number: 9,
    title: 'Treatment Planning',
    whatHappens:
      'Once there\'s a working diagnosis, the clinician discusses options — therapy modalities, medication, lifestyle changes, or referrals — and (ideally) the evidence, risks, and benefits behind each.',
    howToEngage: [
      '"What are all the evidence-based options, not just the first one you\'d recommend?"',
      '"What would you expect if I did nothing, or tried therapy before medication (or vice versa)?"',
      '"What\'s the timeline before we\'d expect to see improvement, and how will we measure it?"',
      'This is where informed consent applies — you can ask about risks and alternatives before agreeing to any plan.',
    ],
  },
  {
    number: 10,
    title: 'Ongoing Reassessment',
    whatHappens:
      'Mental health diagnoses aren\'t always permanent or fixed — clinicians revisit them as treatment progresses, symptoms evolve, or new information emerges. What starts "provisional" may later be confirmed, refined, or changed entirely.',
    howToEngage: [
      '"Under what circumstances would you revisit or change this diagnosis?"',
      'Keep tracking symptoms between visits (see the Symptom & Mood Tracker) so changes are documented, not just remembered.',
      '"What would \'better\' look like, specifically, so we know if this is working?"',
      '"How often should we formally check in on whether this diagnosis and plan still fit?"',
    ],
  },
]

export default diagnosisProcess
