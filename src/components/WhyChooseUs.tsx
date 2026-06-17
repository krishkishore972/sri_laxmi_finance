"use client";

import { motion } from "framer-motion";
import {
  Compass, Layers, MessageCircle, FileCheck, Zap, Shield, Lock, Headphones,
} from "lucide-react";
import { whyChooseUs } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Compass, Layers, MessageCircle, FileCheck, Zap, Shield, Lock, Headphones,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-surface overflow-hidden">
      <div className="blob w-[450px] h-[450px] bg-accent/5 bottom-[-150px] right-[-150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Srilaxmi Finance Consultancy?
          </h2>
          <p className="text-gray-500 text-lg">
            We are committed to providing honest, professional, and personalized financial guidance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 mb-4">
                  <Icon size={24} className="text-accent-dark" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
