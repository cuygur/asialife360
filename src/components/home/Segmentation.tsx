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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-8 text-primary">
            {segmentationContent.title}
          </h2>
          <div className="flex gap-4 justify-center flex-wrap bg-surface p-2 rounded-full inline-flex border border-border/50">
            {segmentationContent.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 font-medium z-10 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-text-muted hover:text-primary"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.id === "remote" ? (
                  <Briefcase
                    size={18}
                    className={activeTab === tab.id ? "text-accent" : ""}
                  />
                ) : (
                  <Sun
                    size={18}
                    className={activeTab === tab.id ? "text-accent" : ""}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="p-10 md:p-14 rounded-3xl bg-white border border-border shadow-xl relative overflow-hidden"
            >
              {/* Decorative blob for content */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-6 text-primary leading-tight">
                    {activeData.title}
                  </h3>
                  <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    {activeData.description}
                  </p>

                  <div className="mb-0">
                    <div className="text-xs uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-accent"></span>
                      Top Picks
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {activeData.topPicks.map((pick) => (
                        <span
                          key={pick}
                          className="px-5 py-2.5 rounded-xl bg-surface border border-border/50 text-sm font-semibold text-primary hover:border-accent/30 transition-colors cursor-default"
                        >
                          {pick}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-8 bg-surface/50 rounded-2xl border border-border/50">
                  <div className="text-center mb-6">
                    <p className="text-text-muted italic mb-4">
                      "Ready to optimize your lifestyle?"
                    </p>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full opacity-20"></div>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onBookClick}
                    className="w-full shadow-lg shadow-primary/20"
                  >
                    {activeData.buttonLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
