"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const timeline = [
    {
        year: "2024",
        title: "Senior Full Stack Developer",
        company: "TechVision Inc.",
        location: "Remote",
        description: "Leading a team of 5 developers in building a SaaS platform serving 10k+ users. Architected microservices infrastructure and implemented CI/CD pipelines.",
        achievements: [
            "Reduced page load time by 60%",
            "Implemented real-time collaboration features",
            "Mentored 3 junior developers"
        ]
    },
    {
        year: "2022",
        title: "Full Stack Developer",
        company: "StartUp Innovations",
        location: "Hybrid",
        description: "Built core product features from scratch using React, Node.js, and MongoDB. Collaborated with design team to create intuitive user experiences.",
        achievements: [
            "Developed 15+ major features",
            "Improved test coverage to 85%",
            "Integrated payment processing system"
        ]
    },
    {
        year: "2021",
        title: "Frontend Developer",
        company: "Digital Solutions Agency",
        location: "On-site",
        description: "Delivered 20+ client projects ranging from landing pages to complex web applications. Specialized in React and modern CSS frameworks.",
        achievements: [
            "Maintained 98% client satisfaction rate",
            "Created reusable component library",
            "Optimized SEO for all projects"
        ]
    },
    {
        year: "2020",
        title: "Junior Web Developer",
        company: "WebCraft Studio",
        location: "On-site",
        description: "Started professional journey building responsive websites and learning modern development practices. Gained foundation in HTML, CSS, JavaScript, and React.",
        achievements: [
            "Completed 30+ website projects",
            "Learned React and Node.js",
            "Contributed to open-source projects"
        ]
    }
];

const education = [
    {
        year: "2019",
        degree: "Bachelor of Computer Science",
        institution: "Tech University",
        description: "Specialized in Software Engineering and Web Technologies"
    },
    {
        year: "2023",
        degree: "AWS Certified Developer",
        institution: "Amazon Web Services",
        description: "Associate level certification"
    }
];

const certifications = [
    "AWS Certified Developer - Associate",
    "Meta Frontend Developer Professional",
    "Google UX Design Certificate",
    "MongoDB Certified Developer",
    "React Advanced Patterns"
];

export default function HistorySection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();

    return (
        <section id="history" className="min-h-screen p-8 pt-24 border-b border-gray-800 flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full space-y-16"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold text-white font-mono">History</h2>
                    <p className="text-gray-400">The journey so far</p>
                </div>

                {/* Work Experience Timeline */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white mb-8 font-mono">Work Experience</h3>
                    <div className="relative">
                        {/* Vertical Line */}
                        <div
                            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
                            style={{ backgroundColor: `rgba(${getAccentColorRGB()}, 0.3)` }}
                        />

                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="relative mb-12"
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Left side */}
                                    <div className={`${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                                        {i % 2 === 0 ? (
                                            // Year badge on left (even items)
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="hidden md:inline-block px-6 py-2 rounded-full border-2"
                                                style={{
                                                    borderColor: getAccentColor(),
                                                    color: getAccentColor(),
                                                    backgroundColor: `rgba(${getAccentColorRGB()}, 0.1)`
                                                }}
                                            >
                                                <span className="font-mono text-xl font-bold">{item.year}</span>
                                            </motion.div>
                                        ) : (
                                            // Content card on left (odd items)
                                            <ContentCard item={item} getAccentColor={getAccentColor} />
                                        )}
                                    </div>

                                    {/* Right side */}
                                    <div className={`${i % 2 === 0 ? 'md:pl-8' : 'md:order-1 md:pr-8 md:text-right'}`}>
                                        {i % 2 === 0 ? (
                                            // Content card on right (even items)
                                            <ContentCard item={item} getAccentColor={getAccentColor} />
                                        ) : (
                                            // Year badge on right (odd items)
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="hidden md:inline-block px-6 py-2 rounded-full border-2"
                                                style={{
                                                    borderColor: getAccentColor(),
                                                    color: getAccentColor(),
                                                    backgroundColor: `rgba(${getAccentColorRGB()}, 0.1)`
                                                }}
                                            >
                                                <span className="font-mono text-xl font-bold">{item.year}</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div
                                    className="absolute left-[26px] md:left-1/2 md:-ml-[10px] top-6 w-5 h-5 rounded-full border-4 border-black z-10"
                                    style={{
                                        backgroundColor: getAccentColor(),
                                        boxShadow: `0 0 20px ${getAccentColor()}`
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-white font-mono">Education</h3>
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
                            >
                                <span className="text-sm font-mono mb-2 block" style={{ color: getAccentColor() }}>
                                    {edu.year}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                                <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                                <p className="text-gray-500 text-sm">{edu.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-white font-mono">Certifications</h3>
                        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 space-y-3">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ x: 5 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 text-gray-300 text-sm"
                                >
                                    <span style={{ color: getAccentColor() }}>✓</span>
                                    <span>{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Community Contributions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900/30 p-8 rounded-xl border border-gray-800 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 font-mono">Community Contributions</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>50+</div>
                            <p className="text-gray-400">Open Source Contributions</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>15</div>
                            <p className="text-gray-400">Tech Talks Given</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>1000+</div>
                            <p className="text-gray-400">Developers Helped</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-1/4 w-64 h-64 border-2 rounded-full"
                    style={{ borderColor: getAccentColor() }}
                />
            </div>
        </section>
    );
}

function ContentCard({ item, getAccentColor }: any) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all ml-16 md:ml-0"
        >
            <span className="md:hidden text-sm font-mono mb-2 block" style={{ color: getAccentColor() }}>
                {item.year}
            </span>
            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
            <p className="text-sm mb-2" style={{ color: getAccentColor() }}>
                {item.company} • {item.location}
            </p>
            <p className="text-gray-400 text-sm mb-4">{item.description}</p>
            <div className="space-y-2">
                {item.achievements.map((achievement: string, j: number) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-gray-500">
                        <span style={{ color: getAccentColor() }}>▹</span>
                        <span>{achievement}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
