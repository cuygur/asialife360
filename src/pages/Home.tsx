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

      <section className="hero-section">
        {/* Split Background */}
        <div className="hero-bg-split">
          <div className="hero-bg-cell">
            <img
              src={heroDubai}
              alt="Luxury skyline and modern architecture in Dubai, UAE"
              className="hero-image"
              loading="eager"
              fetchPriority="high"
            />

            <div className="hero-overlay-gradient-left"></div>
          </div>
          <div className="hero-bg-cell">
            <img
              src={heroBali}
              alt="Serene tropical paradise and nature in Bali, Indonesia"
              className="hero-image"
              loading="eager"
              fetchPriority="high"
            />

            <div className="hero-overlay-gradient-right"></div>
          </div>

          <div className="hero-darken-overlay"></div>
        </div>

        {/* Content Overlay */}
        <div className="container hero-content-container">
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
            className="hero-text-content"
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
              className="hero-title"
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
              className="hero-description"
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
              className="hero-actions"
            >
              <Button variant="accent" size="lg" onClick={openBooking}>
                Book Relocation Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-hero-outline"
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
