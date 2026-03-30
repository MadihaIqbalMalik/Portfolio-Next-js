"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function ContactSection() {
    const { getAccentColor, getAccentColorRGB } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    const socialLinks = [
        { name: "GitHub", icon: "💻", url: "#" },
        { name: "LinkedIn", icon: "💼", url: "#" },
        { name: "Twitter", icon: "🐦", url: "#" },
        { name: "Email", icon: "📧", url: "mailto:madiha@example.com" },
    ];

    return (
        <section id="contact" className="min-h-screen p-8 pt-24 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full space-y-12 z-10"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold text-white font-mono">Get In Touch</h2>
                    <p className="text-gray-400">Let's build something amazing together</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 relative overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-xs font-mono text-gray-500 ml-2">contact.sh</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-mono flex items-center gap-2">
                                    <span style={{ color: getAccentColor() }}>$</span> name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/50 border rounded p-3 text-white focus:outline-none transition-all font-mono"
                                    style={{
                                        borderColor: `rgba(${getAccentColorRGB()}, 0.3)`,
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = getAccentColor()}
                                    onBlur={(e) => e.target.style.borderColor = `rgba(${getAccentColorRGB()}, 0.3)`}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-mono flex items-center gap-2">
                                    <span style={{ color: getAccentColor() }}>$</span> email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/50 border rounded p-3 text-white focus:outline-none transition-all font-mono"
                                    style={{
                                        borderColor: `rgba(${getAccentColorRGB()}, 0.3)`,
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = getAccentColor()}
                                    onBlur={(e) => e.target.style.borderColor = `rgba(${getAccentColorRGB()}, 0.3)`}
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-mono flex items-center gap-2">
                                    <span style={{ color: getAccentColor() }}>$</span> message
                                </label>
                                <textarea
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/50 border rounded p-3 text-white focus:outline-none transition-all font-mono resize-none"
                                    style={{
                                        borderColor: `rgba(${getAccentColorRGB()}, 0.3)`,
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = getAccentColor()}
                                    onBlur={(e) => e.target.style.borderColor = `rgba(${getAccentColorRGB()}, 0.3)`}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 rounded font-bold font-mono transition-all"
                                style={{
                                    backgroundColor: getAccentColor(),
                                    color: '#000',
                                    boxShadow: `0 0 20px rgba(${getAccentColorRGB()}, 0.3)`
                                }}
                            >
                                Send Message →
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Social Links */}
                        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Connect</h3>
                            <div className="space-y-4">
                                {socialLinks.map((link, i) => (
                                    <motion.a
                                        key={i}
                                        href={link.url}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
                                    >
                                        <span className="text-3xl">{link.icon}</span>
                                        <div className="flex-1">
                                            <span className="text-white font-mono">{link.name}</span>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-white transition-colors">→</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-4 font-mono">Quick Info</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <span style={{ color: getAccentColor() }}>📍</span>
                                    <div>
                                        <p className="text-gray-400">Location</p>
                                        <p className="text-white">Remote / Global</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span style={{ color: getAccentColor() }}>⏰</span>
                                    <div>
                                        <p className="text-gray-400">Response Time</p>
                                        <p className="text-white">Within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span style={{ color: getAccentColor() }}>💼</span>
                                    <div>
                                        <p className="text-gray-400">Availability</p>
                                        <p className="text-white">Open for projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Schedule Meeting */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block p-6 rounded-xl border-2 text-center transition-all"
                            style={{
                                borderColor: getAccentColor(),
                                backgroundColor: `rgba(${getAccentColorRGB()}, 0.05)`
                            }}
                        >
                            <p className="text-sm text-gray-400 mb-2">Prefer a call?</p>
                            <p className="text-lg font-bold font-mono" style={{ color: getAccentColor() }}>
                                Schedule a Meeting →
                            </p>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center pt-12 border-t border-gray-800"
                >
                    <p className="text-gray-500 text-sm font-mono">
                        © 2024 Madiha Iqbal. Built with Next.js & Framer Motion
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Designed & Developed with <span style={{ color: getAccentColor() }}>♥</span>
                    </p>
                </motion.div>
            </motion.div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(${getAccentColor()} 1px, transparent 1px),
              linear-gradient(90deg, ${getAccentColor()} 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                        opacity: 0.1
                    }}
                />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: getAccentColor(), top: '10%', left: '10%' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: getAccentColor(), bottom: '10%', right: '10%' }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </section>
    );
}
