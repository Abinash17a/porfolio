"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type React from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-10 sm:py-16 lg:py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Let's Connect</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you! Fill out the form below or use our contact information
            to get in touch.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-2/3 space-y-4 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="name" className="text-base sm:text-lg md:text-xl">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleInputChange}
                className="text-base sm:text-lg p-2 sm:p-3"
                required
              />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="email" className="text-base sm:text-lg md:text-xl">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleInputChange}
                className="text-base sm:text-lg p-2 sm:p-3"
                required
              />
            </div>
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="message" className="text-base sm:text-lg md:text-xl">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                className="text-base sm:text-lg p-2 sm:p-3"
                required
              />
            </div>
            <Button type="submit" className="w-full text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6">
              Send Message
              <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/3 bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 lg:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
                  <Mail className="text-blue-600 h-5 sm:h-6" /> {/* Responsive height */}
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Email</p>
                  <a href="mailto:info@example.com" className="text-base sm:text-lg md:text-xl text-blue-600 hover:underline">
                    abinashchhetri.44@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                  <Phone className="text-green-600 h-5 sm:h-6" /> {/* Responsive height */}
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Phone</p>
                  <a href="tel:+1234567890" className="text-base sm:text-lg md:text-xl text-green-600 hover:underline">
                    +91 6296-344-129
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-full">
                  <MapPin className="text-purple-600 h-5 sm:h-6" /> {/* Responsive height */}
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">Address</p>
                  <p className="text-base sm:text-lg md:text-xl text-purple-600">Haldia, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;