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
    <section className="py-24 bg-bg relative isolate">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-white transform -skew-y-3 -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4 uppercase tracking-wider">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Your Relocation Roadmap
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            We've distilled the complex move to Asia into four clear, manageable
            phases, removing the friction from your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 z-0"></div>

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-premium group z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-6">
                  <span className="font-heading text-6xl font-bold text-slate-300 absolute -top-4 left-1/2 -translate-x-1/2 z-0 scale-150 pointer-events-none select-none group-hover:text-accent/40 transition-colors">
                    {phase.phase}
                  </span>
                  <div className="bg-white p-4 rounded-2xl shadow-lg relative z-10 border border-border group-hover:border-accent/30 transition-colors">
                    {phase.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
                  {phase.title}
                </h3>
                <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-semibold border-b border-accent/20 pb-2">
                  {phase.subtitle}
                </h4>
              </div>

              <div className="text-center">
                <p className="text-text-muted text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
