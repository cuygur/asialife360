import React from "react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-primary)",
        color: "white",
        padding: "4rem 0 2rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Col */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              <Globe color="var(--color-accent)" size={28} />
              AsiaLife360
            </div>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              The safe bridge to your new world. We facilitate seamless
              relocations for professionals and retirees moving to the UAE and
              Southeast Asia.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4
              style={{
                color: "white",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
              }}
            >
              Explore
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <Link to="/" style={{ color: "#94a3b8" }}>
                Home
              </Link>
              <Link to="/destinations" style={{ color: "#94a3b8" }}>
                Destinations
              </Link>
              <Link to="/services" style={{ color: "#94a3b8" }}>
                Services
              </Link>
              <Link to="/about" style={{ color: "#94a3b8" }}>
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4
              style={{
                color: "white",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
              }}
            >
              Contact
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#94a3b8",
                }}
              >
                <Mail size={18} />
                <span>hello@asialife360.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#94a3b8",
                }}
              >
                <Phone size={18} />
                <span>+971 4 123 4567</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#94a3b8",
                }}
              >
                <MapPin size={18} />
                <span>Dubai Digital Park, UAE</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #334155",
            paddingTop: "2rem",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} AsiaLife360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
