import React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardCheck, PlaneTakeoff, Home } from "lucide-react";

const phases = [
  {
    phase: "01",
    title: "Discovery",
    subtitle: "The Blueprints",
    description:
      "Strategic assessment, visa selection, and personal relocation roadmap design.",
    icon: <Search className="text-accent" size={32} />,
  },
  {
    phase: "02",
    title: "Logistics",
    subtitle: "The Foundation",
    description:
      "Real estate scouting, document apostillation, and legal entity processing.",
    icon: <ClipboardCheck className="text-accent" size={32} />,
  },
  {
    phase: "03",
    title: "Transition",
    subtitle: "The Flight",
    description:
      "Private banking setup, medical insurance, and airport concierge escort.",
    icon: <PlaneTakeoff className="text-accent" size={32} />,
  },
  {
    phase: "04",
    title: "Integration",
    subtitle: "The Arrival",
    description:
      "Community introduction, school placement, and local orientation.",
    icon: <Home className="text-accent" size={32} />,
  },
];

export const RelocationRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
            Your Relocation Roadmap
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            We've distilled the complex move to Asia into four clear, manageable
            phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-bg rounded-xl border border-border transition-all duration-300 h-full hover:translate-y-[-5px] hover:shadow-lg hover:border-accent group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-heading text-4xl font-bold text-primary opacity-10 leading-none">
                  {phase.phase}
                </span>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  {phase.icon}
                </div>
              </div>
              <div className="roadmap-card-body">
                <h3 className="text-2xl font-bold mb-1 text-primary">
                  {phase.title}
                </h3>
                <h4 className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                  {phase.subtitle}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
              {index < phases.length - 1 && (
                <div className="absolute top-1/2 right-[-1.5rem] w-8 h-[1px] bg-border z-1 hidden lg:block"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
