import { Education } from '../types';

const education: Education[] = [
    {
        school: "Tufts University",
        degree: "Master of Science",
        field: "Computer Science",
        year: "2021 - 2023",
    },
    {
        school: "Wentworth Institute of Technology",
        degree: "Bachelor of Science",
        field: "Computer Science",
        year: "2015 - 2018",
      },
];

export const EducationInfo = () => {
  return (
    <section className="py-20 bg-white" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree} in {edu.field}</p>
                </div>
                <span className="text-gray-500">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};