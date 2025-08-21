"use client";
import React from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import BackButton from "../component/BackButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center h-20">
            <div className="font-extrabold text-3xl text-gray-900 tracking-wide">
              SKETCHES BY JAY
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg mb-12 text-center max-w-2xl">
          I’d love to connect with you! Reach out through any of the following
          platforms — whether it’s for commissions, collaborations, or just to
          say hello. ✨
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <Instagram size={28} className="text-pink-500" />
            <span className="font-semibold text-lg">Instagram</span>
            <p className="text-sm text-gray-500 text-center">
              Follow my artwork journey 🎨
            </p>
          </a>

          {/* Gmail */}
          <a
            href="mailto:someone@example.com"
            className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <Mail size={28} className="text-red-500" />
            <span className="font-semibold text-lg">Email</span>
            <p className="text-sm text-gray-500 text-center">
              Drop me a message anytime 📩
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+911234567890"
            className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <Phone size={28} className="text-green-500" />
            <span className="font-semibold text-lg">Call</span>
            <p className="text-sm text-gray-500 text-center">
              +91 12345 67890 ☎️
            </p>
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="fixed bottom-6 left-6">
        <BackButton />
      </div>
    </div>
  );
};

export default ContactPage;
