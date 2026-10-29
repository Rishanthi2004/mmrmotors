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
    <section id="contact" className="py-14 sm:py-20 bg-neutral-900/60 border-t border-neutral-800/80 relative">
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
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            Contact Us
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Call, email, or visit our Croydon premises for vehicle maintenance, repairs, and used car sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Direct Details & Map Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-neutral-950 border border-neutral-800 p-4 sm:p-6 rounded-sm space-y-3 shadow-xl">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-3.5 p-3 bg-neutral-900 hover:bg-neutral-800/80 border border-neutral-800 rounded-sm transition-colors min-h-[48px]"
              >
                <div className="p-2.5 bg-red-600 text-white rounded-xs shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider block">
                    Phone Dialler
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white tabular-nums">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-center gap-3.5 p-3 bg-neutral-900 hover:bg-neutral-800/80 border border-neutral-800 rounded-sm transition-colors min-h-[48px]"
              >
                <div className="p-2.5 bg-neutral-800 text-red-400 rounded-xs shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate block">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-300 leading-relaxed">
                    <strong className="text-white block font-medium">Business Address:</strong>
                    {COMPANY_INFO.address.fullAddress}
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold mt-2.5 pt-2 border-t border-neutral-800 w-full"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden shadow-md">
              <div className="h-48 sm:h-56 w-full bg-neutral-900">
                <iframe
                  title="MMR MOTORS LTD Croydon location"
                  src={COMPANY_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Quick 3-Field Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 border border-neutral-800 p-5 sm:p-7 rounded-sm shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1">
                Send an Enquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                Fill in your details to quickly email our Croydon workshop.
              </p>

              {submitted ? (
                <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-sm text-center space-y-3">
                  <div className="w-10 h-10 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    Enquiry Prepared
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                    Details opened in your email app. You can also call us directly anytime:
                  </p>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 rounded-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-medium text-neutral-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor={phoneInputId} className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07735 508394"
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor={serviceSelectId} className="block text-xs font-medium text-neutral-300 mb-1">
                        Service
                      </label>
                      <select
                        id={serviceSelectId}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
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
                    <label htmlFor={messageTextareaId} className="block text-xs font-medium text-neutral-300 mb-1">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      id={messageTextareaId}
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help with your car?"
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-sm shadow-md"
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
