"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface CornerAccentProps {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    size?: number;
}

export default function CornerAccent({ position, size = 40 }: CornerAccentProps) {
    const { getAccentColor, getAccentColorRGB } = useTheme();

    const positionClasses = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0 rotate-90",
        "bottom-left": "bottom-0 left-0 -rotate-90",
        "bottom-right": "bottom-0 right-0 rotate-180",
    };

    return (
        <motion.div
            className={`absolute ${positionClasses[position]} pointer-events-none`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
                {/* Corner lines */}
                <motion.path
                    d="M 0 10 L 0 0 L 10 0"
                    stroke={getAccentColor()}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        filter: `drop-shadow(0 0 4px ${getAccentColor()})`
                    }}
                />

                {/* Corner dot */}
                <motion.circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={getAccentColor()}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        filter: `drop-shadow(0 0 6px ${getAccentColor()})`
                    }}
                />
            </svg>
        </motion.div>
    );
}
