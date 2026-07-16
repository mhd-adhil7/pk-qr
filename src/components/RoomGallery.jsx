"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
  { src: "/room1.jpg", title: "Executive AC Suite", price: "₹2,500" },
  { src: "/room2.jpg", title: "Premium Double AC", price: "₹2,200" },
  { src: "/room3.jpg", title: "Deluxe Family Room", price: "₹3,000" },
  { src: "/room4.jpg", title: "Classic AC Room", price: "₹1,800" },
  { src: "/room5.jpg", title: "Standard Non-AC", price: "₹1,200" },
];

export default function RoomGallery() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId;
    let scrollSpeed = 0.45; // Pixels to scroll per frame for premium smooth motion

    const scroll = () => {
      if (!isHovered) {
        el.scrollLeft += scrollSpeed;
        
        // Loop back to the start if we reach the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="w-full mt-7"
    >
      <div className="flex justify-between items-center mb-3 px-1">
        <h3 className="font-serif text-sm font-bold text-gray-800 tracking-wide">
          Room Gallery
        </h3>
        <span className="text-[9px] text-primary font-sans font-bold uppercase tracking-widest bg-primary/5 px-2.5 py-0.5 rounded-full">
          Swipe
        </span>
      </div>

      {/* Horizontal scrollable gallery list */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[240px] snap-start group relative rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.03)] bg-white border border-gray-100/50"
          >
            {/* Image Container with zoom */}
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={room.src}
                alt={room.title}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
              
              {/* Price badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-sm text-[9px] font-extrabold text-primary font-sans border border-white/50">
                {room.price}<span className="text-[7.5px] text-gray-400 font-medium">/night</span>
              </div>
            </div>

            {/* Info details */}
            <div className="p-3">
              <h4 className="font-sans text-xs font-bold text-gray-800 leading-tight">
                {room.title}
              </h4>
              <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Available now for booking
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
