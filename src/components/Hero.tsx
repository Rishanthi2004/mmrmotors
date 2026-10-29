import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import HeroVehicleEntrance from './HeroVehicleEntrance';

interface HeroProps {
  onOpenEnquiry?: (service?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  // Flag tracking whether the vehicle entrance and parts diagnostic sequence has completed
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setAnimationCompleted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-16 bg-white overflow-hidden border-b border-neutral-200/80"
    >
      {/* Crisp White Automotive Background with Subtle Radial Grid & Ambient Orange Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        {/* Ambient soft warm orange glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Copy, Badges & CTAs (Reveals smoothly after vehicle stops and diagnostic animation completes) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <AnimatePresence>
              {animationCompleted ? (
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Brand Logo & Location Metadata */}
                  <div className="flex items-center gap-3">
                    <img
                      src={COMPANY_INFO.logo}
                      alt="MMR MOTORS LTD"
                      className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
                    />
                    <div className="text-xs text-neutral-600 flex items-center gap-1.5 bg-neutral-100/90 px-3 py-1 rounded-full border border-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span className="font-semibold text-neutral-800">Croydon, Greater London</span>
                    </div>
                  </div>

                  {/* Main Display Headline */}
                  <h1
                    className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-neutral-900 leading-[1.1] font-display"
                    style={{ textWrap: 'balance' }}
                  >
                    Your Trusted Partner for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                      Vehicle Care
                    </span>
                  </h1>

                  {/* Concise Supporting Description */}
                  <p className="text-sm sm:text-base text-neutral-600 max-w-xl leading-relaxed font-normal">
                    Vehicle maintenance, repair services and used car sales from MMR MOTORS LTD in Croydon.
                  </p>

                  {/* Mobile-Friendly CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-lg shadow-orange-600/30 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>

                    <a
                      href="#services"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-semibold text-neutral-800 hover:text-orange-600 bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-orange-400 rounded-sm shadow-xs transition-colors"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-4 h-4 text-orange-600" />
                    </a>
                  </div>

                  {/* Quick Contact & Info Card */}
                  <div className="pt-2">
                    <div className="bg-neutral-50 border border-neutral-200 p-4 sm:p-5 rounded-sm shadow-sm space-y-3">
                      <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
                        <span className="text-xs uppercase tracking-wider text-orange-600 font-bold">
                          Direct Contact
                        </span>
                        <span className="text-xs text-neutral-500 font-medium">Flat 9 Solar Court, CR0 2EZ</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a
                          href={COMPANY_INFO.phoneHref}
                          className="flex items-center gap-3 p-2.5 bg-white border border-neutral-200 hover:border-orange-500 rounded-sm group transition-colors"
                        >
                          <div className="p-2 bg-orange-600 text-white rounded-xs shrink-0 group-hover:scale-105 transition-transform">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div className="truncate">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">Call Workshop</span>
                            <span className="text-xs font-bold text-neutral-900 group-hover:text-orange-600 tabular-nums">
                              {COMPANY_INFO.phone}
                            </span>
                          </div>
                        </a>

                        <a
                          href={COMPANY_INFO.emailHref}
                          className="flex items-center gap-3 p-2.5 bg-white border border-neutral-200 hover:border-orange-400 rounded-sm group transition-colors"
                        >
                          <div className="p-2 bg-neutral-100 text-neutral-700 rounded-xs shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                          <div className="truncate">
                            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">Email Us</span>
                            <span className="text-xs font-medium text-neutral-800 group-hover:text-orange-600 truncate block">
                              {COMPANY_INFO.email}
                            </span>
                          </div>
                        </a>
                      </div>

                      {onOpenEnquiry && (
                        <button
                          type="button"
                          onClick={() => onOpenEnquiry()}
                          className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-orange-600 active:bg-orange-700 rounded-sm transition-colors text-center"
                        >
                          Online Customer Enquiry Form
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Subtle placeholder spacer during the 4-second vehicle entrance and diagnostic sequence */
                <div className="hidden lg:block min-h-[380px] p-8 border border-dashed border-orange-200/80 rounded-sm bg-orange-50/20 text-center flex flex-col items-center justify-center space-y-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                    MMR MOTORS LTD · Croydon
                  </p>
                  <p className="text-xs text-neutral-500">
                    Vehicle Diagnostic Scan &amp; Entrance Sequence in Progress...
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Premium Vehicle Entrance Animation Rig */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
            <HeroVehicleEntrance onAnimationComplete={handleAnimationComplete} />
          </div>
        </div>
      </div>
    </section>
  );
}
