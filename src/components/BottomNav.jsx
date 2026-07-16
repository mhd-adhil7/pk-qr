"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Calendar } from "lucide-react";
import { hotel } from "../config/hotel";

// Custom SVG Icon for WhatsApp
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.92 9.92 0 004.93 1.302h.004c5.507 0 9.993-4.479 9.994-9.986A9.97 9.97 0 0012.012 2zm5.836 14.199c-.24.675-1.4 1.224-1.943 1.3-1.497.209-3.238-.344-5.116-1.129-3.036-1.271-4.992-4.343-5.143-4.545-.15-.201-1.218-1.621-1.218-3.093 0-1.472.772-2.195 1.047-2.483.275-.288.6-.36.8-.36h.57c.18 0 .42.007.65.526.24.54.82 2.01.89 2.153.07.143.12.31.02.502-.099.191-.148.312-.293.479-.145.167-.305.372-.436.499-.145.14-.297.292-.128.58.17.29.754 1.243 1.622 2.014.1.8.847 1.503 1.77 1.914.275.122.435.1.595-.08.16-.18.69-.8 1.077-1.34.15-.21.3-.18.51-.1.21.08 1.33.63 1.56.74.23.11.38.16.44.26.06.1.06.58-.18 1.258z"/>
  </svg>
);

export default function BottomNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      className="fixed bottom-5 left-0 right-0 z-45 flex justify-center px-4 pointer-events-none"
    >
      <div className="glass-nav rounded-full px-3.5 py-2.5 flex items-center justify-between gap-3 w-full max-w-[350px] border border-white/25 shadow-xl pointer-events-auto">
        
        {/* Call Icon Link */}
        <motion.a
          href={`tel:${hotel.phoneRaw}`}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 text-primary border border-gray-150/40 shadow-sm transition-colors hover:text-primary-hover hover:bg-white"
          title="Call Now"
        >
          <Phone className="w-4 h-4" />
        </motion.a>

        {/* WhatsApp Icon Link */}
        <motion.a
          href={hotel.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#25D366] text-white border border-[#25D366]/20 shadow-sm transition-colors hover:bg-[#20ba5a]"
          title="WhatsApp Chat"
        >
          <WhatsappIcon className="w-4.5 h-4.5" />
        </motion.a>

        {/* Location Icon Link */}
        <motion.a
          href={hotel.maps}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 text-primary border border-gray-150/40 shadow-sm transition-colors hover:text-primary-hover hover:bg-white"
          title="Location Map"
        >
          <MapPin className="w-4.5 h-4.5" />
        </motion.a>

        {/* Primary CTA Book Now Button */}
        <motion.a
          href={hotel.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, boxShadow: "0 6px 15px rgba(5, 59, 45, 0.25)" }}
          whileTap={{ scale: 0.96 }}
          className="flex-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.18em] py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-md border border-primary/20"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </motion.a>

      </div>
    </motion.div>
  );
}
