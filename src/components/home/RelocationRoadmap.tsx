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
    <section className="section section-roadmap bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Your Relocation Roadmap</h2>
          <p className="section-description">
            We've distilled the complex move to Asia into four clear, manageable
            phases.
          </p>
        </div>

        <div className="roadmap-grid">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="roadmap-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="roadmap-card-header">
                <span className="phase-number">{phase.phase}</span>
                <div className="phase-icon-wrapper">{phase.icon}</div>
              </div>
              <div className="roadmap-card-body">
                <h3 className="phase-title">{phase.title}</h3>
                <h4 className="phase-subtitle">{phase.subtitle}</h4>
                <p className="phase-description">{phase.description}</p>
              </div>
              {index < phases.length - 1 && (
                <div className="roadmap-connector hidden-md"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
