"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/data/site";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 bg-white overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-accent/5 top-[-100px] left-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Simple Four-Step Process
          </h2>
          <p className="text-gray-500 text-lg">
            Getting started with us is easy. Here is how we work with you.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/10 sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="hidden sm:block sm:w-1/2" />

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md z-10 mt-1"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className={`relative sm:w-1/2 pl-12 sm:pl-0 ${
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-primary text-sm font-bold mb-2">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
