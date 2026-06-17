"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import type { Loan } from "@/data/loans";

interface Props {
  loan: Loan;
  index: number;
}

export default function LoanCard({ loan, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 card-hover shadow-sm"
    >
      <h3 className="text-xl font-bold text-primary mb-2">{loan.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{loan.suitableFor}</p>

      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Required Documents</p>
        <ul className="space-y-1.5">
          {loan.documents.map((doc) => (
            <li key={doc} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Benefits</p>
        <ul className="space-y-1.5">
          {loan.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={14} className="text-accent-dark mt-0.5 shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX"}?text=${encodeURIComponent(`Hello Srilaxmi Finance Consultancy, I would like to check my eligibility for ${loan.name}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 text-sm"
      >
        Check Eligibility
        <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}
