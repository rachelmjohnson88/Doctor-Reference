export type Section = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  updated: string;
  tags: string[];
  sections: Section[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "perioperative",
    name: "Perioperative Care",
    description: "Pre-op assessment, optimization, and post-op recovery.",
  },
  {
    slug: "critical-care",
    name: "Critical Care",
    description: "Scoring systems and criteria used in the ICU and on the wards.",
  },
  {
    slug: "emergency",
    name: "Emergency Medicine",
    description: "Rapid-assessment tools for triage and acute presentations.",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    description: "Classification systems and staging used day to day in surgery.",
  },
];

export const articles: Article[] = [
  {
    slug: "asa-physical-status",
    category: "perioperative",
    title: "ASA Physical Status Classification",
    summary:
      "The American Society of Anesthesiologists' system for grading a patient's pre-operative physical fitness.",
    updated: "2026-01-01",
    tags: ["anesthesia", "pre-op", "risk"],
    sections: [
      {
        heading: "Classes",
        body: [
          "ASA I — a normal healthy patient.",
          "ASA II — a patient with mild systemic disease, no functional limitation.",
          "ASA III — a patient with severe systemic disease that limits activity but is not incapacitating.",
          "ASA IV — a patient with severe systemic disease that is a constant threat to life.",
          "ASA V — a moribund patient not expected to survive without the operation.",
          "ASA VI — a declared brain-dead patient whose organs are being removed for donor purposes.",
        ],
      },
      {
        heading: "Notes",
        body: [
          "Append 'E' for emergency procedures (e.g. ASA IIIE).",
          "The classification reflects baseline physical status only — it is not a predictor of operative risk on its own, and is best used alongside a procedure-specific risk tool.",
        ],
      },
    ],
  },
  {
    slug: "revised-cardiac-risk-index",
    category: "perioperative",
    title: "Revised Cardiac Risk Index (RCRI / Lee Index)",
    summary:
      "Estimates risk of major cardiac complications after non-cardiac surgery from six independent predictors.",
    updated: "2026-01-01",
    tags: ["cardiac", "pre-op", "risk"],
    sections: [
      {
        heading: "Predictors (1 point each)",
        body: [
          "High-risk surgery (intraperitoneal, intrathoracic, or suprainguinal vascular).",
          "History of ischemic heart disease.",
          "History of congestive heart failure.",
          "History of cerebrovascular disease.",
          "Insulin-treated diabetes mellitus.",
          "Preoperative creatinine > 2.0 mg/dL (177 µmol/L).",
        ],
      },
      {
        heading: "Interpretation",
        body: [
          "0 points — low risk.",
          "1–2 points — moderate risk.",
          "≥3 points — high risk of major cardiac events.",
        ],
      },
    ],
  },
  {
    slug: "fasting-guidelines",
    category: "perioperative",
    title: "Pre-operative Fasting (NPO) Guidelines",
    summary: "Standard ASA fasting intervals before elective procedures requiring anesthesia.",
    updated: "2026-01-01",
    tags: ["anesthesia", "pre-op", "fasting"],
    sections: [
      {
        heading: "Typical intervals",
        body: [
          "Clear liquids — up to 2 hours before.",
          "Breast milk — up to 4 hours before.",
          "Infant formula / non-human milk — up to 6 hours before.",
          "Light meal — up to 6 hours before.",
          "Fried or fatty food, or meat — up to 8 hours or more before.",
        ],
      },
      {
        heading: "Notes",
        body: [
          "Local institutional protocols and patient-specific factors (e.g. delayed gastric emptying, pregnancy, obesity) may extend these intervals — confirm against your own department's policy before applying.",
        ],
      },
    ],
  },
  {
    slug: "qsofa-sirs",
    category: "critical-care",
    title: "qSOFA and SIRS Criteria",
    summary: "Bedside criteria used to flag possible sepsis and systemic inflammatory response.",
    updated: "2026-01-01",
    tags: ["sepsis", "icu", "scoring"],
    sections: [
      {
        heading: "qSOFA (≥2 suggests higher risk)",
        body: [
          "Respiratory rate ≥ 22/min.",
          "Altered mentation (GCS < 15).",
          "Systolic blood pressure ≤ 100 mmHg.",
        ],
      },
      {
        heading: "SIRS (≥2 meets criteria)",
        body: [
          "Temperature > 38°C or < 36°C.",
          "Heart rate > 90/min.",
          "Respiratory rate > 20/min or PaCO2 < 32 mmHg.",
          "White cell count > 12,000/mm³, < 4,000/mm³, or > 10% bands.",
        ],
      },
    ],
  },
  {
    slug: "glasgow-coma-scale",
    category: "critical-care",
    title: "Glasgow Coma Scale (GCS)",
    summary: "Standard scale for assessing level of consciousness after brain injury.",
    updated: "2026-01-01",
    tags: ["neuro", "trauma", "scoring"],
    sections: [
      {
        heading: "Eye opening (1–4)",
        body: [
          "4 — spontaneous.",
          "3 — to speech.",
          "2 — to pain.",
          "1 — none.",
        ],
      },
      {
        heading: "Verbal response (1–5)",
        body: [
          "5 — oriented.",
          "4 — confused conversation.",
          "3 — inappropriate words.",
          "2 — incomprehensible sounds.",
          "1 — none.",
        ],
      },
      {
        heading: "Motor response (1–6)",
        body: [
          "6 — obeys commands.",
          "5 — localizes pain.",
          "4 — withdraws from pain.",
          "3 — abnormal flexion (decorticate).",
          "2 — extension (decerebrate).",
          "1 — none.",
        ],
      },
      {
        heading: "Interpretation",
        body: [
          "Total score ranges 3–15. Mild ≥13, moderate 9–12, severe ≤8.",
        ],
      },
    ],
  },
  {
    slug: "curb-65",
    category: "emergency",
    title: "CURB-65 Score",
    summary: "Predicts mortality in community-acquired pneumonia and guides admission decisions.",
    updated: "2026-01-01",
    tags: ["respiratory", "triage", "scoring"],
    sections: [
      {
        heading: "Criteria (1 point each)",
        body: [
          "Confusion (new disorientation).",
          "Urea > 7 mmol/L (19 mg/dL).",
          "Respiratory rate ≥ 30/min.",
          "Blood pressure — systolic < 90 mmHg or diastolic ≤ 60 mmHg.",
          "Age ≥ 65 years.",
        ],
      },
      {
        heading: "Interpretation",
        body: [
          "0–1 — low risk, consider outpatient treatment.",
          "2 — moderate risk, consider admission.",
          "≥3 — high risk, consider ICU assessment.",
        ],
      },
    ],
  },
  {
    slug: "wells-score-pe",
    category: "emergency",
    title: "Wells Score for Pulmonary Embolism",
    summary: "Estimates pre-test probability of PE to guide further investigation.",
    updated: "2026-01-01",
    tags: ["vascular", "triage", "scoring"],
    sections: [
      {
        heading: "Criteria",
        body: [
          "Clinical signs of DVT — 3 points.",
          "PE is the most likely diagnosis — 3 points.",
          "Heart rate > 100/min — 1.5 points.",
          "Immobilization ≥3 days or surgery in previous 4 weeks — 1.5 points.",
          "Previous DVT/PE — 1.5 points.",
          "Hemoptysis — 1 point.",
          "Malignancy (treated within 6 months) — 1 point.",
        ],
      },
      {
        heading: "Interpretation",
        body: [
          "≤4 — PE unlikely, consider D-dimer.",
          ">4 — PE likely, consider CT pulmonary angiography.",
        ],
      },
    ],
  },
  {
    slug: "clavien-dindo",
    category: "general-surgery",
    title: "Clavien–Dindo Classification of Surgical Complications",
    summary: "Standard grading system for the severity of post-operative complications.",
    updated: "2026-01-01",
    tags: ["complications", "post-op", "classification"],
    sections: [
      {
        heading: "Grades",
        body: [
          "Grade I — any deviation from normal recovery not requiring pharmacological, surgical, endoscopic, or radiological intervention.",
          "Grade II — requiring pharmacological treatment beyond that allowed for Grade I (includes blood transfusion and total parenteral nutrition).",
          "Grade IIIa — requiring surgical, endoscopic, or radiological intervention not under general anesthesia.",
          "Grade IIIb — requiring intervention under general anesthesia.",
          "Grade IVa — life-threatening complication with single organ dysfunction, requiring ICU management.",
          "Grade IVb — life-threatening complication with multi-organ dysfunction.",
          "Grade V — death of the patient.",
        ],
      },
    ],
  },
  {
    slug: "surgical-site-infection-prevention",
    category: "general-surgery",
    title: "Surgical Site Infection (SSI) Prevention Bundle",
    summary: "Core evidence-based measures commonly bundled to reduce surgical site infection.",
    updated: "2026-01-01",
    tags: ["infection", "post-op", "prevention"],
    sections: [
      {
        heading: "Core measures",
        body: [
          "Appropriate timing of prophylactic antibiotics, typically within 60 minutes before incision.",
          "Appropriate hair removal — clipping rather than shaving, only when necessary.",
          "Maintenance of normothermia intra-operatively.",
          "Glycemic control in the perioperative period.",
          "Appropriate skin antisepsis at the surgical site.",
        ],
      },
      {
        heading: "Notes",
        body: [
          "Specific antibiotic choice, dosing, and redosing intervals should follow your institution's antimicrobial stewardship guidelines.",
        ],
      },
    ],
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter((a) => {
    const haystack = [a.title, a.summary, a.category, ...a.tags].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}
