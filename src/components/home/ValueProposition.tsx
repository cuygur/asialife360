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
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
            {valuePropsContent.title}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {valuePropsContent.description.split("**")[0]}
            <span className="text-accent font-semibold">
              {valuePropsContent.description.split("**")[1]}
            </span>
            {valuePropsContent.description.split("**")[2]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Old Life */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-10 rounded-xl shadow-md transition-all duration-300 bg-white border border-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-text-muted">
              {valuePropsContent.realities.old.title}
            </h3>
            <ul className="space-y-4 list-none p-0">
              {valuePropsContent.realities.old.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-1" />{" "}
                  {item}
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
            className="p-10 rounded-xl shadow-md transition-all duration-300 bg-gradient-to-br from-primary to-secondary text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              {valuePropsContent.realities.new.title}
            </h3>
            <ul className="space-y-4 list-none p-0">
              {valuePropsContent.realities.new.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle2
                    size={20}
                    className="text-accent shrink-0 mt-1"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="accent"
              className="w-full mt-8"
              onClick={onBookClick}
            >
              Start Your Real Life
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
