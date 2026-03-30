"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const { cycleColor, getAccentColor } = useTheme();

    const sections = [
        { id: "home", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "expertise", label: "Expertise" },
        { id: "history", label: "History" },
        { id: "insights", label: "Insights" },
        { id: "contact", label: "Contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-xl font-bold text-white font-mono">
                    Madiha<span style={{ color: getAccentColor() }}>.</span>
                </div>

                <div className="hidden md:flex gap-8 items-center">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`text-sm font-mono transition-colors relative ${activeSection === section.id ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {section.label}
                            {activeSection === section.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                                    style={{
                                        backgroundColor: getAccentColor(),
                                        boxShadow: `0 0 10px ${getAccentColor()}`
                                    }}
                                />
                            )}
                        </button>
                    ))}

                    {/* Color Switcher */}
                    <button
                        onClick={cycleColor}
                        className="ml-4 p-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors group"
                        title="Change theme color"
                    >
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
