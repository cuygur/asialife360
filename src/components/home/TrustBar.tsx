import React from "react";
import { ShieldCheck, Users, Globe2, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={24} />,
    label: "Families Relocated",
    value: "500+",
  },
  {
    icon: <ShieldCheck size={24} />,
    label: "Visa Approval Rate",
    value: "100%",
  },
  { icon: <Globe2 size={24} />, label: "Key Regions", value: "4" },
  { icon: <Star size={24} />, label: "Client Satisfaction", value: "5.0/5" },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/50 bg-surface/50 relative z-20 -mt-10 mx-4 md:mx-10 rounded-2xl shadow-glass backdrop-blur-md border border-white/40">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center divide-x divide-primary/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="text-accent mb-3 p-3 bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <div className="font-heading font-bold text-3xl text-primary leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
