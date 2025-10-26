import { ExternalLink, Github, Activity, Home, Leaf, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Health Symptom Checker",
      description: "Built a responsive web application using HTML, CSS, and JavaScript to predict health conditions based on user symptoms with AI integration. Features intuitive UI and real-time health analysis.",
      icon: Activity,
      technologies: ["HTML", "CSS", "JavaScript", "AI Integration"],
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "Home Automation System using IoT",
      description: "Developed an interactive IoT control interface with JavaScript to manage smart home devices. Implemented real-time device monitoring and control features.",
      icon: Home,
      technologies: ["JavaScript", "IoT", "Real-time Control"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Smart India Hackathon - Plant Disease Detection",
      description: "Created clean UI layouts for an AI-based web application that identifies plant diseases. Designed user-friendly interface for farmers to upload and analyze plant images.",
      icon: Leaf,
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Smart Event Management System",
      description: "Built comprehensive user-friendly frontend pages for event registration and management. Implemented database integration and user authentication features.",
      icon: Calendar,
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent work showcasing web development, AI integration, and IoT applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 min-h-[100px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <Github size={18} />
                      View Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
