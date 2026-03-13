"use client";

import { motion } from "framer-motion";

const companies = [
  "GroundFloor Media",
  "The Art of Construction",
  "Immerse Forge",
  "Super Park",
  "K3 Technology",
  "Air Fresh Marketing",
  "JVRC",
  "Loc8",
  "LightStrike AI",
];

export default function TrustMarquee() {
  return (
    <section className="py-20 border-t border-border-subtle bg-surface-1/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">
          Trusted by growing businesses and enterprise teams
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-edges">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-16 pr-16"
        >
          {/* Double the array for seamless looping */}
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 min-w-max"
            >
              <span className="text-xl font-bold font-sans text-white tracking-tight">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
