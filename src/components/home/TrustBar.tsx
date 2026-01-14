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
    <section className="py-8 border-b border-border bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center"
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
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-center gap-4 justify-center"
            >
              <div className="text-accent flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-xl text-primary leading-none">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
