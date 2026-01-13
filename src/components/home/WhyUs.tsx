import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { whyUsContent } from "../../data/homeContent";

export const WhyUs: React.FC = () => {
  return (
    <section className="section section-why-us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">{whyUsContent.title}</h2>
          <p className="section-description">{whyUsContent.description}</p>
        </motion.div>

        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <motion.tr
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="table-header-row"
              >
                <th className="feature-col">Feature</th>
                <th className="diy-col">The Hard Way (DIY)</th>
                <th className="us-col">The AsiaLife360 Way</th>
              </motion.tr>
            </thead>
            <motion.tbody
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {whyUsContent.comparison.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="table-body-row"
                >
                  <td className="feature-cell">{row.feature}</td>
                  <td className="diy-cell">
                    <div className="diy-content">
                      <X size={18} className="icon-error" />
                      <span>{row.diy}</span>
                    </div>
                  </td>
                  <td className="us-cell">
                    <div className="us-content">
                      <Check size={18} className="icon-accent" />
                      <span>{row.us}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
