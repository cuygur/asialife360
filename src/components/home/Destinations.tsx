import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { destinationsContent } from "../../data/homeContent";

export const Destinations: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
            Choose Your New Home
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Every destination offers a unique advantage. Which one suits your
            vision?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="p-8 rounded-xl bg-white border border-border shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:border-accent"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {dest.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                  {dest.tags[0]}
                </span>
                <p className="text-text-muted leading-relaxed">
                  {dest.description}
                </p>
              </div>

              <Link
                to={`/destinations/${dest.id}`}
                className="flex items-center gap-2 text-primary font-semibold transition-all duration-200 hover:text-accent hover:gap-3"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
