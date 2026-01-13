import React from "react";
import { Button } from "../common/Button";
import { ctaContent } from "../../data/homeContent";

export const CallToAction: React.FC = () => {
  return (
    <section className="section section-cta">
      {/* Background Accent */}
      <div className="cta-bg-glow"></div>

      <div className="container cta-container">
        <h2 className="cta-title">{ctaContent.title}</h2>
        <p className="cta-description">{ctaContent.description}</p>
        <div className="cta-actions">
          <Button variant="accent" size="lg">
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
