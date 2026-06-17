"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-blue-500/5 bottom-[-200px] left-[-200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Your Trusted Partner in Financial{" "}
              <span className="text-gradient">Success</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Srilaxmi Finance Consultancy is a professional financial consultancy dedicated to helping
                individuals, professionals, and businesses navigate the complex world of finance, taxation,
                compliance, and corporate services.
              </p>
              <p>
                We provide guidance and application assistance for loans, income tax and GST filing,
                company and LLP registration, ROC compliance, financial planning, accounting, and
                business advisory services — all under one roof.
              </p>
              <p>
                Our approach is built on transparency, integrity, and personalized attention. We take
                the time to understand your unique needs and guide you toward informed financial decisions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: Shield, label: "Trusted", desc: "Reliable guidance" },
                { icon: Target, label: "Focused", desc: "Goal-oriented approach" },
                { icon: Users, label: "Personal", desc: "You matter to us" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-surface rounded-xl">
                  <item.icon size={20} className="text-accent-dark mx-auto mb-2" />
                  <p className="font-semibold text-primary text-sm">{item.label}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Our Mission & Values
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Target size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Our Mission</h4>
                    <p className="text-sm text-gray-500">
                      To simplify financial processes and empower our clients with
                      the knowledge and support they need to make sound financial decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Shield size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Our Commitment</h4>
                    <p className="text-sm text-gray-500">
                      We are committed to honest communication, ethical practices, and
                      delivering value through every interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Users size={18} className="text-accent-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Who We Serve</h4>
                    <p className="text-sm text-gray-500">
                      Salaried individuals, self-employed professionals, startups,
                      SMEs, and corporations across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
