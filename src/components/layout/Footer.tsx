import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, footerContent } from "../../data/navigation";
import logo from "../../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-12 md:pt-24 pb-8 md:pb-12 text-white/70 border-t border-white/5 relative bg-gradient-to-b from-[#0F172A] to-[#020617]">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-24 mb-12 md:mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="AsiaLife360 Logo"
                className="h-12 w-auto object-contain bg-white/90 rounded-md p-1"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-white/60">
              {footerContent.brandDescription}
            </p>
            <div className="flex gap-4">
              {/* Social placeholders could go here */}
            </div>
          </div>

          {/* Spacer for desktop layout balance if needed, or map nav links */}

          {/* Links Col */}
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform inline-block"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-accent transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal/Resources Col (Future expansion) - currently standard */}
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Resources
            </h4>
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-sm cursor-not-allowed">
                Knowledge Base
              </span>
              <span className="text-white/40 text-sm cursor-not-allowed">
                Visa Checker
              </span>
              <span className="text-white/40 text-sm cursor-not-allowed">
                Tax Calculator
              </span>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-sm font-bold text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Contact
            </h4>
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-start gap-3 group"
              >
                <Mail size={18} className="text-accent mt-0.5" />
                <span className="group-hover:text-white transition-colors">
                  {footerContent.contact.email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5" />
                <span>{footerContent.contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5" />
                <span>{footerContent.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} AsiaLife360. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
