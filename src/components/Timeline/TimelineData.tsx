import { TimelineEvent } from '../../types';

export const timelineEvents: TimelineEvent[] = [
{
    type: 'experience',
    title: 'System Analyst',
    organization: 'Charles River Development - A State Street Company',
    startDate: '2024',
    endDate: 'Current',
    description: [
    'Maintain high availability and optimize resource utilization (below 70% threshold) across environments using Dynatrace and ELK monitoring.',
    'Investigate and propose performance improvement to job cycles within SLA (Service Level Agreement), reduced job execution from 90 to 30 minutes.',
    'Developed a solution to prevent data overwrites in Tidal jobs. Implemented a mechanism that dedicated import process for each distinct set of import files, avoid conflicts when files delivered simultaneously.'
    ],
    tags: ['SQL', 'Bash', 'Dynatrace']
},
{
    type: 'experience',
    title: 'System Analyst Co-op',
    organization: 'Ahold Delhaize',
    startDate: '2023',
    endDate: '2023',
    description: [
        'Developed and deployed Python scripts to streamline mobile builds upload, new user onboarding and password reset for the Unified Functional Testing (UFT) Digital Lab platform, automating these tasks utilizing Power Automate and Jenkins, resulted improving the team’s productivity.',
        'Monitored and maintained the health statuses of mobile devices in each UFT connector utilizing Grafana dashboards and Prometheus.',
    ],
    tags: ['Python', 'Jenkins', 'Grafana', 'Prometheus', 'Jenkins']
},
{
    type: 'experience',
    organization: 'Reggora',
    title: 'Software Engineer',
    startDate: '2020',
    endDate: '2021',
    description: [
    'Architected and executed the integration of ByteSoftware and BlackKnight Loan Origination System (LOS), serving as the primary liaison for stakeholders and engineering team, achieved 50% reduction in high-severity production bugs.',
    'Developed application workflows to streamline order statuses and residential building data through XML mapping, enabling the onboarding of multiple clients, including CMG and Atlantic Bay, within a two-month timeframe.',
    'Migrated file polling process to event-driven process by utilizing AWS S3, reduced in 1 hour time-to-process.',
    'Developed new features on both lenders and appraisal platform, include integration projects utilizing AWS SQS, SNS, React.js, Flask and optimized MongoDB migration scripts runtime by 50%.'
    ],
    tags: ['React', 'Flask', 'AWS', 'MongoDB', 'TypeScript', 'Python']
},
{
    type: 'experience',
    organization: 'Welltok',
    title: 'Associate Software Engineer',
    startDate: '2019',
    endDate: '2020',
    description: [
    'Developed and maintained Behavior-Driven Development (BDD) tests using Cucumber, Selenium and Ruby to ensure that software applications adhere to their intended behaviors.',
    'Collaborated with the DevOps team to migrate two of nine applications from Aptible to Kubernetes, leveraging Jenkins, Helm and Quay.ai to streamline deployment process with projected monthly saving over $1000.',
    ],
    tags: ['Ruby', 'Cucumber', 'Selenium', 'Jenkins', 'Kubernetes', 'Python']
},
{
    type: 'education',
    organization: 'Tufts University',
    title: 'Master of Science in Computer Science',
    startDate: '2021',
    endDate: '2023',
    description: [],
    tags: []
},
{
    type: 'education',
    organization: 'Wentworth Institute of Technology',
    title: 'Bachelor of Science in Computer Science',
    startDate: '2015',
    endDate: '2018',
    description: [],
    tags: []
}
];