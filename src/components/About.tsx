
import { BookOpen, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="pixel-text text-xs uppercase tracking-wider text-pacman-yellow mb-2">
            Who Am I
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-pacman-yellow mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="text-pacman-yellow w-6 h-6" />
                <h3 className="font-semibold text-xl">Education</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                I'm currently a 3rd year Computer Science & Engineering student at Rajshahi University of Engineering & Technology. My academic journey has equipped me with a solid foundation in computer science principles, algorithms, and software development practices.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Code className="text-pacman-yellow w-6 h-6" />
                <h3 className="font-semibold text-xl">My Focus</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                My primary focus is on software and web development. I enjoy building applications that solve real-world problems and creating intuitive user experiences. I'm passionate about learning new technologies and applying them to create innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{animationDelay: "0.2s"}}>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pacman-yellow/20 to-pacman-blue/20 z-10"></div>
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <div className="pixel-text text-5xl text-pacman-yellow animate-pulse">AA</div>
              </div>
            </div>
            
            {/* Pac-Man decoration */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pacman-yellow rounded-full animate-chomp"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
