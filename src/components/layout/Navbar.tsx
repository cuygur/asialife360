import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { navLinks } from "../../data/navigation";

import { useModals } from "../../context/ModalContext";

export const Navbar: React.FC = () => {
  const { openBooking } = useModals();
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-glass py-4 border-b border-white/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-heading font-bold text-2xl text-primary tracking-tight"
        >
          <div className="bg-gradient-to-tr from-accent to-accent-light p-1.5 rounded-lg shadow-lg shadow-accent/20">
            <Globe size={24} className="text-white" />
          </div>
          <span className="text-primary">
            AsiaLife<span className="text-accent">360</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-primary/80 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            onClick={openBooking}
            className="shadow-lg shadow-primary/20"
          >
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-primary cursor-pointer p-2 hover:bg-black/5 rounded-full transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border absolute top-full left-0 right-0 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xl font-heading font-semibold text-primary hover:text-accent transition-colors flex justify-between items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="pt-4 border-t border-dashed border-border">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                >
                  Book Discovery Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
