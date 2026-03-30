"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeColor = "blue" | "green" | "red";

interface ThemeContextType {
    color: ThemeColor;
    cycleColor: () => void;
    getAccentColor: () => string;
    getAccentColorRGB: () => string;
    getBgGradient: () => string;
    getBgColor: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [color, setColor] = useState<ThemeColor>("blue");
    const [isLoaded, setIsLoaded] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedColor = localStorage.getItem("themeColor") as ThemeColor;
        if (savedColor && ["blue", "green", "red"].includes(savedColor)) {
            setColor(savedColor);
        }
        setIsLoaded(true);
    }, []);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("themeColor", color);
        }
    }, [color, isLoaded]);

    const cycleColor = () => {
        setColor((prev) => {
            if (prev === "blue") return "green";
            if (prev === "green") return "red";
            return "blue";
        });
    };

    const getAccentColor = () => {
        switch (color) {
            case "blue":
                return "#00f0ff";
            case "green":
                return "#00ff88";
            case "red":
                return "#ff0055";
            default:
                return "#00f0ff";
        }
    };

    const getAccentColorRGB = () => {
        switch (color) {
            case "blue":
                return "0, 240, 255";
            case "green":
                return "0, 255, 136";
            case "red":
                return "255, 0, 85";
            default:
                return "0, 240, 255";
        }
    };

    const getBgGradient = () => {
        switch (color) {
            case "blue":
                return "linear-gradient(135deg, #000000 0%, #001a1a 50%, #000000 100%)";
            case "green":
                return "linear-gradient(135deg, #000000 0%, #001a0d 50%, #000000 100%)";
            case "red":
                return "linear-gradient(135deg, #000000 0%, #1a0008 50%, #000000 100%)";
            default:
                return "linear-gradient(135deg, #000000 0%, #001a1a 50%, #000000 100%)";
        }
    };

    const getBgColor = () => {
        switch (color) {
            case "blue":
                return "#000000";
            case "green":
                return "#000a00";
            case "red":
                return "#0a0000";
            default:
                return "#000000";
        }
    };

    return (
        <ThemeContext.Provider value={{ color, cycleColor, getAccentColor, getAccentColorRGB, getBgGradient, getBgColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
