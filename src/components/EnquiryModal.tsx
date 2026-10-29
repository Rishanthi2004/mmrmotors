import { useState, useId, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, Car } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function EnquiryModal({ isOpen, onClose, selectedService }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedService || 'Vehicle Maintenance');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const modalNameId = useId();
  const modalPhoneId = useId();
  const modalServiceId = useId();
  const modalNotesId = useId();

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Vehicle Enquiry: ${service} (${name})`);
    const body = encodeURIComponent(
      `MMR MOTORS LTD Website Enquiry\n` +
      `--------------------------------\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `Notes:\n${notes || 'Please contact me regarding this enquiry.'}`
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
    >
      <div className="bg-white border border-neutral-200 rounded-sm shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 relative text-neutral-900">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 id="modal-title" className="text-lg font-bold text-neutral-900 font-display">
              Enquiry Ready
            </h3>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
              Your details have opened in your email client addressed to <strong className="text-neutral-900">{COMPANY_INFO.email}</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now: {COMPANY_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 px-4 min-h-[44px] text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1 pr-8">
              <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider">
                <Car className="w-3.5 h-3.5" />
                <span>Quick Customer Enquiry</span>
              </div>
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-neutral-900 font-display">
                Contact MMR MOTORS LTD
              </h3>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label htmlFor={modalNameId} className="block text-xs font-semibold text-neutral-800 mb-1">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  id={modalNameId}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Smith"
                  className="w-full px-3 py-2.5 min-h-[44px] text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor={modalPhoneId} className="block text-xs font-semibold text-neutral-800 mb-1">
                  Phone Number <span className="text-orange-600">*</span>
                </label>
                <input
                  id={modalPhoneId}
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07735 508394"
                  className="w-full px-3 py-2.5 min-h-[44px] text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor={modalServiceId} className="block text-xs font-semibold text-neutral-800 mb-1">
                  Service Area
                </label>
                <select
                  id={modalServiceId}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Vehicle Advice">General Automotive Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor={modalNotesId} className="block text-xs font-semibold text-neutral-800 mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  id={modalNotesId}
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="How can we assist you?"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-sm focus:bg-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[46px] text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-sm shadow-md shadow-orange-600/30 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
