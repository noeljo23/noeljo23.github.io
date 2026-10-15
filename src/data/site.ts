// Single source for profile content. Every claim here was confirmed by Noel,
// written by him (Desktop\apps\SOP.docx, Dec 2023), or traced to the job-search
// achievements library. Do not add unsourced numbers or stories.

export const profile = {
  name: "Noel John",
  title: "Data & ML Engineer",
  email: { user: "noeljohn19984501", domain: "gmail.com" },
  github: "https://github.com/noeljo23",
  linkedin: "https://www.linkedin.com/in/noeljohn1",
  cv: "/Noel-John-CV.pdf",
  // SLOT: meta description (Noel). Current approved string kept until he writes his own.
  description:
    "Noel John is a data and ML engineer in Vancouver. Co-op at Geotab, MSc at Northeastern, three years at Media.net. 2nd worldwide at Ocean Hackathon 2025.",
} as const;


// About, Full story panel. Each entry is a SLOT: Full story #n (Noel).
// About: built from his own SOP draft. Spelling fixed, phrasing kept.
export const about = [
  "I've always wondered why people do what they do. Why more people prefer one kind of food. Why we open the fridge every hour even though we know there's nothing new in it. It took me a while to realise those are just data points about how people think, and that's more or less how I ended up in this field.",
  "I studied electronics engineering in Mumbai. The subject I did best in was neural networks and fuzzy logic, and one of my undergraduate projects averaged a neural network and a random forest to predict what people would buy next from their invoice history.",
  "Then I joined Media.net. Before I started I thought I knew everything, and that I'd aced the interview. I was wrong. I spent weekends learning SQL, Python and Tableau properly, and a VP there showed me a completely different way to look at a problem. The thing I took away: nothing is really difficult. It just needs more effort, more knowledge, or a different way in.",
  "In 2024 I moved to Vancouver because I didn't want to spend my whole life in one city when there's so much out there to learn.",
] as const;

export const outside = {
  story:
    "I started swimming at five and was scared of the deep end, until an instructor threw me in while I was crying and asking for a float. I got over the fear that day and got good at it. Since then I've tried to give most things at least one go before saying no.",
  why:
    "I chose this field because it combines the two things I love most, solving problems and understanding how people think. It is something I want to keep doing for a long time.",
} as const;

// Experience: each line is situation, action, result, kept to one sentence.
// Sources: job-search/achievements-library.md (line refs in the portfolio notes).
// Public rules: no Geotab internal numbers, no Media.net dollar figures.
export interface Role {
  title: string;
  org: string;
  place: string;
  period: string;
  lines: readonly string[];
}

export const work: readonly Role[] = [
  {
    title: "Data Analyst (Co-op), Global Operations",
    org: "Geotab",
    place: "Vancouver",
    period: "Jan 2026 – Present",
    lines: [
      "Disproved the prevailing theory for a revenue projection overshoot by reconciling the gap against live data; the review owner then made my monthly back-test a standing process.",
      "Explained a large, recurring gap between two revenue systems by reconciling it piece by piece, showing nearly all of it was a definition difference and pinning the real defects to specific lines of code.",
      "Designed and built the data-quality layer for the revenue pipelines, so problems surface before they reach the monthly review and dashboards.",
      "Built a Cloud Run service that diagnoses pipeline failures automatically and posts a root-cause diagnosis to the team.",
      "Traced a false alarm in an anomaly check to a backfill, proved the data was not corrupted, and showed the check itself was fragile.",
    ],
  },
  {
    title: "Data Analyst / Business Analyst",
    org: "Media.net",
    place: "Mumbai",
    period: "Aug 2021 – Aug 2024",
    lines: [
      "Automated the team's ETL workflows in Airflow and Alteryx, cutting manual workload by 40% and the monthly reporting cycle from six hours to under one.",
      "Cut the typical investigation into a production data issue from eight hours to two.",
      "Built Python and SQL pipelines over 10M+ records a day across BigQuery and Redshift.",
      "Built customer lifetime value models covering five mobile apps with 5M+ monthly active users.",
      "Cut new-analyst onboarding time by 30% through the data-model and validation documentation I kept for the team.",
      "Built Tableau dashboards and helped move the data warehouse from Redshift to BigQuery.",
    ],
  },
  {
    title: "Global Recreation Ambassador",
    org: "Northeastern University",
    place: "Vancouver",
    period: "Jan 2025 – Dec 2025",
    lines: ["Organised 20+ recreation events for 150+ international students."],
  },
  {
    title: "Teaching Assistant",
    org: "Northeastern University",
    place: "Vancouver",
    period: "Jan 2025 – Apr 2025",
    lines: ["Ran Python exercises, SQL tutorials and Tableau labs for 20 graduate students."],
  },
  {
    title: "Instructor",
    org: "Try Catch Classes",
    place: "Mumbai",
    period: "May 2023 – May 2024",
    lines: [
      "Trained working professionals in Alteryx, SQL and Tableau as a then-certified Alteryx instructor; 8 in 10 moved into analytics roles within three months.",
    ],
  },
  {
    title: "Volunteer English tutor",
    org: "Teach India (British Council and Times of India)",
    place: "Mumbai",
    period: "Dec 2017 – Mar 2018",
    lines: ["Taught spoken English and job readiness to 30+ adult learners; 5+ found jobs afterwards."],
  },
];

export interface Award {
  event: string;
  result: string;
  date: string;
  href?: string;
}

export const awards: readonly Award[] = [
  {
    event: "PowerTrust GenAI Hackathon",
    result: "1st place",
    date: "Apr 2026",
    href: "/projects/solis/",
  },
  {
    event: "Northeastern Global Innovation Challenge (Dentons)",
    result: "Deal handoff tool for an international law firm",
    date: "Mar 2026",
    href: "/projects/crossborderx/",
  },
  {
    event: "Ocean Hackathon 2025",
    result: "1st in Canada, then 2nd worldwide at the Grand Finale in Brest",
    date: "Oct – Dec 2025",
    href: "/projects/strait-guardian/",
  },
  {
    event: "InnoFest 2025",
    result: "Built the video path for a WorkSafeBC fall-protection checker",
    date: "Nov 2025",
    href: "/projects/innofest/",
  },
  { event: "Visualization Hackathon, Northeastern", result: "Led a team of 3 to 2nd of 12 teams", date: "Dec 2024" },
];

export const education = [
  {
    school: "Northeastern University, Vancouver",
    degree: "MSc, Data Analytics Engineering",
    period: "Sep 2024 – Apr 2027",
    detail: "GPA 3.85",
  },
  {
    school: "University of Mumbai",
    degree: "B.E., Electronics Engineering",
    period: "Aug 2017 – Jun 2021",
    detail: "",
  },
] as const;


// Skills: evidence in the achievements library or Noel's own code, plus the CV-only
// skills Noel confirmed on 2026-10-15 (recorded in achievements-library.md).
// Still off: Spark, Snowflake, dbt, Kafka, Databricks.
export const skills = [
  { label: "Languages", items: "Python, SQL, R" },
  {
    label: "Data engineering",
    items: "BigQuery, Redshift, PostgreSQL, MySQL, SQLite, Airflow (Cloud Composer), Alteryx, data modelling, data-quality testing",
  },
  {
    label: "Cloud and infra",
    items: "Google Cloud (Cloud Run, IAM), AWS (S3, Lambda), Azure (Functions, Blob Storage, Video Indexer), Docker, Kubernetes, Linux, SLURM on H200 GPUs",
  },
  {
    label: "ML and statistics",
    items: "scikit-learn, PyTorch, TensorFlow, XGBoost, H2O AutoML, MLflow, SHAP, regression, clustering, time series forecasting, A/B and hypothesis testing, cohort and lifetime value analysis",
  },
  {
    label: "LLMs and NLP",
    items: "RAG, multi-agent pipelines, LangChain, LangGraph, FAISS, ChromaDB, spaCy, sentence-transformers, prompt guardrails",
  },
  { label: "Computer vision and 3D", items: "EfficientNet, 3D Gaussian Splatting, NeRF, Blender scripting" },
  { label: "BI and analytics", items: "Tableau, Power BI, Looker, Superset, Excel, Mixpanel, Amplitude, Google Analytics" },
  { label: "Apps and tools", items: "Streamlit, FastAPI, Flask, Plotly, Git, GitLab CI, GitHub Actions, pytest, Jira, Confluence" },
] as const;
