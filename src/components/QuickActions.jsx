"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star, Globe } from "lucide-react";
import { hotel } from "../config/hotel";

// Custom SVG Icon for WhatsApp
const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.92 9.92 0 004.93 1.302h.004c5.507 0 9.993-4.479 9.994-9.986A9.97 9.97 0 0012.012 2zm5.836 14.199c-.24.675-1.4 1.224-1.943 1.3-1.497.209-3.238-.344-5.116-1.129-3.036-1.271-4.992-4.343-5.143-4.545-.15-.201-1.218-1.621-1.218-3.093 0-1.472.772-2.195 1.047-2.483.275-.288.6-.36.8-.36h.57c.18 0 .42.007.65.526.24.54.82 2.01.89 2.153.07.143.12.31.02.502-.099.191-.148.312-.293.479-.145.167-.305.372-.436.499-.145.14-.297.292-.128.58.17.29.754 1.243 1.622 2.014.1.8.847 1.503 1.77 1.914.275.122.435.1.595-.08.16-.18.69-.8 1.077-1.34.15-.21.3-.18.51-.1.21.08 1.33.63 1.56.74.23.11.38.16.44.26.06.1.06.58-.18 1.258z"/>
  </svg>
);

// Custom SVG Icon for Instagram
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function QuickActions() {
  const actions = [
    {
      label: "Call Now",
      icon: <Phone className="w-4 h-4 text-white" />,
      url: `tel:${hotel.phoneRaw}`,
      bg: "bg-primary text-white hover:bg-primary-hover border border-primary/20",
    },
    {
      label: "WhatsApp",
      icon: <WhatsappIcon className="w-4.5 h-4.5 text-white" />,
      url: hotel.whatsapp,
      bg: "bg-[#25D366] text-white hover:bg-[#20ba5a] border border-[#25D366]/20",
    },
    {
      label: "Google Location",
      icon: <MapPin className="w-4 h-4 text-primary" />,
      url: hotel.maps,
      bg: "bg-white/80 text-gray-800 border border-gray-100/50 hover:bg-gray-50",
    },
    {
      label: "Google Reviews",
      icon: <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />,
      url: hotel.reviews,
      bg: "bg-white/80 text-gray-800 border border-gray-100/50 hover:bg-gray-50",
    },
    {
      label: "Website",
      icon: <Globe className="w-4 h-4 text-primary" />,
      url: hotel.website,
      bg: "bg-white/80 text-gray-800 border border-gray-100/50 hover:bg-gray-50",
    },
    {
      label: "Instagram",
      icon: <InstagramIcon className="w-4.5 h-4.5 text-[#E1306C]" />,
      url: hotel.instagram,
      bg: "bg-white/80 text-gray-800 border border-gray-100/50 hover:bg-gray-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 240, 
        damping: 22 
      } 
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-3 w-full mt-5 px-1"
    >
      {actions.map((action, idx) => (
        <motion.a
          key={idx}
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.03, 
            y: -2,
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.97 }}
          className={`ripple-btn flex items-center gap-2 px-3 py-2.5 rounded-[16px] shadow-[0_3px_10px_rgba(0,0,0,0.02)] font-sans text-xs font-semibold tracking-wide transition-all ${action.bg}`}
        >
          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5">{action.icon}</span>
          <span className="truncate">{action.label}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}
