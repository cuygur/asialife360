import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { valuePropsContent } from "../../data/homeContent";

export const ValueProposition: React.FC = () => {
  return (
    <section className="section section-value-prop">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">{valuePropsContent.title}</h2>
          <p className="section-description">
            {valuePropsContent.description.split("**")[0]}
            <span className="text-accent-bold">
              {valuePropsContent.description.split("**")[1]}
            </span>
            {valuePropsContent.description.split("**")[2]}
          </p>
        </motion.div>

        <div className="value-prop-grid">
          {/* Old Life */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="value-card card-old"
          >
            <h3 className="card-title text-muted">
              {valuePropsContent.realities.old.title}
            </h3>
            <ul className="card-list">
              {valuePropsContent.realities.old.items.map((item, i) => (
                <li key={i} className="card-list-item text-muted">
                  <XCircle size={20} className="icon-error" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Life */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
              transition: { duration: 0.3 },
            }}
            className="value-card card-new"
          >
            <h3 className="card-title text-white">
              {valuePropsContent.realities.new.title}
            </h3>
            <ul className="card-list">
              {valuePropsContent.realities.new.items.map((item, i) => (
                <li key={i} className="card-list-item text-white">
                  <CheckCircle2 size={20} className="icon-accent" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
