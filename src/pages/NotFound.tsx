import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/common/Button";
import { Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-primary text-white isolate">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-10 relative">
              <div className="absolute inset-0 bg-accent/20 blur-[50px] rounded-full scale-150"></div>
              <Compass
                size={120}
                className="text-accent animate-spin-slow relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            <h1 className="text-6xl md:text-9xl font-heading font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 tracking-tighter">
              404
            </h1>

            <h2 className="text-2xl md:text-4xl text-white font-bold mb-6">
              Off the Map?
            </h2>

            <p className="text-xl text-white/70 mb-12 max-w-lg mx-auto leading-relaxed font-light">
              We specialize in relocation, but this destination doesn't exist.
              Let's get you back to civilization.
            </p>

            <Link to="/">
              <Button
                variant="accent"
                size="lg"
                className="px-10 py-5 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
              >
                Return to Home Base
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
