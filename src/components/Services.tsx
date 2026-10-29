import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Wrench, Car, ArrowRight, Check, Phone, Plus, Minus, Send } from 'lucide-react';
import { SERVICES, COMPANY_INFO, ServiceItem } from '../data/company';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeChecklist, setActiveChecklist] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return <Settings className="w-5 h-5 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-red-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-red-500" />;
      default:
        return <Wrench className="w-5 h-5 text-red-500" />;
    }
  };

  const toggleChecklistItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden">
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
            Our Automotive Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Our Services
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            From routine check-ups and maintenance to mechanical repair enquiries and quality used car sales,
            MMR MOTORS LTD delivers practical automotive support tailored to your requirements.
          </p>
        </motion.div>

        {/* 3 Core Services Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-neutral-900/90 border border-neutral-800 hover:border-red-600/40 transition-all duration-300 rounded-sm overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Service Image with zoom animation */}
              <div className="relative h-56 overflow-hidden bg-neutral-900">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={service.image}
                  alt={`MMR Motors Ltd ${service.title}`}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-4 left-4 p-2.5 bg-neutral-950/85 backdrop-blur-md rounded-xs border border-white/10"
                >
                  {getIcon(service.iconName)}
                </motion.div>
                <div className="absolute bottom-3 left-4 text-xs font-mono font-medium text-neutral-400 tracking-wider">
                  0{index + 1}. SERVICE
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Service checklist with interactive toggles */}
                  <div className="pt-3 border-t border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Key Service Focus
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveChecklist(activeChecklist === service.id ? null : service.id)}
                        className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 font-medium"
                      >
                        {activeChecklist === service.id ? (
                          <>
                            <span>Compact</span>
                            <Minus className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>Select Items</span>
                            <Plus className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      {service.details.map((item, idx) => {
                        const isSelected = selectedItems.includes(item);
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 2 }}
                            onClick={() => toggleChecklistItem(item)}
                            className={`flex items-start gap-2 p-1 rounded-xs cursor-pointer transition-colors text-xs ${
                              isSelected
                                ? 'bg-red-950/40 text-white'
                                : 'text-neutral-300 hover:text-white'
                            }`}
                          >
                            <span
                              className={`p-0.5 rounded-xs mt-0.5 shrink-0 transition-colors ${
                                isSelected ? 'bg-red-600 text-white' : 'text-red-500'
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-neutral-800/80 space-y-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.title);
                      } else {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 group-hover:bg-red-600 transition-colors rounded-sm"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-red-500" />
                    <span>Or call directly: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Items Enquiry Banner if any selected */}
        <AnimatePresence>
          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-4 bg-neutral-900 border border-red-600/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                  {selectedItems.length} Checklist Items Selected:
                </span>
                <p className="text-xs text-neutral-300">
                  {selectedItems.join(', ')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(`Selected items: ${selectedItems.join(', ')}`);
                  } else {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-2 whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enquire With Selected Items</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Client Confirmation Notice matching SRS Section 4/FR-04 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-sm text-xs text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p>
            Have a specific mechanical repair, diagnostic check, or vehicle enquiry not listed above?
            Contact our Croydon workshop directly to discuss your requirements.
          </p>
          <a
            href={COMPANY_INFO.emailHref}
            className="text-white hover:text-red-400 font-medium underline underline-offset-4 whitespace-nowrap"
          >
            Email Enquiry: {COMPANY_INFO.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
