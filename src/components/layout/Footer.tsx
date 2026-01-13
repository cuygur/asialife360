import React from "react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, footerContent } from "../../data/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <Globe className="logo-icon" size={28} />
              <span>AsiaLife360</span>
            </Link>
            <p className="footer-description">
              {footerContent.brandDescription}
            </p>
          </div>

          {/* Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Explore</h4>
            <div className="footer-nav-links">
              <Link to="/" className="footer-link">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <span>{footerContent.contact.email}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>{footerContent.contact.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>{footerContent.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AsiaLife360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
