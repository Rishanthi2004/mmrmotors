import { motion } from 'motion/react';
import { Settings, Wrench, Car, PhoneCall } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/company';

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Settings className="w-4 h-4 text-red-500" />;
      case 1:
        return <Wrench className="w-4 h-4 text-red-500" />;
      case 2:
        return <Car className="w-4 h-4 text-red-500" />;
      case 3:
        return <PhoneCall className="w-4 h-4 text-red-500" />;
      default:
        return <Settings className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mb-8 sm:mb-12 space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Our Service Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Straightforward, practical vehicle care and dependable assistance for drivers across Croydon.
          </p>
        </motion.div>

        {/* 4 Compact Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-neutral-900/80 border border-neutral-800 p-5 rounded-sm flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-xs shrink-0">
                  {getIcon(index)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
