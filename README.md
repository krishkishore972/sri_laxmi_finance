# Srilaxmi Finance Consultancy Website

A modern, responsive finance consultancy website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

## Features

- Premium financial services design with glassmorphism, gradients, and animations
- Responsive for all devices (mobile, tablet, laptop, desktop)
- WhatsApp enquiry form with validation (React Hook Form + Zod)
- Animated counters, scroll-triggered reveals, testimonial slider
- SEO-friendly metadata and Open Graph tags
- Accessibility-focused semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Business WhatsApp number (without +) |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Business phone number |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Business email address |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customization

### Changing WhatsApp Number

Edit `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`.

### Editing Services

Open `src/data/services.ts` to add, remove, or modify service categories and their services.

### Editing Business Information

Open `src/data/site.ts` to update:
- Business name, tagline, description
- Contact details (phone, email, address)
- Social media links
- Navigation links
- Statistics
- FAQs
- Testimonials
- Why Choose Us features

### Editing Loan Details

Open `src/data/loans.ts` to update loan categories, documents, and benefits.

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add your environment variables
4. Deploy

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Validation
