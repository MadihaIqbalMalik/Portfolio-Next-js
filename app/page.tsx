"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HomeSection from "./components/sections/HomeSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import HistorySection from "./components/sections/HistorySection";
import InsightsSection from "./components/sections/InsightsSection";
import ContactSection from "./components/sections/ContactSection";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-black text-white relative selection:bg-white/20 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Main Content */}
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <ParticleBackground />
          <Navbar />
          <div className="flex flex-col relative z-10">
            <HomeSection />
            <ProjectsSection />
            <ExpertiseSection />
            <HistorySection />
            <InsightsSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
