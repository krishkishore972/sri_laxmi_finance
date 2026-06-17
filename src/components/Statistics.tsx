"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FileText, Award, Heart } from "lucide-react";
import { statistics } from "@/data/site";
import AnimatedCounter from "./AnimatedCounter";

const iconMap: Record<string, React.ElementType> = {
  Users,
  FileText,
  Award,
  Heart,
};

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0a1628] via-[#0f1f3d] to-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="blob w-[600px] h-[600px] bg-accent/10 top-[-200px] right-[-200px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 mb-4">
                  <Icon size={24} className="text-accent-light" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 text-sm mt-1 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
