"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Srilaxmi Finance Consultancy, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-200 hover:scale-110 animate-pulse-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
