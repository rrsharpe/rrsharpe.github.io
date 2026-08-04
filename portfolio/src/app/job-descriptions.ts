export interface JobDescription {
  employer: string;
  jobTitle: string;
  location: string;
  description: string;
  frameworks: string[];
  languages: string[];
  bullets: string[];
  startDate: Date;
  endDate: Date | 'Present';
  responsibilities: Responsibilities[];
}

export interface Responsibilities {
  title: string;
  description: string;
  languages: string[];
  achievements?: string[];
}

export const jobs: JobDescription[] = [
  {
    employer: 'Government of Canada',
    jobTitle: 'Full Stack Developer (Permanent)',
    location: 'Ottawa, ON',
    description:
      'Part of a team building next-generation internal tooling for knowledge management and analysis at a federal security agency.',
    languages: ['TypeScript', 'Java', 'Neo4j'],
    frameworks: [],
    bullets: [
      'Onboarded hundreds of users while replacing the legacy 25+ year old tool',
      'My designs became the gold standard for UX internally',
      'Migrated millions of rows from the legacy system while maintaining interoperability',
    ],
    startDate: new Date('September 1, 2021'),
    endDate: 'Present',
    responsibilities: [
      {
        title: 'Legacy Modernization',
        description:
          'Took ownership of replacing a 25+ year old knowledge management system — one of the most complex and high-stakes challenges in any engineering organization. This involved not just building a modern replacement, but carefully migrating millions of rows of data from legacy systems spanning over two decades, decommissioning old infrastructure, and maintaining full interoperability throughout the transition so that no users or workflows were disrupted.',
        languages: [],
        achievements: [
          'Migrated millions of rows from legacy systems spanning 25+ years',
          'Decommissioned legacy systems while maintaining full interoperability',
          'Supports hundreds of users across dozens of teams',
        ],
      },
      {
        title: 'UX & Adoption',
        description:
          'Championed a user-first approach to development at every stage — from early prototyping and user testing through to feature flags and A/B testing in production. The result was one of the highest-adopted tools in the organization, with our UI patterns recognized as the internal gold standard and referenced in organizational design guidelines.',
        languages: [],
        achievements: [
          'UI recognized as the internal gold standard, referenced in organizational design guidelines',
          'Drove adoption through feature flags and A/B testing in production',
          'Established user testing and prototyping as standard practice before implementation',
        ],
      },
      {
        title: 'Platform Architecture',
        description:
          "Designed and built a large-scale, cohesive platform from the ground up — architecting a micro frontend and microservice-based SPA in Angular and Spring Boot that could scale with the organization's needs. Integrated graph and vector databases to unlock capabilities that were previously impossible, enabling analysts to discover novel data correlations and laying the groundwork for future AI-powered tooling.",
        languages: [],
        achievements: [
          'Built a production SPA from the ground up using Angular micro frontends and Spring Boot microservices',
          'Enabled analysts to discover data correlations that were previously impossible',
          'Laid the groundwork for future AI automation via vector and semantic search',
        ],
      },
      {
        title: 'Delivery & Observability',
        description:
          'Established a modern, reliable delivery pipeline and observability practice from the ground up — moving the team away from manual legacy processes toward automated cloud deployments and data-driven decision making. Deployed to Kubernetes environments via Jenkins and ArgoCD, and integrated Sentry, Grafana, and Prometheus to give the team real-time visibility into system health and user experience.',
        languages: [],
        achievements: [
          'Replaced manual legacy deployments with automated Kubernetes pipelines via Jenkins and ArgoCD',
          'Improved response and recovery times by replacing a ticket-based system with Sentry, Grafana, and Prometheus',
        ],
      },
    ],
  },

  {
    employer: 'Government of Canada',
    jobTitle: 'Full Stack Developer (Co-Op)',
    location: 'Remote',
    description:
      'An introduction to full stack development in a production environment, contributing to client and server side software in Angular and Spring Boot while learning the fundamentals of cloud deployment and CI/CD.',
    languages: [],
    frameworks: [],
    bullets: ['Deployed services to multiple cloud regions via Bitbucket Pipelines CI/CD'],
    startDate: new Date('September 1, 2021'),
    endDate: 'Present',
    responsibilities: [
      {
        title: 'Full Stack Development',
        description:
          'Contributed to client and server side features in Angular and Spring Boot, building foundational experience in the same stack that would carry through the permanent role.',
        languages: ['Angular', 'Spring Boot', 'Lombok', 'Flyway'],
        achievements: [],
      },
      {
        title: 'Cloud Deployment & CI/CD',
        description:
          'Tested and deployed services to multiple cloud regions using Bitbucket Pipelines, establishing early habits around automated delivery and robust deployment practices.',
        languages: ['Bitbucket Pipelines'],
        achievements: [],
      },
    ],
  },

  {
    employer: 'NETGEAR',
    jobTitle: 'Firmware Developer (Co-Op)',
    location: 'Richmond, BC',
    description:
      'Worked on firmware for consumer LTE/5G mobile hotspot products, gaining low-level experience in C and C++ alongside practical exposure to network security analysis tools.',
    languages: [],
    frameworks: [],
    bullets: [
      'Developed firmware for AirCard and Nighthawk',
      'Shipped consumer products used by real customers',
    ],
    startDate: new Date('September 1, 2021'),
    endDate: 'Present',
    responsibilities: [
      {
        title: 'Firmware Development',
        description:
          'Developed firmware for consumer LTE/5G mobile hotspot products in C and C++, working at the hardware/software boundary on shipped consumer products.',
        languages: ['C', 'C++'],
        achievements: [],
      },
      {
        title: 'Network Security Analysis',
        description:
          'Analyzed security vulnerabilities using industry standard tools, coordinating with the test team to produce clear and concise test cases from findings.',
        languages: ['Nmap', 'tcpdump', 'Wireshark'],
        achievements: [],
      },
    ],
  },
];
