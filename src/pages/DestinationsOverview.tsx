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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2948&auto=format&fit=crop')] bg-cover bg-center opacity-20 transform scale-105 animate-slow-zoom pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-bg z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 font-medium text-sm mb-8"
            >
              <Sparkles size={16} className="text-accent" />
              <span>Curated for the Global Elite</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight leading-tight">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                Perfect Sanctuary
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              We don't just pick countries; we select ecosystems designed for
              wealth preservation, lifestyle elevation, and absolute freedom.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg relative -mt-20 z-20">
        <div className="container mx-auto px-6">
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
                className="group relative bg-white rounded-3xl overflow-hidden border border-white/50 shadow-sm hover:shadow-premium transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-[320px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity opacity-60 group-hover:opacity-40" />
                  <img
                    src={imageMap[dest.heroImage]}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay Badges */}
                  <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full font-bold text-white flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-accent" />
                      {dest.name}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-white mb-2 drop-shadow-md">
                        {dest.name}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {dest.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white uppercase tracking-wider border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="bg-accent text-primary px-3 py-1 rounded-lg font-bold text-xs shadow-lg uppercase tracking-wider mb-1">
                      {dest.stat}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-lg text-text-muted mb-8 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Metrics Matrix Overlay */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/50 group-hover:border-accent/20 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                        <Activity size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold opacity-70">
                          Healthcare
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {(dest as any).metrics.healthcare}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/50 group-hover:border-accent/20 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                        <Wifi size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold opacity-70">
                          Connectivity
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {(dest as any).metrics.connectivity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/50 group-hover:border-accent/20 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                        <Shield size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold opacity-70">
                          Safety
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {(dest as any).metrics.safety}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border/50 group-hover:border-accent/20 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-accent">
                        <Landmark size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-text-muted font-bold opacity-70">
                          Tax Efficiency
                        </p>
                        <p className="text-sm font-bold text-primary">
                          {(dest as any).metrics.tax}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 pl-1">
                    {(dest.highlights || []).slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1 min-w-[20px]">
                          <Check
                            size={18}
                            className="text-accent/70 group-hover/item:text-accent transition-colors"
                          />
                        </div>
                        <span className="text-text-muted text-sm font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border mt-auto">
                    <Link
                      to={`/destinations/${dest.id}`}
                      className="inline-flex items-center justify-center w-full gap-2 font-bold text-white bg-primary py-4 rounded-xl hover:bg-secondary transition-colors shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:-translate-y-0.5 transform duration-200"
                    >
                      View Full Dossier
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simplified CTA */}
      <section className="section py-32 bg-primary text-white overflow-hidden relative isolate">
        <div className="absolute inset-x-0 top-0 h-[100px] bg-bg skew-y-2 origin-top-left -z-10 translate-y-[-50px]"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Still Undecided?
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Not sure which jurisdiction aligns with your net worth and lifestyle
            goals? We build custom roadmaps for this exact purpose.
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={openBooking}
            className="px-10 py-4 text-lg shadow-xl shadow-accent/20"
          >
            Get Your Relocation Roadmap
          </Button>
        </div>
      </section>
    </Layout>
  );
};
