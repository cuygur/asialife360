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
  const baseClass =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border-none font-body";

  const variants = {
    primary: "bg-primary text-white hover:bg-secondary",
    accent: "bg-accent text-primary hover:bg-accent-hover",
    outline: "bg-transparent border border-border hover:bg-black/5",
    ghost: "bg-transparent hover:bg-black/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  const isAccent = variant === "accent";

  return (
    <motion.button
      className={`${baseClass} ${variantClass} ${sizeClass} rounded-md relative overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: isAccent
          ? "0 0 20px rgba(217, 119, 6, 0.4)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isAccent && (
        <motion.div
          className="btn-glow"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};
