"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Database, FileText, Bot, Webhook } from "lucide-react";

export default function InteractiveWorkflow() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Automate Any Workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            From busywork to autonomous operations. Connect your existing tools and let custom AI agents orchestrate the data intelligently.
          </motion.p>
        </div>

        {/* Workflow Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative max-w-5xl mx-auto glass rounded-[32px] p-8 md:p-16 border border-border-subtle overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            {/* Input Node */}
            <div className="flex flex-col gap-4 w-full md:w-1/4 relative">
              <div className="bg-surface-1 border border-border-subtle rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:border-accent-cyan transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Incoming Email</div>
                  <div className="text-xs text-text-secondary">Support Inbox</div>
                </div>
              </div>
              <div className="bg-surface-1 border border-border-subtle rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:border-accent-cyan transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                  <Webhook className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">New Lead webhook</div>
                  <div className="text-xs text-text-secondary">Marketing Site</div>
                </div>
              </div>
            </div>

            {/* Connecting Lines Desktop */}
            <div className="hidden md:flex flex-col items-center justify-center flex-1 relative h-32">
              <div className="w-full h-[2px] bg-border-subtle relative">
                <motion.div 
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-indigo rounded-full shadow-[0_0_15px_rgba(99,91,255,0.8)]"
                />
              </div>
              <ArrowRight className="absolute right-0 text-border-subtle bg-surface-1 rounded-full w-6 h-6 p-1 border border-border-subtle" />
            </div>

            {/* Connecting Lines Mobile */}
            <div className="md:hidden flex justify-center w-full h-16 relative">
              <div className="h-full w-[2px] bg-border-subtle relative">
                <motion.div 
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-indigo rounded-full shadow-[0_0_15px_rgba(99,91,255,0.8)]"
                />
              </div>
            </div>

            {/* Central Processing Node */}
            <div className="w-full md:w-[35%] relative z-10">
              <div className="absolute inset-0 bg-accent-indigo/20 blur-3xl rounded-full" />
              <div className="bg-surface-2 border-2 border-accent-indigo rounded-3xl p-6 shadow-2xl relative">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-surface-1 rounded-2xl flex items-center justify-center border border-border-subtle shadow-inner">
                    <Bot className="w-8 h-8 text-accent-indigo" />
                  </div>
                </div>
                <h3 className="text-center font-bold text-white text-lg mb-2">Orchestrator Agent</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs bg-surface-1 px-3 py-2 rounded-lg border border-border-subtle text-text-secondary">
                    <span>1. Analyze context</span>
                    <span className="text-accent-emerald">Done</span>
                  </div>
                  <div className="flex items-center justify-between text-xs bg-surface-1 px-3 py-2 rounded-lg border border-border-subtle text-text-secondary">
                    <span>2. Extract entities</span>
                    <span className="text-accent-emerald">Done</span>
                  </div>
                  <div className="flex items-center justify-between text-xs bg-surface-1 px-3 py-2 rounded-lg border-border-subtle text-text-secondary ring-1 ring-accent-indigo/50">
                    <span>3. Route to specific workflow</span>
                    <span className="w-3 h-3 border-2 border-accent-indigo border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Lines Desktop */}
            <div className="hidden md:flex flex-col items-center justify-center flex-1 relative h-32">
              <div className="w-full h-[2px] bg-border-subtle relative">
                <motion.div 
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-emerald rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                />
              </div>
              <ArrowRight className="absolute right-0 text-border-subtle bg-surface-1 rounded-full w-6 h-6 p-1 border border-border-subtle" />
            </div>

            {/* Connecting Lines Mobile */}
            <div className="md:hidden flex justify-center w-full h-16 relative">
              <div className="h-full w-[2px] bg-border-subtle relative">
                <motion.div 
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-emerald rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                />
              </div>
            </div>

            {/* Output Node */}
            <div className="flex flex-col gap-4 w-full md:w-1/4 relative">
              <div className="bg-surface-1 border border-border-subtle rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:border-accent-emerald transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent-emerald" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Update CRM & Slack</div>
                  <div className="text-xs text-text-secondary">Action Executed</div>
                </div>
              </div>
              <div className="bg-surface-1 border border-border-subtle rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:border-accent-emerald transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-emerald" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Draft Proposal</div>
                  <div className="text-xs text-text-secondary">Document Generated</div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
