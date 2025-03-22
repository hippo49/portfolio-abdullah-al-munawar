
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/hippo49",
      link: "https://github.com/hippo49",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/munawar-shafi-85386517a",
      link: "https://www.linkedin.com/in/munawar-shafi-85386517a",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "munawarshafi.ms@gmail.com",
      link: "mailto:munawarshafi.ms@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+8801407532320",
      link: "tel:+8801407532320",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Rajshahi, Bangladesh",
      link: "https://maps.google.com/?q=Rajshahi,Bangladesh",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <span className="pixel-text text-xs uppercase tracking-wider text-pacman-yellow mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-pacman-yellow mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                  Let's Connect
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  I'm currently available for freelance work or internship opportunities. Feel free to reach out if you have a project in mind or just want to connect!
                </p>
                
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pacman-yellow/10 text-pacman-yellow group-hover:bg-pacman-yellow group-hover:text-black transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </div>
                        <div className="text-gray-900 dark:text-gray-100 group-hover:text-pacman-yellow dark:group-hover:text-pacman-yellow transition-colors duration-300">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                  Send Me a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pacman-yellow"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pacman-yellow"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pacman-yellow"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-pacman-yellow text-black font-medium hover:bg-pacman-yellow/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <span className="text-xl">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
