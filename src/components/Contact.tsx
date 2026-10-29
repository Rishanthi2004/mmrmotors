import { useState, useId, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Vehicle Maintenance');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameInputId = useId();
  const phoneInputId = useId();
  const serviceSelectId = useId();
  const messageTextareaId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const subject = encodeURIComponent(`Automotive Enquiry - ${service} (${name})`);
    const body = encodeURIComponent(
      `MMR MOTORS LTD Website Enquiry\n` +
      `--------------------------------\n` +
      `Name: ${name}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Service: ${service}\n\n` +
      `Notes:\n${message || 'Please contact me regarding this enquiry.'}`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-neutral-50/70 border-t border-neutral-200/80 relative">
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
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
            Contact Us
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Call, email, or visit our Croydon premises for vehicle maintenance, repairs, and used car sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Direct Details & Map Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white border border-neutral-200 p-4 sm:p-6 rounded-sm space-y-3 shadow-md">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3.5 p-3 bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200/80 rounded-sm transition-colors min-h-[48px] group"
              >
                <div className="p-2.5 bg-orange-600 text-white rounded-xs shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
                    Phone Dialler
                  </span>
                  <span className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-orange-600 transition-colors tabular-nums">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-center gap-3.5 p-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-sm transition-colors min-h-[48px] group"
              >
                <div className="p-2.5 bg-neutral-200 text-neutral-700 rounded-xs shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-900 group-hover:text-orange-600 truncate block">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900 block font-semibold">Business Address:</strong>
                    {COMPANY_INFO.address.fullAddress}
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-orange-600 hover:text-orange-700 font-bold mt-2.5 pt-2 border-t border-neutral-200 w-full transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden shadow-sm">
              <div className="h-48 sm:h-56 w-full bg-neutral-100">
                <iframe
                  title="MMR MOTORS LTD Croydon location"
                  src={COMPANY_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Quick 3-Field Enquiry Form in Crisp White & Orange */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 p-5 sm:p-7 rounded-sm shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-display mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Fill in your details to quickly email our Croydon workshop.
              </p>

              {submitted ? (
                <div className="p-6 bg-orange-50 border border-orange-200 rounded-sm text-center space-y-3">
                  <div className="w-10 h-10 bg-orange-600/10 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 font-display">
                    Enquiry Prepared
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed max-w-sm mx-auto">
                    Details opened in your email app. You can also call us directly anytime:
                  </p>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 rounded-sm shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-semibold text-neutral-800 mb-1">
                      Your Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor={phoneInputId} className="block text-xs font-semibold text-neutral-800 mb-1">
                        Phone Number
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07735 508394"
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor={serviceSelectId} className="block text-xs font-semibold text-neutral-800 mb-1">
                        Service
                      </label>
                      <select
                        id={serviceSelectId}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Enquiry">General Automotive Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={messageTextareaId} className="block text-xs font-semibold text-neutral-800 mb-1">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      id={messageTextareaId}
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help with your car?"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-md shadow-orange-600/30 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
