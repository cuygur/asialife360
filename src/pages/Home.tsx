import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/common/Button";
import { Layout } from "../components/layout/Layout";
// Components
import { TrustBar } from "../components/home/TrustBar";
import { ValueProposition } from "../components/home/ValueProposition";
import { Destinations } from "../components/home/Destinations";
import { Segmentation } from "../components/home/Segmentation";
import { RelocationRoadmap } from "../components/home/RelocationRoadmap";
import { WhyUs } from "../components/home/WhyUs";
import { CaseStudies } from "../components/home/CaseStudies";
import { CallToAction } from "../components/home/CallToAction";
// Data
// Assets
import heroDubai from "../assets/hero-dubai.png";
import heroBali from "../assets/hero-bali.png";
import { useNavigate } from "react-router-dom";
import { useModals } from "../context/ModalContext";

export const Home: React.FC = () => {
  const { openBooking, openDownload } = useModals();
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden flex py-16 bg-primary isolate">
        {/* Split Background */}
        <div className="absolute inset-0 flex flex-col md:flex-row z-[-1] bg-primary">
          <div className="flex-1 relative">
            <img
              src={heroDubai}
              alt="Luxury skyline and modern architecture in Dubai, UAE"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30"></div>
          </div>
          <div className="flex-1 relative">
            <img
              src={heroBali}
              alt="Serene tropical paradise and nature in Bali, Indonesia"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-primary/70 to-primary/30"></div>
          </div>

          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="max-w-[900px] mx-auto text-center text-white"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
                },
              }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold mb-6 leading-[1.1] [text-shadow:0_4px_12px_rgba(0,0,0,0.8)] text-white"
            >
              Relocate to Asia with <br />
              <span className="text-accent">Absolute Certainty</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
                },
              }}
              className="text-[clamp(1.1rem,2.5vw,1.4rem)] mb-8 opacity-90 max-w-[700px] mx-auto [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] leading-[1.6]"
            >
              Bespoke relocation services for high-net-worth retirees and global
              professionals seeking lifestyle arbitrage in the UAE, Thailand,
              Philippines, and Indonesia.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
                },
              }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button variant="accent" size="lg" onClick={openBooking}>
                Book Relocation Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="!text-white !border-white !bg-white/10 backdrop-blur-[4px] hover:!bg-white/20"
                onClick={() => navigate("/destinations")}
              >
                Explore Destinations
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustBar />
      <RelocationRoadmap />
      <ValueProposition onBookClick={openBooking} />
      <Destinations />
      <Segmentation onBookClick={openBooking} />
      <WhyUs />
      <CaseStudies />
      <CallToAction onBookClick={openBooking} onDownloadClick={openDownload} />
    </Layout>
  );
};
