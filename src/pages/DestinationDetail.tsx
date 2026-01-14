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
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt={destination.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Destinations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary font-bold text-sm mb-6">
              {destination.stat}
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              {destination.name}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mb-10 leading-relaxed font-body">
              {destination.description}
            </p>
            <div className="flex gap-4">
              <Button variant="accent" size="lg" onClick={openBooking}>
                Speak to our {destination.name.split(",")[0]} Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-8 text-primary">
                Why Relocate to {destination.name}?
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10 whitespace-pre-wrap">
                {destination.lifestyle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-bg border border-border"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <span className="text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-primary">
                  Relocation Stats
                </h3>
                <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-accent">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                      Region
                    </label>
                    <span className="text-sm font-semibold text-primary">
                      {destination.tags[1]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-accent">
                    <DollarSign size={20} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                      Cost of Living
                    </label>
                    <span className="text-sm font-semibold text-primary">
                      {destination.costOfLiving.split(".")[0]}.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-border last:border-0">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-accent">
                    <TrendingUp size={20} />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                      Primary Benefit
                    </label>
                    <span className="text-sm font-semibold text-primary">
                      {destination.tags[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-primary text-white shadow-premium">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Ready to move?
                </h4>
                <p className="text-white/80 mb-6">
                  Our legal team in {destination.name.split(",")[0]} is ready to
                  start your visa process.
                </p>
                <Button
                  variant="accent"
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
