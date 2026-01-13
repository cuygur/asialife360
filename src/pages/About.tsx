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
      <section className="section bg-surface overflow-hidden">
        <div className="container">
          <div className="about-hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title text-left">
                The Vision Behind AsiaLife360
              </h1>
              <p className="section-description text-left">
                Founded by former expats who navigated the complexities of
                international relocation firsthand, AsiaLife360 was built to be
                the agency we wish we had.
              </p>
              <div className="about-text-content">
                <p>
                  Most relocation agencies are either giant, faceless
                  corporations or unverified local fixers. We found the middle
                  ground: **institutional-grade legal competence with a
                  boutique, personalized touch**.
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
              className="about-hero-image-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="premium-border-box">
                <div className="stat-floating glass-panel">
                  <span className="stat-num">500+</span>
                  <span className="stat-txt">Families Relocated</span>
                </div>
                <div className="stat-floating stat-floating-bottom glass-panel">
                  <span className="stat-num">100%</span>
                  <span className="stat-txt">Visa Success Rate</span>
                </div>
                <div className="image-placeholder-about">
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The principles that guide every relocation we manage.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="value-card-about glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta-dark">
        <div className="container">
          <div className="about-cta-content text-center">
            <h2>Your Journey Starts with a Conversation</h2>
            <p>
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
