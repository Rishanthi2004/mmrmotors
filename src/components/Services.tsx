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
        return <Settings className="w-4 h-4 text-orange-600" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-orange-600" />;
      case 'Car':
        return <Car className="w-4 h-4 text-orange-600" />;
      default:
        return <Wrench className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concise Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl mb-10 sm:mb-12 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Automotive Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
            Our Services
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Essential vehicle maintenance, mechanical repairs, and used car sales support in Croydon.
          </p>
        </motion.div>

        {/* 3 Core Services Grid in Crisp White & Orange */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white border border-neutral-200/90 hover:border-orange-500/60 rounded-sm overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-orange-600/10 transition-all duration-300 group"
            >
              {/* Compact Image with light backdrop */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 bg-white/95 backdrop-blur-md rounded-xs border border-neutral-200 shadow-sm">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* 3 Key Points */}
                  <div className="pt-2 border-t border-neutral-100 space-y-1.5 text-xs text-neutral-700">
                    {service.details.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-neutral-100 space-y-2">
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
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-md shadow-orange-600/25 transition-colors"
                  >
                    <span>Enquire {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs text-neutral-600 hover:text-orange-600 transition-colors min-h-[38px] font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
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
