import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of Srilaxmi Finance Consultancy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-accent-dark hover:text-accent text-sm font-medium mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <h2 className="text-xl font-semibold text-primary mt-8">1. Introduction</h2>
          <p>
            {site.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, mobile number, email address, city, employment details, income information, and other details you provide through our enquiry form.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
            <li><strong>Cookies:</strong> We may use cookies to enhance your browsing experience. You can control cookie settings through your browser.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your enquiries and provide the services you request.</li>
            <li>To communicate with you via WhatsApp, phone, or email regarding your enquiry.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Banks, NBFCs, or financial institutions as required for processing your loan or service application.</li>
            <li>Qualified professionals (e.g., CAs, CSs, CMAs) for delivering professional services.</li>
            <li>Legal authorities if required by applicable law.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent at any time where we rely on consent to process your data.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-accent-dark hover:text-accent">{site.email}</a>{" "}
            or call us at {site.phone}.
          </p>
        </div>
      </div>
    </div>
  );
}
