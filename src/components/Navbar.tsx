"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site, navLinks } from "@/data/site";
import { serviceCategories } from "@/data/services";
import logoIcon from "@/app/public/icons/icon.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-accent/20">
              <Image
                src={logoIcon}
                alt=""
                fill
                sizes="44px"
                className="scale-[1.35] object-cover"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              {site.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-[600px] glass-dark rounded-2xl border border-white/10 shadow-xl overflow-hidden p-5 z-50"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((cat) => (
                        <div key={cat.id}>
                          <button
                            onClick={handleServiceClick}
                            className="text-left text-xs font-semibold text-accent-light uppercase tracking-wider hover:text-white transition-colors mb-2 block"
                          >
                            {cat.title}
                          </button>
                          <div className="space-y-0.5">
                            {cat.services.map((s) => (
                              <button
                                key={s.id}
                                onClick={handleServiceClick}
                                className="w-full text-left text-sm text-gray-300 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors"
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Srilaxmi Finance Consultancy, I would like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-accent/25"
            >
              <Phone size={16} />
              Get Free Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <motion.button
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleNavClick("#home")}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors font-medium"
              >
                Home
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 }}
                onClick={() => handleNavClick("#about")}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors font-medium"
              >
                About
              </motion.button>

              <div>
                <motion.button
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 }}
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors font-medium"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>

                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-4"
                    >
                      {serviceCategories.map((cat) => (
                        <div key={cat.id} className="border-l border-white/10 pl-3 my-2">
                          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-1 px-3 pt-1">
                            {cat.title}
                          </p>
                          {cat.services.map((s) => (
                            <button
                              key={s.id}
                              onClick={handleServiceClick}
                              className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {s.name}
                            </button>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Srilaxmi Finance Consultancy, I would like to know more about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 bg-accent hover:bg-accent-dark text-primary font-semibold px-5 py-3 rounded-xl transition-all text-sm"
              >
                <Phone size={16} />
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
