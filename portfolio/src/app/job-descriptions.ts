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
      'Developed a next generation knowledge base in Angular and Spring Boot from the ground up to production, supporting hundreds of users and replacing a 25+ year old tool',
      'Implemented interactive web pages enabling analysts to work with others in real time improving productivity and collaboration across dozens of teams',
      'Integrated graph and vector databases enabling analysts to discover novel data correlations that were previously impossible',
      'Designed large cohesive SPAs by leveraging micro frontends and microservices, producing a more maintainable codebase that sped up onboarding for new devs',
      'Deployed to cloud Kubernetes environments with Jenkins and ArgoCD ensuring efficient and reliable delivery while replacing the manual legacy  processes',
      'Designed high quality UX through user testing, feature flags, A/B testing, and prototyping — our UI became the internal gold standard referenced in organizational design guidelines',
      'Utilized monitoring technologies such as Sentry, Grafana, and Prometheus to drive decision making and improve response/recovery times compared to our previous ticket-based system',
      'Reduced technical debt by migrating millions of rows from legacy systems spanning over 25 years and ultimately decommissioning these systems while maintaining interoperability',
    ],
    startDate: new Date('September 1, 2021'),
    endDate: 'Present',
    responsibilities: [
      {
        title: 'Backend Development',
        description: 'cool description',
        languages: ['Java', 'Spring Boot'],
        achievements: ['I did a thing', 'Here is another thing'],
      },
            {
        title: 'Frontend Development',
        description: 'cool description',
        languages: ['Java', 'Spring Boot'],
        achievements: ['I did a thing', 'Here is another thing'],
      },
            {
        title: 'UX Design',
        description: 'cool description',
        languages: ['Java', 'Spring Boot'],
        achievements: ['I did a thing', 'Here is another thing'],
      },
            {
        title: 'Graph Databases',
        description: 'cool description',
        languages: ['Java', 'Spring Boot'],
        achievements: ['I did a thing', 'Here is another thing'],
      },
      {
        title: 'Client Engagement',
        description: 'cool description',
        languages: ['Java', 'Spring Boot'],
        achievements: ['I did a thing', 'Here is another thing'],
      },
    ],
  },
];
