import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowRight, Code, Briefcase, User, Mail } from "lucide-react";

function App() {
  const projects = [
    {
      
      title: "Portfolio",
      desc: "Personal portfolio highlighting my frontend development projects and skills..",
      github: "https://github.com/skywalker-arch/myportfolio",
      live: "https://myportfolio-two-sigma-72.vercel.app/",
    },
    {
      title: "Movie Verse",
      desc: "Premium streaming-inspired web app with polished UI and responsive layouts.",
      github:"https://github.com/skywalker-arch/MovieVerse",
      live: "https://movie-verse-one-pi.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Real-time weather app built with frontend APIs and JavaScript..",
      github: "https://github.com/skywalker-arch/weather-app",
      live: "https://weather-app-ten-alpha.vercel.app/",
    },
    {
      title: "Landing Page",
      desc: "High-converting animated SaaS landing page with smooth transitions.",
      github: "https://github.com/skywalker-arch/landing-page",
      live: "https://landing-page-lyart-phi-27.vercel.app/",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git/GitHub",
    "APIs",
    "Responsive Design",
  ];

  return (
    <div className="relative bg-[#0B0B0F] text-white min-h-screen overflow-hidden font-sans">
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">
            Hellen<span className="text-cyan-400">.dev</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-4">Frontend Developer</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building clean,
            <span className="text-cyan-400"> premium </span>
            digital experiences.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            I create responsive, polished and modern web experiences focused on
            performance, clean code and user-first design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
            >
              📄 Download My CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/profilepic1.jpeg"
            alt="Profile Picture"
            className="relative w-72 h-72 object-cover rounded-2xl border border-white/10"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 leading-8 text-lg max-w-4xl">
            I’m a passionate developer focused on building modern interfaces,
            polished user experiences, and scalable digital products. I enjoy
            turning ideas into elegant, responsive web applications with clean
            architecture and smooth user interactions.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:border-cyan-400 shadow-xl hover:shadow-2xl transition"
            >
              <Code className="mx-auto mb-4 text-cyan-400" />
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-cyan-400 shadow-xl hover:shadow-2xl transition backdrop-blur-lg"
            >
              <Briefcase className="text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub →
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="flex gap-6 text-gray-300 flex-wrap">
          <a
            href="https://github.com/skywalker-arch"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hellen-kerubo-b7b619352"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:hkerubo247@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Hellen Kerubo — Crafted with React + Tailwind
      </footer>
    </div>
  );
}

export default App;
