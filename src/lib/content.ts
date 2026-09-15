// Content sourced from the live SmartEye eQMS website (https://eqms-smarteye.com/)
// Preserved as source of truth for business claims — do not fabricate stats, certifications or customers.

export const company = {
  name: "SmartEye eQMS",
  operator: "S-Cube Technologies",
  tagline: "Best eQMS for Medical Devices & SaMD Compliance",
  email: "info@scube-technologies.com",
  phone: "+44 (0) 7459 153907",
  phoneAlt: "+41 799 036 836",
  address: "125 Deansgate, Manchester, M3 2LH, United Kingdom",
  certifications: [
    {
      code: "ISO 9001:2015",
      name: "Quality Management System",
    },
    {
      code: "ISO/IEC 27001:2013",
      name: "Information Security Management System",
    },
  ],
  compliance: ["GDPR Compliant"],
};

export const heroStats = [
  { label: "Faster quality processes" },
  { label: "Reduction in quality admin" },
  { label: "Increase in product release speed" },
  { label: "Faster external audits" },
];

export const pillars = [
  {
    title: "Join Up Data",
    body: "Bring requirements, design, risk, testing and documentation together in one connected record, instead of scattered spreadsheets and shared drives.",
  },
  {
    title: "Go To Free",
    body: "Move manual, paper-based quality processes onto a single digital platform built for medical device and SaMD teams.",
  },
  {
    title: "Mitigate Risk",
    body: "Identify, assess and control risk continuously across the product lifecycle, aligned to ISO 14971.",
  },
  {
    title: "Accelerate Compliance",
    body: "Pre-configured workflows aligned to medical device standards shorten the path from design to release.",
  },
  {
    title: "Enhance Quality",
    body: "Review, approval and traceability tools built to raise the standard of your Quality Management System.",
  },
];

export const platformCapabilities = [
  {
    id: "requirements",
    number: "01",
    title: "Requirements Management",
    summary:
      "Capture user needs and requirements and carry them through the full development record with bi-directional traceability.",
  },
  {
    id: "design-control",
    number: "02",
    title: "Design Control",
    summary:
      "Manage design inputs and outputs, design reviews and approvals across the full SDLC documentation set.",
  },
  {
    id: "risk",
    number: "03",
    title: "Risk Management",
    summary:
      "Identify and mitigate risk with hazard analysis workflows aligned to ISO 14971, connected to design and test evidence.",
  },
  {
    id: "test-management",
    number: "04",
    title: "Test Management",
    summary:
      "Plan, execute and evidence design verification and validation (V&V) with full status visibility and reviewer sign-off.",
  },
  {
    id: "traceability",
    number: "05",
    title: "E2E Traceability",
    summary:
      "Bi-directional traceability web grids connect user needs, requirements, design, risk, tests and results in one view.",
  },
  {
    id: "documents",
    number: "06",
    title: "Document Management",
    summary:
      "Document and record control with approval, revision and version tracking, embedded with Microsoft Office.",
  },
  {
    id: "review-approval",
    number: "07",
    title: "Review & Approval",
    summary:
      "Easy-to-use review and approval workflows with global navigators, supporting electronic records and signatures under 21 CFR Part 11.",
  },
  {
    id: "analytics",
    number: "08",
    title: "Analytics Dashboards",
    summary:
      "Measure progress across compliance phases and filter by user, team or project, right inside the SmartEye interface.",
  },
];

export const lifecycleStages = [
  { number: "01", title: "Requirements", note: "User needs and requirements captured and linked from day one." },
  { number: "02", title: "Design Control", note: "Design inputs and outputs managed through structured reviews." },
  { number: "03", title: "Risk Management", note: "Hazard analysis and risk controls aligned to ISO 14971." },
  { number: "04", title: "Development", note: "SDLC documentation for hardware and software builds tracked together." },
  { number: "05", title: "Testing", note: "Test plans and cases executed against linked requirements." },
  { number: "06", title: "Verification", note: "Design verification evidence captured with reviewer sign-off." },
  { number: "07", title: "Validation", note: "Design validation (V&V) closes the loop back to user needs." },
  { number: "08", title: "Regulatory Submission", note: "DHF, DMR and technical file generation supports submission readiness." },
  { number: "09", title: "Production", note: "Production and process control with validated manufacturing records." },
  { number: "10", title: "Post-Market", note: "Post-market surveillance, feedback and CAPA close the lifecycle loop." },
];

export const qmsCoreProcesses = [
  {
    group: "Management",
    description:
      "Strategic alignment, resource allocation, and continuous improvement.",
    items: [
      "Management Responsibility — setting the Quality Policy and Objectives",
      "Quality Planning — defining how quality will be achieved",
      "Management Review — regular evaluation of QMS performance",
      "Resource Management — ensuring adequate personnel, infrastructure and environment",
    ],
  },
  {
    group: "Product Realization & Lifecycle Control",
    description: "Turning ideas into compliant, safe and effective medical devices.",
    items: [
      "Design & Development Control — managing the product design lifecycle",
      "Risk Management (ISO 14971) — identifying and mitigating risks",
      "Purchasing & Supplier Management — qualifying and monitoring suppliers",
      "Production & Process Control — validated manufacturing, traceability, labeling",
      "Change Management — controlled updates to product, process or documents",
    ],
  },
  {
    group: "Compliance & Documentation",
    description: "Accurate, controlled documentation and electronic records.",
    items: [
      "Document Control — approval, revision and version tracking of QMS documents",
      "Record Control — secure handling of quality records (training, audit, complaints)",
      "Electronic Records & Signatures (eQMS) — compliant with FDA 21 CFR Part 11",
    ],
  },
  {
    group: "Monitoring & Improvement",
    description: "Identifying, correcting and preventing problems.",
    items: [
      "Internal Audits — periodic review of QMS compliance and effectiveness",
      "Nonconformance Management (NCs) — identifying and handling deviations",
      "Corrective & Preventive Action (CAPA) — root cause analysis and resolution",
      "Feedback Analysis — learning from user and field feedback",
      "Post-Market Surveillance (EU MDR) — real-world performance and vigilance",
    ],
  },
  {
    group: "Support & Compliance Enablement",
    description: "Keeping the QMS usable, compliant and scalable.",
    items: [
      "Training & Competence — ensuring qualified, knowledgeable staff",
      "Calibration & Equipment Control — maintaining measurement accuracy",
      "Software Validation — ensuring tools/eQMS used are fit for purpose",
      "Labeling & UDI Compliance — accurate, compliant product identification",
    ],
  },
];

export const differentiators = [
  {
    title: "Expertise and Innovation",
    body: "Built by S-Cube Technologies on real Quality and Regulatory Affairs experience in the medical device sector.",
  },
  {
    title: "Cloud-Based Security and Accessibility",
    body: "Access your QMS securely from wherever your team works.",
  },
  {
    title: "Comprehensive Regulatory Compliance",
    body: "Workflows pre-configured around the standards medical device and SaMD teams are held to.",
  },
  {
    title: "Ready-to-Use Templates and Customization",
    body: "Hundreds of ready-made SOPs and templates, including QMS, DHF and technical files, with automatic DHF and DMR generation.",
  },
  {
    title: "Global Collaboration and Integration",
    body: "Embedded with Microsoft Office and built for distributed teams to review and approve together.",
  },
  {
    title: "Seamless Data Migration",
    body: "Move existing quality records into SmartEye without starting from a blank page.",
  },
  {
    title: "International Application and Scalability",
    body: "Scales from early-stage startups to international, multi-site organisations.",
  },
  {
    title: "Licensing and Accessibility",
    body: "Role-based access for Organisation Admin, Project Admin, Standard Users and External Users.",
  },
  {
    title: "Customer-Centric Onboarding and Support",
    body: "Guided onboarding designed around your team, not a generic rollout.",
  },
  {
    title: "Continuous Improvements Without Additional Costs",
    body: "The platform keeps evolving as part of your subscription.",
  },
];

export const complianceStandards = [
  { code: "ISO 13485", label: "Medical device QMS" },
  { code: "ISO 14971", label: "Risk management" },
  { code: "IEC 62304", label: "Medical device software" },
  { code: "IEC 62366", label: "Usability engineering" },
  { code: "FDA 21 CFR 820", label: "Design control" },
  { code: "21 CFR Part 11", label: "Electronic records & signatures" },
  { code: "EU MDR 2017/745", label: "Post-market surveillance" },
];

export const roles = [
  "Organisation Admin",
  "Project Admin",
  "Standard Users",
  "External Users",
];

export const onboardingSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We learn your product, team structure and current quality processes.",
  },
  {
    number: "02",
    title: "Configure",
    body: "SmartEye is configured to your workflows, roles and permission levels.",
  },
  {
    number: "03",
    title: "Migrate",
    body: "Existing quality records and documentation are migrated into the platform.",
  },
  {
    number: "04",
    title: "Go Live",
    body: "Your team is onboarded with customer-centric support from day one.",
  },
];

export const templateCategories = [
  "QMS",
  "DHF",
  "DMR",
  "Technical File",
  "Risk Management",
  "Design Control",
  "SOP",
  "Audit Documents",
];

// Full article bodies live on the current SmartEye blog — cards link out to the source
// article rather than reproducing content we don't have the original text for.
export const blogPosts = [
  {
    title: "How an eQMS Simplifies ISO 13485 Compliance for UK Medical Device Startups",
    date: "16 July 2026",
    slug: "how-an-eqms-simplifies-iso-13485-compliance-for-uk-medical-device-startups",
    category: "Regulatory",
  },
  {
    title: "Why UK Medical Device Startups are Adopting eQMS to accelerate ISO 13485 Compliance",
    date: "6 July 2026",
    slug: "why-uk-medical-device-startups-are-adopting-eqms-to-accelerate-iso-13485-compliance",
    category: "QMS",
  },
  {
    title: "ISO 13485 Explained in Plain English",
    date: "24 March 2026",
    slug: "iso-13485-explained-in-plain-english",
    category: "ISO 13485",
  },
  {
    title: "Why Most Medical Device Startups Fail Their First Audit",
    date: "10 March 2026",
    slug: "why-most-medical-device-startups-fail-their-first-audit",
    category: "Medical Devices",
  },
  {
    title: "ISO 13485 QMS: A Complete Guide for Medical Device Companies and Startups",
    date: "18 May 2025",
    slug: "iso-13485-qms-a-complete-guide-for-medical-device-companies-and-startups",
    category: "ISO 13485",
  },
  {
    title: "Streamlining Medical Device Design and Development Under EU MDR 2017/745: A Comprehensive Guide",
    date: "18 August 2023",
    slug: "streamlining-medical-device-design-and-development-under-eu-mdr-2017-745-a-comprehensive-guide",
    category: "Regulatory",
  },
  {
    title: "Documentation control in ISO 13485",
    date: "4 July 2022",
    slug: "documentation-control-in-iso-13485",
    category: "ISO 13485",
  },
  {
    title: "Advantages and disadvantages of e-QMS in medical device companies",
    date: "14 June 2022",
    slug: "advantages-and-disadvantages-of-e-qms-in-medical-device-companies",
    category: "QMS",
  },
].map((post) => ({ ...post, url: `https://eqms-smarteye.com/${post.slug}/` }));

export const securityPrinciples = [
  {
    title: "Confidentiality",
    body: "Only authorised persons can access information held within the platform.",
  },
  {
    title: "Integrity",
    body: "Information is kept accurate, with safeguards against corruption or unauthorised change.",
  },
  {
    title: "Availability",
    body: "Information is available to those who need it, when they need it.",
  },
];
