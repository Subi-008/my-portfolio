import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Subiksha S</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                Aspiring Engineer | AI & Web Development Enthusiast
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate web developer with expertise in HTML, CSS, JavaScript, and responsive design.
              I love building user-friendly websites and exploring modern technologies. Currently pursuing
              B.E. in Computer Science and Engineering at Chettinad College of Engineering and Technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/subi s clg resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/subiksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/Subiksha_S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:selvarajsubiksha@gmail.com"
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/SUBI.jpg"
                alt="Subiksha S"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
