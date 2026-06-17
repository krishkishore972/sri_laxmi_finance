export interface Loan {
  id: string;
  name: string;
  suitableFor: string;
  documents: string[];
  benefits: string[];
}

export const loans: Loan[] = [
  {
    id: "personal-loan",
    name: "Personal Loan",
    suitableFor: "Salaried and self-employed individuals needing funds for personal expenses.",
    documents: ["Identity proof (Aadhaar/PAN)", "Address proof", "Bank statements (last 3 months)", "Income proof (salary slips/IT returns)"],
    benefits: ["No end-use restriction", "Minimal documentation", "Quick processing"],
  },
  {
    id: "business-loan",
    name: "Business Loan",
    suitableFor: "Business owners and entrepreneurs needing capital for growth, working capital, or equipment.",
    documents: ["Business registration proof", "IT returns (last 2 years)", "Bank statements (last 6 months)", "Financial statements", "KYC documents"],
    benefits: ["Flexible end-use", "Customizable repayment options", "Funding for expansion"],
  },
  {
    id: "gold-loan",
    name: "Gold Loan",
    suitableFor: "Individuals who own gold jewellery and need quick funds with minimal paperwork.",
    documents: ["Identity proof", "Address proof", "Gold jewellery"],
    benefits: ["Quick disbursal", "Minimal documentation", "Competitive interest rates"],
  },
  {
    id: "home-loan",
    name: "Home Loan",
    suitableFor: "Individuals looking to buy, construct, or renovate a residential property.",
    documents: ["Identity and address proof", "Income documents", "Property documents", "Bank statements"],
    benefits: ["Long repayment tenure", "Tax benefits available", "Competitive interest rates"],
  },
  {
    id: "education-loan",
    name: "Education Loan",
    suitableFor: "Students and professionals seeking funding for higher education in India or abroad.",
    documents: ["Admission letter", "Identity and address proof", "Co-borrower income documents", "Academic records", "Course fee structure"],
    benefits: ["Covers tuition and living expenses", "Moratorium period available", "Tax benefit under Section 80E"],
  },
  {
    id: "loan-against-property",
    name: "Loan Against Property",
    suitableFor: "Property owners who need a large loan amount against their residential or commercial property.",
    documents: ["Property documents", "Identity and address proof", "Income proof", "Bank statements"],
    benefits: ["Higher loan amount", "Lower interest rates", "Long repayment tenure"],
  },
  {
    id: "vehicle-loan",
    name: "Vehicle Loan",
    suitableFor: "Individuals looking to finance a two-wheeler, car, or commercial vehicle.",
    documents: ["Identity and address proof", "Income proof", "Bank statements", "Vehicle quotation"],
    benefits: ["Competitive rates", "Flexible tenure", "Quick processing"],
  },
  {
    id: "balance-transfer",
    name: "Balance Transfer",
    suitableFor: "Existing loan borrowers looking to transfer their outstanding loan for better rates or terms.",
    documents: ["Existing loan statement", "Identity and address proof", "Income proof"],
    benefits: ["Lower interest rate", "Reduced EMI", "Top-up loan facility available"],
  },
];
