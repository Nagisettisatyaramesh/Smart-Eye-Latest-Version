// Job posting content migrated verbatim (light formatting only) from the live
// SmartEye eQMS jobs archive at https://eqms-smarteye.com/category/jobs/ —
// preserved as source of truth. These are historical postings (application
// deadlines have passed) kept for reference rather than active openings.

export type JobSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type Job = {
  slug: string;
  title: string;
  employer: string;
  location: string;
  city: string;
  pay: string;
  jobType: string;
  datePosted: string;
  applicationDeadline: string;
  sections: JobSection[];
};

export const jobs: Job[] = [
  {
    slug: "data-engineer-software-engineer",
    title: "Data Engineer / Software Engineer",
    employer: "TKM Intelligence Limited",
    location: "125 Deansgate, Manchester, M3 2LH, United Kingdom",
    city: "Manchester, UK",
    pay: "TBD",
    jobType: "Permanent",
    datePosted: "7 July 2025",
    applicationDeadline: "11 July 2025",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The ideal candidate will have a strong background in Azure data engineering with expertise in handling large-scale, complex datasets and modern data platforms. This role offers an exciting opportunity to work on cutting-edge projects within a highly collaborative and innovative team. Our team's culture emphasizes continuous learning, knowledge sharing, and leveraging the latest technologies to solve real-world business problems. You will be involved in projects related to advanced analytics, data integration, and real-time data processing that have a significant impact on our business.",
        ],
      },
      {
        heading: "Responsibilities",
        list: [
          "Design, develop, and maintain data solutions on Azure cloud platforms",
          "Work extensively with data lakes, data warehouses, and Snowflake (preferred)",
          "Assemble and integrate large, complex datasets meeting functional and non-functional business requirements",
          "Model and orchestrate complex finance-related data workflows",
          "Perform performance tuning, optimization, bottleneck analysis, and troubleshooting in ambiguous environments",
          "Develop and maintain CI/CD pipelines and data integrity checks",
          "Implement and monitor best practices in Dev frameworks and cloud systems",
          "Work with Kafka for data streaming and real-time data processing",
          "Collaborate with cross-functional teams to deliver high-quality data solutions",
        ],
      },
      {
        heading: "Requirements",
        list: [
          "10+ years of hands-on experience in Data Engineering with a strong focus on Azure",
          "Strong understanding of modern data platforms including data lakes and data warehouses; Snowflake experience preferred",
          "Proficiency in SQL, Python, PowerShell, and JavaScript",
          "Experience with cloud-based data platforms, especially Azure and Snowflake",
          "Expertise in large volume data processing; retail industry experience is a plus",
          "Familiarity with Kafka technologies and real-time data streaming",
          "Experience building CI/CD pipelines and implementing data integrity checks",
          "Ability to troubleshoot and optimize performance in complex environments",
          "Strong analytical, problem-solving, and communication skills",
        ],
      },
    ],
  },
  {
    slug: "content-writer-digital-marketing-blog-writer",
    title: "Content Writer / Digital Marketing / Blog Writer",
    employer: "TKM Intelligence Limited",
    location: "125 Deansgate, Manchester, M3 2LH, United Kingdom",
    city: "Manchester, UK",
    pay: "TBD",
    jobType: "Permanent",
    datePosted: "7 July 2025",
    applicationDeadline: "11 July 2025",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "We are looking for an experienced Digital Marketing Executive to assist in the planning, execution and optimization of our online marketing efforts. The promotion of products and services through digital channels is a complex procedure with great potential which becomes increasingly useful for companies such as ours. The ideal candidate will have a passion for all things marketing and technology, be well-versed in the concepts surrounding SEO and digital marketing, and be tech-savvy with great ideas to reinforce our marketing campaign.",
        ],
      },
      {
        heading: "Responsibilities",
        list: [
          "Plan and execute all web, SEO/SEM, marketing database, email, social media and display advertising campaigns",
          "Design, build and maintain social media presence of our clients",
          "Measure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs)",
          "Identify trends and insights, and optimize spend and performance based on the insights",
          "Brainstorm new and creative growth strategies",
          "Plan, execute and measure experiments and conversion tests",
          "Collaborate with internal teams to create landing pages and optimize user experience",
          "Utilize strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touchpoints",
          "Instrument conversion points and optimize user funnels",
          "Collaborate with agencies and other vendor partners",
        ],
      },
      {
        heading: "Requirements",
        list: [
          "Experience with B2C social media, Google Adwords and email campaigns and SEO/SEM",
          "Demonstrable experience leading and managing marketing database, email campaigns",
          "Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate",
          "Experience in optimizing landing pages and user funnels",
          "Experience with A/B and multivariate experiments",
          "Sound knowledge of website analytics tools",
          "Experience in setting up and optimizing Google Adwords campaigns",
          "Strong analytical skills and data-driven thinking",
          "Up-to-date with the latest trends and best practices in online marketing and measurement",
          "Excellent communication and interpersonal skills",
        ],
      },
    ],
  },
  {
    slug: "software-test-engineer",
    title: "Software Test Engineer",
    employer: "TKM Intelligence Limited",
    location: "Bizspace Altrincham, Unit 43 Atlantic Street, Broadheath, Altrincham, England, WA14 5NQ",
    city: "Altrincham, UK",
    pay: "£35,063 – £41,911 a year",
    jobType: "Permanent",
    datePosted: "30 September 2024",
    applicationDeadline: "10 October 2024",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "We are seeking a skilled Software Test Engineer to join our team. The ideal candidate will have expertise in software development, system testing, and debugging to ensure the quality of our software products.",
        ],
      },
      {
        heading: "Responsibilities",
        list: [
          "Develop and execute test plans and test cases for software applications",
          "Collaborate with software developers to enhance testing processes",
          "Conduct system testing to identify software defects and ensure they are resolved",
          "Utilise tools such as Selenium, JUnit, and AWS for automated testing",
          "Perform requirements gathering and analysis for testing purposes",
          "Debug issues found during testing and provide detailed reports to the development team",
        ],
      },
      {
        heading: "Requirements",
        list: [
          "Proficiency in software testing methodologies and tools",
          "Experience with .NET framework and familiarity with Ant",
          "Strong knowledge of Selenium for automated testing",
          "Ability to conduct system testing and identify software defects",
          "Familiarity with AWS for cloud-based testing environments",
          "Skilled in debugging software issues and providing detailed reports",
          "Excellent communication skills to collaborate effectively with the development team",
        ],
      },
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
