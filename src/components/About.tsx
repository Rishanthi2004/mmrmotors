import { motion } from 'motion/react';
import { Wrench, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-orange-50/30 border-t border-b border-orange-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Image Block */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="overflow-hidden rounded-sm border border-neutral-200 shadow-lg max-h-72 sm:max-h-88">
              <img
                src="/images/maintenance.jpg"
                alt="MMR Motors Ltd vehicle inspection"
                className="w-full h-56 sm:h-80 object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>

          {/* Concise Introduction Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                About The Company
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
                MMR MOTORS LTD
              </h2>
            </div>

            {/* Exact concise SRS text */}
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              MMR MOTORS LTD provides vehicle maintenance and repair services alongside used car sales.
              We aim to help customers find practical automotive solutions for their vehicle needs.
            </p>

            {/* 2 Compact highlights in clean white cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-3 p-3 bg-white border border-neutral-200/90 rounded-sm shadow-xs">
                <div className="p-1.5 bg-orange-100 text-orange-600 rounded-xs shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-neutral-900">Practical Solutions</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white border border-neutral-200/90 rounded-sm shadow-xs">
                <div className="p-1.5 bg-orange-100 text-orange-600 rounded-xs shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-neutral-900">Direct Communication</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-md shadow-orange-600/25 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-medium text-neutral-800 hover:text-orange-600 bg-white border border-neutral-300 hover:border-orange-400 rounded-sm shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>Our Location</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
