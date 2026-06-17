import { site } from "@/data/site";
import { serviceCategories } from "@/data/services";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerDisclaimer =
  "Srilaxmi Finance Consultancy is a financial consultancy and service-assistance business. We are not a bank, NBFC, or government authority. Loan approvals, eligible amounts, interest rates, tenure, and other terms are determined solely by the respective lending institution. Professional services may be delivered directly or in association with qualified professionals, where applicable.";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary font-bold text-sm">
                S
              </div>
              <span className="font-semibold text-lg text-white">{site.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {site.description}
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
                <Phone size={14} className="text-accent-light" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
                <Mail size={14} className="text-accent-light" />
                {site.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent-light mt-0.5 shrink-0" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["Home", "About", "Services", "Loans", "Why Choose Us", "Process", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-accent-light transition-colors flex items-center gap-1"
                  >
                    <ArrowUpRight size={12} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Loan Services</h4>
            <ul className="space-y-2.5 text-sm">
              {serviceCategories[0].services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-accent-light transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Professional Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[...serviceCategories[1].services.slice(0, 4), ...serviceCategories[3].services.slice(0, 4)].map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-accent-light transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-6 justify-between items-center text-sm">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-accent-light transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-accent-light transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="/disclaimer" className="text-gray-400 hover:text-accent-light transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-xs text-gray-500 leading-relaxed">{footerDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
