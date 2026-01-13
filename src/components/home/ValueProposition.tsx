import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export const ValueProposition: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            Why Just Survive When You Can Thrive?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#64748b" }}>
            The world has changed. You no longer need to be tethered to a
            high-cost, high-stress environment to be successful. We specialize
            in **Geographic Arbitrage**.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Old Life */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "#64748b",
              }}
            >
              The Old Reality
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <XCircle size={20} color="#ef4444" /> High Cost of Living
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <XCircle size={20} color="#ef4444" /> High Taxes (30-50%)
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <XCircle size={20} color="#ef4444" /> Stress & Burnout
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  color: "#64748b",
                }}
              >
                <XCircle size={20} color="#ef4444" /> Cold Weather & Grey Skies
              </li>
            </ul>
          </motion.div>

          {/* New Life */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              padding: "2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "white",
              }}
            >
              The AsiaLife360 Reality
            </h3>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={20} color="var(--color-accent)" /> Luxury
                for Less
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={20} color="var(--color-accent)" /> 0% to Low
                Tax
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={20} color="var(--color-accent)" /> Wellness
                & Balance
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <CheckCircle2 size={20} color="var(--color-accent)" />{" "}
                Year-round Sun
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
