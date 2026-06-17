import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of Srilaxmi Finance Consultancy.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-accent-dark hover:text-accent text-sm font-medium mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Terms &amp; Conditions</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <h2 className="text-xl font-semibold text-primary mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the {site.name} website and services, you agree to be bound by these Terms &amp; Conditions.
            If you do not agree, please do not use our website or services.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">2. Services Description</h2>
          <p>
            {site.name} provides financial consultancy and service-assistance including but not limited to loan application assistance,
            tax filing assistance, company registration assistance, accounting support, and compliance services.
            We act as a facilitator and not as a direct lender, bank, NBFC, or government authority.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">3. No Guarantees</h2>
          <p>
            We do not guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Loan approval, specific interest rates, or loan terms.</li>
            <li>Tax refund amounts or timelines.</li>
            <li>Company registration approval or processing time.</li>
            <li>Any specific outcome from the use of our services.</li>
          </ul>
          <p>
            All outcomes depend on the respective authorities, institutions, or professionals involved.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information.</li>
            <li>Not misuse our website or services.</li>
            <li>Not submit false or misleading information.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">5. Limitation of Liability</h2>
          <p>
            {site.name} and its representatives shall not be liable for any direct, indirect, incidental, or consequential damages
            arising from the use or inability to use our services, including but not limited to loan rejection, tax filing delays,
            or regulatory actions.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">6. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of {site.name} unless otherwise stated.
            Unauthorized use is prohibited.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
            Continued use of our services after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">8. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-accent-dark hover:text-accent">{site.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
