export const site = {
  name: "Srilaxmi Finance Consultancy",
  tagline: "Smart Financial Solutions for a Secure Future",
  description:
    "Srilaxmi Finance Consultancy helps individuals, professionals, and businesses with loans, tax filing, financial planning, company registration, and compliance services.",
  url: "https://srilaxmifinance.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917013114599",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91XXXXXXXXXX",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@srilaxmifinance.com",
  address: "123, Business Hub, Main Road, City - 000001",
  workingHours: "Mon–Sat: 9:30 AM – 7:00 PM",
  social: {
    facebook: "https://facebook.com/srilaxmifinance",
    instagram: "https://instagram.com/srilaxmifinance",
    linkedin: "https://linkedin.com/company/srilaxmifinance",
    youtube: "https://youtube.com/@srilaxmifinance",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
];

export const trustIndicators = [
  { title: "Transparent Process", description: "Clear communication at every step", icon: "Shield" },
  { title: "Expert Guidance", description: "Experienced financial professionals", icon: "Zap" },
  { title: "Quick Assistance", description: "Prompt response to your enquiries", icon: "CheckCircle" },
  { title: "Secure Documentation", description: "Your data is handled with care", icon: "FileText" },
];

export const statistics = [
  { label: "Happy Clients", value: 500, suffix: "+", icon: "Users" },
  { label: "Loan Applications Assisted", value: 300, suffix: "+", icon: "FileText" },
  { label: "Years of Experience", value: 5, suffix: "+", icon: "Award" },
  { label: "Client Satisfaction", value: 95, suffix: "%", icon: "Heart" },
];

export const processSteps = [
  { step: 1, title: "Submit Your Enquiry", description: "Fill out our enquiry form or reach out via WhatsApp. Tell us what you need." },
  { step: 2, title: "Speak With Our Consultant", description: "We will understand your requirements and guide you on the best options." },
  { step: 3, title: "Share the Required Documents", description: "Upload or share the documents needed for processing your request." },
  { step: 4, title: "Receive Guidance & Assistance", description: "We help you through the process and keep you informed at every stage." },
];

export const whyChooseUs = [
  { title: "Personalized Financial Guidance", description: "We tailor our advice to match your unique financial situation and goals.", icon: "Compass" },
  { title: "Multiple Services in One Place", description: "Loans, taxes, company registration, accounting — we handle it all.", icon: "Layers" },
  { title: "Transparent Communication", description: "No hidden jargon. We explain everything clearly before you proceed.", icon: "MessageCircle" },
  { title: "Documentation Assistance", description: "We guide you through paperwork so nothing gets missed.", icon: "FileCheck" },
  { title: "Quick Response", description: "We value your time and respond to enquiries promptly.", icon: "Zap" },
  { title: "Experienced Professionals", description: "Our team brings years of hands-on financial and compliance expertise.", icon: "Shield" },
  { title: "Confidential Handling", description: "Your personal and financial information stays secure with us.", icon: "Lock" },
  { title: "End-to-End Support", description: "From the first call to the final step, we stay with you.", icon: "Headphones" },
];

export const faqs = [
  {
    question: "What documents are required for a loan enquiry?",
    answer: "Typically you need identity proof (Aadhaar, PAN), address proof, income documents (salary slips or IT returns), and bank statements. Specific requirements depend on the loan type and lender."
  },
  {
    question: "Is loan approval guaranteed?",
    answer: "No. Loan approval depends entirely on the lending institution's eligibility criteria, your credit profile, income, documentation, and policies. We assist with the application process but cannot guarantee approval."
  },
  {
    question: "How long does the loan process take?",
    answer: "It varies by loan type and lender. Some personal loans may be processed in a few days, while home or business loans may take a few weeks. We keep you updated throughout."
  },
  {
    question: "Do you provide GST and income tax filing services?",
    answer: "Yes. We offer ITR filing, GST registration, GST return filing, TDS filing, and other tax-related services for individuals and businesses."
  },
  {
    question: "Can you help register a new company?",
    answer: "Yes. We assist with company registration, LLP registration, startup registration, and all related ROC compliance and documentation."
  },
  {
    question: "Is my personal information kept confidential?",
    answer: "Absolutely. We treat all client information as confidential and follow strict data protection practices. Your details are never shared without your consent."
  },
  {
    question: "How can I contact a consultant?",
    answer: "You can reach us via WhatsApp, phone call, email, or by filling out the enquiry form on this website. We will get back to you promptly."
  },
  {
    question: "Do you charge a consultation or service fee?",
    answer: "We may charge a fee for certain professional services, which will be communicated and agreed upon upfront. Initial enquiries and discussions are complimentary."
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    service: "Home Loan Assistance",
    rating: 5,
    review: "Srilaxmi Finance made the home loan process very smooth. They guided me through the paperwork and helped me choose the right lender.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    service: "ITR Filing",
    rating: 5,
    review: "Professional and efficient tax filing service. They handled everything and I got my refund quickly. Highly recommended.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    service: "Company Registration",
    rating: 5,
    review: "Registered my startup through them. The team handled all the ROC compliance and documentation. Very satisfied with the service.",
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    service: "Business Loan",
    rating: 4,
    review: "Good guidance on business loan options. They explained the terms clearly and helped me prepare a strong application.",
    initials: "SR",
  },
  {
    name: "Vikram Singh",
    service: "GST Registration",
    rating: 5,
    review: "Quick and hassle-free GST registration. The team was responsive and knowledgeable. Great experience overall.",
    initials: "VS",
  },
  {
    name: "Anjali Desai",
    service: "Financial Planning",
    rating: 5,
    review: "The financial planning session was very insightful. They helped me create a realistic plan for my goals. Thank you!",
    initials: "AD",
  },
];

export const contactInfo = {
  phone: site.phone,
  whatsapp: site.whatsapp,
  email: site.email,
  address: site.address,
  workingHours: site.workingHours,
};
