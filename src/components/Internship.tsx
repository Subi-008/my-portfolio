import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase size={40} className="text-white" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Developer Intern</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-3">EdiGlobe (Zhagaram Technologies)</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="font-medium">March 2025 - May 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-600" />
                      <span className="font-medium">Web Development Company</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    Worked as a Web Development Intern at EdiGlobe, specializing in building responsive
                    web pages and gaining hands-on experience in modern web technologies.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        Built responsive web pages using HTML, CSS, and JavaScript with focus on user experience
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        Gained practical experience in backend development and database handling
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        Collaborated with development team on real-world projects and live deployments
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        Enhanced coding and problem-solving skills through practical application of theoretical knowledge
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Backend', 'Database', 'Team Collaboration'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-blue-600 text-sm font-semibold rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
