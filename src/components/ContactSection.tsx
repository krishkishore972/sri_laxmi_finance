"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { contactInfo, site } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-surface overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-accent/5 bottom-[-200px] left-[-200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg">
            We are here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: contactInfo.phone,
                href: `tel:${contactInfo.phone}`,
                action: "Call Now",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: contactInfo.whatsapp,
                href: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello Srilaxmi Finance Consultancy, I would like to know more about your services.")}`,
                action: "Chat on WhatsApp",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                action: "Send Email",
              },
              {
                icon: MapPin,
                label: "Office Address",
                value: contactInfo.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
                action: "Get Directions",
              },
              {
                icon: Clock,
                label: "Working Hours",
                value: contactInfo.workingHours,
                href: null,
                action: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-accent-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="font-medium text-primary truncate">{item.value}</p>
                </div>
                {item.href && item.action && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent-dark hover:text-accent shrink-0"
                  >
                    {item.action}
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: "facebook", href: site.social.facebook },
                { icon: "instagram", href: site.social.instagram },
                { icon: "linkedin", href: site.social.linkedin },
                { icon: "youtube", href: site.social.youtube },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all text-gray-500 capitalize text-xs font-medium"
                >
                  {social.icon.slice(0, 2)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm h-[400px]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
