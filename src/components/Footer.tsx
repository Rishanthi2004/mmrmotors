import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-700 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-3">
            <img
              src={COMPANY_INFO.logo}
              alt="MMR MOTORS LTD"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              Vehicle maintenance, mechanical repairs, and used car sales in Croydon, UK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-600 hover:text-orange-600 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Croydon Workshop
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-neutral-900 hover:text-orange-600 font-bold tabular-nums transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="text-neutral-700 hover:text-orange-600 transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 MMR MOTORS LTD. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-orange-600 font-medium transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
