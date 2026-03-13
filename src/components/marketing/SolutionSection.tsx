"use client";

import { motion } from "framer-motion";
import { Brain, Code, Network } from "lucide-react";

const solutions = [
  {
    title: "AI Employees",
    description: "Intelligent agents trained on your proprietary data capable of voice, chat, and task execution.",
    features: ["Trained on business data", "Voice + chat capabilities", "24/7 execution", "Task-specific intelligence"],
    icon: <Brain className="w-8 h-8 text-accent-indigo" />,
    borderColor: "group-hover:border-accent-indigo/50"
  },
  {
    title: "Custom Software",
    description: "Internal tools and interfaces built specifically for how your team already operates.",
    features: ["CRM tools", "Proposal generation", "Invoicing flows", "Internal dashboards", "Workflow interfaces"],
    icon: <Code className="w-8 h-8 text-accent-cyan" />,
    borderColor: "group-hover:border-accent-cyan/50"
  },
  {
    title: "Connected Systems",
    description: "Seamless integrations across your entire tech stack eliminating manual data entry.",
    features: ["Cross-tool integrations", "No manual data re-entry", "One operational layer", "Business rules automation"],
    icon: <Network className="w-8 h-8 text-accent-emerald" />,
    borderColor: "group-hover:border-accent-emerald/50"
  }
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent opacity-50" />
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-border-subtle to-transparent opacity-50" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-border-subtle to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            AI Employees + Custom Software = <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">Automated Operations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            We don't just sell generic chatbots. We build your AI workers and the software systems they operate inside, giving you full control and ownership.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`group relative bg-surface-1 border border-border-subtle rounded-[24px] p-8 hover:bg-surface-2 transition-all duration-500 ${solution.borderColor}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-border-subtle flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-text-secondary mb-8 h-16">{solution.description}</p>
              
              {/* Feature List */}
              <ul className="space-y-4">
                {solution.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-border-subtle mt-1.5 group-hover:bg-text-primary transition-colors" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
