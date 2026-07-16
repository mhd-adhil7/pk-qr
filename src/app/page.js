"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import NfcCard from "../components/NfcCard";
import QuickActions from "../components/QuickActions";
import Amenities from "../components/Amenities";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium loader fadeout */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen w-full flex justify-center bg-[#0d120f] overflow-x-hidden font-sans select-none"
        >
          
          {/* Full-screen luxury background with blur and scale */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[4px] scale-[1.04] pointer-events-none select-none"
            style={{ backgroundImage: "url('/background.jpg')" }}
          />
          
          {/* Dark gradient overlay & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 vignette pointer-events-none" />

          {/* Floating glowing circles in the background (luxury aesthetic details) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, 10, 0],
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }}
              className="absolute top-[18%] left-[-15%] w-72 h-72 rounded-full bg-[#053b2d]/25 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 35, 0],
                x: [0, -15, 0],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut"
              }}
              className="absolute bottom-[20%] right-[-15%] w-80 h-80 rounded-full bg-[#084c3b]/15 blur-3xl"
            />
          </div>

          {/* Mobile centered layout container */}
          <div className="relative w-full max-w-[390px] min-h-screen px-4 pt-8 pb-32 flex flex-col items-center z-10 overflow-y-auto no-scrollbar">
            
            {/* NFC business card component */}
            <NfcCard />

            {/* Quick contact actions pill buttons */}
            <QuickActions />

            {/* Amenities glass panel */}
            <Amenities />

            {/* Stick floating bottom navigation bar */}
            <BottomNav />
            
            {/* Elegant footer details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 text-[9px] font-sans font-semibold text-white/80 text-center tracking-[0.25em] uppercase"
            >
              © {new Date().getFullYear()} PK Group Residency • Agali, Palakkad
            </motion.div>

          </div>
        </motion.main>
      )}
    </>
  );
}
