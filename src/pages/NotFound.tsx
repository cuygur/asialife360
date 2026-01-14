import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/common/Button";
import { Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <section className="bg-surface min-h-[70vh] flex items-center justify-center text-center py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-10">
              <Compass size={100} className="text-accent animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary">
              404: Location Not Found
            </h1>
            <p className="text-xl text-text-muted mb-12 max-w-lg mx-auto leading-relaxed">
              It looks like you've wandered off the map. Let us guide you back
              to your new life.
            </p>
            <Link to="/">
              <Button variant="accent" size="lg">
                Back to Safety
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
