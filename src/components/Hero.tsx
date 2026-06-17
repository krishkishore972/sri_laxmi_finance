"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, CheckCircle, FileText } from "lucide-react";
import { site, trustIndicators } from "@/data/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Zap,
  CheckCircle,
  FileText,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="blob w-[500px] h-[500px] bg-accent top-[-100px] right-[-100px]" />
      <div className="blob w-[400px] h-[400px] bg-blue-500 bottom-[-100px] left-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent-light text-sm font-medium px-4 py-1.5 rounded-full border border-accent/20">
                <Shield size={14} />
                Trusted Financial Advisors
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            >
              Smart Financial{" "}
              <span className="text-gradient">Solutions</span>
              <br />
              for a{" "}
              <span className="text-gradient">Secure Future</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              {site.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Srilaxmi Finance Consultancy, I would like to know more about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-accent/25 text-base"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-200 text-base"
              >
                Explore Our Services
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {trustIndicators.map((item) => {
                const Icon = iconMap[item.icon] || Shield;
                return (
                  <div key={item.title} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-accent-light" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center glass backdrop-blur-xl">
                <Shield size={32} className="text-accent-light" />
              </div>

              <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark border-2 border-[#0a1628] flex items-center justify-center text-xs font-bold text-primary">
                          {["RK", "PS", "AP"][i - 1]}
                        </div>
                      ))}
                    </div>
                    <span className="text-white/60 text-sm">Happy Clients</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-accent-light font-bold text-2xl">500+</p>
                      <p className="text-gray-400 text-xs">Clients Served</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-accent-light font-bold text-2xl">95%</p>
                      <p className="text-gray-400 text-xs">Satisfaction</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-accent-light font-bold text-2xl">300+</p>
                      <p className="text-gray-400 text-xs">Loans Assisted</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p className="text-accent-light font-bold text-2xl">5+</p>
                      <p className="text-gray-400 text-xs">Years Exp</p>
                    </div>
                  </div>

                  <div className="h-20 relative">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-accent/80"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center glass backdrop-blur-xl">
                <FileText size={28} className="text-blue-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
