"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { serviceCategories } from "@/data/services";

const phoneRegex = /^[0-9]{10}$/;

const enquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  mobile: z.string().regex(phoneRegex, "Please enter a valid 10-digit mobile number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Please enter your city"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  service: z.string().min(1, "Please select a service"),
  employmentType: z.string().min(1, "Please select your employment type"),
  monthlyIncome: z.string().min(1, "Please enter your approximate monthly income"),
  loanAmount: z.string().optional(),
  contactTime: z.string().min(1, "Please select a preferred contact time"),
  message: z.string().optional(),
  consent: z.literal(true, { message: "You must agree to proceed" }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface Props {
  preselectedService?: string;
}

export default function EnquiryForm({ preselectedService }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [services, setServices] = useState<{ id: string; name: string }[]>([]);
  const [isLoanCategory, setIsLoanCategory] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      serviceCategory: "",
      service: "",
      loanAmount: "",
    },
  });

  const selectedCategory = watch("serviceCategory");

  useEffect(() => {
    if (preselectedService) {
      for (const cat of serviceCategories) {
        const found = cat.services.find((s) => s.name === preselectedService);
        if (found) {
          setValue("serviceCategory", cat.id);
          setValue("service", found.name);
          setServices(cat.services);
          setIsLoanCategory(cat.id === "loan");
          return;
        }
      }
    }
  }, [preselectedService, setValue]);

  useEffect(() => {
    const cat = serviceCategories.find((c) => c.id === selectedCategory);
    if (cat) {
      setServices(cat.services);
      setIsLoanCategory(cat.id === "loan");
      setValue("service", "");
    } else {
      setServices([]);
      setIsLoanCategory(false);
    }
  }, [selectedCategory, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmitted(true);

    const lines = [
      "Hello Srilaxmi Finance Consultancy,",
      "",
      "I would like to enquire about your financial services.",
      "",
      `Name: ${data.fullName}`,
      `Mobile Number: ${data.mobile}`,
      `Email: ${data.email}`,
      `City: ${data.city}`,
      `Service Category: ${data.serviceCategory}`,
      `Selected Service: ${data.service}`,
      `Employment/Business Type: ${data.employmentType}`,
      `Monthly Income: ${data.monthlyIncome}`,
    ];

    if (data.loanAmount) {
      lines.push(`Required Loan Amount: ${data.loanAmount}`);
    }

    lines.push(`Preferred Contact Time: ${data.contactTime}`);

    if (data.message) {
      lines.push(`Message: ${data.message}`);
    }

    lines.push("", "Please contact me regarding this enquiry.");

    const message = lines.join("\n");
    const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

    await new Promise((resolve) => setTimeout(resolve, 1500));
    window.open(whatsappUrl, "_blank");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center p-10 bg-white rounded-2xl border border-gray-100 shadow-sm"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-gray-500 mb-6">
          Your enquiry has been prepared. You will be redirected to WhatsApp to send us your message.
        </p>
        <p className="text-sm text-gray-400">
          If WhatsApp does not open automatically, please check your browser settings.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-10">
        <span className="inline-block text-accent-dark font-semibold text-sm tracking-wider uppercase mb-3">
          Enquire Now
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-gray-500">
          Fill out the form below and we will connect with you via WhatsApp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Full Name *</label>
            <input
              {...register("fullName")}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Mobile Number *</label>
            <input
              {...register("mobile")}
              placeholder="10-digit mobile number"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Email Address *</label>
            <input
              {...register("email")}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">City *</label>
            <input
              {...register("city")}
              placeholder="Your city"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Service Category *</label>
            <select
              {...register("serviceCategory")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            >
              <option value="">Select category</option>
              {serviceCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            {errors.serviceCategory && <p className="text-red-500 text-xs mt-1">{errors.serviceCategory.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Specific Service *</label>
            <select
              {...register("service")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            >
              <option value="">Select service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Employment/Business Type *</label>
            <select
              {...register("employmentType")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            >
              <option value="">Select type</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed Professional">Self-Employed Professional</option>
              <option value="Business Owner">Business Owner</option>
              <option value="Student">Student</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Home Maker">Home Maker</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>
            </select>
            {errors.employmentType && <p className="text-red-500 text-xs mt-1">{errors.employmentType.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Approximate Monthly Income *</label>
            <select
              {...register("monthlyIncome")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            >
              <option value="">Select range</option>
              <option value="Below ₹15,000">Below ₹15,000</option>
              <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
              <option value="₹30,000 – ₹50,000">₹30,000 – ₹50,000</option>
              <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
              <option value="₹1,00,000 – ₹2,00,000">₹1,00,000 – ₹2,00,000</option>
              <option value="Above ₹2,00,000">Above ₹2,00,000</option>
            </select>
            {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome.message}</p>}
          </div>

          {isLoanCategory && (
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Required Loan Amount</label>
              <input
                {...register("loanAmount")}
                placeholder="e.g. ₹5,00,000"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-primary mb-1.5">Preferred Contact Time *</label>
            <select
              {...register("contactTime")}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            >
              <option value="">Select time</option>
              <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
              <option value="Afternoon (12 PM – 3 PM)">Afternoon (12 PM – 3 PM)</option>
              <option value="Evening (3 PM – 7 PM)">Evening (3 PM – 7 PM)</option>
              <option value="Anytime">Anytime</option>
            </select>
            {errors.contactTime && <p className="text-red-500 text-xs mt-1">{errors.contactTime.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1.5">Message (Optional)</label>
          <textarea
            {...register("message")}
            rows={3}
            placeholder="Tell us more about your requirement..."
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
          />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
          />
          <span className="text-sm text-gray-500">
            I agree that my information will be used to respond to my enquiry.{" "}
            <span className="text-accent-dark">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-xs">{errors.consent.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-base disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Preparing...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Enquiry via WhatsApp
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to receive communications from Srilaxmi Finance Consultancy via WhatsApp.
        </p>
      </form>
    </motion.div>
  );
}
