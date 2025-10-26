import { Code2, Globe, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "React", level: 80 },
        { name: "PHP", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: [
        { name: "GitHub", level: 85 },
        { name: "UI Path", level: 70 },
        { name: "Canva", level: 80 },
        { name: "MS PowerPoint", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Team Management", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Collaboration", level: 88 },
        { name: "Quick Learning", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
