"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    company: "Immerse Forge",
    industry: "Manufacturing",
    summary: "Automated end-to-end supply chain reporting and vendor communications.",
    result: "40% time saved",
    icon: <Clock className="w-5 h-5 text-accent-indigo" />,
    image: "/images/immerse-forge.png"
  },
  {
    company: "Super Park",
    industry: "Entertainment",
    summary: "Deployed custom AI agents to handle 80% of tier-1 customer support tickets.",
    result: "24/7 AI support",
    icon: <TrendingUp className="w-5 h-5 text-accent-cyan" />,
    image: "/images/super-park-sign.jpg"
  },
  {
    company: "Private GPT",
    industry: "Financial Services",
    summary: "Built a fully air-gapped internal knowledge base trained on confidential documents.",
    result: "100% data privacy",
    icon: <ShieldCheck className="w-5 h-5 text-accent-emerald" />,
    image: "/images/private-gpt-hero.jpg"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Real Results from <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Real Operations</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <button className="text-sm font-semibold text-white px-6 py-3 rounded-full bg-surface-2 border border-border-subtle hover:bg-surface-1 transition-colors">
              View All Case Studies
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group glass rounded-[24px] overflow-hidden border border-border-subtle hover:border-accent-indigo/30 transition-colors flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 w-full relative overflow-hidden flex items-center justify-center border-b border-border-subtle bg-surface-2">
                 <Image 
                   src={study.image} 
                   alt={`${study.company} case study`} 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">{study.industry}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{study.company}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1">
                  {study.summary}
                </p>
                
                <div className="pt-6 border-t border-border-subtle flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    {study.icon}
                    <span className="text-sm font-bold text-white">{study.result}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
