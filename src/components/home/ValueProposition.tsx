import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { valuePropsContent } from "../../data/homeContent";
import { Button } from "../common/Button";

interface ValuePropsProps {
  onBookClick?: () => void;
}

export const ValueProposition: React.FC<ValuePropsProps> = ({
  onBookClick,
}) => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4 uppercase tracking-wider">
            Reinvent Your Life
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            {valuePropsContent.title}
          </h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            {valuePropsContent.description.split("**")[0]}
            <span className="text-accent font-bold relative inline-block">
              {valuePropsContent.description.split("**")[1]}
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-accent/30 rounded-full"></span>
            </span>
            {valuePropsContent.description.split("**")[2]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Old Life - "The Problem" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white border border-border/50  relative group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <XCircle size={100} className="text-text-muted" />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-8 text-text-muted group-hover:text-primary transition-colors">
              {valuePropsContent.realities.old.title}
            </h3>
            <ul className="space-y-6 list-none p-0 relative z-10">
              {valuePropsContent.realities.old.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-text-muted text-lg group-hover:text-text transition-colors"
                >
                  <div className="mt-1 min-w-[24px]">
                    <XCircle size={24} className="text-red-400 opacity-60" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Life - "The Solution" */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: "0 30px 60px -15px rgba(217, 119, 6, 0.25)",
            }}
            transition={{ duration: 0.4 }}
            className="p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden border border-white/10 ring-1 ring-white/20"
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-3xl font-heading font-bold mb-8 text-white flex items-center gap-3">
              {valuePropsContent.realities.new.title}
              <CheckCircle2 size={28} className="text-accent" />
            </h3>
            <ul className="space-y-6 list-none p-0 relative z-10">
              {valuePropsContent.realities.new.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-white/90 text-lg"
                >
                  <div className="mt-1 min-w-[24px]">
                    <CheckCircle2 size={24} className="text-accent shrink-0" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10">
              <Button
                variant="accent"
                className="w-full text-lg py-5 shadow-lg shadow-accent/30 hover:shadow-accent/50"
                onClick={onBookClick}
              >
                Start Your Real Life
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
