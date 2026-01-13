import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { destinationsContent } from "../data/homeContent";
import { Button } from "../components/common/Button";
import {
  CheckCircle2,
  MapPin,
  TrendingUp,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import { useModals } from "../context/ModalContext";

// Assets (Using existing ones where possible, others can be generated or use external)
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

export const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { openBooking } = useModals();

  const destination = destinationsContent.find((d) => d.id === id);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  const heroImg = imageMap[destination.heroImage] || heroBali;

  return (
    <Layout>
      <section className="dest-detail-hero">
        <div className="dest-detail-bg">
          <img src={heroImg} alt={destination.name} className="hero-image" />
          <div className="hero-darken-overlay"></div>
        </div>

        <div className="container dest-detail-content">
          <Link to="/" className="back-btn">
            <ArrowLeft size={18} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="dest-detail-tag">{destination.stat}</span>
            <h1 className="dest-detail-title">{destination.name}</h1>
            <p className="dest-detail-desc">{destination.description}</p>
            <div className="dest-detail-actions">
              <Button variant="accent" size="lg" onClick={openBooking}>
                Speak to our {destination.name} Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section dest-detail-info">
        <div className="container">
          <div className="dest-info-grid">
            <motion.div
              className="dest-main-info"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="info-title">
                Why Relocate to {destination.name}?
              </h2>
              <p className="info-text">{destination.lifestyle}</p>

              <div className="highlights-grid">
                {destination.highlights.map((item, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="dest-sidebar-info"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="info-card glass-panel">
                <h3 className="card-heading">Relocation Stats</h3>
                <div className="stat-row">
                  <div className="stat-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="stat-meta">
                    <label>Region</label>
                    <span>{destination.tags[1]}</span>
                  </div>
                </div>
                <div className="stat-row">
                  <div className="stat-icon">
                    <DollarSign size={20} />
                  </div>
                  <div className="stat-meta">
                    <label>Cost of Living</label>
                    <span>{destination.costOfLiving.split(".")[0]}.</span>
                  </div>
                </div>
                <div className="stat-row">
                  <div className="stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="stat-meta">
                    <label>Primary Benefit</label>
                    <span>{destination.tags[0]}</span>
                  </div>
                </div>
              </div>

              <div className="cta-sidebar glass-panel">
                <h4>Ready to move?</h4>
                <p>
                  Our legal team in {destination.name.split(",")[0]} is ready to
                  start your visa process.
                </p>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={openBooking}
                >
                  Start Now
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};
