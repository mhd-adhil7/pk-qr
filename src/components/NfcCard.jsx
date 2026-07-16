"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hotel } from "../config/hotel";

export default function NfcCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)", transition: { duration: 0.2 } }}
      className="glass-card w-full p-6 flex flex-col items-center text-center relative overflow-hidden rounded-[26px]"
    >
      {/* Decorative NFC Antenna Wave Lines (Very subtle details on the card) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 1" />
        </svg>
      </div>

      {/* Floating NFC Chip Icon representation */}
      <div className="absolute top-5 right-6 pointer-events-none opacity-20 text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M7 6H17V18H7V6Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M10 9H14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M10 12H14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M10 15H14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </div>

      {/* Logo in Circular background */}
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center p-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-50 z-10">
        <Image
          src="/logo.png"
          alt={hotel.name}
          width={88}
          height={88}
          className="object-contain"
          priority
        />
      </div>

      {/* Hotel Name */}
      <h1 className="font-serif text-2xl font-extrabold tracking-wide text-primary mb-1 z-10">
        {hotel.name}
      </h1>

      {/* Tagline */}
      <p className="text-[10px] font-sans font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4">
        {hotel.tagline}
      </p>



      {/* Small premium divider */}
      <div className="w-full flex items-center justify-center gap-2.5 mb-3.5">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/45" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-200" />
      </div>

      {/* Address */}
      <p className="text-[10px] text-gray-400 max-w-[250px] font-sans leading-relaxed z-10">
        {hotel.address}
      </p>
    </motion.div>
  );
}
