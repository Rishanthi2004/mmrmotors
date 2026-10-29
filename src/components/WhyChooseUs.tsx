import { motion } from 'motion/react';
import { Wrench, Settings, Car, PhoneCall } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/company';

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Settings className="w-5 h-5 text-red-500" />;
      case 1:
        return <Wrench className="w-5 h-5 text-red-500" />;
      case 2:
        return <Car className="w-5 h-5 text-red-500" />;
      case 3:
        return <PhoneCall className="w-5 h-5 text-red-500" />;
      default:
        return <Settings className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 space-y-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Our Service Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            MMR MOTORS LTD is committed to delivering honest, practical vehicle care and dependable assistance for drivers across Croydon.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900/70 border border-neutral-800/90 hover:border-red-600/50 p-7 rounded-sm flex flex-col justify-between transition-all duration-300 group shadow-md hover:shadow-xl hover:shadow-red-950/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 bg-neutral-950 border border-neutral-800 rounded-xs group-hover:border-red-600/50 transition-colors"
                  >
                    {getIcon(index)}
                  </motion.div>
                  <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/60 text-xs text-neutral-400 flex items-center justify-between">
                <span>Croydon Service</span>
                <span className="text-red-500 group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practical reassurance note with subtle slide in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 bg-neutral-900/40 border border-neutral-800/60 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-base font-bold text-white font-display">Speak Directly With Our Automotive Team</h4>
            <p className="text-xs text-neutral-400 mt-1">
              Have questions regarding vehicle servicing, an upcoming repair, or car availability? We are here to help.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={COMPANY_INFO.phoneHref}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-sm shadow-md transition-colors whitespace-nowrap"
            >
              Call {COMPANY_INFO.phone}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
