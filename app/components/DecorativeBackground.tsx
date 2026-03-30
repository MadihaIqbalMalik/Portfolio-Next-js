"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

interface DecorativeBackgroundProps {
    variant?: "default" | "minimal" | "dense";
}

interface Dot {
    id: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
}

export default function DecorativeBackground({ variant = "default" }: DecorativeBackgroundProps) {
    // Theme helpers – run only on client to avoid SSR mismatches
    const { getAccentColor, getAccentColorRGB } = useTheme();
    const [accentColor, setAccentColor] = useState<string>("#ffffff");
    const [accentRGB, setAccentRGB] = useState<string>("255,255,255");
    const [dots, setDots] = useState<Dot[]>([]);

    const symbolCount = variant === "dense" ? 12 : variant === "minimal" ? 6 : 8;
    const dotCount = variant === "dense" ? 20 : variant === "minimal" ? 10 : 15;

    useEffect(() => {
        setAccentColor(getAccentColor());
        setAccentRGB(getAccentColorRGB());

        // Generate random dots on client side only to avoid hydration mismatch
        const newDots = Array.from({ length: dotCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setDots(newDots);
    }, [getAccentColor, getAccentColorRGB, dotCount]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Grid */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(${accentRGB}, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${accentRGB}, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Glowing Orbs */}
            <motion.div
                className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: accentColor, top: "10%", left: "5%" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: accentColor, bottom: "10%", right: "5%" }}
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.15, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Code Symbols */}
            {[
                "<>",
                "{...}",
                "( )",
                "[ ]",
                "=>",
                "//",
                "&&",
                "||",
                "++",
                "--",
                "===",
                "!==",
            ]
                .slice(0, symbolCount)
                .map((symbol, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl sm:text-4xl md:text-6xl font-mono font-bold"
                        style={{
                            left: `${5 + i * 8}%`,
                            top: `${15 + (i % 4) * 20}%`,
                            color: accentColor,
                            opacity: 0.05,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, 0],
                            opacity: [0.03, 0.08, 0.03],
                        }}
                        transition={{
                            duration: 4 + (i % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }}
                    >
                        {symbol}
                    </motion.div>
                ))}

            {/* Animated Dots */}
            {dots.map((dot) => (
                <motion.div
                    key={`dot-${dot.id}`}
                    className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
                    style={{
                        backgroundColor: accentColor,
                        left: dot.left,
                        top: dot.top,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: dot.duration,
                        repeat: Infinity,
                        delay: dot.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Rotating Rings */}
            {variant !== "minimal" && (
                <>
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-32 sm:w-48 h-32 sm:h-48 rounded-full border-2 opacity-10"
                        style={{ borderColor: accentColor }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-40 sm:w-64 h-40 sm:h-64 rounded-full border-2 opacity-10"
                        style={{ borderColor: accentColor }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                </>
            )}

            {/* Hexagons */}
            {variant === "dense" && (
                <>
                    <svg
                        className="absolute top-10 right-10 w-20 sm:w-32 h-20 sm:h-32 opacity-10"
                        viewBox="0 0 100 100"
                    >
                        <motion.polygon
                            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                            stroke={accentColor}
                            strokeWidth="2"
                            fill="none"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                    <svg
                        className="absolute bottom-20 left-10 w-16 sm:w-24 h-16 sm:h-24 opacity-10"
                        viewBox="0 0 100 100"
                    >
                        <motion.polygon
                            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                            stroke={accentColor}
                            strokeWidth="2"
                            fill="none"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </>
            )}

            {/* Glowing Corner Lines */}
            <motion.div
                className="absolute top-0 left-0 w-px h-32 sm:h-48"
                style={{
                    background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                    boxShadow: `0 0 10px ${accentColor}`,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-0 right-0 w-px h-32 sm:h-48"
                style={{
                    background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                    boxShadow: `0 0 10px ${accentColor}`,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-px h-32 sm:h-48"
                style={{
                    background: `linear-gradient(to top, ${accentColor}, transparent)`,
                    boxShadow: `0 0 10px ${accentColor}`,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-px h-32 sm:h-48"
                style={{
                    background: `linear-gradient(to top, ${accentColor}, transparent)`,
                    boxShadow: `0 0 10px ${accentColor}`,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />

            {/* Pulsing Circles */}
            {variant === "dense" &&
                [...Array(5)].map((_, i) => (
                    <motion.div
                        key={`circle-${i}`}
                        className="absolute rounded-full border-2"
                        style={{
                            borderColor: accentColor,
                            width: `${50 + i * 30}px`,
                            height: `${50 + i * 30}px`,
                            left: "50%",
                            top: "50%",
                            marginLeft: `-${25 + i * 15}px`,
                            marginTop: `-${25 + i * 15}px`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut",
                        }}
                    />
                ))}
        </div>
    );
}
