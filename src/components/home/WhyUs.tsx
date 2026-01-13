import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const WhyUs: React.FC = () => {
  const rows = [
    {
      feature: "Visas",
      diy: "Confusing gov sites, rejection risk",
      us: "Fast-tracked, attorney-verified. 100% Success.",
    },
    {
      feature: "Housing",
      diy: "Airbnb markups, potential scams",
      us: "Verified local landlords, video tours.",
    },
    {
      feature: "Community",
      diy: "Lonely start, limited network",
      us: "Instant access to private expat circles.",
    },
    { feature: "Peace of Mind", diy: "Hoping for the best", us: "Guaranteed." },
  ];

  return (
    <section className="section" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            The AsiaLife360 Difference
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#64748b" }}>
            Why risk your future? We guarantee your seamless transition.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "white",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                <th
                  style={{ padding: "1.5rem", textAlign: "left", width: "20%" }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "left",
                    width: "40%",
                    color: "#64748b",
                  }}
                >
                  The Hard Way (DIY)
                </th>
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "left",
                    width: "40%",
                    color: "var(--color-primary)",
                    backgroundColor: "rgba(15, 23, 42, 0.05)",
                  }}
                >
                  The AsiaLife360 Way
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom:
                      i < rows.length - 1
                        ? "1px solid var(--color-border)"
                        : "none",
                  }}
                >
                  <td style={{ padding: "1.5rem", fontWeight: 600 }}>
                    {row.feature}
                  </td>
                  <td
                    style={{
                      padding: "1.5rem",
                      color: "#64748b",
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <X size={18} color="#ef4444" /> {row.diy}
                  </td>
                  <td
                    style={{
                      padding: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      backgroundColor: "rgba(15, 23, 42, 0.05)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <Check size={18} color="var(--color-accent)" /> {row.us}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};
