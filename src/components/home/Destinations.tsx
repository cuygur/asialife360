import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          {destinations.map((dest, i) => (
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
                <span className="dest-card-tag">{dest.tag}</span>
                <p className="dest-card-desc">{dest.desc}</p>
              </div>

              <Link to="/destinations" className="dest-card-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
