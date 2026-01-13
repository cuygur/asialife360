import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { navLinks } from "../../data/navigation";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Globe size={28} className="logo-icon" />
          <span>AsiaLife360</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="sm">
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile-menu"
          >
            <div className="container mobile-links-container">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Book Discovery Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
