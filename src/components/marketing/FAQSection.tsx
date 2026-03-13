"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does AI automation cost?",
    answer: "Every engagement is custom. We assess your operations and build a project with a guaranteed timeframe and fixed scope. Most clients see a full ROI within the first 3-6 months."
  },
  {
    question: "How long does implementation take?",
    answer: "Initial prototypes can be deployed in as little as 14 days. Full enterprise-grade custom workflows usually take 3 to 8 weeks depending on the complexity of your existing system architecture."
  },
  {
    question: "Will AI replace my employees?",
    answer: "No, AI acts as a force multiplier. It takes over the repetitive, high-volume data tasks so your human team can focus on strategy, relationships, and complex problem-solving."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use private, sandboxed environments. Your data is not used to train public models, and we can deploy directly to your own AWS, GCP, or Azure infrastructure for complete control."
  },
  {
    question: "What industries do you serve?",
    answer: "We primarily work with agencies, manufacturers, SaaS companies, and B2B services that have high-volume operational bottlenecks and disjointed tool stacks."
  },
  {
    question: "How is this different from ChatGPT?",
    answer: "ChatGPT is a generic assistant. HummingAgent builds interconnected autonomous workflows that have read/write access to your specific databases, CRMs, and APIs to execute concrete actions."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      <Accordion.Root type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <Accordion.Item 
            key={i} 
            value={`item-${i}`}
            className="glass border border-border-subtle overflow-hidden rounded-[16px] data-[state=open]:border-accent-indigo transition-colors"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 text-left font-semibold text-white hover:bg-surface-1/50 transition-all [&[data-state=open]>svg]:rotate-180">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-text-secondary transition-transform duration-300" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-text-secondary text-sm leading-relaxed px-6 pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      
      <style jsx global>{`
        @keyframes accordion-down {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes accordion-up {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
        .animate-accordion-down {
          animation: accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1);
        }
        .animate-accordion-up {
          animation: accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </section>
  );
}
