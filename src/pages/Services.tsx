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
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary leading-tight">
              The Effortless Relocation Engine
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Moving your life to Asia should feel like an upgrade, not a battle
              with bureaucracy. Our white-glove services replace anxiety with
              absolute legal and logistical certainty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-premium flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 pt-2">
                    {service.features.map((feat, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm font-medium text-primary"
                      >
                        <CheckCircle
                          size={16}
                          className="text-accent shrink-0"
                        />{" "}
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center p-12 rounded-3xl bg-primary text-white shadow-premium max-w-4xl mx-auto overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
              One Agency. One Fee. Total Peace.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Our comprehensive relocation package covers everything from
              landing to living.
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={openBooking}
              className="relative z-10 min-w-[250px]"
            >
              Discuss Your Full Package
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
