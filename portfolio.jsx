import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function DeveloperPortfolio() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // EDIT YOUR INFORMATION HERE
  const config = {
    name: "Your Name",
    tagline: "Aspiring Software Developer | Web & AI Enthusiast",
    avatar: "", // Optional: Add image URL or leave empty
    links: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "your.email@example.com",
      resume: "/resume.pdf" // Update with your resume link
    },
    about: [
      "Passionate developer with a keen interest in building intelligent, user-centric applications that solve real-world problems.",
      "I thrive on learning new technologies and transforming ideas into elegant, functional code.",
      "Background in ECE with a strong foundation in problem-solving and algorithmic thinking.",
      "Always exploring the intersection of web development and artificial intelligence to create impactful solutions."
    ],
    skills: {
      languages: ["Python", "JavaScript", "C++"],
      frameworks: ["React", "Next.js", "Tailwind CSS"],
      tools: ["Git", "Vercel", "VS Code"]
    },
    projects: [
      {
        title: "AI-Powered Web App",
        description: "Full-stack application integrating machine learning models with modern web technologies for intelligent data analysis and visualization.",
        github: "https://github.com/yourusername/project1",
        demo: "https://project1-demo.vercel.app",
        tags: ["React", "Python", "AI/ML"]
      },
      {
        title: "E-Commerce Platform",
        description: "Responsive online store with real-time inventory management, secure payment integration, and seamless user experience.",
        github: "https://github.com/yourusername/project2",
        demo: "https://project2-demo.vercel.app",
        tags: ["Next.js", "Tailwind", "API"]
      },
      {
        title: "Developer Portfolio",
        description: "Modern, animated portfolio website showcasing projects and skills with smooth transitions and dark mode aesthetics.",
        github: "https://github.com/yourusername/project3",
        demo: "https://project3-demo.vercel.app",
        tags: ["React", "Framer Motion", "CSS"]
      },
      {
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        github: "https://github.com/yourusername/project4",
        demo: "https://project4-demo.vercel.app",
        tags: ["JavaScript", "Firebase", "React"]
      },
      {
        title: "Code Snippet Manager",
        description: "Developer utility for organizing and searching code snippets with syntax highlighting and category-based filtering.",
        github: "https://github.com/yourusername/project5",
        demo: "https://project5-demo.vercel.app",
        tags: ["Next.js", "MongoDB", "Tailwind"]
      }
    ],
    education: {
      school: {
        name: "DAV Public School",
        qualification: "High School",
        cgpa: "95%" // Add your percentage/CGPA
      },
      college: {
        name: "Shiv Nadar University",
        degree: "Bachelor of Technology in Electronics and Computer Engineering",
        cgpa: "8.5" // Add your CGPA here
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-slate-950"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {config.avatar && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="mb-8 inline-block"
            >
              <img 
                src={config.avatar} 
                alt={config.name}
                className="w-32 h-32 rounded-full border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
              />
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              {config.name}
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-slate-300 font-light">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <p>{config.tagline}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { icon: Github, label: "GitHub", href: config.links.github },
              { icon: Linkedin, label: "LinkedIn", href: config.links.linkedin },
              { icon: Code2, label: "Projects", href: "#projects" },
              { icon: Download, label: "Resume", href: config.links.resume }
            ].map((btn, idx) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.92 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-medium shadow-lg shadow-indigo-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2">
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <btn.icon className="w-5 h-5" />
                  </motion.span>
                  {btn.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-slate-400"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              {config.about.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                    borderColor: "rgba(99, 102, 241, 0.8)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="backdrop-blur-sm bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 cursor-pointer transition-colors duration-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Languages", items: config.skills.languages, color: "from-indigo-500 to-purple-500" },
              { title: "Frameworks", items: config.skills.frameworks, color: "from-purple-500 to-pink-500" },
              { title: "Tools", items: config.skills.tools, color: "from-pink-500 to-rose-500" }
            ].map((category, catIdx) => (
              <motion.div
                key={category.title}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)",
                  borderColor: "rgba(99, 102, 241, 0.8)",
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="backdrop-blur-sm bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileInView="show"
                      initial="hidden"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-200 font-medium">{skill}</span>
                      </div>
                      <motion.div 
                        className="h-2 bg-slate-700/50 rounded-full overflow-hidden"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${85 + Math.random() * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                          whileHover={{ 
                            boxShadow: "0 0 15px currentColor",
                            filter: "brightness(1.3)"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {config.projects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={item}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(99, 102, 241, 0.5)",
                  borderColor: "rgba(99, 102, 241, 1)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group backdrop-blur-sm bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { type: "spring", stiffness: 260, damping: 20 }
                      }}
                    >
                      <Code2 className="w-6 h-6 text-indigo-400" />
                    </motion.div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          backgroundColor: "rgba(99, 102, 241, 0.3)",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.8 }}
                        className="p-2 bg-slate-700/50 rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5 text-slate-300" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: -360,
                          backgroundColor: "rgba(168, 85, 247, 0.3)",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.8 }}
                        className="p-2 bg-slate-700/50 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-300" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Education
            </motion.h2>
            
            <div className="space-y-6">
              {/* University Education */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 3,
                  rotateY: 3,
                  boxShadow: "0 30px 60px rgba(99, 102, 241, 0.4)",
                  borderColor: "rgba(99, 102, 241, 0.8)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="backdrop-blur-sm bg-slate-800/40 p-10 rounded-2xl border border-slate-700/50 transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 shrink-0"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { type: "spring", stiffness: 260, damping: 20 }
                    }}
                  >
                    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{config.education.college.degree}</h3>
                    <p className="text-xl text-indigo-400 mb-3">{config.education.college.name}</p>
                    {config.education.college.cgpa && (
                      <motion.span 
                        className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        CGPA: {config.education.college.cgpa}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* School Education */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 3,
                  rotateY: 3,
                  boxShadow: "0 30px 60px rgba(168, 85, 247, 0.4)",
                  borderColor: "rgba(168, 85, 247, 0.8)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="backdrop-blur-sm bg-slate-800/40 p-10 rounded-2xl border border-slate-700/50 transition-all duration-300 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 shrink-0"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { type: "spring", stiffness: 260, damping: 20 }
                    }}
                  >
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{config.education.school.qualification}</h3>
                    <p className="text-xl text-purple-400 mb-3">{config.education.school.name}</p>
                    {config.education.school.cgpa && (
                      <motion.span 
                        className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        Score: {config.education.school.cgpa}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Mail, label: "Email", href: `mailto:${config.links.email}` },
                { icon: Github, label: "GitHub", href: config.links.github },
                { icon: Linkedin, label: "LinkedIn", href: config.links.linkedin },
                { icon: Download, label: "Download Resume", href: config.links.resume }
              ].map((contact, idx) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.5)",
                    background: "linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247))",
                    borderColor: "rgba(99, 102, 241, 0)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full transition-all duration-300"
                >
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                  </motion.span>
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {config.name}. Built with React, Next.js, and Framer Motion.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
