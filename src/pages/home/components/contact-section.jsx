import { z } from "zod";
import { useState } from "react";

import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  newsletter: z.boolean().optional(),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@codesync.com",
      description: "Send us an email anytime",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "123 Tech Street, Suite 100",
      color: "purple",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Get instant support",
      color: "yellow",
    },
  ];

  const socialLinks = [
    { icon: CiTwitter, href: "#", label: "Twitter", color: "gray" },
    { icon: CiLinkedin, href: "#", label: "LinkedIn", color: "gray" },
    { icon: FaGithub, href: "#", label: "GitHub", color: "gray" },
    { icon: CiYoutube, href: "#", label: "YouTube", color: "gray" },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gray-900/50 border-gray-700 p-8 sm:p-12 animate-fadeInUp">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-lg text-gray-300 mb-6">
              Your message has been sent successfully. We'll get back to you
              within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Send Another Message
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Get in Touch
          </h2>
          <p
            className="text-lg text-gray-300 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className="bg-gray-900/50 border-gray-700 p-6 sm:p-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-300 text-sm">{submitError}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-blue-500"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-blue-500"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.company
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-blue-500"
                    }`}
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-600 focus:ring-blue-500"
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:ring-blue-500"
                  }`}
                  placeholder="Tell us about your needs..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  {formData.message.length}/1000 characters
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300">
                  Subscribe to our newsletter for product updates and tips
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-8 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ready to revolutionize your technical interviews? Our team is
                here to help you get started with CodeSync and answer any
                questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 border border-gray-800/30 hover:border-gray-200/30 animate-fadeInUp`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 bg-${info.color}-600/20 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                  </div>
                  <div>
                    <div className="text-white font-medium">{info.title}</div>
                    <div className="text-gray-300 font-semibold">
                      {info.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {info.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gray-800 hover:bg-${social.color}-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group animate-fadeInUp`}
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
