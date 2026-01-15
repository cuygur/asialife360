import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { navLinks } from "../../data/navigation";

import { useModals } from "../../context/ModalContext";

import logo from "../../assets/logo.png";

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
          ? "bg-white/90 backdrop-blur-md shadow-glass py-2 border-b border-gray-100" // Reduced padding from py-4 to py-2
          : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 z-50 relative"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="AsiaLife360 Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
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
          className="md:hidden text-primary cursor-pointer p-2 hover:bg-black/5 rounded-full transition-colors z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col pt-24 pb-8 px-6"
          >
            <div className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.href}
                    className="text-3xl font-heading font-bold text-primary hover:text-accent transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full flex flex-col gap-4"
            >
              <Button
                variant="primary"
                className="w-full justify-center text-lg py-6"
                onClick={() => {
                  setIsOpen(false);
                  openBooking();
                }}
              >
                Book Discovery Call
              </Button>

              <div className="flex justify-center gap-6 mt-4 opacity-50">
                {/* Optional: Add social icons or simple text here if needed */}
                <span className="text-xs uppercase tracking-widest">
                  Premium Relocation Services
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
