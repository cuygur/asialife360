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
    <section className="section section-case-studies bg-surface">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Transformations</h2>
          <p className="section-description">
            From bureaucratic struggle to tropical paradise. See how we've
            helped others make the leap.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="case-study-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="case-study-header">
                <span className="case-study-type">{study.type}</span>
                <span className="case-study-dest">{study.destination}</span>
              </div>
              <h3 className="case-study-name">{study.name}</h3>

              <div className="case-study-content">
                <div className="content-segment">
                  <h4 className="segment-label">The Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div className="content-segment">
                  <h4 className="segment-label">The Outcome</h4>
                  <p className="text-tropical-emerald font-semibold">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="case-study-quote">
                <Quote size={24} className="text-accent opacity-50 mb-2" />
                <p className="italic">"{study.quote}"</p>
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
