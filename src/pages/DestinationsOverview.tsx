import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { destinationsContent } from "../data/homeContent";
import {
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
  Activity,
  Wifi,
  Shield,
  Landmark,
} from "lucide-react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const DestinationsOverview: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <Layout>
      <section className="section pt-32 pb-20 bg-surface relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none" />
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="container mx-auto px-6">
          {/* Enhanced Hero Section */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20"
            >
              <Sparkles size={16} />
              <span>Curated for Geographically Mobile Elite</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary font-heading leading-tight">
              Explore Your Next <br />
              <span className="text-gradient">Masterpiece Chapter</span>
            </h1>

            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              We don't just pick countries; we pick ecosystems designed for
              wealth preservation, lifestyle elevation, and absolute freedom.
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {destinationsContent.map((dest) => (
              <motion.div
                key={dest.id}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-premium transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 z-10 transition-opacity group-hover:opacity-0" />
                  <img
                    src={imageMap[dest.heroImage]}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay Badges */}
                  <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur-sm shadow-lg px-4 py-2 rounded-lg font-bold text-primary flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-accent" />
                      {dest.name}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-6 z-20">
                    <span className="bg-accent text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                      {dest.stat}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-surface border border-border text-text-muted uppercase tracking-wider group-hover:border-accent/30 group-hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {dest.name}
                  </h2>

                  <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Metrics Matrix Overlay (Always visible on Overview for context) */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border">
                      <Activity size={20} className="text-accent" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                          Healthcare
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          {(dest as any).metrics.healthcare}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border">
                      <Wifi size={20} className="text-accent" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                          Connectivity
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          {(dest as any).metrics.connectivity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border">
                      <Shield size={20} className="text-accent" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                          Safety Index
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          {(dest as any).metrics.safety}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border">
                      <Landmark size={20} className="text-accent" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                          Tax Efficiency
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          {(dest as any).metrics.tax}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {(dest.highlights || []).slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]">
                          <Check size={18} className="text-accent" />
                        </div>
                        <span className="text-text-muted text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                    <Link
                      to={`/destinations/${dest.id}`}
                      className="inline-flex items-center gap-2 font-semibold text-primary group-hover:text-accent transition-colors text-lg"
                    >
                      View Full Dossier
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simplified CTA */}
      <section className="section py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Still Undecided?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Not sure which jurisdiction aligns with your net worth and lifestyle
            goals? We build custom roadmaps for this exact purpose.
          </p>
          <Button variant="accent" size="lg" onClick={openBooking}>
            Get Your Relocation Roadmap
          </Button>
        </div>
      </section>
    </Layout>
  );
};
