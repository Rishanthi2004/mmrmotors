import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-5 bg-red-600 rounded-xs"></span>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                MMR MOTORS <span className="text-red-500 font-semibold text-base">LTD</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Professional automotive solutions in Croydon, United Kingdom. Vehicle maintenance, mechanical repair services, and used car sales enquiries.
            </p>
            <div className="pt-2 text-xs text-neutral-400">
              <span>Croydon, London · Sydenham Road</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-red-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Automotive Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-red-400 transition-colors block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#used-cars"
                  className="hover:text-red-400 transition-colors block py-0.5"
                >
                  Used Car Stock Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Contact Details
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300 leading-relaxed">
                  Flat 9 Solar Court, 119 Sydenham Road, Croydon, CR0 2EZ, UK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-white hover:text-red-400 transition-colors font-medium tabular-nums"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={COMPANY_INFO.emailHref}
                  className="text-neutral-300 hover:text-red-400 transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact SRS copyright notice */}
        <div className="pt-12 mt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 MMR MOTORS LTD. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-xs"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
