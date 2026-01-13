import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/common/Button";
import { Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <section className="section bg-surface min-h-[60vh] flex items-center justify-center text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <Compass size={80} className="text-accent animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              404: Location Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              It looks like you've wandered off the map. Let us guide you back
              to your new life.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg">
                Back to Safety
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
