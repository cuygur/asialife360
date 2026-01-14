import React from "react";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { ctaContent } from "../../data/homeContent";

interface CallToActionProps {
  onBookClick?: () => void;
  onDownloadClick?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onBookClick,
  onDownloadClick,
}) => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-6 text-white leading-[1.1]">
            {ctaContent.title}
          </h2>
          <p className="text-xl opacity-90 max-w-[700px] mx-auto mb-10 leading-relaxed">
            {ctaContent.description}
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Button variant="accent" size="lg" onClick={onBookClick}>
              {ctaContent.buttonLabel}
            </Button>

            <div className="text-sm opacity-80">{ctaContent.subText}</div>

            <div className="mt-8">
              <button
                className="bg-transparent border-none underline text-accent transition-colors duration-200 cursor-pointer text-base hover:text-accent-hover"
                onClick={onDownloadClick}
              >
                {ctaContent.linkText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
