"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Bot, Activity, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-indigo/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-indigo/30 bg-accent-indigo/10 backdrop-blur-sm text-sm font-medium text-accent-indigo">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-indigo opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-indigo"></span>
                </span>
                TMC 2025 AI Product of the Year
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Build Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">AI Workforce</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants} 
              className="text-xl text-text-secondary mb-10 max-w-xl leading-relaxed"
            >
              Deploy custom AI employees trained on your business data. Automate repetitive workflows, connect disconnected systems, and scale operations in weeks—not quarters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
              <Link 
                href="#strategy" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-[14px] font-semibold text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#platform" 
                className="w-full sm:w-auto px-8 py-4 bg-surface-2 border border-border-subtle text-white rounded-[14px] font-semibold text-base hover:bg-surface-1 transition-colors flex items-center justify-center"
              >
                See Platform Overview
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full border-t border-border-subtle pt-8">
              {[
                { value: "$180K+", label: "Avg. Annual Savings" },
                { value: "14 Days", label: "To First Deployment" },
                { value: "24/7", label: "AI Operations" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-sm text-text-secondary font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
            {/* Abstract AI interface Mockup */}
            <div className="relative w-full overflow-x-hidden sm:overflow-visible sm:max-w-none sm:w-[500px] h-[500px] glass rounded-[24px] p-6 shadow-2xl flex flex-col gap-6 border border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,15,0.8)]">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-indigo/20 flex items-center justify-center border border-accent-indigo/30">
                    <Bot className="w-5 h-5 text-accent-indigo" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Orchestration System</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                      <span className="text-xs text-text-secondary">3 Agents Online</span>
                    </div>
                  </div>
                </div>
                <Activity className="w-5 h-5 text-text-secondary" />
              </div>

              {/* Workflow Nodes */}
              <div className="flex-1 flex flex-col gap-4 relative">
                {/* Connecting Lines */}
                <div className="absolute left-[27px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-border-subtle to-transparent z-0"></div>

                {[
                  {
                    title: "Incoming Lead",
                    desc: "Data extracted from Webhook",
                    status: "Completed",
                    color: "text-accent-emerald",
                    icon: <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                  },
                  {
                    title: "Sales Agent",
                    desc: "Qualifying & enriching data",
                    status: "Processing...",
                    color: "text-accent-cyan",
                    icon: <span className="w-4 h-4 rounded-full border-2 border-accent-cyan border-t-transparent animate-spin" />
                  },
                  {
                    title: "CRM Update",
                    desc: "Awaiting enrichment data",
                    status: "Queued",
                    color: "text-text-secondary",
                    icon: <div className="w-4 h-4 rounded-full bg-surface-2 border border-border-subtle" />
                  }
                ].map((node, i) => (
                  <motion.div 
                    key={i}
                    custom={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                    className="relative z-10 flex gap-4 items-start"
                  >
                    <div className="w-14 h-14 rounded-full bg-surface-1 border border-border-subtle flex items-center justify-center shrink-0 shadow-lg">
                      {node.icon}
                    </div>
                    <div className="flex-1 border border-border-subtle bg-surface-1 rounded-xl p-4 shadow-lg backdrop-blur-md">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-semibold text-white">{node.title}</span>
                        <span className={`text-[10px] font-medium uppercase tracking-wider ${node.color}`}>{node.status}</span>
                      </div>
                      <p className="text-xs text-text-secondary">{node.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(99,91,255,0.15)] to-transparent pointer-events-none blur-xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
