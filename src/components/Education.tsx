import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Chettinad College of Engineering and Technology",
      year: "2022 - 2026",
      percentage: "76% (Up to 6th Sem)",
      board: "Anna University"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Servite Metric Hr.Sec.School",
      year: "2020 - 2022",
      percentage: "68%",
      board: "State Board"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Servite Metric Hr.Sec.School",
      year: "2019 - 2020",
      percentage: "65%",
      board: "State Board"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    {index === 0 ? (
                      <GraduationCap size={32} className="text-white" />
                    ) : (
                      <Award size={32} className="text-white" />
                    )}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-lg text-gray-700 font-medium mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Board:</span>
                      <span>{edu.board}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Score:</span>
                      <span className="text-blue-600 font-bold">{edu.percentage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
