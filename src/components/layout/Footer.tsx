import React from "react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, footerContent } from "../../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white/70">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-2xl text-white mb-6"
            >
              <Globe className="text-accent" size={28} />
              <span>AsiaLife360</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              {footerContent.brandDescription}
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="hover:text-accent transition-colors duration-200"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>{footerContent.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{footerContent.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{footerContent.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs opacity-50">
          <p>
            &copy; {new Date().getFullYear()} AsiaLife360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
