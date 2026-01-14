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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-8 text-primary">
            {segmentationContent.title}
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {segmentationContent.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white text-text-muted border-border hover:border-accent hover:text-accent"
                }`}
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
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-10 rounded-xl bg-bg border border-border"
            >
              <h3 className="text-3xl font-bold mb-4 text-primary">
                {activeData.title}
              </h3>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                {activeData.description}
              </p>

              <div className="mb-8">
                <div className="text-sm uppercase tracking-widest text-accent font-bold mb-3">
                  Top Picks
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeData.topPicks.map((pick) => (
                    <span
                      key={pick}
                      className="px-4 py-2 rounded-lg bg-white border border-border text-sm font-medium text-text-muted"
                    >
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
