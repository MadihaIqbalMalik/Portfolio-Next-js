"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "🎨",
        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Framer Motion", level: 85 },
            { name: "HTML5 / CSS3", level: 98 },
            { name: "JavaScript (ES6+)", level: 95 },
        ]
    },
    {
        title: "Backend Development",
        icon: "⚙️",
        skills: [
            { name: "Node.js / Express", level: 88 },
            { name: "Python / Django", level: 82 },
            { name: "REST APIs", level: 90 },
            { name: "GraphQL", level: 78 },
            { name: "WebSocket", level: 80 },
        ]
    },
    {
        title: "Database & Cloud",
        icon: "☁️",
        skills: [
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 83 },
            { name: "Firebase", level: 87 },
            { name: "AWS", level: 75 },
            { name: "Docker", level: 72 },
        ]
    },
    {
        title: "Design & Tools",
        icon: "🛠️",
        skills: [
            { name: "Figma", level: 90 },
            { name: "UI/UX Design", level: 88 },
            { name: "Git / GitHub", level: 93 },
            { name: "VS Code", level: 95 },
            { name: "Responsive Design", level: 96 },
        ]
    }
];

const services = [
    {
        title: "Web Application Development",
        description: "Building scalable, performant web apps with modern frameworks",
        icon: "💻"
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive, beautiful interfaces that users love",
        icon: "🎨"
    },
    {
        title: "API Development",
        description: "Designing and implementing robust RESTful and GraphQL APIs",
        icon: "🔌"
    },
    {
        title: "Performance Optimization",
        description: "Improving load times, SEO, and overall user experience",
        icon: "⚡"
    },
    {
        title: "Technical Consultation",
        description: "Advising on architecture, tech stack, and best practices",
        icon: "💡"
    },
    {
        title: "Code Review & Mentoring",
        description: "Helping teams write better, more maintainable code",
        icon: "📚"
    }
];

export default function ExpertiseSection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();
    const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

    return (
        <section id="expertise" className="min-h-screen p-8 pt-24 border-b border-gray-800 flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl w-full space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold text-white font-mono">Expertise</h2>
                    <p className="text-gray-400">Skills honed through years of practice</p>
                </div>

                {/* Skills Categories */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800/50 overflow-hidden hover:border-gray-700/50 transition-colors shadow-2xl"
                        >
                            <button
                                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
                                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-all group"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                                    <div className="text-left">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">{category.title}</h3>
                                        <p className="text-sm text-gray-500 font-mono mt-1">{category.skills.length} core technologies</p>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{
                                        rotate: expandedCategory === categoryIndex ? 180 : 0,
                                        scale: expandedCategory === categoryIndex ? 1.2 : 1
                                    }}
                                    className="p-2 rounded-full bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors"
                                >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: getAccentColor() }}>
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {expandedCategory === categoryIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 space-y-6">
                                            {category.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="space-y-3">
                                                    <div className="flex justify-between items-center px-1">
                                                        <span className="text-gray-300 text-sm font-mono font-medium">{skill.name}</span>
                                                        <span className="text-xs font-mono font-bold" style={{ color: getAccentColor() }}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="h-3 bg-gray-950/50 rounded-full overflow-hidden border border-white/5 p-[2px]">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                                                            className="h-full rounded-full relative"
                                                            style={{
                                                                backgroundColor: getAccentColor(),
                                                                boxShadow: `0 0 15px ${getAccentColor()}80`
                                                            }}
                                                        >
                                                            {/* Shine effect */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Services */}
                <div className="space-y-12">
                    <h3 className="text-3xl font-bold text-white text-center font-mono">Premium Services</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-gray-700 transition-all relative overflow-hidden group shadow-xl"
                            >
                                <div
                                    className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl"
                                    style={{ backgroundColor: getAccentColor() }}
                                />
                                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">{service.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                                <div
                                    className="h-1 w-0 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"
                                    style={{ backgroundColor: getAccentColor() }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Industry Focus */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-900/20 backdrop-blur-md p-12 rounded-3xl border border-white/5 text-center shadow-inner mt-12"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 font-mono tracking-tight uppercase">Strategic Industry Focus</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["FinTech", "HealthTech", "E-Commerce", "SaaS", "EdTech", "AI Platforms"].map((industry, i) => (
                            <motion.span
                                key={industry}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ delay: i * 0.05 }}
                                className="px-8 py-3 rounded-full border border-white/10 font-mono text-sm tracking-wide shadow-lg"
                                style={{
                                    color: getAccentColor(),
                                    backgroundColor: `rgba(${getAccentColorRGB()}, 0.08)`,
                                    border: `1px solid rgba(${getAccentColorRGB()}, 0.2)`
                                }}
                            >
                                {industry}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Background Decoration - Repositioned and Faded */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-20 right-[10%] opacity-[0.03] rotate-12 -z-10">
                    <pre className="text-sm font-mono text-white">
                        {`function expertise() {
  const master = (skill) => {
    return \`Executing \${skill}...\`;
  };
  return [
    'React', 'TypeScript',
    'Node.js', 'Design'
  ].map(master);
}`}
                    </pre>
                </div>
                <div className="absolute bottom-20 left-[5%] opacity-[0.02] -rotate-6 -z-10">
                    <pre className="text-lg font-mono text-white">
                        {`class Developer {
  constructor() {
    this.vision = "Scale";
    this.focus = "Performance";
  }
}`}
                    </pre>
                </div>
            </div>
        </section>
    );
}
