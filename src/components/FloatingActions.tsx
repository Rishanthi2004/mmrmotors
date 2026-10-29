import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquareQuote, ChevronUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export default function FloatingActions({ onOpenEnquiry }: FloatingActionsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5"
        >
          {/* Quick Enquiry Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onOpenEnquiry}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-neutral-900/95 hover:bg-neutral-800 border border-neutral-700/80 text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-2xl backdrop-blur-md"
            aria-label="Open quick enquiry modal"
          >
            <MessageSquareQuote className="w-4 h-4 text-red-500" />
            <span>Enquire</span>
          </motion.button>

          {/* Quick Call Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            href={COMPANY_INFO.phoneHref}
            className="relative flex items-center justify-center p-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl shadow-red-950/70 group"
            aria-label="Call MMR Motors directly"
          >
            {/* Ambient pulse ring */}
            <span className="absolute -inset-1 rounded-full bg-red-600/30 animate-ping pointer-events-none" />
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
          </motion.a>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white rounded-full shadow-xl backdrop-blur-sm"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
