"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const codeSnippets = [
    `// Welcome to my portfolio!
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return "Let's build something amazing";
}

greet("Developer");`,
    `// Building scalable apps
const createApp = async () => {
  const data = await fetchAPI();
  return data.map(item => 
    transform(item)
  );
};`,
    `// Clean code principles
class Portfolio {
  constructor() {
    this.projects = [];
    this.skills = new Set();
  }
  
  addProject(project) {
    this.projects.push(project);
  }
}`,
    `// Modern React patterns
const useCustomHook = () => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    fetchData().then(setState);
  }, []);
  
  return state;
};`
];

export default function CodeEditor() {
    const { getAccentColor } = useTheme();
    const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
    const [code, setCode] = useState("");
    const [displayedCode, setDisplayedCode] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    const fullCode = codeSnippets[currentSnippetIndex];

    // Auto-typing effect
    useEffect(() => {
        if (isTyping && charIndex < fullCode.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode(fullCode.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 30);
            return () => clearTimeout(timeout);
        } else if (isTyping && charIndex >= fullCode.length) {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayedCode("");
                setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, isTyping, fullCode, currentSnippetIndex]);

    useEffect(() => {
        setCode(displayedCode);
    }, [displayedCode]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
        setIsTyping(false);
    };

    const handleFocus = () => {
        setIsTyping(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setDisplayedCode("");
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="bg-gray-900/80 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
                <div className="bg-gray-950 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-500 text-xs ml-4 font-mono">portfolio.js</span>
                    {isTyping && (
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="ml-auto text-xs font-mono"
                            style={{ color: getAccentColor() }}
                        >
                            ● Auto-typing...
                        </motion.span>
                    )}
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-950/50 border-r border-gray-800 py-4 text-right pr-3 text-gray-600 text-sm font-mono select-none">
                        {code.split('\n').map((_, i) => (
                            <div key={i} className="leading-6">{i + 1}</div>
                        ))}
                    </div>

                    <textarea
                        value={code}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="w-full h-64 bg-transparent pl-16 pr-4 py-4 text-sm font-mono text-gray-300 resize-none focus:outline-none leading-6"
                        spellCheck={false}
                        style={{ caretColor: getAccentColor() }}
                    />
                </div>

                <div className="bg-gray-950 px-4 py-1 flex items-center justify-between border-t border-gray-800 text-xs font-mono text-gray-500">
                    <span>JavaScript</span>
                    <span>UTF-8</span>
                    <span>{code.split('\n').length} lines</span>
                </div>
            </div>
        </motion.div>
    );
}
