import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { destinationsContent } from "../../data/homeContent";

export const Destinations: React.FC = () => {
  return (
    <section className="py-24 bg-bg relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
            Global Reach
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
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
              className="group p-8 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between h-full transition-all duration-500 hover:shadow-premium hover:border-accent/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                    {dest.name}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-surface border border-border text-text-muted text-xs font-semibold uppercase tracking-wider group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-all">
                    {dest.tags[0]}
                  </span>
                </div>

                <p className="text-text-muted leading-relaxed group-hover:text-text transition-colors">
                  {dest.description}
                </p>
              </div>

              <Link
                to={`/destinations/${dest.id}`}
                className="flex items-center gap-2 text-primary font-semibold transition-all duration-200 group-hover:text-accent group-hover:gap-4"
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
