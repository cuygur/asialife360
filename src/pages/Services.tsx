import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { ShieldCheck, Home, Landmark, Users, CheckCircle } from "lucide-react";
import { Button } from "../components/common/Button";
import { useModals } from "../context/ModalContext";

const services = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Visa & Residency",
    desc: "We handle the entire application process for Golden Visas (UAE), Elite/LTR Visas (Thailand), and Retirement Visas. No gov-site confusion, just a guaranteed outcome.",
    features: [
      "Attorney-verified applications",
      "Expedited processing",
      "Document legalization",
    ],
  },
  {
    icon: <Home size={32} />,
    title: "Premium Housing Search",
    desc: "Finding a home in a foreign country is high-risk. We use local agents to find off-market listings, verify landlords, and handle all lease negotiations.",
    features: [
      "Video walkthroughs",
      "Legal contract review",
      "Neighborhood safety audits",
    ],
  },
  {
    icon: <Landmark size={32} />,
    title: "Tax & Banking Architecture",
    desc: "Relocating is the first step; protecting your wealth is the second. We assist with offshore banking setups and ensuring you meet tax holiday requirements.",
    features: [
      "Personal banking setup",
      "Tax residency certificates",
      "Local tax filing guidance",
    ],
  },
  {
    icon: <Users size={32} />,
    title: "Expat Concierge",
    desc: "Don't move into a vacuum. We plug you into high-net-worth expat circles, find the best international schools, and handle utility setups.",
    features: [
      "Private networking events",
      "School placement assistance",
      "Utility & car concierge",
    ],
  },
];

export const Services: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <Layout>
      <section className="section bg-surface">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title">Our White-Glove Services</h1>
            <p className="section-description">
              Moving your life across the world shouldn't feel like a gamble. We
              provide a full-spectrum solution covering every legal and
              lifestyle detail.
            </p>
          </motion.div>

          <div className="services-list">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-detail-card glass-panel"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="service-icon-box">{service.icon}</div>
                <div className="service-text-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <ul className="service-features-list">
                    {service.features.map((feat, index) => (
                      <li key={index}>
                        <CheckCircle size={16} className="text-accent" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-footer-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>One Agency. One Fee. Total Peace.</h2>
            <p>
              Our comprehensive relocation package covers everything from
              landing to living.
            </p>
            <Button variant="accent" size="lg" onClick={openBooking}>
              Discuss Your Full Package
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
