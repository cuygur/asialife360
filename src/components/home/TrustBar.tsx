import React from "react";
import { ShieldCheck, Users, Globe2, Star } from "lucide-react";
import { motion } from "framer-motion";

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      label: "500+ Families Relocated",
      value: "Verified",
    },
    {
      icon: <ShieldCheck size={24} />,
      label: "Visa Approval Rate",
      value: "100%",
    },
    { icon: <Globe2 size={24} />, label: "Key Regions", value: "4" },
    { icon: <Star size={24} />, label: "Client Satisfaction", value: "5.0/5" },
  ];

  return (
    <section
      className="section"
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <div style={{ color: "var(--color-accent)" }}>{stat.icon}</div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--color-primary)",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#64748b" }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
