
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pacman-yellow/5 dark:bg-pacman-blue/10 z-0"></div>
      
      {/* Pacman dots pattern */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pacman-yellow dark:bg-pacman-yellow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="pixel-text text-3xl md:text-4xl lg:text-5xl mb-6 text-black dark:text-white leading-tight">
            Hello, I'm
            <span className="block text-pacman-yellow mt-2 animate-pulse">
              Abdullah Al Munawar
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Currently a 3rd year student studying Computer Science & Engineering at Rajshahi University of Engineering & Technology with a passion for creating responsive and useful applications.
          </p>
          
          <div className="flex justify-center space-x-6 mt-6">
            <a 
              href="https://github.com/hippo49" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-pacman-yellow hover:text-black transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/munawar-shafi-85386517a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-pacman-yellow hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:munawarshafi.ms@gmail.com" 
              className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-pacman-yellow hover:text-black transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
