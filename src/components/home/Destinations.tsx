import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Destinations: React.FC = () => {
  const destinations = [
    {
      name: "UAE",
      tag: "The Modern Powerhouse",
      desc: "0% Income Tax. World-class luxury. 4-hour flight to Europe or Asia.",
    },
    {
      name: "The Philippines",
      tag: "The Tropical Value",
      desc: "English is an official language. Incredibly low cost of living. Warm culture.",
    },
    {
      name: "Thailand",
      tag: "The Wellness Capital",
      desc: "Amazing healthcare. Bustling cities and serene islands. Global nomad hub.",
    },
    {
      name: "Indonesia",
      tag: "The Creator's Paradise",
      desc: "Spiritual, artistic, and vibrant. A thriving expat community in nature.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Choose Your New Home
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#64748b" }}>
            Every destination offers a unique advantage. Which one suits your
            vision?
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              style={{
                padding: "2rem",
                borderRadius: "1rem",
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  {dest.name}
                </h3>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    backgroundColor: "rgba(212, 175, 55, 0.1)",
                    color: "var(--color-accent)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  {dest.tag}
                </span>
                <p style={{ color: "#64748b", marginBottom: "2rem" }}>
                  {dest.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--color-primary)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
