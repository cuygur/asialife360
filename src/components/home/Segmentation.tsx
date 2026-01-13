import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Sun } from "lucide-react";
import { Button } from "../common/Button";
import { segmentationContent } from "../../data/homeContent";

interface SegmentationProps {
  onBookClick?: () => void;
}

export const Segmentation: React.FC<SegmentationProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState(segmentationContent.tabs[0].id);

  const activeData = segmentationContent.tabs.find(
    (tab) => tab.id === activeTab
  )!;

  return (
    <section className="section section-segmentation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{segmentationContent.title}</h2>
          <div className="tab-container">
            {segmentationContent.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.id === "remote" ? (
                  <Briefcase size={18} />
                ) : (
                  <Sun size={18} />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="segmentation-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="segment-card"
            >
              <h3 className="segment-title">{activeData.title}</h3>
              <p className="segment-description">{activeData.description}</p>

              <div className="segment-tags-container">
                <div className="segment-tags-title">Top Picks</div>
                <div className="segment-tags">
                  {activeData.topPicks.map((pick) => (
                    <span key={pick} className="segment-tag">
                      {pick}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="lg" onClick={onBookClick}>
                {activeData.buttonLabel}
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
