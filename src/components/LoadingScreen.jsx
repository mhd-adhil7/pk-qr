"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 550);
          return 100;
        }
        // Increment progress smoothly
        const step = Math.max(1, Math.min(6, Math.floor((100 - prev) / 10)));
        return prev + step;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.05,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center max-w-[390px] w-full px-8">
        
        {/* Loading Ring & Logo Container */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          
          {/* Circular progress bar SVG */}
          <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              className="text-gray-100"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              r="45"
              cx="50"
              cy="50"
            />
            {/* Active loading progress path */}
            <motion.circle
              className="text-primary"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              r="45"
              cx="50"
              cy="50"
              style={{
                transition: "stroke-dashoffset 0.1s ease-out"
              }}
            />
          </svg>

          {/* Logo element pulsing */}
          <motion.div
            animate={{ 
              scale: [0.93, 1, 0.93],
              opacity: [0.95, 1, 0.95]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-4 shadow-sm z-10"
          >
            <Image
              src="/logo.png"
              alt="PK Group Residency Logo"
              width={110}
              height={110}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Welcome Messages */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <span className="text-[10px] tracking-[0.3em] font-sans font-medium uppercase text-gray-400 block mb-2">
            Luxury Accommodation
          </span>
          <h2 className="font-serif text-2xl font-bold tracking-wide text-primary">
            PK Group Residency
          </h2>
          <p className="text-xs text-gray-400 mt-2 font-sans tracking-wide">
            Welcome to PK Group Residency
          </p>
        </motion.div>

        {/* Small numeric percentage */}
        <span className="text-xs font-semibold text-primary mt-6 tracking-widest">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
