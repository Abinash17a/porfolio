"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type React from "react";

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

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
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
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-200/30 dark:bg-purple-900/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-200/30 dark:bg-blue-900/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[40%] right-[15%] w-40 h-40 rounded-full bg-emerald-200/30 dark:bg-emerald-900/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[10%] left-[20%] w-56 h-56 rounded-full bg-amber-200/30 dark:bg-amber-900/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
            <div className="relative">
              <div className="relative bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg">
                <Mail className="h-8 w-8 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you! Fill out the form below or reach
            out directly through my contact information.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div animate={formControls} initial={{ opacity: 0, y: 20 }} className="md:col-span-3 relative">
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 dark:text-gray-200">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400 transition-all duration-200"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-400 resize-none transition-all duration-200"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-3 text-base font-medium rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-all duration-200 disabled:bg-gray-400"
                >
                  {formStatus === "idle" && (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                  {formStatus === "submitting" && (
                    <>
                      Sending...
                      <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      Message Sent!
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </>
                  )}
                  {formStatus === "error" && (
                    <>
                      Try Again
                      <AlertCircle className="ml-2 h-5 w-5" />
                    </>
                  )}
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
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Contact Information</h3>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="relative bg-blue-100 p-3 rounded-full shadow-md">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <a
                      href="mailto:abinashchhetri.44@gmail.com"
                      className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      abinashchhetri.44@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="relative bg-green-100 p-3 rounded-full shadow-md">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                    <a
                      href="tel:+916296344129"
                      className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +91 6296-344-129
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="relative bg-purple-100 p-3 rounded-full shadow-md">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Haldia, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <iframe
                    title="Map of Haldia, India"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.456789012345!2d88.0618!3d22.0600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ff3a9a9a9a9a9%3A0x1234567890abcdef!2sHaldia%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute top-5 left-5 w-20 h-20 rounded-full border-4 border-gray-300/30 dark:border-gray-700/30"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-5 right-5 w-16 h-16 rounded-full border-4 border-gray-300/30 dark:border-gray-700/30"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-gray-300/30 dark:border-gray-700/30"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;