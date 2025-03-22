
const Skills = () => {
  const programmingLanguages = [
    { name: "C", level: 85 },
    { name: "C++", level: 90 },
    { name: "Java", level: 80 },
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "Ruby", level: 65 },
    { name: "SQL", level: 70 },
  ];

  const webDevelopment = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "React.js", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Electron.js", level: 70 },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Programming Languages */}
          <div className="glass-card p-6 md:p-8 rounded-2xl animate-slide-up">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-black dark:text-white">
              Programming Languages
            </h3>
            <div className="space-y-5">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pacman-yellow rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="glass-card p-6 md:p-8 rounded-2xl animate-slide-up" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-black dark:text-white">
              Web Development
            </h3>
            <div className="space-y-5">
              {webDevelopment.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-pacman-blue dark:bg-pacman-cyan rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
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
