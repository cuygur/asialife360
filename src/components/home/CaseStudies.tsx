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
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white/0 to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
            Real Transformations
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            From bureaucratic struggle to tropical paradise. See how we've
            helped others make the leap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-10 md:pl-12 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-glass flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-premium relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent/20 group-hover:bg-accent transition-colors" />

              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {study.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary leading-none mb-1">
                      {study.name}
                    </h3>
                    <div className="text-xs uppercase tracking-widest text-text-muted font-bold">
                      {study.type}
                    </div>
                  </div>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                  {study.destination}
                </span>
              </div>

              <div className="space-y-6 mb-10 flex-grow">
                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100/50">
                  <h4 className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                    Challenge
                  </h4>
                  <p className="text-text-muted text-sm">{study.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
                  <h4 className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Outcome
                  </h4>
                  <p className="text-emerald-800 font-medium text-sm">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-border/50 relative">
                <Quote
                  size={40}
                  className="text-accent/10 absolute -top-5 left-0"
                />
                <p className="italic text-primary/80 relative z-10 pl-6 border-l-2 border-accent/20">
                  "{study.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="group border-border hover:border-accent hover:text-accent bg-white/50 backdrop-blur-sm"
          >
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
