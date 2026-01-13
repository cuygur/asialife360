import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { destinationsContent } from "../data/homeContent";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button } from "../components/common/Button";
import { useModals } from "../context/ModalContext";

// Assets
import heroDubai from "../assets/hero-dubai.png";
import heroBali from "../assets/hero-bali.png";
import heroBangkok from "../assets/hero-bangkok.png";
import heroPhilippines from "../assets/hero-philippines.png";

const imageMap: Record<string, string> = {
  "hero-dubai.png": heroDubai,
  "hero-bali.png": heroBali,
  "hero-bangkok.png": heroBangkok,
  "hero-philippines.png": heroPhilippines,
};

export const DestinationsOverview: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <Layout>
      <section className="section bg-surface">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">Explore Your Next Chapter</h1>
            <p className="section-description">
              From the tax-free skyscrapers of Dubai to the serene jungles of
              Bali, we only recommend destinations where we have deep local
              roots and legal expertise.
            </p>
          </motion.div>

          <div className="dest-overview-list">
            {destinationsContent.map((dest, i) => (
              <motion.div
                key={dest.id}
                className="dest-overview-card glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="dest-overview-img">
                  <img src={imageMap[dest.heroImage]} alt={dest.name} />
                  <div className="dest-overview-overlay">
                    <span className="dest-stat-pill">{dest.stat}</span>
                  </div>
                </div>

                <div className="dest-overview-content">
                  <div className="dest-overview-tags">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="dest-tag-small">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="dest-card-title">{dest.name}</h2>
                  <p className="dest-card-text">{dest.description}</p>

                  <div className="dest-card-footer">
                    <Link
                      to={`/destinations/${dest.id}`}
                      className="dest-card-link"
                    >
                      View Dossier <ArrowRight size={16} />
                    </Link>
                    <Button variant="outline" size="sm" onClick={openBooking}>
                      Check Visa
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta-small">
        <div className="container">
          <div className="cta-small-box glass-panel">
            <div className="cta-icon-group">
              <Shield className="text-accent" size={32} />
              <Globe className="text-accent" size={32} />
              <Zap className="text-accent" size={32} />
            </div>
            <h3>Custom Relocation Roadmap</h3>
            <p>
              Not sure which one fits your tax profile and lifestyle? Let's fix
              that.
            </p>
            <Button variant="accent" size="lg" onClick={openBooking}>
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
