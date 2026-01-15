import React from "react";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { ShieldCheck, Home, Landmark, Users } from "lucide-react";
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
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        {/* Background */}
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary z-10" />
          <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent font-bold text-sm mb-8 uppercase tracking-widest backdrop-blur-md">
              End-to-End Relocation
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white">
              The Effortless <br />{" "}
              <span className="text-white">Relocation Engine</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Moving your life to Asia should feel like an upgrade, not a battle
              with bureaucracy. Our white-glove services replace anxiety with
              absolute legal and logistical certainty.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bg relative z-10 -mt-10 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="group p-10 rounded-3xl bg-white border border-border shadow-sm hover:shadow-premium hover:border-accent/20 transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-surface to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-surface border border-border group-hover:border-accent/20 flex items-center justify-center shrink-0 text-primary group-hover:text-accent transition-colors shadow-inner">
                  {service.icon}
                </div>
                <div className="space-y-4 relative z-10">
                  <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 pt-4">
                    {service.features.map((feat, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm font-medium text-primary/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center p-12 md:p-20 rounded-3xl bg-primary text-white shadow-2xl shadow-primary/30 max-w-5xl mx-auto overflow-hidden relative isolate"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* CTA Background */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
                One Agency. One Fee. Total Peace.
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full"></div>

              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Our comprehensive relocation package covers everything from
                landing to living. No hidden costs, no surprise hurdles.
              </p>
              <Button
                variant="accent"
                size="lg"
                onClick={openBooking}
                className="min-w-[260px] md:min-w-[280px] py-4 md:py-5 text-base md:text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
              >
                Discuss Your Full Package
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
