"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const featuredArticle = {
    title: "The Future of Web Development: AI, Performance, and User Experience",
    excerpt: "Exploring how artificial intelligence, performance optimization, and user-centric design are shaping the next generation of web applications. From AI-powered code completion to edge computing, the landscape is evolving rapidly.",
    date: "December 2024",
    readTime: "8 min read",
    tags: ["AI", "Performance", "UX"]
};

const articles = [
    {
        title: "Building Scalable React Applications",
        excerpt: "Best practices for structuring large-scale React apps with TypeScript and modern state management.",
        date: "Nov 2024",
        readTime: "6 min",
        tags: ["React", "TypeScript"]
    },
    {
        title: "Mastering CSS Grid and Flexbox",
        excerpt: "A comprehensive guide to modern CSS layout techniques for responsive design.",
        date: "Oct 2024",
        readTime: "5 min",
        tags: ["CSS", "Design"]
    },
    {
        title: "API Design Principles",
        excerpt: "Creating RESTful and GraphQL APIs that developers love to use.",
        date: "Sep 2024",
        readTime: "7 min",
        tags: ["API", "Backend"]
    },
    {
        title: "Performance Optimization Techniques",
        excerpt: "Strategies to make your web apps lightning fast with code splitting and lazy loading.",
        date: "Aug 2024",
        readTime: "6 min",
        tags: ["Performance", "Optimization"]
    },
    {
        title: "Modern Authentication Patterns",
        excerpt: "Implementing secure authentication with JWT, OAuth, and session management.",
        date: "Jul 2024",
        readTime: "8 min",
        tags: ["Security", "Auth"]
    },
    {
        title: "Microservices Architecture Guide",
        excerpt: "When and how to adopt microservices for your application infrastructure.",
        date: "Jun 2024",
        readTime: "10 min",
        tags: ["Architecture", "Backend"]
    }
];

const allTags = [
    "React", "TypeScript", "JavaScript", "Node.js", "Design",
    "Performance", "AI", "CSS", "Architecture", "API",
    "Security", "UX", "Testing", "DevOps", "Cloud"
];

export default function InsightsSection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();

    return (
        <section id="insights" className="min-h-screen p-8 pt-24 border-b border-gray-800 flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl w-full space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold text-white font-mono">Insights</h2>
                    <p className="text-gray-400">Thoughts on code, design, and technology</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Featured Article */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-900/50 p-8 rounded-xl border-2 hover:border-gray-700 transition-all relative overflow-hidden group cursor-pointer"
                            style={{ borderColor: `rgba(${getAccentColorRGB()}, 0.3)` }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-1"
                                style={{ backgroundColor: getAccentColor() }}
                            />
                            <span className="text-xs font-mono mb-3 block" style={{ color: getAccentColor() }}>
                                ⭐ Featured Article
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                                {featuredArticle.title}
                            </h3>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>{featuredArticle.date}</span>
                                <span>•</span>
                                <span>{featuredArticle.readTime}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {featuredArticle.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-mono"
                                        style={{
                                            backgroundColor: `rgba(${getAccentColorRGB()}, 0.1)`,
                                            color: getAccentColor(),
                                            border: `1px solid rgba(${getAccentColorRGB()}, 0.3)`
                                        }}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>

                        {/* Article Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {articles.map((article, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="w-2 h-2 rounded-full mt-2"
                                            style={{ backgroundColor: getAccentColor() }}
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                                                {article.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-3">{article.excerpt}</p>
                                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                                <span>{article.date}</span>
                                                <span>•</span>
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 hover:text-white transition-colors"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tag Cloud */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 sticky top-24"
                        >
                            <h4 className="text-xl font-bold text-white mb-4 font-mono">Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {allTags.map((tag, i) => (
                                    <motion.button
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ delay: i * 0.02 }}
                                        className="px-3 py-1.5 rounded-full text-xs font-mono transition-all"
                                        style={{
                                            backgroundColor: `rgba(${getAccentColorRGB()}, 0.1)`,
                                            color: getAccentColor(),
                                            border: `1px solid rgba(${getAccentColorRGB()}, 0.2)`,
                                        }}
                                    >
                                        #{tag}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Newsletter */}
                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <h5 className="text-sm font-bold text-white mb-2">Stay Updated</h5>
                                <p className="text-xs text-gray-500 mb-4">
                                    Get notified about new articles and insights
                                </p>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-black/50 border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none mb-2"
                                    style={{
                                        borderColor: `rgba(${getAccentColorRGB()}, 0.3)`,
                                    }}
                                />
                                <button
                                    className="w-full py-2 rounded font-mono text-sm transition-all"
                                    style={{
                                        backgroundColor: getAccentColor(),
                                        color: '#000',
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating Shapes */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-lg opacity-5"
                        style={{
                            backgroundColor: getAccentColor(),
                            left: `${10 + i * 25}%`,
                            top: `${15 + i * 20}%`,
                            transform: `rotate(${i * 15}deg)`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [i * 15, i * 15 + 10, i * 15],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Ink Stroke Effect */}
                <svg className="absolute top-1/3 right-1/4 w-64 h-64 opacity-5" viewBox="0 0 200 200">
                    <motion.path
                        d="M 20 100 Q 60 20, 100 100 T 180 100"
                        stroke={getAccentColor()}
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </section>
    );
}
