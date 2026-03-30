"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function SectionDivider() {
    const { getAccentColor, getAccentColorRGB } = useTheme();

    return (
        <div className="relative w-full h-px my-8">
            {/* Main line */}
            <motion.div
                className="absolute inset-0 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(${getAccentColorRGB()}, 0.5) 50%, transparent 100%)`
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
            />

            {/* Glowing center dot */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                    backgroundColor: getAccentColor(),
                    boxShadow: `0 0 20px ${getAccentColor()}`
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
            />

            {/* Animated particles along the line */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                    style={{
                        backgroundColor: getAccentColor(),
                        left: `${20 + i * 15}%`
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}
