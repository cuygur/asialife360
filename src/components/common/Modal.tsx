import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-premium overflow-hidden border border-white/20"
          >
            <div className="p-8 pb-0 flex items-center justify-between">
              {title && (
                <h3 className="text-2xl font-heading font-bold text-primary">
                  {title}
                </h3>
              )}
              <button
                className="p-2 rounded-full hover:bg-surface transition-colors text-text-muted hover:text-primary"
                onClick={onClose}
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
