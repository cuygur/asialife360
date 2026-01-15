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
      {/* Immersive Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary isolate">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImg}
            alt={destination.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent"></div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-white h-full flex flex-col justify-end pb-24 lg:pb-32">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent mb-8 transition-colors group w-fit"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Destinations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary font-bold text-sm tracking-wide shadow-lg shadow-accent/20">
                {destination.stat}
              </span>
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-8 leading-none tracking-tight">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mb-10 leading-relaxed font-light border-l-2 border-accent pl-6">
              {destination.description}
            </p>
            <div className="flex gap-4">
              <Button
                variant="accent"
                size="lg"
                onClick={openBooking}
                className="px-8 py-4 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40"
              >
                Speak to our {destination.name.split(",")[0]} Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-8 text-primary">
                Why Relocate to {destination.name}?
              </h2>
              <p className="text-xl text-text-muted leading-relaxed mb-12 whitespace-pre-wrap font-light">
                {destination.lifestyle}
              </p>

              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <div className="w-8 h-1 rounded-full bg-accent"></div>
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {destination.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border hover:border-accent/30 transition-colors shadow-sm"
                  >
                    <div className="mt-1 min-w-[24px]">
                      <CheckCircle2 size={24} className="text-accent" />
                    </div>
                    <span className="text-text font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detailed Metrics */}
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <div className="w-8 h-1 rounded-full bg-accent"></div>
                Living & Lifestyle Data
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reusing logic to show expanded metrics clearly */}
                <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-surface rounded-lg text-accent">
                      <TrendingUp size={24} />
                    </div>
                    <h4 className="font-bold text-primary">
                      Healthcare Standard
                    </h4>
                  </div>
                  <p className="text-text-muted text-sm px-1">
                    {destination.metrics.healthcare}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-surface rounded-lg text-accent">
                      <TrendingUp size={24} /> {/* Icon placeholder reuse */}
                    </div>
                    <h4 className="font-bold text-primary">
                      Digital Connectivity
                    </h4>
                  </div>
                  <p className="text-text-muted text-sm px-1">
                    {destination.metrics.connectivity}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-4 space-y-8 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-white border border-border shadow-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  <h3 className="text-xl font-bold mb-8 text-primary border-b border-border pb-4">
                    At a Glance
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-accent shadow-inner">
                        <MapPin size={24} />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">
                          Region
                        </label>
                        <span className="text-base font-bold text-primary">
                          {destination.tags[1]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-accent shadow-inner">
                        <DollarSign size={24} />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">
                          Cost of Living
                        </label>
                        <span className="text-base font-bold text-primary">
                          {destination.costOfLiving.split(".")[0]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-accent shadow-inner">
                        <TrendingUp size={24} />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">
                          Primary Benefit
                        </label>
                        <span className="text-base font-bold text-primary">
                          {destination.tags[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-primary text-white shadow-premium relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                  <h4 className="text-2xl font-bold mb-4 text-white">
                    Ready to move?
                  </h4>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Our legal team in {destination.name.split(",")[0]} is ready
                    to start your visa process immediately.
                  </p>
                  <Button
                    variant="accent"
                    className="w-full py-4 text-lg shadow-lg shadow-accent/20"
                    onClick={openBooking}
                  >
                    Start Now
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};
