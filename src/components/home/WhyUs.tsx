import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { whyUsContent } from "../../data/homeContent";

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
            The Advantage
          </div>
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
            {whyUsContent.title}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {whyUsContent.description}
          </p>
        </motion.div>

        <div className="hidden md:block overflow-hidden rounded-2xl shadow-premium border border-border bg-white">
          <table className="w-full border-collapse min-w-[700px]">
            <thead>
              <motion.tr className="bg-primary text-white">
                <th className="w-1/4 p-8 text-left font-heading text-lg">
                  Feature
                </th>
                <th className="w-[37.5%] p-8 text-left text-white/60 font-medium">
                  The Hard Way (DIY)
                </th>
                <th className="w-[37.5%] p-8 text-left text-accent font-bold bg-white/5 border-l border-white/10">
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
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {whyUsContent.comparison.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors group"
                >
                  <td className="p-8 font-semibold text-primary group-hover:text-accent transition-colors">
                    {row.feature}
                  </td>
                  <td className="p-8 text-text-muted">
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 min-w-[18px]">
                        <X size={18} className="text-red-400/70" />
                      </div>
                      <span className="text-sm leading-relaxed">{row.diy}</span>
                    </div>
                  </td>
                  <td className="p-8 font-medium text-primary bg-primary/[0.02] border-l border-border group-hover:bg-accent/[0.03] transition-colors">
                    <div className="flex gap-4 items-start">
                      <div className="mt-1 min-w-[18px]">
                        <Check size={18} className="text-accent" />
                      </div>
                      <span className="text-sm leading-relaxed">{row.us}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {whyUsContent.comparison.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
            >
              <div className="bg-surface p-4 border-b border-border">
                <h3 className="font-heading font-bold text-primary text-lg">
                  {row.feature}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                {/* DIY Section */}
                <div className="flex gap-3 items-start opacity-70">
                  <div className="mt-1 min-w-[18px]">
                    <X size={18} className="text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-text-muted block mb-1">
                      The Hard Way
                    </span>
                    <span className="text-sm text-text-muted leading-relaxed">
                      {row.diy}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-border/50 w-full" />

                {/* Us Section */}
                <div className="flex gap-3 items-start">
                  <div className="mt-1 min-w-[18px]">
                    <div className="bg-accent/10 rounded-full p-0.5">
                      <Check size={14} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-accent block mb-1">
                      AsiaLife360
                    </span>
                    <span className="text-sm font-medium text-primary leading-relaxed">
                      {row.us}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
