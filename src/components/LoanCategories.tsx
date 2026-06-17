"use client";

import { motion } from "framer-motion";
import { loans } from "@/data/loans";
import { loanDisclaimer } from "@/data/services";
import LoanCard from "./LoanCard";

export default function LoanCategories() {
  return (
    <section id="loans" className="relative py-24 bg-white overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-blue-500/5 top-[-150px] right-[-150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
            Loan Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Find the Right Loan for You
          </h2>
          <p className="text-gray-500 text-lg">
            We assist with a wide range of loan products from trusted banks and NBFCs. Explore your options below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loans.map((loan, i) => (
            <LoanCard key={loan.id} loan={loan} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl"
        >
          <p className="text-sm text-amber-800 leading-relaxed">{loanDisclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
