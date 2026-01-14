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
      <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 uppercase tracking-widest">
                Our Origin Story
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-primary leading-tight">
                The Vision Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                  AsiaLife360
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed font-light">
                Founded by former expats who navigated the complexities of
                international relocation firsthand, AsiaLife360 was built to be
                the agency we wish we had.
              </p>

              <div className="space-y-6 text-lg text-text leading-relaxed">
                <p>
                  Most relocation agencies are either giant, faceless
                  corporations or unverified local fixers. We found the middle
                  ground:{" "}
                  <span className="font-bold text-primary">
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

              <div className="mt-12 pt-12 border-t border-border flex items-center gap-12">
                <div>
                  <span className="block text-4xl font-bold text-primary mb-1">
                    500+
                  </span>
                  <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Families Rehomed
                  </span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-primary mb-1">
                    100%
                  </span>
                  <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Visa Success Rate
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <div className="flex gap-1 mb-2">
                      <StarFilled size={20} className="text-accent" />
                      <StarFilled size={20} className="text-accent" />
                      <StarFilled size={20} className="text-accent" />
                      <StarFilled size={20} className="text-accent" />
                      <StarFilled size={20} className="text-accent" />
                    </div>
                    <p className="italic text-lg opaciity-90">
                      "They didn't just move us. They upgraded our entire
                      existence."
                    </p>
                    <p className="mt-4 font-bold uppercase text-sm tracking-widest opacity-70">
                      — Sarah & James, Dubai
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-[50px] -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-[50px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface relative isolate">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-text-muted leading-relaxed">
              Relocation is personal. These principles guide every decision we
              make for your future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-premium hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-surface to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary transition-all duration-300 mb-6 shadow-inner">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {val.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed group-hover:text-text transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white tracking-tight">
              Your Journey Starts with a Conversation
            </h2>
            <p className="text-white/70 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              We don't take on every client. We only work with those where we
              are 100% certain we can deliver a life-changing upgrade.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={openBooking}
              className="px-10 py-5 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
            >
              Request Your Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const StarFilled = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);
