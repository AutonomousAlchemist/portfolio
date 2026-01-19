"use client";
import { useState,useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { personalInfo, skills, projects, experience, education, stats, certifications } from "./data";
import { submitContactForm } from './actions';
import { Linkedin, Mail, Github, FileText, Send, Terminal, Award, ChevronDown, Loader2 } from "lucide-react";


export default function Portfolio() {
  const [isPending, setIsPending] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // 1. Fix: Scroll to top on Refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Logic for floating "Go to Top" button visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 selection:bg-cyan-400 selection:text-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/50" />
        
        {/* Animated robot grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-16 h-16">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500">
                <circle cx="50" cy="30" r="8" fill="currentColor" />
                <rect x="30" y="40" width="40" height="50" rx="5" fill="currentColor" />
                <circle cx="40" cy="60" r="6" fill="currentColor" />
                <circle cx="60" cy="60" r="6" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
          <div className="absolute bottom-32 right-20 w-20 h-20">
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                <rect x="40" y="20" width="20" height="30" rx="3" fill="currentColor" />
                <circle cx="35" cy="35" r="5" fill="currentColor" />
                <circle cx="65" cy="35" r="5" fill="currentColor" />
                <path d="M 30 55 L 50 70 L 70 55" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </motion.div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500">
                <rect x="35" y="25" width="30" height="40" rx="4" fill="currentColor" />
                <circle cx="45" cy="40" r="4" fill="currentColor" />
                <circle cx="55" cy="40" r="4" fill="currentColor" />
                <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="4" />
              </svg>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <div className="mb-6 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-500/50 overflow-hidden mx-auto shadow-[0_0_30px_rgba(6,182,212,0.4)] ring-4 ring-cyan-200/50">
              <img src="/profile.png" alt="Pavan Kumar S" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">{personalInfo.title}</h2>
          
          <p className="max-w-2xl mx-auto text-gray-700 mb-8 leading-relaxed text-base">
            {personalInfo.about}
          </p>

          <div className="flex gap-4 justify-center">
            <motion.a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border-2 border-gray-300 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-all bg-white shadow-sm"
            >
              <Github className="w-5 h-5 text-gray-700 group-hover:text-cyan-600" />
            </motion.a>
            <motion.a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border-2 border-gray-300 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-all bg-white shadow-sm"
            >
              <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-cyan-600" />
            </motion.a>
            <motion.a 
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border-2 border-gray-300 rounded-full hover:bg-cyan-50 hover:border-cyan-500 transition-all bg-white shadow-sm" 
              aria-label="Send email"
            >
              <Mail className="w-5 h-5 text-gray-700 group-hover:text-cyan-600" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 px-4 md:px-20 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl hover:border-cyan-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600"
        >
          Technical Arsenal
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-cyan-400 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/100 group-hover:to-blue-50/100 transition-all duration-300" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="w-8 h-8 text-cyan-600 mb-4 group-hover:text-cyan-700 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-cyan-100 hover:text-cyan-700 transition-colors cursor-default border border-gray-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Featured Projects
        </motion.h2>
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-2xl transition-all group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                    className="text-3xl"
                  >
                    🤖
                  </motion.div>
                </div>
                
                <div className="mb-4 space-y-4">
                  {project.sections.map((section, i) => (
                    <div key={i} className="border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-50/50 rounded-r">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{section.subtitle}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{section.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 mt-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-blue-600 border-2 border-blue-200 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     {/* --- EXPERIENCE & EDUCATION --- */}
<section className="py-20 px-4 md:px-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* Experience */}
    <div>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
        <Terminal className="text-green-600" /> Work Experience
      </h2>
      {experience.map((exp, idx) => (
        <div key={idx} className="border-l-4 border-green-500 pl-6 pb-8 relative bg-green-50/50 rounded-r-lg p-4 mb-4">
          <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[10px] top-6 border-2 border-white" />
          <h3 className="text-lg font-bold text-gray-900">{exp.role} [cite: 20]</h3>
          <p className="text-green-600 font-semibold text-sm mb-2">
            {exp.url ? (
              <a 
                href={exp.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-green-700 transition-colors"
              >
                {exp.company}
              </a>
            ) : (
              exp.company
            )} | {exp.location} | {exp.date} [cite: 20]
          </p>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">▹</span>
                <span>{achievement} [cite: 21, 22]</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Education */}
    <div>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
        <FileText className="text-orange-600" /> Education
      </h2>
      {education.map((edu, idx) => (
        <div key={idx} className="border-l-4 border-orange-500 pl-6 pb-8 relative bg-orange-50/50 rounded-r-lg p-4 mb-4">
          <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[10px] top-6 border-2 border-white" />
          <h3 className="text-lg font-bold text-gray-900">{edu.degree} [cite: 17]</h3>
          <p className="text-orange-600 font-semibold text-sm mb-1">
            {edu.url ? (
              <a 
                href={edu.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-orange-700 transition-colors"
              >
                {edu.institution}
              </a>
            ) : (
              edu.institution
            )}
          </p>
          <p className="text-gray-600 text-sm">{edu.date} [cite: 17]</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-gray-900"
        >
          <Award className="text-amber-500" /> Certifications
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            cert.url ? (
              <motion.a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-6 h-6 text-amber-600 mt-1" />
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">{cert.year}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-xs text-amber-600 mt-2 font-medium">Click to view →</p>
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-6 h-6 text-amber-600 mt-1" />
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">{cert.year}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </motion.div>
            )
          ))}
        </div>
      </section>
      {/* --- ANIMATED RESUME HIGHLIGHTS SECTION --- */}
<section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-12 bg-white border-2 border-cyan-100 rounded-3xl p-8 md:p-12 shadow-2xl relative"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
      
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Ready to see my full <span className="text-cyan-600">Technical Profile?</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I specialize in building **autonomous agents** and **intelligent monitoring systems** using Google Gemini and OpenCV[cite: 6, 7]. From medical data optimization to robotics architecture, I bridge the gap between AI research and hardware implementation[cite: 21, 25].
        </p>
        
        <div className="flex flex-wrap gap-4">
          {/* Corrected Link for Ants AI */}
          <motion.a
            href={experience[0].url || "https://ants-ai.com"} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-100 hover:bg-green-100 transition-colors cursor-pointer"
          >
            <Terminal className="w-4 h-4" /> 
            <span>Ants AI Intern </span>
          </motion.a>

          {/* Corrected Link for BIT Bengaluru */}
          <motion.a
            href={education[0].url || "https://bit-bangalore.edu.in"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <Award className="w-4 h-4" /> 
            <span>BIT Bengaluru </span>
          </motion.a>
        </div>

        <motion.a 
          href="/Pavan Kumar.S.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold transition-all group"
        >
          <FileText className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>Download Full Resume (PDF)</span>
        </motion.a>
      </div>

      {/* Visual Element: Animated Document/Robot Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
        className="hidden md:block w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl rotate-3 relative shadow-xl"
      >
        <div className="absolute inset-0 flex items-center justify-center border-4 border-white/20 rounded-2xl">
           <svg viewBox="0 0 100 100" className="w-32 h-32 text-white/90">
              <path d="M30 20 H70 V80 H30 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M40 35 H60 M40 50 H60 M40 65 H50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
           </svg>
        </div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
        >
          <div className="text-cyan-600 font-bold text-xl leading-none">CV</div>
          <div className="text-gray-400 text-[10px] mt-1 uppercase tracking-widest font-bold">Updated 2026</div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* --- CONTACT FORM SECTION --- */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            Get In Touch
          </h2>
          
          <form 
            id="contact-form"
            action={async (formData) => {
              setIsPending(true); // 1. Start loading
              try {
                const result = await submitContactForm(formData);
                if (result.success) {
                  setShowSuccess(true);
                  (document.getElementById("contact-form") as HTMLFormElement).reset();
                  setTimeout(() => setShowSuccess(false), 5000);
                } else {
                  alert("Error: " + result.message);
                }
              } catch (e) {
                alert("Something went wrong. Please try again.");
              } finally {
                setIsPending(false); // 2. Stop loading
              }
            }} 
            className="space-y-4"
          >
            
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input name="name" type="text" required className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
            
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input name="email" type="email" required className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea name="message" rows={4} required className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg p-3 text-gray-900 focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all flex justify-center items-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollButton ? 1 : 0, scale: showScrollButton ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-cyan-600 text-white rounded-full shadow-2xl z-50 hover:bg-cyan-700 transition-colors group"
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-6 h-6 rotate-180 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-gray-900/80 backdrop-blur-md px-4" 
        >
            <motion.div
              key="success-modal"
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              className="bg-white border-2 border-cyan-500 rounded-2xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <div className="relative mx-auto w-20 h-20 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-cyan-500 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  >
                    <Send className="w-10 h-10 text-cyan-600" />
                  </motion.div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-mono">DATA_TRANSMITTED</h3>
              <p className="text-gray-600 text-sm">
                Your message has been successfully routed to Pavan neural network. 
              </p>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.8 }}
                className="h-1 bg-cyan-500 mt-6 rounded-full opacity-50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-6 text-center text-gray-500 text-sm bg-white border-t border-gray-200">
        © 2026 Pavan Kumar S. Built with Next.js.
      </footer>
    </main>
  );
}