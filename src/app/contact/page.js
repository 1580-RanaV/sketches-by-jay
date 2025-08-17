"use client";
import React from "react";
import { Instagram, Mail, Phone } from "lucide-react"; // icon set

const ContactPage = () => {
  return (
    <div>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b shadow border-gray-200 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24">
        <div className="font-bold text-3xl text-black">
            SKETCHES BY JAY
        </div>
        </div>
    </div>
    </nav>

    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      {/* Title */}
      {/* <h1 className="text-3xl font-bold mb-8">Get in Touch</h1> */}

      {/* Contact Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full shadow-sm bg-gray-100 hover:bg-gray-50 transition"
        >
          <Instagram size={20} />
          <span>Instagram</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:someone@example.com"
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full shadow-sm bg-gray-100 hover:bg-gray-50 transition"
        >
          <Mail size={20} />
          <span>Gmail</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+911234567890"
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full shadow-sm bg-gray-100 hover:bg-gray-50 transition"
        >
          <Phone size={20} />
          <span>+91 12345 67890</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
