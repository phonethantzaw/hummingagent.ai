"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Assess Operations",
    description: "We audit your current workflows, pinpointing inefficiencies and identifying the highest ROI automation opportunities."
  },
  {
    number: "02",
    title: "Design AI Workforce",
    description: "We architect custom models and workflow logic trained exclusively on your business data and operating procedures."
  },
  {
    number: "03",
    title: "Deploy Automations",
    description: "We integrate the AI directly into your existing tools (CRM, Slack, Email) for seamless, immediate execution."
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Our systems learn and adapt. We continuously refine the agents to handle more complex edge cases over time."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative bg-surface-1/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            A streamlined process to transform your business from manual labor to autonomous intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[28px] left-[70px] right-[-30px] h-[1px] bg-border-subtle" />
              )}
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-surface-2 border border-border-subtle flex items-center justify-center text-xl font-bold text-accent-indigo font-mono shadow-[0_0_20px_rgba(99,91,255,0.1)]">
                  {step.number}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
