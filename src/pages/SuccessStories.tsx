import React from "react";
import { Layout } from "../components/layout/Layout";
import { motion } from "framer-motion";
import { successStories } from "../data/successStories";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "../components/common/Button";
import { useModals } from "../context/ModalContext";

const iconMap = {
  Tax: TrendingUp,
  Lifestyle: Heart,
  Security: Shield,
  Speed: Zap,
  Family: CheckCircle2,
};

export const SuccessStories: React.FC = () => {
  const { openBooking } = useModals();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/10 to-transparent opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15),transparent_70%)] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-sm font-bold tracking-widest uppercase mb-8">
              Authority-Building Social Proof
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 tracking-tight">
              The Wall of{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                Proof
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Strategic transformations powered by our{" "}
              <span className="text-white font-medium">Relocation Engine</span>{" "}
              and{" "}
              <span className="text-white font-medium">Selection Matrix</span>.
              Absolute certainty in global relocation.
            </p>
            <div className="flex justify-center gap-6">
              <div className="flex -space-x-4">
                {successStories.map((story, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-primary bg-surface flex items-center justify-center text-primary font-bold overflow-hidden"
                  >
                    <img
                      src={story.image}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TrendingUp key={i} size={16} />
                  ))}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  500+ Successful Relocations
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-32 bg-bg relative isolate">
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.03]" />

        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {successStories.map((story, index) => {
              const Icon = iconMap[story.type];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Icon & Strategic Context */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 !== 0 ? "lg:order-last" : ""
                    }`}
                  >
                    <div className="sticky top-40">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase mb-8">
                        <Icon size={16} />
                        {story.type} Relocation
                      </div>

                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight tracking-tight">
                        {story.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 mb-12">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-xl bg-surface border border-border text-[11px] font-bold uppercase tracking-widest text-text-muted shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-8 rounded-3xl bg-primary text-white shadow-premium relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Icon size={48} />
                          </div>
                          <div className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                            Key Metric
                          </div>
                          <div className="text-3xl font-bold">
                            {story.metrics}
                          </div>
                        </div>
                        <div className="p-8 rounded-3xl bg-white border border-border shadow-soft flex flex-col justify-center">
                          <div className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                            Confidence
                          </div>
                          <div className="text-3xl font-bold text-primary">
                            100%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: The Deep Dive */}
                  <div className="lg:col-span-7">
                    <div className="relative group">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl mb-[-3rem] z-0 mx-4 border-4 border-white">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                      </div>

                      {/* Glass Container */}
                      <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-glass border border-white relative z-10 overflow-hidden">
                        {/* Decorative Quote Mark */}
                        <Quote
                          size={120}
                          className="absolute -top-10 -right-10 text-primary/5 -z-1"
                        />

                        <div className="space-y-12">
                          {/* The Profile */}
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <span className="w-8 h-px bg-accent"></span>
                              <h3 className="text-[11px] uppercase tracking-[0.3em] text-accent font-black">
                                The Profile
                              </h3>
                            </div>
                            <p className="text-xl text-text-muted leading-relaxed font-light italic">
                              "{story.profile}"
                            </p>
                          </div>

                          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                          {/* The Intervention */}
                          <div>
                            <div className="flex items-center gap-4 mb-6">
                              <span className="w-8 h-px bg-primary"></span>
                              <h3 className="text-[11px] uppercase tracking-[0.3em] text-primary font-black">
                                The Intervention
                              </h3>
                            </div>
                            <p className="text-lg text-text leading-relaxed font-normal">
                              {story.intervention}
                            </p>
                          </div>

                          {/* The Outcome */}
                          <div className="mt-12 p-8 md:p-12 rounded-[2rem] bg-surface border border-accent/20 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                            <div className="relative z-10">
                              <h3 className="text-[11px] uppercase tracking-[0.3em] text-primary font-black mb-6">
                                The Strategic Outcome
                              </h3>
                              <p className="text-2xl text-primary font-medium leading-relaxed mb-8">
                                {story.outcome.split("**")[0]}
                              </p>
                              <div className="p-8 bg-white/50 rounded-2xl border border-white/80 backdrop-blur-sm">
                                <p className="text-xl text-primary font-bold leading-relaxed">
                                  {story.outcome
                                    .match(/\*\*The Result:.*?\*\*/)?.[0]
                                    .replace(/\*\*/g, "")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
              Ready for Your Success Story?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Every relocation is a unique legal and strategic puzzle. We
              specialize in solving the ones others find impossible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                variant="accent"
                size="lg"
                onClick={openBooking}
                className="shadow-2xl shadow-accent/20"
              >
                Book Your Strategy Call{" "}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={openBooking}
                className="!text-white !border-white/30 backdrop-blur-md"
              >
                Download Pricing Guide
              </Button>
            </div>
            <p className="mt-8 text-white/40 text-sm italic">
              *Limited availability for private concierge clients in Q1 2026.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
