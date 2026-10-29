import { motion } from 'motion/react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenEnquiry?: (service?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      {/* Background Image with Ambient Scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={COMPANY_INFO.heroImage}
          alt="MMR Motors Ltd automotive workshop"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />
        {/* Ambient red lighting glow */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-red-600/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            {/* Logo & Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <img
                src={COMPANY_INFO.logo}
                alt="MMR MOTORS LTD"
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-2xl"
              />
              <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="text-neutral-300 font-medium">Croydon, London</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display"
              style={{ textWrap: 'balance' }}
            >
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-400">
                Vehicle Care
              </span>
            </motion.h1>

            {/* Concise Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-neutral-300 max-w-xl leading-relaxed"
            >
              Vehicle maintenance, repair services and used car sales from MMR MOTORS LTD in Croydon.
            </motion.p>

            {/* Mobile-Friendly Quick CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-sm shadow-lg shadow-red-950/60"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 border border-neutral-700/80 rounded-sm"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Compact Quick Contact Card for Mobile & Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="bg-neutral-900/95 border border-neutral-800 p-5 sm:p-6 rounded-sm shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
                  Quick Contact
                </span>
                <span className="text-xs text-neutral-400">Croydon, CR0 2EZ</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-800 hover:border-red-600/50 rounded-sm group transition-colors min-h-[48px]"
                >
                  <div className="p-2 bg-red-600 text-white rounded-xs shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Call</span>
                    <span className="text-xs font-semibold text-white group-hover:text-red-400 tabular-nums">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-800 hover:border-red-600/50 rounded-sm group transition-colors min-h-[48px]"
                >
                  <div className="p-2 bg-neutral-800 text-red-400 rounded-xs shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Email</span>
                    <span className="text-xs font-medium text-white group-hover:text-red-400 truncate block">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {onOpenEnquiry && (
                <button
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors text-center"
                >
                  Online Enquiry Form
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
