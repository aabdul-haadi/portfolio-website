import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Parallax } from 'react-parallax';
import { useInView } from 'react-intersection-observer';
import { Menu, X, Github, Linkedin, Mail, Download, Code, ExternalLink, Heart, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Choose Emotions",
    description: "An app designed to manage and track your emotions daily.",
    image: "/src/assets/choose.png",
    link: "/src/projects/Choose Emotions/index.html",
    tech: ["HTML", "CSS/BootStrap", "JavaScript"]
  },
  {
    title: "Clock",
    description: "A digital clock with elegant design and real-time updates.",
    image: "/src/assets/clock.png",
    link: "/src/projects/clock/index.html",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Discount Calculator",
    description: "A tool to calculate discounts and savings in real-time.",
    image: "/src/assets/shoes.png",
    link: "/src/projects/discount/index.html",
    tech: ["HTML", "JavaScript", "CSS"]
  },
  {
    title: "Login System",
    description: "A responsive login and registration page design.",
    image: "/src/assets/login.png",
    link: "/src/projects/login/index.html",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Talk To Allah",
    description: "A spiritual guide app for daily reminders and prayers.",
    image: "/src/assets/talktoAllah.png",
    link: "/src/projects/real talk to Allah/index.html",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Wheel Project",
    description: "A fun spinning wheel project for gamification and selection.",
    image: "/src/assets/wheel.webp",
    link: "/src/projects/wheel project/index.html",
    tech: ["JavaScript", "CSS", "HTML"]
  }
];

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
];

const navItems = ["About", "Projects", "Skills", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Enhanced Navigation with Gradient Border and Glass Effect */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <Code className="text-cyan-400" size={32} />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                ABDUL HAADI
              </h1>
            </motion.div>
            
            <div className="hidden md:flex space-x-1">
             {navItems.map((item) => (
  <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleSetActive}
                  className={`cursor-pointer transition-all duration-300 px-6 py-2 rounded-full relative group ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "hover:text-cyan-400"
                  }`}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: activeSection === item.toLowerCase() ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full -z-10"
                  />
                  <motion.span
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                  {item}
                </Link>
              ))}
            </div>

            <motion.button 
              className="md:hidden relative"
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  className="text-cyan-400"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Animations */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gradient-to-b from-gray-900 to-gray-800 border-t border-cyan-500/20"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        strength={200}
        className="h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90" />
        <div className="relative h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Web Developer & Designer
              </h1>
              <motion.div
                // className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-lg -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-cyan-300"
            >
              Creating beautiful, functional websites
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group relative px-8 py-3 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
                <span className="relative flex items-center space-x-2 text-white">
                  <span>View Projects</span>
                  <Sparkles size={18} />
                </span>
              </Link>
              <a
                href="/src/assets/cv.pdf"
                download
                className="group relative px-8 py-3 rounded-full overflow-hidden bg-transparent border-2 border-white hover:border-cyan-400 transition-colors"
              >
                <span className="relative flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </Parallax>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Web Developer with expertise in creating interactive and user-friendly web applications. 
              My goal is to craft digital experiences that combine functionality with visually stunning designs, 
              ensuring a seamless experience for all users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
     {/* Projects Section */}
<section id="projects" className="py-20 px-6 bg-gray-800">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-900 rounded-lg overflow-hidden group relative"
        >
          {/* Image Container - Fixed Position */}
          <div className="relative w-full h-60">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Project Details */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Project</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg text-center group hover:bg-gray-700 transition-all duration-300"
              >
                <div className="relative inline-block">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-cyan-400">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group"
              >
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-cyan-400 transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 -z-10 blur transition-opacity" />
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                type="submit"
                className="w-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
                <span className="relative block py-3 text-white font-semibold">Send Message</span>
              </motion.button>
            </form>

            <div className="mt-12 flex justify-center space-x-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
                <motion.div
                  className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
                <motion.div
                  className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
                <motion.div
                  className="absolute -inset-2 bg-cyan-500 rounded-full opacity-20 blur-sm"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  About
                </h3>
                <p className="text-gray-400">
                  Passionate web developer creating beautiful and functional digital experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Contact
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>ahaadi1001@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Github size={16} />
                    <a href="https://github.com/aabdul-haadi/" className="hover:text-cyan-400 transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Linkedin size={16} />
                    <a href="https://www.linkedin.com/in/abdul-haadi-15b957320/" className="hover:text-cyan-400 transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 flex items-center justify-center space-x-2">
                <span>© {new Date().getFullYear()} ABDUL HAADI.</span>
                <span>Made with</span>
                <Heart size={16} className="text-cyan-400" />
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob" />
            <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;