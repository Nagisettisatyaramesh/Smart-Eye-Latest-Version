// Legal content preserved verbatim (condensed formatting only) from the live SmartEye eQMS website.

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  title: "Website Privacy Policy",
  lastUpdated: "07 May 2024",
  intro: [
    "This privacy policy applies between you, the User of this Website, and S-Cube Technologies Limited, the owner and provider of this Website. S-Cube Technologies Limited takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.",
    "This privacy policy should be read alongside, and in addition to, our Terms and Conditions.",
  ],
  sections: [
    {
      heading: "Definitions and interpretation",
      paragraphs: [
        "Data: collectively all information that you submit to S-Cube Technologies Limited via the Website.",
        "Cookies: a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website.",
        "Data Protection Laws: any applicable law relating to the processing of personal Data, including the GDPR and any national implementing laws, regulations and secondary legislation.",
        "S-Cube Technologies Limited, we or us: S-Cube Technologies Limited, a company incorporated in England and Wales with registered number 10800835, whose registered office is at 125 Deansgate, Manchester, United Kingdom, M3 2LH.",
        "User or you: any third party that accesses the Website and is not employed by, or providing services to, S-Cube Technologies Limited in connection with the Website.",
      ],
    },
    {
      heading: "Controller",
      paragraphs: [
        "S-Cube Technologies Limited (company number 10800835, registered office 125 Deansgate, Manchester, United Kingdom, M3 2LH) is the data controller under the GDPR and is responsible for the data processing described in this policy.",
        "You can contact our Data Protection Officer at 125 Deansgate, Manchester, United Kingdom, M3 2LH, phone +44 7459 153907, or by email at anindya.mookerjea@scube-technologies.com.",
      ],
    },
    {
      heading: "Data we collect",
      list: [
        "Name",
        "Job title",
        "Contact information such as email addresses and telephone numbers",
        "Web browser type and version (automatically collected)",
      ],
    },
    {
      heading: "How we collect Data",
      paragraphs: [
        "Data is given to us by you — for example when you contact us, register for an account, complete a survey, make a payment, opt in to marketing, or use our services.",
        "Data is also collected automatically — including your IP address, and the date, time and frequency with which you access the Website — together with Data collected via cookies, in line with your browser's cookie settings.",
      ],
    },
    {
      heading: "Our use of Data",
      paragraphs: [
        "Data may be used for internal record keeping and improvement of our products and services, where we deem it necessary for our legitimate interests, or, where you register for an account, for the performance of a contract between you and us.",
      ],
    },
    {
      heading: "Who we share Data with",
      list: [
        "Any of our group companies or affiliates",
        "Our employees, agents and/or professional advisors, to improve our services or obtain advice",
      ],
    },
    {
      heading: "Keeping Data secure",
      paragraphs: [
        "Access to your account is controlled by a password and username unique to you, and Data is stored on secure servers. If you suspect any misuse, loss or unauthorised access to your Data, contact anindya.mookerjea@scube-technologies.com immediately.",
      ],
    },
    {
      heading: "Data retention",
      paragraphs: [
        "Unless a longer period is required or permitted by law, Data is held only for as long as necessary to fulfil the purposes in this policy, or until you request its deletion. Data may persist on backup or archival media for legal, tax or regulatory purposes.",
      ],
    },
    {
      heading: "Your rights",
      list: [
        "Right to access — request copies of, or corrections to, the information we hold about you",
        "Right to correct — have inaccurate or incomplete Data rectified",
        "Right to erase — request deletion or removal of your Data",
        "Right to restrict — limit how we use your Data",
        "Right to data portability — request that we move, copy or transfer your Data",
        "Right to object — object to our use of your Data, including for legitimate interests",
      ],
      paragraphs: [
        "To exercise any of these rights, contact gdpr@scube-technologies.com. If you are unsatisfied with how a complaint is handled, you may refer it to the UK Information Commissioner's Office (ICO) at ico.org.uk.",
      ],
    },
    {
      heading: "Transfers outside the European Economic Area",
      paragraphs: [
        "Data may be stored, processed and transferred to countries outside the EEA, including to our group companies. Any such transfer is made compliant with data protection legislation using appropriate safeguards, such as standard contractual clauses.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This Website may place and access Cookies on your computer in accordance with UK and EU Cookie Law. You will be asked for consent before non-essential Cookies are placed. See our Cookie Policy for full details of the cookies used.",
      ],
    },
    {
      heading: "Changes to this privacy policy",
      paragraphs: [
        "S-Cube Technologies Limited may change this privacy policy from time to time or as required by law. Changes are posted on the Website and take effect on your first use following the update. Contact gdpr@scube-technologies.com with any questions.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  title: "Terms and Conditions",
  lastUpdated: "07 May 2024",
  intro: [
    "These Terms and Conditions apply to the purchase of services and goods from S-Cube Technologies Limited, a company registered in England and Wales under number 10800835, registered office 125 Deansgate, Manchester, United Kingdom, M3 2LH (info.smarteye@scube-technologies.com).",
    "Before placing an order you will be asked to agree to these Terms and Conditions. You may only purchase Services or Goods if you are eligible to enter into a contract and at least 18 years old.",
  ],
  sections: [
    {
      heading: "Services",
      paragraphs: [
        "Descriptions of the Services and any Goods on the Website are for illustrative purposes and are subject to availability. We may make changes required to comply with any applicable law or safety requirement, and will notify you of such changes.",
      ],
    },
    {
      heading: "Customer responsibilities",
      paragraphs: [
        "You must co-operate with us in all matters relating to the Services, provide access to premises as required, supply accurate information, and obtain any necessary licences and consents.",
      ],
    },
    {
      heading: "Basis of sale",
      paragraphs: [
        "A Contract is formed only when you receive an Order Confirmation email from us. Any quotation or estimate of Fees is valid for a maximum of 30 days unless expressly withdrawn earlier. No variation to the Contract is valid unless agreed in writing by both parties.",
      ],
    },
    {
      heading: "Fees and payment",
      paragraphs: [
        "Fees are as set out on the Website at the date the Order is accepted, inclusive of VAT at the applicable rate. Payment is made by submitting card details with your Order.",
      ],
    },
    {
      heading: "Delivery",
      paragraphs: [
        "Services and any Goods are delivered within the agreed period or, absent agreement, within a reasonable time (Services) or no more than 30 days (Goods). Remedies including fee reduction or contract termination are available where delivery obligations are not met, as set out in full on the Website.",
      ],
    },
    {
      heading: "Risk and title",
      paragraphs: [
        "Risk in Goods passes to you on delivery. Title does not pass until we have received payment in full.",
      ],
    },
    {
      heading: "Withdrawal and cancellation",
      paragraphs: [
        "As a distance contract, you may cancel within 14 days without giving a reason, subject to the exceptions set out on the Website (e.g. urgent repairs already carried out, personalised goods). To cancel, notify us by a clear written statement; a model cancellation form is available on request.",
        "Where a service has been supplied at your request within the cancellation period, you must pay a proportionate amount for what was supplied up to the point of cancellation.",
      ],
    },
    {
      heading: "Conformity",
      paragraphs: [
        "We have a legal duty to supply Goods that are of satisfactory quality, fit for purpose and as described, and to supply Services with reasonable skill and care. Training and consultancy are provided as after-sales service.",
      ],
    },
    {
      heading: "Duration, termination and suspension",
      paragraphs: [
        "The Contract continues for as long as it takes to perform the Services. Either party may terminate or suspend on written notice for an unremedied serious breach, or where the other party is subject to any step towards bankruptcy or liquidation.",
      ],
    },
    {
      heading: "Privacy",
      paragraphs: [
        "We comply with the GDPR as Data Controller of the Personal Data processed in providing Services and Goods. See our Privacy Policy for full detail. Data privacy enquiries: gdpr@scube-technologies.com.",
      ],
    },
    {
      heading: "Governing law, jurisdiction and complaints",
      paragraphs: [
        "The Contract is governed by the law of England and Wales, with disputes subject to the jurisdiction of the courts of England and Wales (or Scotland/Northern Ireland where the Customer is based there). We aim to respond to any complaint with an appropriate solution within 10 days.",
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  title: "Website Cookie Policy",
  lastUpdated: "07 May 2024",
  intro: [
    "At www.eqms-smarteye.com we strive to honour the privacy and security of any data we collect from visitors, as data Controller under applicable data protection rules. Our website uses cookies, in combination with pixels, local storage objects and similar technologies (collectively, \"cookies\"), to distinguish you from other users and improve your experience.",
  ],
  sections: [
    {
      heading: "Cookie definitions",
      paragraphs: [
        "First-party cookies are set by the website domain you are visiting. Third-party cookies are set by a different domain. Persistent cookies remain on your device for a set period; session cookies are deleted once you close your browser.",
      ],
    },
    {
      heading: "What cookies we use and why",
      list: [
        "Strictly necessary — let you move around the website and use essential features such as secure areas",
        "Performance — collect information on how you use the website, without identifying you, to help us improve it",
        "Functionality — remember settings and preferences to improve your visit",
        "Targeting — track your visit across the website (and other sites) to display relevant ads",
      ],
    },
    {
      heading: "Consent",
      paragraphs: [
        "All cookies require your consent, requested via the banner shown on the website. You may withdraw consent at any time by deleting, blocking or disabling cookies in your browser settings — note that this may affect site functionality.",
      ],
    },
    {
      heading: "Managing cookies",
      paragraphs: [
        "Most browsers allow you to control cookies through their settings menu. Disabling all cookies, including strictly necessary ones, may prevent you from accessing parts of the website.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For any questions about this Cookie Policy, contact gdpr@scube-technologies.com."],
    },
  ],
};

export const qualityPolicy: LegalDoc = {
  title: "Quality Policy",
  lastUpdated: "30 June 2026",
  intro: [
    "S-Cube Technologies provides technology and regulatory solutions for the medical-device sector. We are committed to delivering reliable, compliant and customer-focused products and services that support customers in bringing safe and effective medical-device solutions to market.",
  ],
  sections: [
    {
      heading: "To fulfil this commitment, S-Cube Technologies will",
      list: [
        "Maintain a Quality Management System appropriate to our purpose, context and strategic direction",
        "Understand and meet applicable customer, statutory, regulatory, contractual and other requirements",
        "Establish and review measurable quality objectives, supported by clear responsibilities and resources",
        "Strengthen customer satisfaction through dependable solutions and responsive support",
        "Select, monitor and collaborate with suppliers using criteria proportionate to their effect on quality",
        "Promote competence, accountability, risk-based thinking and employee involvement",
        "Consider whether climate change is a relevant issue when evaluating context, risks and opportunities",
        "Carefully select suppliers for software design and development against strict criteria",
        "Reduce product defects and complaints to exceed customer expectations",
        "Continually improve the suitability, adequacy and effectiveness of the QMS and our performance",
      ],
    },
    {
      heading: "Framework for objectives",
      paragraphs: [
        "This policy provides the framework for establishing and reviewing quality objectives, with supporting arrangements defined in the Quality Manual and relevant QMS processes.",
      ],
    },
    {
      heading: "Communication and availability",
      paragraphs: [
        "The CEO ensures this policy is maintained as documented information, communicated and understood throughout the organisation, and made available to relevant interested parties as appropriate.",
      ],
    },
  ],
};

export const securityPolicy: LegalDoc = {
  title: "Security Policy",
  lastUpdated: "10 October 2025",
  intro: [
    "The Information Security Management System implemented by S-Cube Technologies, and this policy, are used to ensure that all information managed by the organisation is protected from internal and external threats.",
    "The policy applies to all employees of S-Cube Technologies, and to our main interested parties, and is available to all people for review.",
  ],
  sections: [
    {
      heading: "Our information security objectives",
      list: [
        "Confidentiality — only authorised persons can access the information",
        "Integrity — information must be accurate, and must not be corrupted or degraded",
        "Availability — information must be available to those who need it, when they need it",
      ],
    },
    {
      heading: "Responsibility",
      paragraphs: [
        "It is the responsibility of the CEO to ensure that appropriate resources are provided to implement this policy, and that it is properly communicated and understood.",
      ],
    },
  ],
};
