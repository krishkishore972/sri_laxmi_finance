"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  HandCoins,
  Calculator,
  LineChart,
  Building2,
} from "lucide-react";
import { serviceCategories } from "@/data/services";
import ServiceCard from "./ServiceCard";

const categoryIcons: Record<string, React.ReactNode> = {
  loan: <HandCoins size={22} />,
  ca: <Calculator size={22} />,
  cma: <LineChart size={22} />,
  cs: <Building2 size={22} />,
};

interface Props {
  onEnquire: (service: string) => void;
}

export default function Services({ onEnquire }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 bg-surface overflow-hidden"
    >
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-gray-500 text-lg">
            From loans and tax filing to company registration and financial planning, we provide end-to-end assistance under one roof.
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-primary">
                  {categoryIcons[category.id]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                  <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.services.map((service, i) => (
                  <ServiceCard
                    key={service.id}
                    name={service.name}
                    description={service.description}
                    icon={categoryIcons[category.id]}
                    index={i}
                    onEnquire={onEnquire}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
