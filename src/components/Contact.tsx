import { useState, useId, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Vehicle Maintenance');
  const [vehicleReg, setVehicleReg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const serviceSelectId = useId();
  const vehicleRegInputId = useId();
  const messageTextareaId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMsg('Please provide either a telephone number or email address so we can reach you.');
      return;
    }

    const subject = encodeURIComponent(`Automotive Enquiry - ${service} (${name})`);
    const body = encodeURIComponent(
      `MMR MOTORS LTD Website Enquiry\n` +
      `--------------------------------\n` +
      `Customer Name: ${name}\n` +
      `Phone Number: ${phone}\n` +
      `Email Address: ${email}\n` +
      `Service Needed: ${service}\n` +
      `Vehicle Reg / Model: ${vehicleReg || 'Not specified'}\n\n` +
      `Message:\n${message || 'Please contact me regarding this enquiry.'}`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setVehicleReg('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900/60 border-t border-neutral-800/80 relative overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Contact MMR MOTORS LTD
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Reach out by phone, email, or visit our Croydon premises. We are ready to assist with your vehicle
            maintenance, repairs, or used car enquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Details & Map Column with Slide In */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 rounded-sm space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display">Business Information</h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xs mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-neutral-400 block tracking-wider">
                      Telephone / Mobile
                    </span>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-lg font-bold text-white hover:text-red-400 transition-colors tabular-nums inline-block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5">Click to dial directly from your device</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-800/80 group">
                  <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xs mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-neutral-400 block tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="text-sm font-semibold text-white hover:text-red-400 transition-colors break-all inline-block mt-0.5"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5">Direct inbox for quotes &amp; vehicle enquiries</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-800/80 group">
                  <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xs mt-1 shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-neutral-400 block tracking-wider">
                      Business Address
                    </span>
                    <p className="text-sm text-neutral-200 mt-0.5 font-medium leading-relaxed">
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.town}, {COMPANY_INFO.address.postcode}<br />
                      {COMPANY_INFO.address.country}
                    </p>
                    <a
                      href={COMPANY_INFO.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold mt-2 underline underline-offset-4"
                    >
                      <span>Open Address in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-neutral-800/80">
                  <div className="p-2.5 bg-neutral-900 text-neutral-400 rounded-xs mt-1 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs uppercase font-semibold text-neutral-400 block tracking-wider">
                      Working Hours
                    </span>
                    <div className="mt-1 space-y-1 text-xs text-neutral-300">
                      {COMPANY_INFO.openingHours.map((item, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="text-neutral-400">{item.days}:</span>
                          <span className="font-medium text-neutral-200">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps View */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden shadow-xl">
              <div className="p-3 bg-neutral-900/80 border-b border-neutral-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  Croydon Location Map
                </span>
                <a
                  href={COMPANY_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64 w-full bg-neutral-900 relative">
                <iframe
                  title="MMR MOTORS LTD Croydon location"
                  src={COMPANY_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Interactive Enquiry Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-xl relative">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
                  Online Contact
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Send a Vehicle Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Fill in your details below. This will prepare a direct email enquiry to our Croydon workshop team.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-neutral-900 border border-neutral-800 rounded-sm text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Thank You For Your Enquiry
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your enquiry details have been prepared for dispatch to <strong className="text-white">{COMPANY_INFO.email}</strong>.
                    If your email app didn't open automatically, you can call us directly right now:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      href={COMPANY_INFO.phoneHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </motion.a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={nameInputId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Smith"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor={phoneInputId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 07700 900000"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={emailInputId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.co.uk"
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor={serviceSelectId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Required Service
                      </label>
                      <select
                        id={serviceSelectId}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Automotive Enquiry">General Automotive Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={vehicleRegInputId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Vehicle Registration / Make &amp; Model (Optional)
                    </label>
                    <input
                      id={vehicleRegInputId}
                      type="text"
                      value={vehicleReg}
                      onChange={(e) => setVehicleReg(e.target.value)}
                      placeholder="e.g. AB12 CDE / Ford Focus 2018"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor={messageTextareaId} className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Message or Requirements
                    </label>
                    <textarea
                      id={messageTextareaId}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what your car needs (e.g. annual service, strange noise under braking, or type of used car you are searching for)..."
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-sm shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Vehicle Enquiry</span>
                    </motion.button>
                    <p className="text-[11px] text-neutral-400 text-center mt-2">
                      Submissions open your email application addressed directly to mmrmotorsltd@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
