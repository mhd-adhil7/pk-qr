"use client";

import { motion } from "framer-motion";
import { Wifi, Bed, Wind, Clock, Car, Users, Check } from "lucide-react";

const amenitiesList = [
  { label: "Free WiFi", icon: <Wifi className="w-4 h-4 text-white" /> },
  { label: "Premium Rooms", icon: <Bed className="w-4 h-4 text-white" /> },
  { label: "AC & Non AC", icon: <Wind className="w-4 h-4 text-white" /> },
  { label: "24×7 Service", icon: <Clock className="w-4 h-4 text-white" /> },
  { label: "Parking Space", icon: <Car className="w-4 h-4 text-white" /> },
  { label: "Family Friendly", icon: <Users className="w-4 h-4 text-white" /> },
];

export default function Amenities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="glass-card-dark w-full p-5 mt-7 rounded-[24px] text-white relative overflow-hidden"
    >
      {/* Subtle glass background glow */}
      <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      
      <h3 className="font-serif text-sm font-bold tracking-wider text-white mb-4 text-center">
        Amenities & Services
      </h3>

      <div className="grid grid-cols-2 gap-y-4 gap-x-4">
        {amenitiesList.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            {/* Round icon wrapper */}
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/10 text-white relative">
              {amenity.icon}
              {/* Green checkmark badge */}
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center border border-[#0d120f]">
                <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
              </div>
            </div>
            
            <span className="text-[11px] font-sans font-semibold tracking-wide text-white/90">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
