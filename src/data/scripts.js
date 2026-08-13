// Each script/form is rendered on its own printable page.
// Field types: "text" (single line), "textarea" (multi-line), "table" (rows/cols), "checklist" (list of items)

const scripts = [
  {
    id: 'symptom-tracker',
    title: 'Symptom & Mood Tracker',
    purpose:
      'A daily log to bring to appointments so you can show patterns instead of relying on memory. Clinicians consistently say tracked data is more useful than "it\'s been bad lately."',
    whenToUse: 'Fill out daily (even briefly) for 1–2 weeks before an appointment about a new or ongoing symptom.',
    sections: [
      {
        heading: 'Daily log',
        type: 'table',
        columns: ['Date', 'Symptom / Mood (1–10)', 'Sleep (hrs)', 'Triggers or events', 'What helped', 'Medication taken?'],
        rows: 10,
      },
      {
        heading: 'Before your appointment, look for patterns',
        type: 'checklist',
        items: [
          'Time of day symptoms are worse or better',
          'Connection to sleep, meals, stress, or menstrual cycle',
          'Connection to a medication dose or timing',
          'Anything that reliably helps, even a little',
          'How symptoms affect work, school, or relationships',
        ],
      },
    ],
  },
  {
    id: 'describe-symptoms',
    title: 'Describing What I\'m Experiencing',
    purpose:
      'A fill-in-the-blank script to organize your thoughts before an appointment, so nerves don\'t make you forget key details. Bring it with you and read from it if that\'s easier.',
    whenToUse: 'Use for any visit — especially first appointments or when symptoms are hard to put into words.',
    sections: [
      {
        heading: 'The basics',
        type: 'fields',
        fields: [
          { label: 'What I\'m experiencing (in my own words)', type: 'textarea' },
          { label: 'When it started', type: 'text' },
          { label: 'How often it happens', type: 'text' },
          { label: 'How long each episode lasts', type: 'text' },
          { label: 'On a scale of 1–10, how severe is it at its worst?', type: 'text' },
        ],
      },
      {
        heading: 'Context',
        type: 'fields',
        fields: [
          { label: 'What makes it better', type: 'textarea' },
          { label: 'What makes it worse', type: 'textarea' },
          { label: 'How this affects my daily life, work, or relationships', type: 'textarea' },
          { label: 'What I\'ve already tried (medications, therapy, lifestyle changes)', type: 'textarea' },
          { label: 'Relevant family or personal medical history', type: 'textarea' },
        ],
      },
      {
        heading: 'What I want from this visit',
        type: 'fields',
        fields: [
          { label: 'My main question or goal for today', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'differential-diagnosis',
    title: 'Requesting a Differential Diagnosis',
    purpose:
      'A talking-points script for asking your doctor to think through alternative explanations instead of stopping at the first idea — useful when a diagnosis feels incomplete or treatment isn\'t working.',
    whenToUse: 'Use when you feel dismissed, when a diagnosis doesn\'t fully explain your symptoms, or before starting a major treatment.',
    sections: [
      {
        heading: 'Phrases you can use',
        type: 'checklist',
        items: [
          '"What else could be causing this besides [current diagnosis]?"',
          '"What\'s on the differential for my symptoms?"',
          '"What tests would rule other causes in or out?"',
          '"What would you expect to see if this diagnosis is correct — and what would make you reconsider it?"',
          '"Is there a condition that explains all of my symptoms together, not just some of them?"',
          '"If this treatment doesn\'t work, what\'s the next step?"',
        ],
      },
      {
        heading: 'My situation',
        type: 'fields',
        fields: [
          { label: 'Current diagnosis (if any)', type: 'text' },
          { label: 'Symptoms that don\'t seem fully explained by it', type: 'textarea' },
          { label: 'Tests or treatments already tried', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'was-i-heard-log',
    title: 'Was I Heard? Visit Log',
    purpose:
      'A pattern-tracking log for noticing possible bias in your care — around race, gender, weight, age, disability, sexuality, or class. One dismissive visit is ambiguous; a documented pattern across several is data worth acting on.',
    whenToUse: 'Fill out after any visit that left you feeling dismissed, rushed, or unheard — even briefly. Review it every few visits to look for a pattern.',
    sections: [
      {
        heading: 'Visit-by-visit log',
        type: 'table',
        columns: ['Date', 'Concern I raised', 'What was investigated', 'What was dismissed or attributed to something about me without explanation', 'How I felt leaving'],
        rows: 8,
      },
      {
        heading: 'Looking for a pattern',
        type: 'checklist',
        items: [
          'The same explanation gets offered for every new symptom, regardless of what I actually describe',
          'Visits feel noticeably shorter or more rushed than what others describe for similar concerns',
          'Generalizing language stands in for actually asking me',
          'Defensiveness when I ask informed questions or bring notes',
          'My own report of my symptoms is treated as less reliable than an assumption about me',
        ],
      },
      {
        heading: 'If I see a pattern',
        type: 'fields',
        fields: [
          { label: 'What the pattern looks like across visits', type: 'textarea' },
          { label: 'Questions I want to ask directly at my next visit', type: 'textarea' },
          { label: 'Whether I want a second opinion, and from whom', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'diagnosis-process-checklist',
    title: 'Diagnostic Process Checklist',
    purpose:
      'Every question from the "How Diagnosis Works" guide, in one printable page — organized by the stage of evaluation so you can ask the right question at the right moment instead of all at once.',
    whenToUse: 'Bring to a diagnostic evaluation, especially a first appointment with a new psychiatrist or therapist, or when you want a clearer picture of how a diagnosis was reached.',
    sections: [
      {
        heading: '1. Intake & History',
        type: 'checklist',
        items: [
          '"What information do you need from me to get an accurate picture?"',
          'Disclose everything, including substances, supplements, and past diagnoses — even ones that feel embarrassing or unrelated.',
        ],
      },
      {
        heading: '2. Clinical Interview & Mental Status Exam',
        type: 'checklist',
        items: [
          '"What are you listening for when you ask that?"',
          'If a question doesn\'t capture what you\'re experiencing, add context instead of picking the closest-fitting answer.',
        ],
      },
      {
        heading: '3. Screening Tools & Rating Scales',
        type: 'checklist',
        items: [
          '"What does my score mean, and where is the cutoff?"',
          '"Is this scale enough on its own, or does a diagnosis need more than this score?"',
          'Ask for a copy of your scored results to track over time.',
        ],
      },
      {
        heading: '4. Applying Diagnostic Criteria',
        type: 'checklist',
        items: [
          '"Which specific criteria am I meeting, and which am I not?"',
          '"What\'s the full diagnostic name and code, so I can look into it further?"',
          '"How many of the required symptoms do I have, and for how long?"',
        ],
      },
      {
        heading: '5. Ruling Out Other Causes',
        type: 'checklist',
        items: [
          '"What else could this be, and how are we ruling it out?"',
          '"Should I get bloodwork before we settle on a diagnosis?"',
          '"Could a medication I\'m already taking be causing or worsening this?"',
        ],
      },
      {
        heading: '6. Collateral Information',
        type: 'checklist',
        items: [
          '"Would it help to hear from my [partner/parent/previous therapist]?"',
          'Ask what release-of-information paperwork is needed if you want past records shared.',
        ],
      },
      {
        heading: '7. Case Formulation & Working Diagnosis',
        type: 'checklist',
        items: [
          '"Is this a confirmed or provisional diagnosis, and what would change it?"',
          '"Can you walk me through your reasoning?"',
          '"Could more than one thing be going on at once?"',
        ],
      },
      {
        heading: '8. Sharing the Diagnosis',
        type: 'checklist',
        items: [
          '"Can you explain that in plain language, without the clinical terms?"',
          '"How confident are you in this diagnosis?"',
          '"Can I get a written summary of this for my records?"',
        ],
      },
      {
        heading: '9. Treatment Planning',
        type: 'checklist',
        items: [
          '"What are all the evidence-based options, not just the first one you\'d recommend?"',
          '"What\'s the timeline before we\'d expect to see improvement, and how will we measure it?"',
        ],
      },
      {
        heading: '10. Ongoing Reassessment',
        type: 'checklist',
        items: [
          '"Under what circumstances would you revisit or change this diagnosis?"',
          '"What would \'better\' look like, specifically?"',
          '"How often should we check in on whether this diagnosis and plan still fit?"',
        ],
      },
    ],
  },
  {
    id: 'medication-checkin',
    title: 'New Medication Check-In & Side Effect Report',
    purpose:
      'Structured notes for starting a new medication, and for reporting how it\'s going at follow-up — makes it easy for your prescriber to adjust dose or switch medications with real information.',
    whenToUse: 'Start this the day you begin a new medication; bring it to your follow-up appointment.',
    sections: [
      {
        heading: 'Before I start',
        type: 'fields',
        fields: [
          { label: 'Medication name and starting dose', type: 'text' },
          { label: 'What it\'s meant to help with', type: 'text' },
          { label: 'How long until we expect to see an effect', type: 'text' },
          { label: 'Side effects I was told to watch for', type: 'textarea' },
          { label: 'Questions I asked / answers I got', type: 'textarea' },
        ],
      },
      {
        heading: 'Follow-up: how it\'s going',
        type: 'table',
        columns: ['Date', 'Dose taken', 'Symptom improvement (1–10)', 'Side effects noticed', 'Severity (1–10)'],
        rows: 8,
      },
      {
        heading: 'Questions for my next appointment',
        type: 'fields',
        fields: [
          { label: 'Is this side effect expected to fade, or should we adjust the dose/medication?', type: 'textarea' },
          { label: 'Other notes', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'second-opinion',
    title: 'Requesting a Second Opinion',
    purpose: 'A script for asking your current doctor for a second opinion without it feeling confrontational — this is a normal, expected part of care.',
    whenToUse: 'Use when a diagnosis is serious, uncertain, or when treatment isn\'t working and you want another perspective.',
    sections: [
      {
        heading: 'Phrases you can use',
        type: 'checklist',
        items: [
          '"I\'d like to get a second opinion to feel confident moving forward — can you refer me, or should I find someone independently?"',
          '"Could you send my records over so a second doctor has full context?"',
          '"This isn\'t about trusting you less — I just want to make sure we\'re not missing anything."',
          '"Can I keep seeing you while I get a second opinion?"',
        ],
      },
      {
        heading: 'Notes',
        type: 'fields',
        fields: [
          { label: 'What I want the second opinion to address', type: 'textarea' },
          { label: 'Records/tests I need to bring or send', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'visit-prep-checklist',
    title: 'Appointment Prep Checklist',
    purpose: 'A quick pre-visit checklist so nothing important gets forgotten in a short appointment window.',
    whenToUse: 'Run through this the night before or morning of any appointment.',
    sections: [
      {
        heading: 'Bring with you',
        type: 'checklist',
        items: [
          'Photo ID and insurance card',
          'List of current medications, doses, and supplements',
          'Symptom tracker or notes (see Symptom Tracker form)',
          'List of questions, ranked by priority in case time runs short',
          'Names/contact info of other providers involved in your care',
          'A support person, if allowed and helpful',
          'Pen and paper, or this checklist, to take notes during the visit',
        ],
      },
      {
        heading: 'Before you leave the appointment, make sure you know',
        type: 'checklist',
        items: [
          'The name of any new diagnosis, and how to spell it',
          'The name, dose, and purpose of any new or changed medication',
          'What side effects warrant a call vs. an ER visit',
          'What the next step is, and who is responsible for it (you or the office)',
          'When and how to follow up, and who to contact with questions',
          'How to access visit notes and test results (patient portal, etc.)',
        ],
      },
      {
        heading: 'My top 3 questions today (ranked by priority)',
        type: 'fields',
        fields: [
          { label: '1.', type: 'text' },
          { label: '2.', type: 'text' },
          { label: '3.', type: 'text' },
        ],
      },
    ],
  },
  {
    id: 'advocating-for-someone',
    title: 'Advocating for a Family Member or Loved One',
    purpose: 'A script and checklist for supporting someone else\'s appointment — as a caregiver, parent, or advocate — while respecting their autonomy where possible.',
    whenToUse: 'Use when accompanying someone to appointments, especially if they have difficulty communicating during visits (due to crisis, cognitive symptoms, age, or overwhelm).',
    sections: [
      {
        heading: 'Before the visit, talk with the person you\'re supporting about',
        type: 'checklist',
        items: [
          'What role they want you to play (silent support, note-taker, active co-advocate)',
          'What they do and don\'t want you to share with the provider',
          'Whether you\'re legally authorized to receive information (HIPAA release, healthcare proxy, guardianship) — ask the office what\'s needed',
          'A signal they can give you if they want you to stop talking or step out',
        ],
      },
      {
        heading: 'Phrases you can use in the room',
        type: 'checklist',
        items: [
          '"[Name] asked me to help share some details — is that alright?"',
          '"From what I\'ve observed at home, ..." (stick to observations, not diagnoses)',
          '"Can we make sure [Name] has a chance to add anything before we finish?"',
          '"What should we watch for that would mean we need to come back sooner?"',
        ],
      },
      {
        heading: 'Notes',
        type: 'fields',
        fields: [
          { label: 'Observations from home worth sharing', type: 'textarea' },
          { label: 'Questions the person wants asked on their behalf', type: 'textarea' },
        ],
      },
    ],
  },
  {
    id: 'medical-records-request',
    title: 'Medical Records Request Letter',
    purpose: 'A template letter for requesting a copy of your medical records — something you\'re legally entitled to in the U.S. under HIPAA, typically within 30 days.',
    whenToUse: 'Use when switching providers, seeking a second opinion, or building your own records for an appeal or disability claim.',
    sections: [
      {
        heading: 'Letter template',
        type: 'letter',
        text: `[Your name]
[Your address]
[Date]

[Provider / Medical Records Department name]
[Facility address]

Re: Request for copy of medical records
Patient name: [Your full name]
Date of birth: [DOB]
Patient ID / MRN (if known): [ID]

To whom it may concern,

I am requesting a complete copy of my medical records, including office visit notes, lab and imaging results, discharge summaries, and medication records, for the period of [date range or "all dates of service"].

Please send these records to [mailing address / secure email / patient portal — specify], or make them available for pickup at your earliest convenience, consistent with the applicable turnaround time under HIPAA (generally within 30 days).

If there is a fee for this request, please let me know the amount in advance.

Thank you for your help.

Sincerely,
[Your name]
[Phone number]
[Email address]`,
      },
    ],
  },
  {
    id: 'insurance-appeal',
    title: 'Insurance Appeal / Prior Authorization Letter',
    purpose:
      'A starting template for appealing a denied claim or requesting prior authorization. Insurers must give you a specific reason for denial — use it to address that reason directly.',
    whenToUse: 'Use after a claim denial or when a treatment requires prior authorization. Ask your doctor\'s office if they can co-sign or submit supporting documentation.',
    sections: [
      {
        heading: 'Letter template',
        type: 'letter',
        text: `[Your name]
[Your address]
[Date]

[Insurance company name]
Attn: Appeals Department
[Address from your denial letter]

Re: Appeal of denied claim
Member name: [Your full name]
Member ID: [ID number]
Claim number: [Claim #]
Date of service: [Date]

To whom it may concern,

I am writing to formally appeal the denial of coverage for [treatment/medication/service], denied on [date] for the stated reason: "[quote the denial reason from your letter]."

I am appealing this decision because [explain why the treatment is medically necessary — e.g., other options tried and failed, your provider's clinical rationale, guideline support].

Enclosed / attached, please find supporting documentation from my provider, [Doctor's name], including [clinical notes, letter of medical necessity, records of prior treatments tried].

Please let me know if any additional information is needed to process this appeal, and the expected timeline for a decision. I understand I may be entitled to an expedited review if this delay poses a risk to my health.

Sincerely,
[Your name]
[Phone number]
[Email address]`,
      },
      {
        heading: 'Before you send it',
        type: 'checklist',
        items: [
          'Ask your doctor\'s office for a "letter of medical necessity"',
          'Keep copies of everything you send, and note the date sent',
          'Check your plan\'s appeal deadline (often 60–180 days from denial)',
          'Ask about expedited/urgent appeals if delay could harm your health',
          'If internal appeal fails, ask about your right to an external review',
        ],
      },
    ],
  },
]

export default scripts
