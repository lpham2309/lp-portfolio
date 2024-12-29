import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    category: "Frameworks",
    items: ["React", "Flask", "FastAPI", "Spring"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL Server"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "XML", "BigQuery", "Ansible", "Jenkins", "Bash"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};