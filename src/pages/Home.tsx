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
// Assets
import heroDubai from "../assets/hero-dubai.png";
import heroBali from "../assets/hero-bali.png";

export const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 80px)",
          overflow: "hidden",
          display: "flex",
          padding: "4rem 0",
        }}
      >
        {/* Split Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            zIndex: -1,
          }}
          className="hero-bg-split"
        >
          <div style={{ flex: 1, position: "relative" }}>
            <img
              src={heroDubai}
              alt="Dubai Coworking"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.3))",
              }}
            ></div>
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <img
              src={heroBali}
              alt="Bali Villa"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.3))",
              }}
            ></div>
          </div>
          {/* Overlay to merge them slightly or darken for text contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
            }}
          ></div>
        </div>

        {/* Content Overlay */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              color: "white",
            }}
          >
            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                color: "white",
              }}
            >
              Design Your Ideal Life. <br />
              <span style={{ color: "var(--color-accent)" }}>
                We Handle the Move.
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                marginBottom: "2.5rem",
                opacity: 0.95,
                maxWidth: "650px",
                margin: "0 auto 2.5rem auto",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              The premier relocation agency for professionals and retirees
              moving to the UAE and Southeast Asia. Experience the power of
              geographic arbitrage—safely, legally, and seamlessly.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button variant="accent" size="lg">
                Book Your Discovery Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                Explore Destinations
              </Button>
            </div>
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .hero-bg-split {
              flex-direction: column !important;
            }
            .hero-title {
              font-size: 2.8rem !important;
            }
          }
        `}</style>
      </section>

      <TrustBar />
      <ValueProposition />
      <Destinations />
      <Segmentation />
      <WhyUs />
      <CallToAction />
    </Layout>
  );
};
