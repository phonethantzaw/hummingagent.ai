"use client";

import { motion } from "framer-motion";
import { Shield, Server, Lock, Fingerprint } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-1">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 mb-6">
              <Shield className="w-6 h-6 text-accent-emerald" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Private, Secure, and Built Around Your Business
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We don't use generic public AI models that leak your proprietary data. Your systems are entirely sandboxed, deployed securely, and configured for enterprise readiness. You own the workflow and the data.
            </p>

            <ul className="space-y-4">
              {[
                "Private infrastructure options (AWS, GCP, Azure, or on-prem)",
                "Zero public data exposure or model training on your data",
                "Built-in compliance and enterprise-grade security",
                "Custom systems and IP that you own outright"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1">
                     <Fingerprint className="w-5 h-5 text-accent-emerald" />
                  </div>
                  <span className="text-text-primary text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Visual / Abstract Infra */}
        <div className="lg:w-1/2 w-full h-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative glass rounded-[32px] p-8 border border-border-subtle shadow-2xl h-[450px] flex items-center justify-center overflow-hidden"
          >
            {/* Center Node */}
            <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-surface-2 rounded-full border-[4px] border-surface-1 shadow-[0_0_50px_rgba(52,211,153,0.3)] flex items-center justify-center">
              <Lock className="w-12 h-12 text-accent-emerald" />
            </div>

            {/* Orbit rings */}
            <div className="absolute z-10 w-[200px] h-[200px] rounded-full border border-border-subtle" />
            <div className="absolute z-10 w-[300px] h-[300px] rounded-full border border-border-subtle opacity-50" />
            <div className="absolute z-10 w-[400px] h-[400px] rounded-full border border-border-subtle opacity-25 lg:opacity-100" />

            {/* Orbiting nodes */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute z-20 w-[300px] h-[300px]"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface-1 border border-border-subtle flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <Server className="w-4 h-4 text-white" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute z-20 w-[400px] h-[400px]"
            >
               <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-1 border border-border-subtle flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </motion.div>

            {/* Glowing background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,transparent_60%)]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
