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
            className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded-full shadow-xl backdrop-blur-md transition-colors"
            aria-label="Open quick enquiry modal"
          >
            <MessageSquareQuote className="w-4 h-4 text-orange-600" />
            <span>Enquire</span>
          </motion.button>

          {/* Quick Call Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            href={COMPANY_INFO.phoneHref}
            className="relative flex items-center justify-center p-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-full shadow-xl shadow-orange-600/40 group transition-colors"
            aria-label="Call MMR Motors directly"
          >
            {/* Ambient pulse ring */}
            <span className="absolute -inset-1 rounded-full bg-orange-500/40 animate-ping pointer-events-none" />
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
          </motion.a>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-orange-600 rounded-full shadow-lg transition-colors"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
