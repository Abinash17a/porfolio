"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type React from "react";
import emailjs from "@emailjs/browser";

// Form submission states
type FormStatus = "idle" | "submitting" | "success" | "error";
const ContactSection = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const formControls = useAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });
  const contactInfoRef = useRef<HTMLDivElement>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus("submitting");

  // pick env values in a cross-compatible way:
  // - Vite: import.meta.env.VITE_...
  // - CRA: process.env.REACT_APP_...
  const SERVICE_ID =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_SERVICE_ID) ||
    (typeof process !== "undefined" && (process.env as any).REACT_APP_EMAILJS_SERVICE_ID) ||
    /* fallback */ "your_service_id";

  const TEMPLATE_ID =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_TEMPLATE_ID) ||
    (typeof process !== "undefined" && (process.env as any).REACT_APP_EMAILJS_TEMPLATE_ID) ||
    /* fallback */ "your_template_id";

  const PUBLIC_KEY =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_PUBLIC_KEY) ||
    (typeof process !== "undefined" && (process.env as any).REACT_APP_EMAILJS_PUBLIC_KEY) ||
    /* fallback */ "your_public_key";

  // Basic validation
  if (!formState.name || !formState.email || !formState.subject || !formState.message) {
    setFormStatus("error");
    setTimeout(() => setFormStatus("idle"), 3000);
    return;
  }

  const templateParams = {
    from_name: formState.name,
    from_email: formState.email,
    subject: formState.subject,
    message: formState.message,
  };

  try {
    // send with EmailJS
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log("EmailJS sent", result);
    setFormStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error("EmailJS error:", err);
    setFormStatus("error");
  } finally {
    setTimeout(() => setFormStatus("idle"), 3000);
  }
};

  // Animate form when in view
  useEffect(() => {
    if (isFormInView) {
      formControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      formControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isFormInView, formControls]);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,168,86,0.08),_transparent_20%),linear-gradient(180deg,#070b17_0%,#0f172a_100%)]">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="relative bg-slate-900 rounded-full p-3 shadow-lg border border-[#d4a856]/30">
              <Mail className="h-8 w-8 text-[#f5c96a]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5c96a]"
            style={{ textShadow: '2px 2px 0px #fff' }}
          >
            [ CONTACT ME ]
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: '1px 1px 0px #fff' }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you! Fill out the form below or reach
            out directly through my contact information.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div animate={formControls} initial={{ opacity: 0, y: 20 }} className="md:col-span-3 relative">
            <div className="relative bg-slate-900/80 border border-slate-700 p-6 sm:p-8 rounded-[1.75rem] shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#f5c96a] mb-6 font-pixel" style={{ textShadow: '2px 2px 0px rgba(15,23,42,0.8)' }}>
                SEND A MESSAGE
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2 w-full">
                    <Label htmlFor="name" className="text-slate-200" style={{ textShadow: '1px 1px 0px rgba(15,23,42,0.8)' }}>
                      NAME
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/70 border border-slate-600 text-white placeholder:text-slate-400 focus:border-[#d4a856] transition-all duration-200"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <Label htmlFor="email" className="text-slate-200" style={{ textShadow: '1px 1px 0px rgba(15,23,42,0.8)' }}>
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/70 border border-slate-600 text-white placeholder:text-slate-400 focus:border-[#d4a856] transition-all duration-200"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-200" style={{ textShadow: '1px 1px 0px rgba(15,23,42,0.8)' }}>
                    SUBJECT
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/70 border border-slate-600 text-white placeholder:text-slate-400 focus:border-[#d4a856] transition-all duration-200"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700" style={{ textShadow: '1px 1px 0px #fff' }}>
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/70 border border-slate-600 text-white placeholder:text-slate-400 focus:border-[#d4a856] resize-none transition-all duration-200"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full text-sm sm:text-base py-3 font-medium bg-[#d4a856] hover:bg-[#f5c96a] text-slate-950 border border-[#f5c96a] transition-all duration-200 disabled:bg-slate-500"
                  style={{ boxShadow: '3px 3px 0px #fff' }}
                >
                  {formStatus === "idle" && <>Send Message <Send className="ml-2 h-5 w-5" /></>}
                  {formStatus === "submitting" && <>Sending... <Loader2 className="ml-2 h-5 w-5 animate-spin" /></>}
                  {formStatus === "success" && <>Message Sent! <CheckCircle className="ml-2 h-5 w-5" /></>}
                  {formStatus === "error" && <>Try Again <AlertCircle className="ml-2 h-5 w-5" /></>}
                </Button>
              </form>
            </div>
          </motion.div>

{/* Contact Info */}
<motion.div
  ref={contactInfoRef}
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="md:col-span-2"
>
  {/* make the card fill its grid column (w-full) instead of using max-w-lg */}
  <div
    className="bg-slate-900/80 border border-slate-700 p-6 sm:p-8 w-full rounded-[1.75rem] shadow-[0_20px_60px_rgba(2,6,23,0.45)]"
    style={{ boxShadow: '0 20px 60px rgba(2, 6, 23, 0.45)' }}
  >
    <h3
      className="text-xl sm:text-2xl font-bold text-[#f5c96a] mb-8"
      style={{ textShadow: '2px 2px 0px #fff' }}
    >
      CONTACT INFO
    </h3>

    <div className="space-y-8">
      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-start space-x-4"
      >
        <div className="flex-shrink-0">
          <div className="relative bg-[#d4a856] p-3 border border-[#f5c96a] rounded-xl" style={{ boxShadow: '0 10px 24px rgba(212, 168, 86, 0.25)' }}>
            <Mail className="h-6 w-6 text-slate-950" />
          </div>
        </div>
        <div className="min-w-0"> {/* allows flex children to shrink correctly */}
          <h4 className="text-sm font-medium text-gray-500 mb-1" style={{ textShadow: '1px 1px 0px #fff' }}>
            EMAIL
          </h4>
          {/* aggressive wrap so the email never overflows */}
          <a
            href="mailto:abinashchhetri.44@gmail.com"
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors block max-w-full break-all"
            style={{ textShadow: '1px 1px 0px #fff' }}
          >
            abinashchhetri.44@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-start space-x-4"
      >
        <div className="flex-shrink-0">
          <div className="relative bg-[#7dd3fc] p-3 border border-[#bae6fd] rounded-xl" style={{ boxShadow: '0 10px 24px rgba(125, 211, 252, 0.22)' }}>
            <Phone className="h-6 w-6 text-slate-950" />
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-gray-500 mb-1" style={{ textShadow: '1px 1px 0px #fff' }}>
            PHONE
          </h4>
          <a
            href="tel:+916296344129"
            className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors block max-w-full break-words"
            style={{ textShadow: '1px 1px 0px #fff' }}
          >
            +91 6296-344-129
          </a>
        </div>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-start space-x-4"
      >
        <div className="flex-shrink-0">
          <div className="relative bg-purple-500 p-3 border-2 border-purple-700" style={{ boxShadow: '2px 2px 0px #fff' }}>
            <MapPin className="h-6 w-6 text-white" />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1" style={{ textShadow: '1px 1px 0px #fff' }}>
            LOCATION
          </h4>
          <p className="text-lg font-medium text-gray-900" style={{ textShadow: '1px 1px 0px #fff' }}>
            Haldia, India
          </p>
        </div>
      </motion.div>
    </div>

    {/* Google Map */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-10"
    >
      {/* container with controlled height */}
      <div className="relative h-64 sm:h-72 md:h-80 border-4 border-blue-500 overflow-hidden">
        {/* make iframe above decorative elements */}
        <iframe
          title="Map of Haldia, India"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.456789012345!2d88.0618!3d22.0600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ff3a9a9a9a9%3A0x1234567890abcdef!2sHaldia%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123"
          className="w-full h-full relative z-10"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Decorative blocks - send them behind the iframe and disable pointer events */}
        <div className="absolute top-5 left-5 w-8 h-8 bg-blue-200 hidden sm:block pointer-events-none z-0" />
        <div className="absolute bottom-5 right-5 w-6 h-6 bg-green-200 hidden sm:block pointer-events-none z-0" />
        {/* removed the centered decorative block that was covering the map center */}
      </div>
    </motion.div>
  </div>
</motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d4a856]/25 bg-[radial-gradient(circle_at_top_left,_rgba(212,168,86,0.12),_transparent_28%),linear-gradient(135deg,rgba(11,18,32,0.96),rgba(15,23,42,0.92))] p-6 sm:p-8 lg:p-12 shadow-[0_25px_80px_rgba(2,6,23,0.5)]">
            <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-[#7dd3fc]/10 blur-3xl" />
            <div className="absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-[#d4a856]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd3fc] font-pixel">
                  Ready when you are
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f8fafc] font-pixel">
                  Let&apos;s build something amazing.
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="mailto:abinashchhetri.44@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl border border-[#d4a856] bg-[#d4a856] px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c96a] font-pixel"
                >
                  Start a project
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7dd3fc]/40 hover:bg-[#7dd3fc]/10 font-pixel"
                >
                  View work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default ContactSection;

