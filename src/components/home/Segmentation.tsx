import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Sun } from "lucide-react";
import { Button } from "../common/Button";

export const Segmentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"remote" | "retiree">("remote");

  return (
    <section className="section" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Tailored to Your Stage of Life
          </h2>
          <div
            style={{
              display: "inline-flex",
              padding: "0.5rem",
              backgroundColor: "#F1F5F9",
              borderRadius: "0.5rem",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setActiveTab("remote")}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                backgroundColor:
                  activeTab === "remote" ? "white" : "transparent",
                color:
                  activeTab === "remote" ? "var(--color-primary)" : "#64748b",
                boxShadow:
                  activeTab === "remote" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Briefcase size={18} /> Remote Professional
            </button>
            <button
              onClick={() => setActiveTab("retiree")}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                backgroundColor:
                  activeTab === "retiree" ? "white" : "transparent",
                color:
                  activeTab === "retiree" ? "var(--color-primary)" : "#64748b",
                boxShadow:
                  activeTab === "retiree"
                    ? "0 1px 3px rgba(0,0,0,0.1)"
                    : "none",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Sun size={18} /> The Golden Years
            </button>
          </div>
        </div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            minHeight: "300px",
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "remote" ? (
              <motion.div
                key="remote"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  For the Digital Nomad & Entrepreneur
                </h3>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "#64748b",
                    marginBottom: "2rem",
                  }}
                >
                  Fast Wi-Fi, tax efficiency, and a thriving network. We set up
                  your tax residency, find coworking-friendly penthouses, and
                  plug you into the local business ecosystem immediately.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                      Top Picks
                    </div>
                    <ul style={{ color: "#64748b" }}>
                      <li>UAE (Tax Free)</li>
                      <li>Thailand (Community)</li>
                    </ul>
                  </div>
                </div>
                <Button variant="primary">Start Your Business Move</Button>
              </motion.div>
            ) : (
              <motion.div
                key="retiree"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  Retire in Luxury & Peace
                </h3>
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "#64748b",
                    marginBottom: "2rem",
                  }}
                >
                  World-class healthcare, safety, and purchasing power. We
                  navigate retirement visas, ensure proximity to international
                  hospitals, and find quiet, fully-serviced communities.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                      Top Picks
                    </div>
                    <ul style={{ color: "#64748b" }}>
                      <li>Thailand (Healthcare)</li>
                      <li>Philippines (Value)</li>
                    </ul>
                  </div>
                </div>
                <Button variant="primary">Plan Your Retirement</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
