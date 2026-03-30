"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import CodeEditor from "../CodeEditor";
import CornerAccent from "../CornerAccent";
import SectionDivider from "../SectionDivider";
import DecorativeBackground from "../DecorativeBackground";

export default function HomeSection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();
    const [displayedText, setDisplayedText] = useState("");
    const fullName = "Madiha Iqbal";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setDisplayedText(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const skills = [
        "React", "Next.js", "TypeScript", "Node.js", "Python",
        "JavaScript", "Tailwind CSS", "MongoDB", "PostgreSQL",
        "GraphQL", "REST APIs", "Docker", "AWS", "Git",
        "UI/UX Design", "Figma", "Framer Motion"
    ];

    const featuredProjects = [
        { title: "E-Commerce Platform", tech: "Next.js, Stripe, MongoDB", desc: "Full-stack shopping experience with real-time inventory" },
        { title: "AI Chat Application", tech: "React, WebSocket, OpenAI", desc: "Real-time chat with AI-powered responses" },
        { title: "Analytics Dashboard", tech: "TypeScript, D3.js, Express", desc: "Data visualization platform for business metrics" },
    ];

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative p-8 pt-24 overflow-hidden">
            <CornerAccent position="top-left" size={60} />
            <CornerAccent position="top-right" size={60} />
            <CornerAccent position="bottom-left" size={60} />
            <CornerAccent position="bottom-right" size={60} />

            <div className="max-w-6xl w-full z-10 space-y-12">
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block"
                    >
                        <div className="relative">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight">
                                {displayedText}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-1 h-12 sm:h-16 md:h-24 ml-2 align-middle"
                                    style={{ backgroundColor: getAccentColor() }}
                                />
                            </h1>
                            <div
                                className="absolute -inset-4 blur-3xl opacity-20 -z-10"
                                style={{ backgroundColor: getAccentColor() }}
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-3xl text-gray-400 font-mono"
                    >
                        Full Stack Developer & UI/UX Designer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: getAccentColor() }}
                        />
                        <span className="text-sm text-gray-300 font-mono">Available for work</span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full transition-all shadow-lg hover:scale-105 text-sm sm:text-base"
                        style={{
                            backgroundColor: getAccentColor(),
                            color: '#000',
                            boxShadow: `0 0 20px rgba(${getAccentColorRGB()}, 0.3)`
                        }}
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold rounded-full transition-all hover:scale-105 text-sm sm:text-base"
                        style={{
                            borderColor: getAccentColor(),
                            color: getAccentColor()
                        }}
                    >
                        Contact Me
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-gray-300 leading-relaxed pt-8"
                >
                    <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                        <p className="text-sm sm:text-base">
                            I craft digital experiences that merge high-performance code with stunning aesthetics.
                            My focus is on building scalable applications that feel alive and respond intuitively to user needs.
                        </p>
                    </div>
                    <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                        <p className="text-sm sm:text-base">
                            With a deep understanding of modern web technologies and design principles, I transform complex problems
                            into elegant, user-centric solutions that drive real business value.
                        </p>
                    </div>
                    <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors sm:col-span-2 md:col-span-1">
                        <p className="text-sm sm:text-base">
                            Driven by innovation and a passion for pixel-perfect design, I push the boundaries of what's
                            possible on the web, ensuring every interaction is meaningful and delightful.
                        </p>
                    </div>
                </motion.div>

                <SectionDivider />
                <CodeEditor />
                <SectionDivider />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Featured Work</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all group"
                            >
                                <div
                                    className="h-2 w-16 rounded-full mb-4"
                                    style={{ backgroundColor: getAccentColor() }}
                                />
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-xs font-mono mb-3" style={{ color: getAccentColor() }}>{project.tech}</p>
                                <p className="text-gray-400 text-sm">{project.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="space-y-6"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center font-mono">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ delay: i * 0.03, duration: 0.3 }}
                                className="px-3 sm:px-4 py-2 bg-gray-900/70 rounded-lg border border-gray-800 text-xs sm:text-sm font-mono text-gray-300 hover:text-white transition-all cursor-default"
                                style={{
                                    borderColor: `rgba(${getAccentColorRGB()}, 0.2)`,
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <DecorativeBackground variant="dense" />
        </section>
    );
}
