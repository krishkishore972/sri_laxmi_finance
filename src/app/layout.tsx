import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Srilaxmi Finance Consultancy | Loans, Tax, Company Registration & Financial Services",
    template: "%s | Srilaxmi Finance Consultancy",
  },
  description:
    "Srilaxmi Finance Consultancy helps individuals, professionals, and businesses with loans, tax filing, financial planning, company registration, and compliance services.",
  keywords: [
    "finance consultancy",
    "loans",
    "tax filing",
    "GST registration",
    "company registration",
    "financial planning",
    "ITR filing",
    "business loan",
    "home loan",
    "personal loan",
  ],
  openGraph: {
    title: "Srilaxmi Finance Consultancy",
    description: "Smart Financial Solutions for a Secure Future",
    url: "https://srilaxmifinance.com",
    siteName: "Srilaxmi Finance Consultancy",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
