import React from "react";
import { ShieldCheck, Users, Globe2, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={24} />,
    label: "Families Relocated",
    value: "500+",
  },
  {
    icon: <ShieldCheck size={24} />,
    label: "Visa Approval Rate",
    value: "100%",
  },
  { icon: <Globe2 size={24} />, label: "Key Regions", value: "4" },
  { icon: <Star size={24} />, label: "Client Satisfaction", value: "5.0/5" },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="trust-bar-section">
      <div className="container">
        <motion.div
          className="trust-bar-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="trust-stat-item"
            >
              <div className="trust-stat-icon">{stat.icon}</div>
              <div className="trust-stat-content">
                <div className="trust-stat-value">{stat.value}</div>
                <div className="trust-stat-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
