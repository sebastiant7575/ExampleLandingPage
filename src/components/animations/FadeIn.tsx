"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps;

export function FadeIn({
  children,
  className = "",
  delay = 0,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
