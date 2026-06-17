import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer of Srilaxmi Finance Consultancy.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link href="/" className="text-accent-dark hover:text-accent text-sm font-medium mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Disclaimer</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <h2 className="text-xl font-semibold text-primary mt-8">General Disclaimer</h2>
          <p>
            {site.name} (&ldquo;Srilaxmi Finance Consultancy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
            provides this website and its services for informational and assistance purposes only.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">Not a Financial Institution</h2>
          <p>
            {site.name} is a financial consultancy and service-assistance business. We are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Not a bank, NBFC (Non-Banking Financial Company), or financial institution.</li>
            <li>Not a government authority or regulatory body.</li>
            <li>Not a direct lender or credit provider.</li>
            <li>Not authorized to sanction or approve loans.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">Loan Services Disclaimer</h2>
          <p>
            Loan approvals, eligible amounts, interest rates, tenure, and other terms are determined solely by the respective
            lending institution (bank or NBFC). We assist with the application process but do not make lending decisions.
            We do not guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>100% loan approval.</li>
            <li>Instant or guaranteed disbursal.</li>
            <li>Lowest interest rates (rates vary by lender and applicant profile).</li>
            <li>Zero rejection rates.</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">Professional Services Disclaimer</h2>
          <p>
            Professional services such as tax filing, company registration, accounting, and audit assistance may be delivered
            directly by our team or in association with qualified professionals including Chartered Accountants (CAs),
            Company Secretaries (CSs), and Cost &amp; Management Accountants (CMAs), where applicable.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">No Warranties</h2>
          <p>
            The information on this website is provided &ldquo;as is&rdquo; without any representations or warranties,
            express or implied. We make no representations or warranties regarding the accuracy, completeness, or
            suitability of the information for any purpose.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">External Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the content, accuracy, or
            practices of these third-party sites.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">Limitation of Liability</h2>
          <p>
            {site.name} shall not be held liable for any loss, damage, or inconvenience arising from the use of this
            website or our services.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">Contact</h2>
          <p>
            If you have questions about this disclaimer, please contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-accent-dark hover:text-accent">{site.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
