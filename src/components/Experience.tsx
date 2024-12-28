import { Experience } from '../types';

const experiences: Experience[] = [
    {
        company: "Charles River Development - A State Street Company",
        position: "System Analyst",
        duration: "2024 - Present",
        description: [
        "Maintain high availability and optimize resource utilization (below 70% threshold) across environments using Dynatrace and ELK monitoring.",
        "Investigate and propose performance improvement to job cycles within SLA (Service Level Agreement), reduced job execution from 90 to 30 minutes",
        "Developed a solution to prevent data overwrites in Tidal jobs. Implemented a mechanism that dedicated import process for each distinct set of import files, avoid conflicts when files delivered simultaneously"
        ]
    },
    {
        company: "Ahold Delhaize",
        position: "System Analyst Co-op",
        duration: "2023 - 2023",
        description: [
            "Developed and deployed Python scripts to streamline mobile builds upload, new user onboarding and password reset for the Unified Functional Testing (UFT) Digital Lab platform, automating these tasks utilizing Power Automate and Jenkins, resulted improving the team’s productivity",
            "Monitored and maintained the health statuses of mobile devices in each UFT connector utilizing Grafana dashboards and Prometheus",
        ] 
    },
    {
        company: "Reggora",
        position: "Software Engineer",
        duration: "2020 - 2021",
        description: [
        "Architected and executed the integration of ByteSoftware and BlackKnight Loan Origination System (LOS), serving as the primary liaison for stakeholders and engineering team, achieved 50% reduction in high-severity production bugs.",
        "Developed application workflows to streamline order statuses and residential building data through XML mapping, enabling the onboarding of multiple clients, including CMG and Atlantic Bay, within a two-month timeframe.",
        "Migrated file polling process to event-driven process by utilizing AWS S3, reduced in 1 hour time-to-process",
        "Developed new features on both lenders and appraisal platform, include integration projects utilizing AWS SQS, SNS, React.js, Flask and optimized MongoDB migration scripts runtime by 50%."
        ] 
    },
    {
        company: "Welltok",
        position: "Associate Software Engineer",
        duration: "2019 - 2020",
        description: [
        "Developed and maintained Behavior-Driven Development (BDD) tests using Cucumber, Selenium and Ruby to ensure that software applications adhere to their intended behaviors.",
        "Collaborated with the DevOps team to migrate two of nine applications from Aptible to Kubernetes, leveraging Jenkins, Helm and Quay.ai to streamline deployment process with projected monthly saving over $1000",
        ] 
    }
];

export const ExperienceInfo = () => {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};