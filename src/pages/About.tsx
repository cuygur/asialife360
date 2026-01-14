import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/common/Button";
import { useModals } from "../context/ModalContext";
import { Globe, Heart, Award, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <Globe size={24} />,
    title: "Global Citizenship",
    desc: "We believe the world belongs to everyone. Our mission is to break down the legal and logistical barriers that keep people stuck in one place.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Uncompromising Integrity",
    desc: "Relocation involves your life savings and your family's future. We never cut corners on legal residency or financial setups.",
  },
  {
    icon: <Award size={24} />,
    title: "Locally Embedded",
    desc: "We aren't just a website. We have physical teams and legal partners on the ground in every destination we represent.",
  },
  {
    icon: <Heart size={24} />,
    title: "Personalized Care",
    desc: "Every move is different. We treat your relocation with the same precision and empathy we would use for our own family.",
  },
];

export const About: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <Layout>
      <section className="py-24 bg-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary text-left">
                The Vision Behind AsiaLife360
              </h1>
              <p className="text-xl text-text-muted mb-8 leading-relaxed text-left">
                Founded by former expats who navigated the complexities of
                international relocation firsthand, AsiaLife360 was built to be
                the agency we wish we had.
              </p>
              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  Most relocation agencies are either giant, faceless
                  corporations or unverified local fixers. We found the middle
                  ground:{" "}
                  <span className="font-bold text-primary italic">
                    institutional-grade legal competence with a boutique,
                    personalized touch
                  </span>
                  .
                </p>
                <p>
                  We focus exclusively on the UAE and Southeast Asia because we
                  believe these regions offer the highest return on
                  life—combining tax efficiency, safety, and a quality of living
                  that is becoming increasingly rare in the West.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-4 border border-accent/20 rounded-3xl">
                <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-premium z-10 flex flex-col">
                  <span className="text-3xl font-bold text-primary">500+</span>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    Families Relocated
                  </span>
                </div>
                <div className="absolute bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-premium z-10 flex flex-col">
                  <span className="text-3xl font-bold text-primary">100%</span>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    Visa Success Rate
                  </span>
                </div>
                <div className="aspect-square bg-bg rounded-2xl flex items-center justify-center border border-border">
                  {/* Hero image could be a photo of the team or a premium office */}
                  <Globe
                    size={120}
                    strokeWidth={1}
                    className="text-accent opacity-20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
              Our Core Values
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              The principles that guide every relocation we manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-white border border-border shadow-sm transition-all duration-300 hover:shadow-premium hover:translate-y-[-5px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {val.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
              Your Journey Starts with a Conversation
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              We don't take on every client. We only work with those where we
              are 100% certain we can deliver a life-changing upgrade.
            </p>
            <Button variant="accent" size="lg" onClick={openBooking}>
              Request Your Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
