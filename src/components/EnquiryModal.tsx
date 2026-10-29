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
  const [email, setEmail] = useState('');
  const [service, setService] = useState(selectedService || 'Vehicle Maintenance');
  const [vehicleReg, setVehicleReg] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const modalNameId = useId();
  const modalPhoneId = useId();
  const modalEmailId = useId();
  const modalServiceId = useId();
  const modalRegId = useId();
  const modalNotesId = useId();

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  // Lock body scroll when modal is open
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
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Vehicle Reg / Model: ${vehicleReg || 'Not specified'}\n\n` +
      `Enquiry Notes:\n${notes || 'Please contact me regarding this enquiry.'}`
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-neutral-950 border border-neutral-800 rounded-sm shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-white font-display">
              Enquiry Prepared
            </h3>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your vehicle enquiry has been directed to our inbox (<span className="text-white font-medium">{COMPANY_INFO.email}</span>).
              Our Croydon team will respond as soon as possible.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Or Call Us Now: {COMPANY_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 px-4 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-500 uppercase tracking-wider">
                <Car className="w-3.5 h-3.5" />
                <span>Quick Customer Enquiry</span>
              </div>
              <h3 id="modal-title" className="text-xl font-bold text-white font-display">
                Contact MMR MOTORS LTD
              </h3>
              <p className="text-xs text-neutral-400">
                Share your vehicle details and required service for prompt Croydon assistance.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label htmlFor={modalNameId} className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id={modalNameId}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Davies"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={modalPhoneId} className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={modalPhoneId}
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07735 508394"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor={modalEmailId} className="block text-xs font-medium text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id={modalEmailId}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={modalServiceId} className="block text-xs font-medium text-neutral-300 mb-1">
                    Service Area
                  </label>
                  <select
                    id={modalServiceId}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Vehicle Advice">General Vehicle Advice</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={modalRegId} className="block text-xs font-medium text-neutral-300 mb-1">
                    Vehicle Reg / Model
                  </label>
                  <input
                    id={modalRegId}
                    type="text"
                    value={vehicleReg}
                    onChange={(e) => setVehicleReg(e.target.value)}
                    placeholder="e.g. CR0 2EZ / BMW 3 Series"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={modalNotesId} className="block text-xs font-medium text-neutral-300 mb-1">
                  Enquiry Details
                </label>
                <textarea
                  id={modalNotesId}
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Provide any additional details or preferred contact time..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 text-white rounded-sm focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-sm shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
