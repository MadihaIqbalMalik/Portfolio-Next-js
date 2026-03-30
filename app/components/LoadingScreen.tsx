"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [text, setText] = useState("");
    const fullText = "Madiha...";
    const [phase, setPhase] = useState(1);

    // Theme helpers
    const { color, getAccentColor, getAccentColorRGB } = useTheme();
    const [accentColor, setAccentColor] = useState<string>("#ffffff");
    const [accentRGB, setAccentRGB] = useState<string>("255,255,255");

    // Initialise accent colours on client mount to avoid SSR mismatch
    useEffect(() => {
        setAccentColor(getAccentColor());
        setAccentRGB(getAccentColorRGB());
    }, [color]);

    // Phase 1 – typewriter effect
    useEffect(() => {
        if (phase === 1) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                    setText(fullText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setPhase(2), 500);
                }
            }, 150);
            return () => clearInterval(interval);
        }
    }, [phase]);

    // Phase 2 – pause before shatter
    useEffect(() => {
        if (phase === 2) {
            const timer = setTimeout(() => setPhase(3), 3000);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // Phase 3 – final callback
    useEffect(() => {
        if (phase === 3) {
            const timer = setTimeout(() => onComplete(), 1500);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    return (
        <AnimatePresence>
            {phase < 4 && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, #000000 0%, rgba(${accentRGB}, 0.1) 50%, #000000 100%)`
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    {(phase === 2 || phase === 3) && (
                        <NetworkBackground isShattering={phase === 3} accentColor={accentColor} accentRGB={accentRGB} />
                    )}

                    <div className="relative z-10 bg-black/50 p-8 rounded-xl backdrop-blur-sm border-2" style={{ borderColor: `rgba(${accentRGB}, 0.3)` }}>
                        <motion.h1
                            className="text-4xl md:text-6xl font-mono font-bold tracking-wider drop-shadow-2xl"
                            style={{
                                color: accentColor,
                                textShadow: `0 0 20px rgba(${accentRGB}, 0.8)`
                            }}
                            initial={{ opacity: 1 }}
                            animate={
                                phase === 3
                                    ? { opacity: 0, scale: 1.5, filter: "blur(10px)", transition: { duration: 0.8 } }
                                    : { opacity: 1 }
                            }
                        >
                            {text}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1 h-8 md:h-12 ml-1 align-middle"
                                style={{
                                    backgroundColor: accentColor,
                                    boxShadow: `0 0 10px ${accentColor}`
                                }}
                            />
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function NetworkBackground({ isShattering, accentColor, accentRGB }: { isShattering: boolean; accentColor: string; accentRGB: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const nodes: Node[] = [];

        const updateDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = Math.random() * 2 + 1;
            }
            update(isShattering: boolean) {
                if (isShattering) {
                    this.x += this.vx * 5;
                    this.y += this.vy * 5;
                    this.vx *= 1.05;
                    this.vy *= 1.05;
                } else {
                    this.x += this.vx;
                    this.y += this.vy;
                }
                if (!isShattering) {
                    if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
                }
            }
            draw(ctx: CanvasRenderingContext2D, isShattering: boolean, accentColor: string, accentRGB: string) {
                const shakeX = isShattering ? (Math.random() - 0.5) * 2 : 0;
                const shakeY = isShattering ? (Math.random() - 0.5) * 2 : 0;
                ctx.beginPath();
                ctx.arc(this.x + shakeX, this.y + shakeY, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = isShattering ? `rgba(${accentRGB}, 1)` : accentColor;
                ctx.shadowBlur = 10;
                ctx.shadowColor = accentColor;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < 80; i++) nodes.push(new Node());

        const render = () => {
            ctx.clearRect(0, 0, canvas!.width, canvas!.height);
            ctx.lineWidth = 0.5;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        if (isShattering && Math.random() > 0.7) continue;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = isShattering ? `rgba(${accentRGB}, 0.8)` : `rgba(${accentRGB}, 0.4)`;
                        ctx.stroke();
                    }
                }
            }
            nodes.forEach(node => {
                node.update(isShattering);
                node.draw(ctx, isShattering, accentColor, accentRGB);
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener("resize", updateDimensions);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isShattering, accentColor, accentRGB]);

    return (
        <motion.canvas
            ref={canvasRef}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        />
    );
}
