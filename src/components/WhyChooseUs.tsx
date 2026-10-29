import { motion } from 'motion/react';
import { Settings, Wrench, Car, PhoneCall } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/company';

export default function WhyChooseUs() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Settings className="w-4 h-4 text-orange-600" />;
      case 1:
        return <Wrench className="w-4 h-4 text-orange-600" />;
      case 2:
        return <Car className="w-4 h-4 text-orange-600" />;
      case 3:
        return <PhoneCall className="w-4 h-4 text-orange-600" />;
      default:
        return <Settings className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mb-8 sm:mb-12 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Our Service Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Straightforward, practical vehicle care and dependable assistance for drivers across Croydon.
          </p>
        </motion.div>

        {/* 4 Compact Pillars in White & Orange */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-orange-50/40 border border-orange-200/70 hover:border-orange-500 rounded-sm p-5 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white border border-orange-200/90 rounded-xs shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  {getIcon(index)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-display">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
