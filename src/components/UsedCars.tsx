import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Car, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface UsedCarsProps {
  onOpenEnquiry?: (service?: string) => void;
}

export default function UsedCars({ onOpenEnquiry }: UsedCarsProps) {
  const [selectedBody, setSelectedBody] = useState('All');
  const bodyTypes = ['All', 'Hatchback', 'Saloon', 'SUV / Crossover'];

  const enquiryEmailSubject = encodeURIComponent(`Used Car Stock Enquiry - MMR MOTORS LTD (${selectedBody})`);
  const enquiryEmailBody = encodeURIComponent(
    `Hello MMR MOTORS LTD,\n\nI would like to enquire about your currently available used cars in Croydon (${selectedBody}).\n\nPlease let me know about available options.\n\nThank you!`
  );
  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${enquiryEmailSubject}&body=${enquiryEmailBody}`;

  return (
    <section id="used-cars" className="py-14 sm:py-20 bg-neutral-900/60 border-t border-b border-neutral-800/80 relative">
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
            Pre-Owned Vehicle Sales
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Used Car Sales
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Explore used-car options and contact our team for enquiries about available vehicles.
          </p>
        </motion.div>

        {/* Compact Split: Image + Quick Enquiry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Showroom Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-xl h-56 sm:h-72 lg:h-full">
              <img
                src="/images/used-cars.jpg"
                alt="Used car sales showroom"
                className="w-full h-full object-cover object-center filter brightness-90"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-white bg-neutral-950/80 px-2.5 py-1 rounded-xs border border-white/10">
                  Enquiry-based stock updates
                </span>
              </div>
            </div>
          </div>

          {/* Quick Body Selector & Contact Card */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-5 sm:p-6 rounded-sm shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
                <Car className="w-4 h-4" />
                <span>Vehicle Preferences</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                What are you looking for?
              </h3>

              {/* Body Type Filter Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedBody(type)}
                    className={`py-2 px-3 text-xs rounded-xs font-medium transition-colors text-center ${
                      selectedBody === type
                        ? 'bg-red-600 text-white'
                        : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-3 border-t border-neutral-800/80">
              <a
                href={mailtoLink}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Enquire About {selectedBody === 'All' ? 'Stock' : selectedBody}</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 min-h-[44px] text-xs font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-sm"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call Sales: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Short compliance notice */}
        <div className="p-3.5 bg-neutral-950 border border-neutral-800/90 rounded-sm flex items-start gap-2.5 text-xs text-neutral-400">
          <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Actual vehicle specifications, registration details, mileage, and prices are provided directly upon enquiry. Contact MMR MOTORS LTD for current availability.
          </p>
        </div>
      </div>
    </section>
  );
}
