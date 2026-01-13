import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  const isAccent = variant === "accent";

  return (
    <motion.button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: isAccent
          ? "0 0 20px rgba(212, 175, 55, 0.4)"
          : "var(--shadow-md)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
      {isAccent && (
        <motion.div
          className="btn-glow"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};
