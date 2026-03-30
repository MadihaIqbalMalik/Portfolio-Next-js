"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Full Stack",
        tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
        image: "🛒",
        problem: "Local businesses needed an affordable way to sell online",
        solution: "Built a customizable e-commerce platform with integrated payments",
        lessons: "Learned advanced state management and payment processing"
    },
    {
        id: 2,
        title: "AI Chat Application",
        category: "Frontend",
        tech: ["React", "WebSocket", "OpenAI API"],
        image: "💬",
        problem: "Customer support teams were overwhelmed with repetitive queries",
        solution: "Created an AI-powered chat system with context awareness",
        lessons: "Mastered real-time communication and AI integration"
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        category: "Full Stack",
        tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
        image: "📊",
        problem: "Marketing teams struggled to visualize campaign performance",
        solution: "Developed interactive dashboard with real-time data visualization",
        lessons: "Enhanced skills in data visualization and performance optimization"
    },
    {
        id: 4,
        title: "Task Management App",
        category: "Frontend",
        tech: ["React", "Redux", "Firebase"],
        image: "✅",
        problem: "Teams needed better project collaboration tools",
        solution: "Built a Kanban-style task manager with real-time sync",
        lessons: "Improved understanding of state management patterns"
    },
    {
        id: 5,
        title: "Portfolio Generator",
        category: "Full Stack",
        tech: ["Next.js", "MDX", "Vercel"],
        image: "🎨",
        problem: "Developers wanted easy portfolio creation without coding",
        solution: "Created a no-code portfolio builder with templates",
        lessons: "Learned about dynamic content generation and SEO"
    },
    {
        id: 6,
        title: "Weather Forecast App",
        category: "Frontend",
        tech: ["React", "OpenWeather API", "Chart.js"],
        image: "🌤️",
        problem: "Users wanted detailed weather insights in a clean interface",
        solution: "Designed a minimalist weather app with 7-day forecasts",
        lessons: "Practiced API integration and responsive design"
    },
    {
        id: 7,
        title: "Social Media Dashboard",
        category: "Full Stack",
        tech: ["Node.js", "React", "MongoDB", "OAuth"],
        image: "📱",
        problem: "Influencers needed unified analytics across platforms",
        solution: "Built aggregated dashboard connecting multiple social APIs",
        lessons: "Gained experience with OAuth and third-party integrations"
    },
    {
        id: 8,
        title: "Code Snippet Manager",
        category: "Full Stack",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        image: "📝",
        problem: "Developers lost track of useful code snippets",
        solution: "Created a searchable snippet library with tagging system",
        lessons: "Improved database design and search functionality"
    },
    {
        id: 9,
        title: "Fitness Tracker",
        category: "Full Stack",
        tech: ["React Native", "Node.js", "MongoDB"],
        image: "💪",
        problem: "Users wanted simple workout and nutrition tracking",
        solution: "Developed mobile app with progress visualization",
        lessons: "Learned mobile development and health data handling"
    },
    {
        id: 10,
        title: "Blog Platform",
        category: "Full Stack",
        tech: ["Next.js", "Markdown", "Vercel", "CMS"],
        image: "✍️",
        problem: "Writers needed a fast, SEO-friendly blogging platform",
        solution: "Built a static site generator with CMS integration",
        lessons: "Mastered SSG, SEO optimization, and content management"
    },
    {
        id: 11,
        title: "Video Streaming App",
        category: "Full Stack",
        tech: ["React", "Node.js", "AWS S3", "HLS"],
        image: "🎥",
        problem: "Content creators needed reliable video hosting",
        solution: "Created streaming platform with adaptive bitrate",
        lessons: "Learned video encoding and cloud infrastructure"
    },
    {
        id: 12,
        title: "Recipe Finder",
        category: "Frontend",
        tech: ["React", "Spoonacular API", "Tailwind"],
        image: "🍳",
        problem: "Home cooks struggled to find recipes with available ingredients",
        solution: "Built smart recipe search with ingredient-based filtering",
        lessons: "Enhanced UX design and API optimization skills"
    },
];

const categories = ["All", "Full Stack", "Frontend"];

export default function ProjectsSection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section id="projects" className="min-h-screen p-8 pt-24 border-b border-gray-800 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl w-full space-y-8"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold text-white font-mono">Projects</h2>
                    <p className="text-gray-400">Building solutions that matter</p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="px-6 py-2 rounded-full border-2 font-mono text-sm transition-all"
                            style={{
                                borderColor: selectedCategory === cat ? getAccentColor() : '#374151',
                                backgroundColor: selectedCategory === cat ? `rgba(${getAccentColorRGB()}, 0.1)` : 'transparent',
                                color: selectedCategory === cat ? getAccentColor() : '#9ca3af',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setSelectedProject(project)}
                            className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:scale-105 transition-all cursor-pointer group relative overflow-hidden"
                        >
                            {/* Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-16 h-16 opacity-20"
                                style={{
                                    background: `linear-gradient(135deg, transparent 50%, ${getAccentColor()} 50%)`
                                }}
                            />

                            <div className="text-6xl mb-4">{project.image}</div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-xs font-mono mb-3 opacity-70" style={{ color: getAccentColor() }}>
                                {project.category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border-2 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            style={{ borderColor: getAccentColor() }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="text-6xl mb-4">{selectedProject.image}</div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                    <p className="text-sm font-mono" style={{ color: getAccentColor() }}>
                                        {selectedProject.category}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-gray-400 hover:text-white text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Problem</h4>
                                    <p className="text-gray-400">{selectedProject.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                                    <p className="text-gray-400">{selectedProject.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-lg text-sm font-mono"
                                                style={{
                                                    backgroundColor: `rgba(${getAccentColorRGB()}, 0.1)`,
                                                    color: getAccentColor(),
                                                    border: `1px solid rgba(${getAccentColorRGB()}, 0.3)`
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Key Learnings</h4>
                                    <p className="text-gray-400">{selectedProject.lessons}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 rounded-full blur-3xl opacity-5"
                        style={{
                            backgroundColor: getAccentColor(),
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 25}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
