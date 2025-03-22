
const Skills = () => {
  const programmingLanguages = [
    "C", "C++", "Java", "Python", "JavaScript", "Ruby", "SQL"
  ];

  const webDevelopment = [
    "HTML", "CSS", "Node.js", "React.js", "MongoDB", "Electron.js"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="pixel-text text-xs uppercase tracking-wider text-pacman-yellow mb-2">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-pacman-yellow mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Programming Languages */}
          <div className="glass-card p-6 md:p-8 rounded-2xl animate-slide-up">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-black dark:text-white">
              Programming Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {programmingLanguages.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="glass-card p-6 md:p-8 rounded-2xl animate-slide-up" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-black dark:text-white">
              Web Development
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {webDevelopment.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pac-Man dots decoration */}
        <div className="flex justify-center mt-16 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 bg-pacman-yellow rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
