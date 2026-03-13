"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cog, Building2, Lock, ArrowRight, Zap, Target } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    title: "Customer Support",
    description: "Resolve tickets and answer inquiries automatically 24/7.",
    metric: "66% cost reduction",
    icon: <MessageSquare className="w-6 h-6 text-accent-indigo" />
  },
  {
    title: "Process Automation",
    description: "Connect APIs and sync data across platforms without human input.",
    metric: "40 hours saved weekly",
    icon: <Cog className="w-6 h-6 text-accent-cyan" />
  },
  {
    title: "Enterprise AI Solutions",
    description: "Custom models trained on vast amounts of proprietary internal data.",
    metric: "100% custom built",
    icon: <Building2 className="w-6 h-6 text-accent-emerald" />
  },
  {
    title: "Private ChatGPT",
    description: "Secure, local models where your data never leaves the premises.",
    metric: "0% public data exposure",
    icon: <Lock className="w-6 h-6 text-white" />
  },
  {
    title: "Sales Engineering",
    description: "AI that qualifies leads, books meetings, and drafts proposals.",
    metric: "3x more leads",
    icon: <Target className="w-6 h-6 text-accent-cyan" />
  },
  {
    title: "AI Applications",
    description: "End-to-end web and mobile apps powered by intelligence at their core.",
    metric: "14 days to deploy",
    icon: <Zap className="w-6 h-6 text-accent-indigo" />
  }
];

export default function PlatformCapabilities() {
  return (
    <section id="platform" className="py-24 bg-surface-1/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              What the Platform Can Automate
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#capabilities" className="inline-flex items-center gap-2 text-accent-indigo hover:text-white transition-colors font-medium">
              View all capabilities <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-8 rounded-[24px] hover:bg-surface-1 transition-all duration-300 cursor-pointer border border-border-subtle hover:border-accent-indigo/30 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-surface-2 rounded-xl border border-border-subtle group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{cap.title}</h3>
              <p className="text-text-secondary text-sm mb-6 relative z-10 h-10">{cap.description}</p>
              
              <div className="inline-block px-3 py-1 bg-surface-2 border border-border-subtle rounded-full text-xs font-medium text-white relative z-10">
                {cap.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
