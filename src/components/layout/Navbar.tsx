"use client";

import Link from 'next/link';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 p-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-surface-2 p-1.5 rounded-lg border border-border-subtle group-hover:border-accent-indigo transition-colors">
            <Bot className="w-5 h-5 text-accent-cyan" />
          </div>
          <span className="font-semibold text-lg tracking-tight">HummingAgent.ai</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <Link href="#solutions" className="hover:text-text-primary transition-colors">Solutions</Link>
          <Link href="#platform" className="hover:text-text-primary transition-colors">Platform</Link>
          <Link href="#how-it-works" className="hover:text-text-primary transition-colors">How It Works</Link>
          <Link href="#case-studies" className="hover:text-text-primary transition-colors">Case Studies</Link>
          <Link href="#faq" className="hover:text-text-primary transition-colors">FAQ</Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="#demo" 
            className="hidden sm:inline-flex bg-text-primary text-background px-5 py-2.5 rounded-[14px] text-sm font-semibold hover:bg-opacity-90 transition-all font-sans"
          >
            Book Demo
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass rounded-[24px] p-6 border border-border-subtle md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-6 text-base font-medium text-text-secondary">
              <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text-primary transition-colors">Solutions</Link>
              <Link href="#platform" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text-primary transition-colors">Platform</Link>
              <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text-primary transition-colors">How It Works</Link>
              <Link href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text-primary transition-colors">Case Studies</Link>
              <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-text-primary transition-colors">FAQ</Link>
              <Link 
                href="#demo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center bg-text-primary text-background px-5 py-3 rounded-[14px] text-sm font-semibold hover:bg-opacity-90 transition-all font-sans w-full"
              >
                Book Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
