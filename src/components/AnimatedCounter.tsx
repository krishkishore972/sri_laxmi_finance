"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = "", duration = 2 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    let timer: ReturnType<typeof requestAnimationFrame>;

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        timer = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    timer = requestAnimationFrame(step);
    return () => cancelAnimationFrame(timer);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-4xl lg:text-5xl font-bold text-white"
    >
      {count}
      {suffix}
    </motion.span>
  );
}
