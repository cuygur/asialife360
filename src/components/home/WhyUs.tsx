import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { whyUsContent } from "../../data/homeContent";

export const WhyUs: React.FC = () => {
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
            {whyUsContent.title}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {whyUsContent.description}
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full border-collapse bg-white min-w-[600px]">
            <thead>
              <motion.tr
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b-2 border-border"
              >
                <th className="w-1/4 p-6 text-left">Feature</th>
                <th className="w-[37.5%] p-6 text-left text-text-muted">
                  The Hard Way (DIY)
                </th>
                <th className="w-[37.5%] p-6 text-left text-primary bg-primary/5">
                  The AsiaLife360 Way
                </th>
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
                  className="border-b border-border last:border-0"
                >
                  <td className="p-6 font-semibold text-primary">
                    {row.feature}
                  </td>
                  <td className="p-6 text-text-muted">
                    <div className="flex gap-3 items-center">
                      <X size={18} className="text-red-500 shrink-0" />
                      <span>{row.diy}</span>
                    </div>
                  </td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">
                    <div className="flex gap-3 items-center">
                      <Check size={18} className="text-accent shrink-0" />
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
