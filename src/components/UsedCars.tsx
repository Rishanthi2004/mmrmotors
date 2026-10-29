import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Car, Info, Sparkles, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface UsedCarsProps {
  onOpenEnquiry?: (service?: string) => void;
}

export default function UsedCars({ onOpenEnquiry }: UsedCarsProps) {
  const [selectedBody, setSelectedBody] = useState('Any Body Type');
  const [selectedBudget, setSelectedBudget] = useState('Any Budget');
  const [selectedFuel, setSelectedFuel] = useState('Any Fuel Type');
  const [copiedNote, setCopiedNote] = useState(false);

  const bodyTypes = ['Any Body Type', 'Hatchback', 'Saloon', 'SUV / Crossover', 'Estate'];
  const budgets = ['Any Budget', 'Under £4,000', '£4,000 – £8,000', '£8,000 – £12,000', '£12,000+'];
  const fuelTypes = ['Any Fuel Type', 'Petrol', 'Diesel', 'Hybrid / Electric'];

  const enquiryEmailSubject = encodeURIComponent(`Used Car Stock Enquiry - MMR MOTORS LTD (${selectedBody})`);
  const enquiryEmailBody = encodeURIComponent(
    `Hello MMR MOTORS LTD,\n\nI would like to enquire about your currently available used cars in Croydon.\n\nPreferences:\n- Body Style: ${selectedBody}\n- Budget Range: ${selectedBudget}\n- Fuel Type: ${selectedFuel}\n\nPlease contact me regarding any suitable vehicles currently available or arriving soon.\n\nThank you!`
  );
  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${enquiryEmailSubject}&body=${enquiryEmailBody}`;

  return (
    <section id="used-cars" className="py-24 bg-neutral-900/60 border-t border-b border-neutral-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-red-500">
            Pre-Owned Vehicle Sales
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Used Car Sales &amp; Stock Enquiries
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            MMR MOTORS LTD offers used car sales assistance for motorists in Croydon and across Greater London.
            Explore available options and speak directly with our team for up-to-date vehicle availability.
          </p>
        </motion.div>

        {/* Hero Showcase Split with animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl h-full min-h-[340px] group">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                src="/src/assets/images/used_car_showroom_1793255217450.jpg"
                alt="Used car sales showroom MMR Motors Ltd"
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1 block">
                  Enquiry-Based Sales
                </span>
                <p className="text-sm font-medium text-white max-w-lg">
                  We take pride in guiding customers toward suitable, dependable vehicles matching their everyday needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Used Car Enquiry Assistant with Spring Transitions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
                  <Car className="w-4 h-4" />
                  <span>Stock Enquiry Helper</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">Tell Us What You're Looking For</h3>
                <p className="text-xs text-neutral-400">
                  Select your criteria to generate an instant email enquiry or call our sales team.
                </p>
              </div>

              {/* Selector 1: Body Type */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-300 block">Preferred Body Style</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {bodyTypes.map((type) => {
                    const isSelected = selectedBody === type;
                    return (
                      <motion.button
                        key={type}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => setSelectedBody(type)}
                        className={`relative text-xs py-1.5 px-2.5 rounded-xs transition-colors text-left truncate ${
                          isSelected
                            ? 'bg-red-600 text-white font-semibold shadow-sm'
                            : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                        }`}
                      >
                        {type}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Selector 2: Budget */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-300 block">Target Budget Guide</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {budgets.map((b) => {
                    const isSelected = selectedBudget === b;
                    return (
                      <motion.button
                        key={b}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => setSelectedBudget(b)}
                        className={`text-xs py-1.5 px-2.5 rounded-xs transition-colors text-left truncate ${
                          isSelected
                            ? 'bg-red-600 text-white font-semibold shadow-sm'
                            : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                        }`}
                      >
                        {b}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Selector 3: Fuel Type */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-neutral-300 block">Engine / Fuel Type</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {fuelTypes.map((fuel) => {
                    const isSelected = selectedFuel === fuel;
                    return (
                      <motion.button
                        key={fuel}
                        whileTap={{ scale: 0.96 }}
                        type="button"
                        onClick={() => setSelectedFuel(fuel)}
                        className={`text-xs py-1.5 px-2.5 rounded-xs transition-colors text-left truncate ${
                          isSelected
                            ? 'bg-red-600 text-white font-semibold shadow-sm'
                            : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                        }`}
                      >
                        {fuel}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Live Selection Summary Box */}
              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-xs text-xs space-y-1">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Current Enquiry Summary
                </div>
                <div className="text-neutral-200">
                  <span className="text-red-400 font-medium">{selectedBody}</span> · <span>{selectedBudget}</span> · <span>{selectedFuel}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-neutral-800 space-y-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={mailtoLink}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-sm shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Email Stock Enquiry</span>
              </motion.a>

              <div className="flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={COMPANY_INFO.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>Call Us Now</span>
                </motion.a>

                {onOpenEnquiry && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => onOpenEnquiry('Used Car Sales')}
                    className="flex-1 py-2.5 px-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-sm transition-colors text-center"
                  >
                    Custom Form
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Compliance Note from SRS FR-05 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="p-4 bg-neutral-950 border border-neutral-800/90 rounded-sm flex items-start gap-3 text-xs text-neutral-400"
        >
          <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-neutral-200">Inventory Notice: </strong>
            In accordance with our trading policy, actual car listings, technical specifications, registration details,
            mileage, and prices are provided directly upon enquiry. Please contact MMR MOTORS LTD via phone or email for
            our latest available vehicles and incoming arrivals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
