"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import LoanCategories from "@/components/LoanCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import About from "@/components/About";
import TestimonialSlider from "@/components/TestimonialSlider";
import FAQAccordion from "@/components/FAQAccordion";
import EnquiryForm from "@/components/EnquiryForm";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

  const handleEnquire = (service: string) => {
    setPreselectedService(service);
    const form = document.querySelector("#enquiry");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Services onEnquire={handleEnquire} />
        <LoanCategories />
        <WhyChooseUs />
        <ProcessTimeline />
        <About />
        <TestimonialSlider />
        <FAQAccordion />
        <section id="enquiry" className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnquiryForm preselectedService={preselectedService} />
          </div>
        </section>
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
