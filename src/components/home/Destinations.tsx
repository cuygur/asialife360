import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { destinationsContent } from "../../data/homeContent";

export const Destinations: React.FC = () => {
  return (
    <section className="section section-destinations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Choose Your New Home</h2>
          <p className="section-description">
            Every destination offers a unique advantage. Which one suits your
            vision?
          </p>
        </motion.div>

        <div className="destinations-grid">
          {destinationsContent.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="destination-card"
            >
              <div className="dest-card-content">
                <h3 className="dest-card-title">{dest.name}</h3>
                <span className="dest-card-tag">{dest.tags[0]}</span>
                <p className="dest-card-desc">{dest.description}</p>
              </div>

              <Link to={`/destinations/${dest.id}`} className="dest-card-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
