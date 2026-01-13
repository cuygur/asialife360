import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/common/Button";
import { Layout } from "../components/layout/Layout";
// Components
import { TrustBar } from "../components/home/TrustBar";
import { ValueProposition } from "../components/home/ValueProposition";
import { Destinations } from "../components/home/Destinations";
import { Segmentation } from "../components/home/Segmentation";
import { WhyUs } from "../components/home/WhyUs";
import { CallToAction } from "../components/home/CallToAction";
// Data
import { heroContent } from "../data/homeContent";
// Assets
import heroDubai from "../assets/hero-dubai.png";
import heroBali from "../assets/hero-bali.png";
import { useModals } from "../context/ModalContext";

export const Home: React.FC = () => {
  const { openBooking, openDownload } = useModals();

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
              {heroContent.title} <br />
              <span className="text-accent">{heroContent.accentTitle}</span>
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
              {heroContent.description}
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
                {heroContent.buttons.primary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-hero-outline"
                onClick={() => {
                  const dest = document.querySelector(".section-destinations");
                  dest?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {heroContent.buttons.secondary}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustBar />
      <ValueProposition onBookClick={openBooking} />
      <Destinations />
      <Segmentation onBookClick={openBooking} />
      <WhyUs />
      <CallToAction onBookClick={openBooking} onDownloadClick={openDownload} />
    </Layout>
  );
};
