import { motion } from 'motion/react';
import { Wrench, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900/50 border-t border-b border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Visual Showcase Block */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="overflow-hidden rounded-sm border border-neutral-800 group-hover:border-neutral-700 shadow-2xl transition-all duration-300">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  src="/src/assets/images/service_maintenance_1793255217217.jpg"
                  alt="MMR Motors Ltd vehicle inspection and maintenance"
                  className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Business Details Floating Accent Box */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -3 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-neutral-950 border border-neutral-800 p-5 rounded-sm shadow-xl max-w-xs hidden sm:block"
              >
                <div className="flex items-center gap-2 text-red-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Croydon Based</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                  Serving motorists across Croydon and surrounding London areas with honest vehicle care.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text and Introduction Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
                About The Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                MMR MOTORS LTD
              </h2>
            </div>

            {/* Core copy specified in SRS */}
            <div className="prose prose-invert max-w-none text-neutral-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="text-neutral-200 font-normal">
                MMR MOTORS LTD provides vehicle maintenance and repair services alongside used car sales.
                We aim to help customers find practical automotive solutions for their vehicle needs.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Whether you need scheduled routine servicing to keep your car operating safely on UK roads,
                require diagnostics and repair support for mechanical issues, or are looking to explore available
                used car options, our team is committed to straightforward communication and attentive customer support.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3.5 bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-sm transition-all"
              >
                <div className="p-1.5 bg-red-600/10 text-red-500 rounded-xs mt-0.5 shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Practical Solutions</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Focused repairs and upkeep designed for your specific vehicle requirements.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3.5 bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-sm transition-all"
              >
                <div className="p-1.5 bg-red-600/10 text-red-500 rounded-xs mt-0.5 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Communication</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Clear explanations and transparent enquiries before any work proceeds.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-sm shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 07735 508394</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-sm transition-colors"
              >
                <span>Find Our Location</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
