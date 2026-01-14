import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "../common/Button";

const caseStudies = [
  {
    name: "The Miller Family",
    type: "Retiree",
    destination: "Thailand",
    challenge:
      "Overwhelmed by retirement visa requirements and finding quality healthcare proximity.",
    outcome:
      "Relocated to a private villa in Hua Hin, 5 minutes from a JCI-accredited hospital. Full visa approval in 4 weeks.",
    quote:
      "We thought moving at 65 was too risky. AsiaLife360 made it feel like moving next door, but with better weather and lower costs.",
  },
  {
    name: "Sarah J.",
    type: "Remote Professional",
    destination: "UAE",
    challenge:
      "Needed 0% tax residency and a high-speed business environment to scale her SaaS company.",
    outcome:
      "Golden Visa secured. Corporate banking set up. Now living in a Dubai Marina penthouse with a thriving network.",
    quote:
      "The tax savings alone paid for the entire relocation service in the first month. Incredible ROI.",
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
            Real Transformations
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            From bureaucratic struggle to tropical paradise. See how we've
            helped others make the leap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-10 rounded-xl bg-white/70 backdrop-blur-xl border border-white/30 shadow-premium flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase tracking-widest text-text-muted font-bold">
                  {study.type}
                </span>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  {study.destination}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-primary">
                {study.name}
              </h3>

              <div className="space-y-6 mb-10">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-text-muted font-bold opacity-70">
                    The Challenge
                  </h4>
                  <p className="text-text">{study.challenge}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-text-muted font-bold opacity-70">
                    The Outcome
                  </h4>
                  <p className="text-emerald font-semibold">{study.outcome}</p>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-border/50">
                <Quote size={24} className="text-accent opacity-50 mb-2" />
                <p className="italic text-text">"{study.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Success Stories{" "}
            <ArrowRight
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
