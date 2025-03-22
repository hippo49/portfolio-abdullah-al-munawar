
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const project = {
    title: "Simple Code Editor",
    description: "A lightweight code editor built with Electron.js and Node.js. Features syntax highlighting, file system integration, and a clean user interface designed for coding efficiency.",
    technologies: ["Electron.js", "Node.js", "JavaScript", "HTML", "CSS"],
    image: null, // No image provided in requirements
    github: "https://github.com/hippo49", // Using provided GitHub
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="pixel-text text-xs uppercase tracking-wider text-pacman-yellow mb-2">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
            Projects
          </h2>
          <div className="w-16 h-1 bg-pacman-yellow mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden rounded-2xl animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Project Image/Preview */}
              <div className="bg-gradient-to-br from-pacman-yellow/20 to-pacman-blue/20 min-h-[240px] flex items-center justify-center p-6">
                <div className="w-16 h-16 bg-pacman-yellow rounded-full relative animate-chomp">
                  <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-pacman-yellow/10 text-pacman-yellow rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-pacman-yellow hover:text-black transition-all duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-black dark:border-white text-black dark:text-white hover:border-pacman-yellow hover:text-pacman-yellow dark:hover:border-pacman-yellow dark:hover:text-pacman-yellow transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
