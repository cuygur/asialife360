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
  // Clean implementation using the props
  const getClassName = () => {
    const classes = ["btn"];
    if (variant === "primary") classes.push("btn-primary");
    if (variant === "accent") classes.push("btn-accent");
    if (variant === "outline") classes.push("btn-outline");
    if (variant === "ghost") classes.push("btn-ghost");
    if (size === "sm") classes.push("btn-sm");
    if (size === "lg") classes.push("btn-lg");
    return classes.join(" ") + " " + className;
  };

  // Re-declare for explicit usage if I wanted to use them, but I'm deleting the unused blocks.

  return (
    <motion.button
      className={getClassName()}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
