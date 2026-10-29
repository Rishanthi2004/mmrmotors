import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/company';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section as user scrolls through the page
      const sections = ['#home', '#about', '#services', '#used-cars', '#why-choose-us', '#contact'];
      for (const section of sections) {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveHash(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-md shadow-neutral-950/5 py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-neutral-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Logo Only */}
          <a
            href="#home"
            className="flex items-center whitespace-nowrap shrink-0 group py-0.5"
            aria-label="MMR MOTORS LTD - Home"
          >
            <motion.img
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.2 }}
              src={COMPANY_INFO.logo}
              alt="MMR MOTORS LTD"
              className="h-11 sm:h-13 w-auto object-contain drop-shadow-md"
            />
          </a>

          {/* Zone 2: Navigation links with active indicator */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`hover:text-orange-600 transition-colors duration-200 whitespace-nowrap shrink-0 py-1 relative ${
                    isActive ? 'text-orange-600 font-semibold' : 'text-neutral-600'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={COMPANY_INFO.phoneHref}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 transition-all duration-150 rounded-sm shadow-md shadow-orange-600/25 whitespace-nowrap shrink-0 overflow-hidden group"
              aria-label={`Call MMR Motors Ltd at ${COMPANY_INFO.phone}`}
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-200" />
              <span>Call Us</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button with 44px+ touch targets */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.a
              whileTap={{ scale: 0.92 }}
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-sm"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 border-b border-neutral-200 backdrop-blur-xl px-4 pt-3 pb-6 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between px-3.5 py-3 text-base font-medium text-neutral-800 hover:text-orange-600 hover:bg-orange-50/60 rounded-sm transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </motion.a>
              ))}
              <div className="pt-4 border-t border-neutral-200 mt-2 space-y-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-center font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-md shadow-orange-600/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {COMPANY_INFO.phone}</span>
                </a>
                <div className="text-center pt-1 text-xs text-neutral-500">
                  <span>Croydon, London · Sydenham Road</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
