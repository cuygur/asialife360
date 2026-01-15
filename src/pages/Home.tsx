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

      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-primary isolate">
        {/* Split Background with improved gradient blending */}
        <div className="absolute inset-0 flex flex-col md:flex-row z-[-1]">
          <div className="flex-1 relative h-full">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="h-full w-full"
            >
              <img
                src={heroDubai}
                alt="Luxury skyline and modern architecture in Dubai, UAE"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
          </div>
          <div className="flex-1 relative h-full">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="h-full w-full"
            >
              <img
                src={heroBali}
                alt="Serene tropical paradise and nature in Bali, Indonesia"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/40 to-transparent"></div>
          </div>

          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                  duration: 0.8,
                },
              },
            }}
            className="max-w-[1000px] mx-auto"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wide mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              PREMIER RELOCATION SERVICES
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight text-white drop-shadow-lg"
            >
              Relocate to Asia with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                Absolute Certainty
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                },
              }}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Bespoke relocation strategies for high-net-worth individuals
              seeking lifestyle arbitrage, tax optimization, and security in the
              East.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                },
              }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
            >
              <Button
                variant="accent"
                size="lg"
                onClick={openBooking}
                className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-accent/20"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[200px] !text-white !border-white/30 !bg-white/5 backdrop-blur-md hover:!bg-white/15 hover:!border-white/50 transition-all"
                onClick={() => navigate("/destinations")}
              >
                Explore Destinations
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </motion.div>
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
