import { motion } from 'motion/react';
import { Phone, ArrowRight, MapPin, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenEnquiry?: (service?: string) => void;
  onNavigate?: (pageId: string) => void;
}

export default function Hero({ onOpenEnquiry, onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Ambient Scrim & Animated Automotive Glow */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="/src/assets/images/hero_workshop_mechanic_1793255218307.jpg"
          alt="MMR Motors Ltd automotive service workshop"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dynamic ambient red glow reflecting automotive workshop lighting */}
        <motion.div
          animate={{
            opacity: [0.15, 0.28, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[140px] pointer-events-none"
        />
        {/* Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Location & category unboxed breadcrumb */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-neutral-400"
            >
              <span className="text-red-500 font-semibold uppercase tracking-wider">MMR MOTORS LTD</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                Croydon, Greater London
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>United Kingdom</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display"
              style={{ textWrap: 'balance' }}
            >
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-400">
                Vehicle Care
              </span>
            </motion.h1>

            {/* Supporting Text matching SRS */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal"
            >
              {COMPANY_INFO.subheading}
            </motion.p>

            {/* CTAs with hover physics and micro-shimmer */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={COMPANY_INFO.phoneHref}
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-sm shadow-xl shadow-red-950/60 whitespace-nowrap overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                <span>Call Us Now</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('services');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-sm backdrop-blur-sm whitespace-nowrap transition-colors"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {onOpenEnquiry && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors whitespace-nowrap"
                >
                  <span>Quick Enquiry</span>
                </motion.button>
              )}
            </motion.div>

            {/* Feature highlights without fake guarantees */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300"
            >
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Vehicle Maintenance & Servicing</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Mechanical Repair Enquiries</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Used Car Stock Guidance</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Contact & Info Card with hover lift */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700/80 p-6 sm:p-7 rounded-sm shadow-2xl backdrop-blur-md relative overflow-hidden group"
            >
              <div className="w-1 absolute top-0 left-0 bottom-0 bg-red-600 group-hover:w-1.5 transition-all duration-300" />
              <div className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-red-500 font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">Need Immediate Assistance?</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Call our Croydon workshop team directly or email your vehicle enquiry.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href={COMPANY_INFO.phoneHref}
                    className="flex items-center justify-between p-3.5 bg-neutral-950 border border-neutral-800 hover:border-red-600/50 rounded-sm transition-colors group/item"
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">Telephone</span>
                      <span className="text-base font-semibold text-white group-hover/item:text-red-400 transition-colors tabular-nums">
                        {COMPANY_INFO.phone}
                      </span>
                    </div>
                    <span className="p-2 bg-red-600 text-white rounded-xs group-hover/item:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href={COMPANY_INFO.emailHref}
                    className="flex items-center justify-between p-3.5 bg-neutral-950 border border-neutral-800 hover:border-red-600/50 rounded-sm transition-colors group/item"
                  >
                    <div className="truncate pr-2">
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">Email Address</span>
                      <span className="text-xs font-medium text-neutral-200 group-hover/item:text-red-400 transition-colors truncate block">
                        {COMPANY_INFO.email}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover/item:text-red-400 group-hover/item:translate-x-1 transition-all shrink-0" />
                  </motion.a>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 text-xs text-neutral-400 space-y-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span>Flat 9 Solar Court, 119 Sydenham Road, Croydon, CR0 2EZ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
