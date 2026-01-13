import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import "../../index.css";

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

  const navStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s ease",
    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
    padding: scrolled ? "1rem 0" : "1.5rem 0",
  };

  return (
    <nav style={navStyles}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "var(--color-primary)",
          }}
        >
          <Globe size={28} color="var(--color-accent)" />
          AsiaLife360
        </Link>

        {/* Desktop Menu */}
        <div
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden-mobile"
        >
          <Link to="/destinations" style={{ fontWeight: 500 }}>
            Destinations
          </Link>
          <Link to="/services" style={{ fontWeight: 500 }}>
            Services
          </Link>
          <Link to="/about" style={{ fontWeight: 500 }}>
            About
          </Link>
          <Button variant="primary" size="sm">
            Book Discovery Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer", color: "var(--color-primary)" }}
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
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid var(--color-border)",
              overflow: "hidden",
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1.5rem 1rem",
              }}
            >
              <Link
                to="/destinations"
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                Destinations
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                style={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                About
              </Link>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Book Discovery Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .mobile-toggle { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
