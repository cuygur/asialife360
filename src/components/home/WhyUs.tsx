import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { whyUsContent } from "../../data/homeContent";

export const WhyUs: React.FC = () => {
  return (
    <section className="section section-why-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{whyUsContent.title}</h2>
          <p className="section-description">{whyUsContent.description}</p>
        </div>

        <div className="comparison-table-container">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="comparison-table"
          >
            <thead>
              <tr className="table-header-row">
                <th className="feature-col">Feature</th>
                <th className="diy-col">The Hard Way (DIY)</th>
                <th className="us-col">The AsiaLife360 Way</th>
              </tr>
            </thead>
            <tbody>
              {whyUsContent.comparison.map((row, i) => (
                <tr key={i} className="table-body-row">
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
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
};
