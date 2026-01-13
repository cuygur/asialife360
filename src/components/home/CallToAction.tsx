import React from "react";
import { Button } from "../common/Button";
import { ctaContent } from "../../data/homeContent";

interface CallToActionProps {
  onBookClick?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookClick }) => {
  return (
    <section className="section section-cta">
      {/* Background Accent */}
      <div className="cta-bg-glow"></div>

      <div className="container cta-container">
        <h2 className="cta-title">{ctaContent.title}</h2>
        <p className="cta-description">{ctaContent.description}</p>
        <div className="cta-actions">
          <Button variant="accent" size="lg" onClick={onBookClick}>
            {ctaContent.buttonLabel}
          </Button>

          <div className="cta-subtext">{ctaContent.subText}</div>

          <div className="cta-link-wrapper">
            <a href="#" className="cta-link">
              {ctaContent.linkText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
