"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ConsultationCTA() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Glow Effect Top Left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-indigo/30 rounded-full blur-[120px] pointer-events-none" />
      {/* Glow Effect Bottom Right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[32px] p-8 md:p-16 border border-border-subtle text-center relative overflow-hidden"
        >
          {/* Subtle mesh background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            See Where AI Can Save You <br className="hidden sm:block" />
            Time and Money
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto relative z-10">
            Get a free AI Automation Assessment for your business. We'll map out your current bottlenecks and build a concrete ROI roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 relative z-10">
            {[
              "30-Minute Strategy Call",
              "Automation Roadmap",
              "ROI Estimate"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent-indigo" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <Link 
              href="#book"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-[14px] font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <CalendarDays className="w-5 h-5" />
              Schedule Free Consultation
            </Link>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
