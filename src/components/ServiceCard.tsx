"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  onEnquire: (service: string) => void;
}

export default function ServiceCard({ name, description, icon, index, onEnquire }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-accent-dark">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <button
        onClick={() => onEnquire(name)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark hover:text-accent transition-colors"
      >
        Enquire Now
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
