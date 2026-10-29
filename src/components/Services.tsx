import { motion } from 'motion/react';
import { Settings, Wrench, Car, ArrowRight, Check, Phone } from 'lucide-react';
import { SERVICES, COMPANY_INFO, ServiceItem } from '../data/company';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return <Settings className="w-4 h-4 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-red-500" />;
      case 'Car':
        return <Car className="w-4 h-4 text-red-500" />;
      default:
        return <Wrench className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mb-10 sm:mb-12 space-y-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Automotive Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Our Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Essential vehicle maintenance, mechanical repairs, and used car sales support in Croydon.
          </p>
        </motion.div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-sm overflow-hidden flex flex-col justify-between shadow-md"
            >
              {/* Compact Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 bg-neutral-950/85 backdrop-blur-md rounded-xs border border-white/10">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-white font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* 3 Key Points */}
                  <div className="pt-2 border-t border-neutral-800/80 space-y-1.5 text-xs text-neutral-300">
                    {service.details.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-neutral-800/80 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      } else {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-sm"
                  >
                    <span>Enquire {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs text-neutral-400 hover:text-white transition-colors min-h-[38px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    <span>Call: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
