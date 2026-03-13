"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, Layers, TimerOff } from "lucide-react";

const problems = [
  {
    title: "SaaS Waste",
    metric: "$2K+/mo",
    description: "Paid subscriptions for unused, generic, or overlapping tools that don't talk to each other.",
    icon: <DollarSign className="w-6 h-6 text-accent-cyan" />,
    gradient: "from-accent-cyan/20"
  },
  {
    title: "Repetitive Labor",
    metric: "$60–80K/yr",
    description: "Average cost of manual data entry, report generation, and basic customer support.",
    icon: <Clock className="w-6 h-6 text-accent-indigo" />,
    gradient: "from-accent-indigo/20"
  },
  {
    title: "Disconnected Systems",
    metric: "10+ Apps",
    description: "Data silos preventing automations, forcing manual copy-pasting across CRMs and sheets.",
    icon: <Layers className="w-6 h-6 text-accent-emerald" />,
    gradient: "from-accent-emerald/20"
  },
  {
    title: "Limited Operating Hours",
    metric: "5pm Stop",
    description: "Your business completely stops when staff leaves. Lead response times plummet.",
    icon: <TimerOff className="w-6 h-6 text-white" />,
    gradient: "from-white/20"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Your Business Is Bleeding <br className="hidden sm:block" />
            <span className="text-text-secondary">Time and Money</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Disconnected tools, repetitive manual workflows, and limited team capacity create operational drag. Generic AI tools aren't enough to solve real business bottlenecks.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass p-8 rounded-[24px] overflow-hidden hover:bg-surface-1 transition-colors duration-500"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${problem.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl rounded-full z-0`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border-subtle flex items-center justify-center">
                    {problem.icon}
                  </div>
                  <div className="px-3 py-1 bg-surface-2 border border-border-subtle rounded-full text-xs font-bold font-mono text-white">
                    {problem.metric}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
