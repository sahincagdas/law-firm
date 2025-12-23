
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Anasayfa', path: '/' },
    { label: 'Hizmetlerimiz', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'İletişim', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg text-white transition-colors duration-300 ${scrolled ? 'bg-primary' : 'bg-primary shadow-lg'}`}>
                <span className="material-symbols-outlined text-2xl">balance</span>
              </div>
              <div className="flex flex-col">
                <h1 className={`font-serif font-bold leading-tight tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'}`}>Dilan Köremezli</h1>
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold leading-none">Avukatlık & Danışmanlık</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${isActive(item.path)
                    ? 'text-primary font-bold'
                    : 'text-secondary/80'
                    }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:02125551234" className={`font-bold text-sm transition-colors hover:text-accent ${scrolled ? 'text-primary' : 'text-primary'}`}>
                0 (212) 555 12 34
              </a>
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-burgundy hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Danışmanlık Al
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-primary relative z-50 bg-white/80 rounded-lg backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl transition-transform duration-300" style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl md:hidden pt-32 px-6"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`block text-2xl font-serif font-medium ${isActive(item.path) ? 'text-accent' : 'text-primary'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 border-t border-gray-100 pt-8 flex flex-col gap-6"
              >
                <a href="tel:02125551234" className="text-xl font-bold text-primary">0 (212) 555 12 34</a>
                <Link
                  href="/contact"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Danışmanlık Al
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
