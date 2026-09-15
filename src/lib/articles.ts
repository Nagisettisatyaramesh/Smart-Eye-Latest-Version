// Article content migrated verbatim (light formatting only) from the live
// SmartEye eQMS blog at https://eqms-smarteye.com/ — preserved as source of
// truth. Do not fabricate, expand or reinterpret claims when editing.

export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  summary: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "how-an-eqms-simplifies-iso-13485-compliance-for-uk-medical-device-startups",
    title: "How an eQMS Simplifies ISO 13485 Compliance for UK Medical Device Startups",
    date: "16 July 2026",
    category: "Regulatory",
    author: "s-cube-admin-a",
    summary:
      "In this article, we'll explore how an eQMS simplifies ISO 13485 compliance for UK medical device companies and why adopting the right medical device eQMS software like SmartEye can accelerate your journey to certification.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "For UK medical device startups, achieving ISO 13485 compliance is often one of the biggest challenges on the path to regulatory approval and market success. While the standard provides a framework for establishing a quality management system (QMS), implementing and maintaining compliance using spreadsheets, emails, and paper-based processes can quickly become overwhelming.",
          "This is where an Electronic Quality Management System (eQMS) becomes invaluable. An eQMS automates quality processes, centralizes documentation, and provides complete traceability, helping startups meet ISO 13485 requirements efficiently while reducing compliance risks.",
        ],
      },
      {
        heading: "What Is ISO 13485?",
        paragraphs: [
          "ISO 13485 is the internationally recognized quality management standard specifically designed for medical device manufacturers and related organizations. It defines the requirements for establishing, implementing, and maintaining an effective Quality Management System (QMS) that ensures consistent product quality, regulatory compliance, and patient safety.",
          "The standard outlines requirements for:",
        ],
        list: [
          "Quality Management Systems (QMS)",
          "Design and Development Controls",
          "Risk Management",
          "Document Control",
          "Supplier Management",
          "Corrective and Preventive Actions (CAPA)",
          "Internal Audits",
          "Training Management",
          "Complaint Handling",
        ],
      },
      {
        heading: "Challenges Medical Device Startups Face with ISO 13485",
        paragraphs: ["Many startups begin their compliance journey using manual systems such as:"],
        list: [
          "Microsoft Excel spreadsheets",
          "Shared network folders",
          "Email approvals",
          "Paper-based forms",
          "Multiple disconnected software tools",
        ],
      },
      {
        paragraphs: ["These approaches often create challenges such as:"],
        list: [
          "Lack of Document Control — managing SOPs, work instructions, and quality records manually increases the risk of employees using outdated documents.",
          "Poor Traceability — auditors require evidence showing who approved documents, when changes were made, and why updates occurred.",
          "Audit Preparation Stress — collecting records from various locations before an ISO 13485 audit can consume significant time and resources.",
          "Increased Risk of Non-Conformities — manual processes frequently lead to missing approvals, incomplete records, and inconsistent quality practices.",
        ],
      },
      {
        heading: "What Is an eQMS?",
        paragraphs: [
          "An Electronic Quality Management System (eQMS) is a software platform designed to digitize and automate quality management processes. A medical device eQMS typically includes:",
        ],
        list: [
          "Document Control",
          "Audit Management",
          "CAPA Management",
          "Supplier Quality Management",
          "Risk Management",
          "Complaint Handling",
          "Training Management",
          "Design Control",
          "Change Control",
          "Regulatory Compliance Tracking",
        ],
      },
      {
        heading: "1. Automated Document Control",
        paragraphs: [
          "ISO 13485 requires strict control over quality documentation. An eQMS automatically maintains version history, controls document approvals, tracks document reviews, provides electronic signatures, and prevents unauthorized changes. This ensures employees always access the latest approved documents.",
        ],
      },
      {
        heading: "2. Simplified Design Control Management",
        paragraphs: [
          "Medical device startups must demonstrate design control throughout product development. An eQMS helps manage design inputs and outputs, verification and validation activities, design reviews and changes, and Design History Files (DHF) — creating complete traceability across the product lifecycle.",
        ],
      },
      {
        heading: "3. Integrated Risk Management",
        paragraphs: [
          "ISO 14971 risk management activities are closely linked with ISO 13485 requirements. Modern eQMS platforms help teams identify hazards, assess risks, implement controls, monitor effectiveness and maintain risk registers — reducing compliance gaps and simplifying audits.",
        ],
      },
      {
        heading: "4. Efficient CAPA Management",
        paragraphs: [
          "Corrective and Preventive Actions (CAPA) are critical components of ISO 13485. An eQMS automates issue reporting, root cause analysis, corrective and preventive actions, and effectiveness verification — with automated workflows ensuring CAPAs are completed on time and properly documented.",
        ],
      },
      {
        heading: "5. Audit Readiness at All Times",
        paragraphs: [
          "Preparing for certification audits becomes significantly easier with an eQMS. Auditors can quickly review training records, quality procedures, design documentation, CAPA records, risk assessments and supplier evaluations — everything stored in a centralized, searchable system.",
        ],
      },
      {
        heading: "6. Improved Training Compliance",
        paragraphs: [
          "ISO 13485 requires personnel to be adequately trained and competent. An eQMS can assign training automatically, track completion status, generate reminders, maintain training records and demonstrate competency during audits — eliminating the administrative burden of manual training tracking.",
        ],
      },
      {
        heading: "7. Faster Regulatory Approval Preparation",
        paragraphs: [
          "Whether pursuing UKCA marking, CE marking, or FDA submissions, an eQMS helps maintain organized documentation required by regulators — resulting in faster submission preparation, reduced compliance risks and improved regulatory confidence.",
        ],
      },
      {
        heading: "Why UK Medical Device Startups Should Adopt an eQMS Early",
        paragraphs: ["Many startups delay implementing an eQMS until they prepare for certification. However, early adoption offers significant advantages:"],
        list: [
          "Reduced Rework — quality processes are established from the beginning rather than being rebuilt later.",
          "Scalable Growth — as teams expand, the eQMS provides consistent workflows and controls.",
          "Investor Confidence — investors increasingly evaluate quality systems and regulatory readiness before funding medical device startups.",
          "Faster Time to Market — efficient quality management supports quicker certification and product launch timelines.",
        ],
      },
      {
        heading: "Key Features to Look for in Medical Device eQMS Software",
        paragraphs: ["When selecting an eQMS for your startup, consider the following capabilities:"],
        list: [
          "ISO 13485 Compliance Support",
          "FDA 21 CFR Part 820 Alignment",
          "IEC 62304 Integration",
          "ISO 14971 Risk Management",
          "Electronic Signatures",
          "Design Control Management",
          "Audit Management",
          "CAPA Workflows",
          "Training Management",
          "Cloud-Based Access",
          "Regulatory Traceability",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "For UK medical device startups, ISO 13485 compliance does not need to be a complex, paper-heavy process. A modern eQMS streamlines quality management activities, automates workflows, improves traceability, and ensures organizations remain audit-ready throughout their growth journey.",
          "By implementing an eQMS early, startups can accelerate certification efforts, reduce compliance risks, and focus more resources on innovation and product development. If your organization is preparing for ISO 13485 certification, investing in the right medical device eQMS software can be one of the most valuable decisions you make.",
        ],
      },
    ],
  },
  {
    slug: "why-uk-medical-device-startups-are-adopting-eqms-to-accelerate-iso-13485-compliance",
    title: "Why UK Medical Device Startups are Adopting eQMS to accelerate ISO 13485 Compliance",
    date: "6 July 2026",
    category: "QMS",
    author: "s-cube-admin-a",
    summary:
      "As transition happens from a brilliant prototype to a commercialised product, UK medtech startups run head-first into a complex regulatory framework — here's why a growing cohort are deploying an eQMS from day one.",
    sections: [
      {
        paragraphs: [
          "Bringing a new medical device to market is an exhilarating milestone for any UK tech startup. But as transition happens from a brilliant prototype to a commercialised product, you run head-first into a complex regulatory framework. In the UK, the path to market access requires strict adherence to international quality standards, chief among them being ISO 13485:2016.",
          "With the Medicines and Healthcare products Regulatory Agency (MHRA) updating its regulatory roadmap and rolling out pathways like the International Reliance Pathway, the compliance landscape is moving faster than ever. For agile startups, relying on legacy paper systems, scattered spreadsheets or basic cloud storage folders is no longer just inefficient, it is a major business risk.",
          "This growing operational bottleneck is known as \"document debt.\" Left unchecked, it can stall your regulatory submissions, inflate your audit prep costs, and delay your market launch by months. That is why a growing cohort of UK medtech innovators are bypassing traditional paperwork entirely and deploying an eQMS (electronic Quality Management System) right from day one.",
          "What is an eQMS? An electronic Quality Management System is a specialized, cloud-based software platform designed to manage an organisation's documents, processes, and compliance tracking under a single digital roof.",
        ],
      },
      {
        heading: "How an eQMS Simplifies ISO 13485 Compliance",
        paragraphs: [
          "Although ISO 13485 certification is not legally mandatory in the UK, it is widely regarded as the foundation for demonstrating an effective Quality Management System when seeking UKCA marking under the UK Medical Devices Regulations (UK MDR). It also supports regulatory submissions in many international markets. Achieving certification requires proving to a UK Approved Body that you maintain complete control over your documentation, design changes, and risk management.",
          "For software medical devices, an eQMS also supports compliance with IEC 62304 by providing traceability between software requirements, development activities, testing and release records.",
          "Here is exactly how an eQMS replaces manual stress with automated compliance across the core clauses of the standard:",
        ],
      },
      {
        heading: "1. Centralising Document Control (Clause 4.2)",
        paragraphs: [
          "Under ISO 13485, every Standard Operating Procedure (SOP), work instruction and quality policy must undergo a rigorous lifecycle of drafting, review, approval and distribution.",
          "Challenges with manual processes: chasing team members for wet-ink signatures, accidentally editing old versions of a document, or losing track of who has read the latest update.",
          "The eQMS solution: an eQMS automates the entire document lifecycle. Built-in, FDA 21 CFR Part 11-compliant electronic signatures allow your team to sign off on documents securely from anywhere. The system automatically archives outdated versions, ensuring that your team only works from the currently approved revision.",
        ],
      },
      {
        heading: "2. Safeguarding the Design History File (Clause 7.3)",
        paragraphs: [
          "If you are developing Software as a Medical Device (SaMD) or a complex hardware instrument, your Design History File (DHF) is your most critical asset. It proves that your final device was developed safely according to user needs.",
          "Challenges with manual processes: manually maintaining a traceability matrix across dynamic spreadsheets to connect user needs, design inputs, design outputs, and validation tests. One engineering tweak can break the entire matrix.",
          "The eQMS solution: the software dynamically links your design inputs directly to outputs and testing protocols. If a component or code block changes, the eQMS flags exactly which test cases and risks are affected, keeping your DHF permanently audit-ready.",
        ],
      },
      {
        heading: "3. Closing the Loop on CAPA and Deviations (Clause 8.5)",
        paragraphs: [
          "When something goes wrong — whether it is a manufacturing defect or a software bug — ISO 13485 requires you to document it, find the root cause, and implement a Corrective and Preventive Action (CAPA).",
          "Challenges with manual processes: forgetting a CAPA deadline because it was filed away in a spreadsheet tab that nobody checked.",
          "The eQMS solution: an eQMS turns quality events into active, trackable tasks. The system automatically triggers alerts, routes root-cause analyses to the appropriate team members, and keeps a tamper-proof audit trail of how the issue was resolved.",
        ],
      },
      {
        heading: "The Executive Blueprint: Manual vs. Automated QMS",
        paragraphs: ["To see how this impacts your timeline to audit readiness, consider the structural difference in how data is handled:"],
        table: {
          headers: ["Regulatory Priority", "Paper / General Cloud Drive", "SmartEye eQMS Solution"],
          rows: [
            ["Audit Preparation", "Weeks of stressful manual file checks.", "Zero-prep; real-time dashboard exports."],
            ["Sign-off Security", "Scanned PDFs or physical ink.", "Cryptographic, compliant e-signatures."],
            ["Traceability", "Broken links across static files.", "Automated, cross-linked entity database."],
            ["SOP Training", "Email chains with \"read and understood\".", "Automatic training prompts & quiz verification."],
          ],
        },
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "For early-stage medical device companies, quality management should not be viewed as an administrative burden. A well-implemented electronic Quality Management System (eQMS) establishes the foundation for regulatory compliance, product quality and sustainable business growth.",
          "As UK medical device regulations continue to evolve and documentation requirements become more demanding, organisations that digitise their Quality Management System early are better positioned to achieve ISO 13485 certification, prepare for audits with confidence and bring innovative products to market more efficiently.",
        ],
      },
    ],
  },
  {
    slug: "iso-13485-explained-in-plain-english",
    title: "ISO 13485 Explained in Plain English",
    date: "24 March 2026",
    category: "ISO 13485",
    author: "s-cube-admin-a",
    summary:
      "For startups that just want to build, not drown in paperwork — ISO 13485 isn't about templates or bureaucracy. It's about proving you can consistently build a safe, reliable product.",
    sections: [
      {
        paragraphs: [
          "If you're building a medical device startup, you've definitely heard this early on: \"You need ISO 13485.\" And almost every founder I speak to has the same initial reactions — we will do it later, we are too early, is this just documentation, can we manage this in Excel or shared folders.",
          "I had exactly the same conversations with teams again and again, so let me simplify it. ISO 13485 is not what most startups think it is.",
        ],
      },
      {
        heading: "1. What ISO 13485 Actually Is (In One Line)",
        paragraphs: [
          "ISO 13485 is a system that proves you can consistently build a safe medical device. That's it! Not paperwork, not templates, not bureaucracy. In simple terms, it shows that your company is in control of what it is building.",
        ],
      },
      {
        heading: "2. Why Startups Struggle With It",
        paragraphs: [
          "From what I've seen working with multiple startups, the issue is rarely complexity — it's usually the way it gets approached. Here's how it typically plays out:",
        ],
        list: [
          "\"Let's just create documents when needed\" — teams start writing SOPs only when someone asks for them. Over time, nothing connects and the system feels fragmented.",
          "\"We'll clean it up before the audit\" — there is always a plan to fix everything later. In reality, this creates stress, missing records, and last-minute confusion.",
          "\"Excel / Google Drive should be enough\" — this works in the very early days, but as soon as the team grows, things become harder to track and manage. Version control, traceability, and clarity start slipping.",
          "\"Quality is QA's job\" — one person is expected to handle compliance, but without the full team being involved, the system never really works.",
        ],
      },
      {
        paragraphs: [
          "In most early-stage audits I've been part of, the biggest gap is not missing documents. It's that nothing is connected end-to-end.",
        ],
      },
      {
        heading: "3. What ISO 13485 Is Really Asking You To Do",
        paragraphs: ["If you remove all the terminology, it comes down to five simple things:"],
        list: ["Define how you work", "Follow it consistently", "Keep evidence of what you did", "Fix issues when they happen", "Keep improving"],
      },
      {
        heading: "4. The Biggest Misconception",
        paragraphs: [
          "Many startups think ISO 13485 is about documentation. In reality, it is about control, traceability, and evidence — documentation is just the output of a system that is working properly.",
        ],
      },
      {
        heading: "5. What Auditors Actually Care About",
        paragraphs: [
          "Auditors are not focused on how your documents look. They are trying to understand how your system works in reality. Typical questions are:",
        ],
        list: [
          "How was this requirement implemented",
          "Where is the evidence this was tested",
          "How was this risk evaluated",
          "Who approved this change and when",
        ],
      },
      {
        heading: "A Simple Example",
        paragraphs: ["If you build a feature, you should be able to show:"],
        list: ["Why it exists", "How it was designed", "What risks were considered", "How it was tested", "Who approved it"],
      },
      {
        paragraphs: [
          "This connection is what we call traceability. And in my experience, this is where most startups struggle the most.",
        ],
      },
      {
        heading: "6. When Should You Start ISO 13485",
        paragraphs: [
          "You do not need it at the idea stage, but you should have it in place before clinical validation, regulatory submission, and first customers.",
          "The difference I've seen is very clear: teams that start earlier build it naturally into how they work, while teams that delay it often have to rebuild things under pressure.",
        ],
      },
      {
        heading: "7. The Real Pain Point",
        paragraphs: [
          "ISO 13485 itself is not difficult to understand. What becomes challenging is maintaining it as your team grows and your product evolves — this is usually the stage where documents increase rapidly, processes become harder to follow, and systems start feeling heavy or disconnected.",
        ],
      },
      {
        heading: "8. The Shift That Changes Everything",
        paragraphs: [
          "The companies that handle this well don't treat ISO 13485 as a certification exercise. They treat it as \"the way the company operates every day.\" That shift makes everything simpler, including audits.",
        ],
      },
      {
        heading: "9. Final Thought",
        paragraphs: [
          "ISO 13485 is not about passing an audit. It is about building a company that can consistently deliver safe and reliable products. And from what I've seen, the earlier you start thinking this way, the smoother everything becomes later.",
        ],
      },
    ],
  },
  {
    slug: "why-most-medical-device-startups-fail-their-first-audit",
    title: "Why Most Medical Device Startups Fail Their First Audit",
    date: "10 March 2026",
    category: "Medical Devices",
    author: "Anindya Mookerjea",
    summary:
      "Most medical device startups don't fail their first audit because the product is unsafe. They fail because they built the company in the wrong order.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Most medical device startups don't fail their first audit because the product is unsafe. They fail because they built the company in the wrong order.",
          "Typical startup journey: build prototype → attract investors → run pilots → prepare certification. And then… \"Now let's build the QMS.\" This is where things start getting difficult.",
          "Regulators are not evaluating how exciting your product is. They are evaluating how decisions were made while building it.",
        ],
      },
      {
        paragraphs: ["Auditors tend to ask very basic questions:"],
        list: [
          "Where did this requirement come from?",
          "Who approved this design change?",
          "Why was this risk considered acceptable?",
          "How do you know this test result was reviewed?",
        ],
      },
      {
        paragraphs: [
          "If the answers sound like \"we discussed it in a meeting\", \"it's somewhere in Slack\", or \"the engineer remembers\" — then the audit is already going in the wrong direction.",
          "Medical devices are not approved based on performance alone. They are approved based on controlled development. You cannot recreate development history later. You can only capture it while it happens.",
          "This is where many startups struggle. They document the product, but not the decisions behind the product. They can show what the device does. But they cannot show why it was designed that way, who made the decision, and whether the decision was properly reviewed and approved.",
          "Regulators are essentially reviewing decision traceability.",
        ],
      },
      {
        heading: "Start capturing decisions from day one",
        paragraphs: [
          "If you are building a medical device today, start capturing decisions from day one. Not during certification month. Not when you hire a QA manager. Not when someone says \"we should probably think about regulatory.\"",
          "A simple rule that works surprisingly well: whenever a key development decision is made, record what was decided, who made the decision, why the decision was made, and who approved it. That's it.",
          "A spreadsheet works. A document works. A simple tracking system works. The important thing is that the history exists.",
        ],
      },
      {
        paragraphs: [
          "At SmartEye, we often see startups trying to reconstruct development history just weeks before an audit. It rarely works.",
          "A good QMS doesn't just store documents. It captures how decisions were made during development. And that is exactly what auditors want to see.",
          "If you're building a medical device startup, we created a simple startup audit readiness checklist showing what should exist before your first audit. Happy to share it.",
        ],
      },
    ],
  },
  {
    slug: "iso-13485-qms-a-complete-guide-for-medical-device-companies-and-startups",
    title: "ISO 13485 QMS: A Complete Guide for Medical Device Companies and Startups",
    date: "18 May 2025",
    category: "ISO 13485",
    author: "s-cube-admin-a",
    summary:
      "In today's regulatory landscape, having a robust Quality Management System is no longer optional for medical device manufacturers — whether you're targeting FDA approval or EU MDR compliance.",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "In today's regulatory landscape, having a robust Quality Management System (QMS) is no longer optional for medical device manufacturers — it's a strategic necessity. Whether you're targeting FDA approval or EU MDR compliance, implementing an ISO 13485-certified QMS ensures your organization meets global standards while delivering safe and effective products.",
        ],
      },
      {
        heading: "What Is ISO 13485 QMS?",
        paragraphs: [
          "ISO 13485 is the internationally recognized standard for QMS in the medical device industry. It outlines a framework for consistently meeting customer and regulatory requirements throughout the product lifecycle — from design to post-market surveillance.",
        ],
      },
      {
        heading: "Key Components of a Medical Device QMS",
        list: [
          "Design Controls — ensures products are designed to meet intended use and user needs.",
          "Risk Management — integrates ISO 14971 to manage product risks throughout development.",
          "Document & Change Control — tracks revisions, approvals, and traceability of critical documentation.",
          "Supplier Quality Management — ensures external suppliers and contractors meet quality expectations.",
          "Corrective and Preventive Actions (CAPA) — identifies and addresses quality issues proactively.",
        ],
      },
      {
        heading: "FDA QSR vs. ISO 13485: What's the Difference in 2025?",
        paragraphs: [
          "The FDA's Quality System Regulation (QSR), defined in 21 CFR Part 820, is currently being harmonized with ISO 13485. This move will align the US regulatory framework with global standards.",
        ],
      },
      {
        heading: "Do You Need an eQMS?",
        paragraphs: [
          "Implementing an electronic QMS (eQMS) can streamline compliance, reduce manual errors, and improve audit readiness.",
        ],
        list: [
          "Real-time document control",
          "Audit trails for every change",
          "Faster CAPA and training management",
          "Integration with PLM, ERP, and CRM",
        ],
      },
      {
        heading: "How to Implement a QMS for Medical Devices",
        list: [
          "Gap Analysis — assess your current processes against ISO 13485",
          "Define Policies & Objectives — align quality goals with regulatory needs",
          "Train Your Team — ensure all roles understand QMS requirements",
          "Document Everything — procedures, manuals, DHF, DMR, etc.",
          "Audit & Improve — perform internal audits and management reviews",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "In 2025, staying compliant means staying competitive. Whether you're a startup or a seasoned manufacturer, a well-structured ISO 13485 QMS not only ensures compliance but also builds trust with regulators, customers, and partners. Now is the time to invest in a quality system that scales with your medical device innovation.",
        ],
      },
    ],
  },
  {
    slug: "streamlining-medical-device-design-and-development-under-eu-mdr-2017-745-a-comprehensive-guide",
    title: "Streamlining Medical Device Design and Development Under EU MDR 2017/745: A Comprehensive Guide",
    date: "18 August 2023",
    category: "Regulatory",
    author: "s-cube-admin-a",
    summary:
      "A walkthrough of designing and developing a medical device under the EU MDR using the Waterfall process, and how SmartEye's eQMS supports each stage.",
    sections: [
      {
        paragraphs: [
          "In a world where healthcare is evolving at an unprecedented pace, the design and development of medical devices demand meticulous attention to detail. The European Union's Medical Device Regulation (EU MDR) 2017/745 has set new standards for the industry, requiring manufacturers to adhere to a systematic approach that ensures safety, efficacy, and compliance. This guide walks through the steps of designing and developing a medical device under the EU MDR using the Waterfall process, and how SmartEye's eQMS software supports each stage of that product lifecycle.",
        ],
      },
      {
        heading: "The Waterfall Process for Medical Device Design and Development",
        paragraphs: ["The Waterfall process, a sequential design approach, ensures that every aspect of medical device design and development is meticulously executed:"],
        list: [
          "Requirement Analysis — identify the specific needs of the medical device: user requirements, intended use, and performance criteria. SmartEye provides an intuitive interface to record and manage user needs, ensuring no critical aspects are overlooked.",
          "System Design — create a comprehensive system design outlining the architecture, components, and interfaces of the device. SmartEye offers an approval workflow so design decisions are documented and authorised by relevant stakeholders.",
          "Software and Hardware Development — develop the components based on the design specifications. SmartEye's traceability matrix links user needs to design elements and tests, creating a transparent record of how the device meets requirements.",
          "Integration and Testing — integrate components and conduct rigorous testing to verify functionality and performance. SmartEye manages and documents testing processes to help identify and address issues promptly.",
          "Verification and Validation — ensure the device meets defined requirements and functions correctly in its intended environment. SmartEye's risk management documents assist in identifying potential risks and mitigation strategies.",
          "Regulatory Compliance and Certification — prepare documentation for submission to a Notified Body: the traceability matrix, risk management documents, and verification/validation reports, kept organised and audit-ready.",
          "Production and Post-Market Surveillance — once certified, manufacture the device and monitor its performance in the market. SmartEye provides a central repository for post-market surveillance data.",
        ],
      },
      {
        heading: "Requirement Analysis: Laying the Foundation",
        paragraphs: [
          "User requirements serve as the compass guiding your medical device's development. This stage means engaging a diverse group of stakeholders — healthcare professionals, patients, and end-users — through interviews, surveys, and usability studies.",
          "SmartEye's eQMS provides a user-friendly interface to record, categorise, prioritise and link user requirements, eliminating the risk of missing important needs during design.",
          "Translating user requirements into clear technical specifications is streamlined through a centralised platform for communication and documentation across multidisciplinary teams.",
          "Risk management is integrated into the requirement analysis process, with SmartEye's traceability matrix establishing clear links between user requirements, design elements, tests, and risk mitigation measures — simplifying the eventual certification process.",
          "SmartEye's structured, automated approval workflow lets relevant stakeholders review, comment, and approve requirements, and its validation features confirm finalised requirements align with the device's intended use and performance criteria.",
        ],
      },
      {
        heading: "System Design: Blueprinting the Device",
        paragraphs: [
          "System design structures the device's components, interfaces, and interactions into a coherent whole, requiring cross-functional collaboration between engineers, designers, and domain experts.",
          "SmartEye supports this with secure document sharing, comment threads, and version control, plus a structured approach to documenting the design into modules, components, and interfaces — including visual aids, diagrams, and schematics.",
          "Automated approval workflows ensure technical specifications, schematic diagrams and interface definitions are documented, reviewed, and endorsed by the right individuals, with design elements cross-referenced against user requirements — and risk management integrated from this stage onward.",
        ],
      },
      {
        heading: "Software and Hardware Development",
        paragraphs: [
          "This is the stage where engineers bring design specifications to life. SmartEye provides document version control, collaborative editing, and task management so the development process stays structured and transparent.",
          "For software-based devices, SmartEye's version-controlled repositories enable teams to collaborate on codebases across locations, tracking changes and resolving conflicts.",
          "For hardware prototyping and testing, SmartEye records and manages testing procedures from initial setups through fine-tuning. The traceability matrix continues linking development efforts to the original user requirements and design specifications, and integration/compatibility testing is documented within the same platform.",
        ],
      },
      {
        heading: "Integration and Testing",
        paragraphs: [
          "As components come together, SmartEye records and manages integration procedures, aiding collaboration and issue identification. Its structured approach to test planning, execution, and documentation lets teams coordinate testing efforts, track progress, and document results, issues, and resolutions in one place.",
          "Verification and validation activities — confirming components meet requirements, and that the device meets its intended use in the real world — are documented within the same system, with the traceability matrix linking tests to specific user needs, design elements, and requirements.",
        ],
      },
      {
        heading: "Verification and Validation",
        paragraphs: [
          "Verification confirms individual components meet specified requirements; validation confirms the device as a whole meets its intended use in real-world scenarios. SmartEye supports both by linking design elements, requirements, test results and validation activities, and documenting results for a comprehensive compliance record.",
          "Risk management remains integral throughout, with SmartEye ensuring potential risks from design choices, testing outcomes, and usage scenarios are considered — and the traceability matrix serving as a roadmap during regulatory audits.",
        ],
      },
      {
        heading: "Regulatory Compliance and Certification",
        paragraphs: [
          "Regulatory compliance under EU MDR 2017/745 is non-negotiable — it demonstrates that a device is safe, effective, and suitable for its intended use. SmartEye centralises documentation, provides version control, and facilitates collaboration so every aspect of development is meticulously documented and easily accessible for regulatory assessment.",
          "Certification involves submitting comprehensive documentation, test results, and risk assessments to a regulatory authority or notified body. SmartEye's well-organised repository of user requirements, design specifications, risk management documents and verification/validation reports simplifies this submission.",
          "The traceability matrix demonstrates the traceability of a device's development journey — linking user requirements, design elements, testing outcomes, and risk mitigation strategies into a clear narrative for regulators. This approach extends beyond EU MDR to FDA approval and other international markets.",
        ],
      },
      {
        heading: "Production and Post-Market Surveillance",
        paragraphs: [
          "Ensuring quality production at scale requires stringent quality control and documentation. SmartEye tracks manufacturing procedures, materials, and quality checks so each unit adheres to the standards established during development.",
          "Post-market surveillance involves monitoring device performance, collecting user feedback, and identifying issues that arise in real-world usage. SmartEye centralises this data, helping teams proactively address issues and make informed decisions for continuous improvement.",
          "Change management ensures modifications — software updates, manufacturing changes, or improvements from user feedback — are documented, assessed for impact, and implemented seamlessly, with SmartEye tracking each change against device performance, safety, and compliance.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Designing and developing a medical device under EU MDR 2017/745 demands a systematic approach to meet stringent requirements. The Waterfall process, coupled with SmartEye's eQMS, supports managing the entire product lifecycle while maintaining compliance — whether seeking EU MDR certification or FDA approval.",
        ],
      },
    ],
  },
  {
    slug: "documentation-control-in-iso-13485",
    title: "Documentation control in ISO 13485",
    date: "4 July 2022",
    category: "ISO 13485",
    author: "Anindya Mookerjea",
    summary:
      "Moving to an e-QMS helps with documentation control since many of the steps are automated — covering the basic elements any ISO 13485 quality management system should follow.",
    sections: [
      {
        paragraphs: [
          "Moving to an e-QMS (electronic QMS) solution shall help you with the documentation control, since many of the steps would be automatized and you would need to focus on what really matters rather than caring about versions, changes in the documents, reviews and updates. Your time spent on document control activities will decrease and therefore your document control will be efficient and successful.",
          "The control of documents and records in medical device companies is a crucial aspect of the quality management system, not only because your organization will need to comply with this mandatory requirement but because the documentation control is essential to build the solid foundations of an effective management system and its respective processes.",
          "This article covers the basic elements that any quality management system based on ISO 13485 should follow in order to provide real high quality to the patients, who are the ultimate recipients of the medical devices.",
        ],
      },
      {
        heading: "What is the difference between a document and a record?",
        paragraphs: [
          "Documents are written information about planning the business processes, therefore they are subject to change and should be changed in order to introduce necessary improvements. Examples include the Quality Policy, Quality Manual, Quality Objectives, and any other written Procedure.",
          "Records are a type of document with some particularities, because they are created when something has already been done — records are evidence of past events. Unlike documents, records cannot be changed. Records may include training records, customer feedback reports, review minutes, sterilization records or medical device installation records.",
          "Since documents can be changed, they must be reviewed, approved and updated, and the information contained shall be understandable and accessible to the relevant people in your organization. Records must be appropriately identified and securely protected since they might contain confidential health information, and must be regularly backed up and disposed of when obsolete.",
        ],
      },
      {
        heading: "What should be included in the Procedure for the control of documents and records?",
        paragraphs: [
          "According to ISO 13485:2016 the organizations must create a Procedure for the control of internal and external documents that must cover the following elements:",
        ],
        list: [
          "Document review and update — performed by the relevant people prior to approval, using track changes as good practice, and communicated if the change affects other procedures.",
          "Approval of documents — authorities assigned to every document to ensure it is adequate before use, typically carried out by top management such as the CEO.",
          "Revision status and changes — every revision adequately identified with specific codification, the latest version available to users, with a history of changes.",
          "Documents available at their point of use — the latest version available where the process is conducted and to whoever performs the activity.",
          "Legibility and readability of documents — easy to read and understand, avoiding complex vocabulary, accessible to anyone involved in the process.",
          "Documents of external origin — the organization maintains relevant external documents (regulatory documents, equipment manuals, international standards, customer specifications) and ensures the latest version is available.",
          "Obsolete documents — outdated documents correctly identified and either archived or destroyed to prevent misuse, with a copy retained for at least the lifetime of the medical device or as required by regulation.",
        ],
      },
      {
        heading: "How to structure the documentation?",
        paragraphs: [
          "The QMS documentation includes different types of documents — the Quality Manual, Quality Policy, Quality Procedures, work instructions and quality records — represented using a documentation hierarchy:",
        ],
        list: [
          "Level 1: The Quality Manual — provides the documentation structure of the QMS, the scope of the management system, procedures or references to them, and the interaction between processes within the QMS.",
          "Level 2: Procedures — written documents describing a process (the interacting activities that transform inputs into outputs), such as the procedure for Design and Development or for Production and Service Provision.",
          "Level 3: Work Instructions — similar to procedures but more detailed, including specific activities, their sequence and methods used; usually referred to in procedures.",
          "Level 4: Forms and Records — completed forms, minutes of meetings, instruction manuals and other evidence that a process is being performed as planned.",
        ],
      },
      {
        paragraphs: [
          "Following this hierarchy of documentation can help the organization achieve a management system with a well-established structure that will reduce possible errors and ease the monitoring of processes, increasing the overall efficiency of the QMS.",
        ],
      },
      {
        heading: "Benefits of document control",
        paragraphs: [
          "ISO 13485 requires companies to create numerous documents and records to prove that the medical device being manufactured is safe enough to be delivered and used by the patient — so the control of documents is essential to prevent errors while running processes, or worse, nonconformities in an external audit.",
        ],
      },
    ],
  },
  {
    slug: "advantages-and-disadvantages-of-e-qms-in-medical-device-companies",
    title: "Advantages and disadvantages of e-QMS in medical device companies",
    date: "14 June 2022",
    category: "QMS",
    author: "Anindya Mookerjea",
    summary:
      "Why online quality management solutions can help medical device companies comply with standards such as ISO 13485 or ISO 9001 effectively — and the drawbacks worth weighing too.",
    sections: [
      {
        paragraphs: [
          "The use of online solutions for compliance with voluntary standards and legal regulations is becoming more popular among companies of every size and sector worldwide. This article analyzes why these software tools can help medical device companies comply with quality standards such as ISO 13485 or ISO 9001 in an effective and successful way.",
        ],
      },
      {
        heading: "What is an e-QMS?",
        paragraphs: [
          "Until a few years ago, companies used to complete a pile of documents saved on the quality representative's computer, and with luck these documents were appropriately coded with the latest version uploaded to the correct folder. Control of documents became more of a headache than something that could actually bring benefits to implementing and maintaining a Quality Management System (QMS).",
          "The release of software tools such as e-QMS (electronic Quality Management System) has marked a before and after in implementing and maintaining international standards, especially in document and record control. Using an e-QMS, companies ensure all changes are tracked and the latest versions are uploaded to the system — and depending on the solution used, implementation processes are automated to a greater or lesser extent, from creating the quality manual and establishing quality policy and objectives, to defining all stages of product realization and the remaining processes needed to complete implementation.",
        ],
      },
      {
        heading: "Advantages when using an e-QMS",
        list: [
          "Effective control of documents and records — you will know where your procedures and records are, the current version, who is responsible for which document, and that your documents are effectively protected.",
          "Automatization of the implementation process — the e-QMS guides you through implementation steps, including recording non-conformities and conducting corrective actions, with documents automatically generated from your data.",
          "Dealing with complex terms of the standard — an e-QMS translates complex terminology into comprehensible language so even beginners can complete every template.",
          "Reduction in implementation costs — less need to hire external consultants, with templates provided to fulfil the requirements of the quality standard, easing both implementation and later maintenance.",
          "Protection of documents — data is backed up regularly, with only the correct people assigned to each process and document able to access, edit and review documentation using a single ID and password.",
          "Monitoring of the QMS project — a dashboard helps monitor planned activities and deadlines, making it easier to spot issues such as lack of resources or engagement.",
          "Easier auditing process — documents (policies, procedures, work instructions and others) are easy to allocate to show compliance, and the tool itself evidences fulfilment of document and record control requirements.",
        ],
      },
      {
        heading: "Disadvantages when using an e-QMS",
        list: [
          "Choosing the right e-QMS — the market is full of inefficient online tools, so it's important to check previous customer references and confirm the provider offers a warranty of the product and service.",
          "Complex and inaccurate documentation included in e-QMS — businesses new to QMS may not know which documents/records are mandatory versus voluntary, so it's worth confirming the tool contains everything needed and is easy to fill out.",
          "e-QMS investment — an upfront cost, though one that should be weighed against the benefits gained in return.",
          "User-non-friendliness — some solutions marketed as user-friendly are not; requesting a demo before purchase helps confirm the tool is easy to navigate with accessible technical support.",
        ],
      },
      {
        heading: "Is an e-QMS the best option for my company?",
        paragraphs: [
          "Consider the advantages an e-QMS can bring to your medical device organization, taking into account the size of your business and the complexity of your products and services, but don't forget the drawbacks that may affect QMS certification. If you decide to purchase an online solution, ensure it is a reliable company that will help your business not only comply with the requirements of the standard but grow and become more competitive in the market.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
