"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [animationPhase, setAnimationPhase] = useState("loading"); // 'loading' | 'transition' | 'complete'
  const [displayText, setDisplayText] = useState("");
  const finalText = "SKETCHES BY JAY";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (animationPhase === "loading") {
      let intervalCount = 0;
      const maxIntervals = 120; // 3 seconds at 25fps

      const interval = setInterval(() => {
        intervalCount++;

        if (intervalCount < maxIntervals * 0.7) {
          // Phase 1: Random blinking letters
          let randomText = "";
          for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === " ") {
              randomText += " ";
            } else {
              const showCorrect =
                Math.random() < (intervalCount / (maxIntervals * 0.7)) * 0.3;
              randomText += showCorrect
                ? finalText[i]
                : alphabet[Math.floor(Math.random() * alphabet.length)];
            }
          }
          setDisplayText(randomText);
        } else {
          // Phase 2: Letters settle into final positions
          let settledText = "";
          const settleProgress =
            (intervalCount - maxIntervals * 0.7) / (maxIntervals * 0.3);

          for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === " ") {
              settledText += " ";
            } else {
              const letterProgress =
                Math.max(0, settleProgress * finalText.length - i) /
                finalText.length;
              settledText +=
                letterProgress > 0.5
                  ? finalText[i]
                  : alphabet[Math.floor(Math.random() * alphabet.length)];
            }
          }
          setDisplayText(settledText);
        }

        if (intervalCount >= maxIntervals) {
          setDisplayText(finalText);
          clearInterval(interval);
          setTimeout(() => setAnimationPhase("transition"), 500);
        }
      }, 40);

      return () => clearInterval(interval);
    }
  }, [animationPhase]);

  useEffect(() => {
    if (animationPhase === "transition") {
      setTimeout(() => setAnimationPhase("complete"), 1000);
    }
  }, [animationPhase]);

  // Shared image card with top-left text label + stronger corner backdrop
  const BentoCard = ({
    src,
    label,
    delayMs = 0,
    className = "",
    priority = false,
  }) => (
    <div
      className={`relative h-full rounded-2xl overflow-hidden group cursor-pointer transition-all duration-1000 ${
        animationPhase === "complete"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Image fills card */}
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        priority={priority}
      />

      {/* Top edge gradient (darker) for legibility */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Top-left label: strong shadow + local dark glow box */}
      <div className="absolute top-3 left-3">
        <span className="relative inline-block text-white text-2xl font-bold drop-shadow-lg">
          {/* local dark backdrop behind text only */}
          <span className="absolute -inset-1 bg-black/70 rounded-sm blur-sm"></span>
          <span className="relative">{label}</span>
        </span>
      </div>
    </div>
  );

  if (animationPhase === "loading") {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center">
        <span className="font-bold text-2xl md:text-4xl tracking-wider">
          {displayText}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b shadow border-gray-200 z-50 transform transition-transform duration-1000 ${
          animationPhase === "transition" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-24">
            <div
              className={`font-bold text-3xl transition-all duration-1000 delay-200 ${
                animationPhase === "complete"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              SKETCHES BY JAY 
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 transition-all duration-1000 delay-600 ${
            animationPhase === "complete"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-1000 delay-800 ${
              animationPhase === "complete"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-regular text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-black text-justify">
              Hi,<br />
              Welcome to my creative space where imagination meets artistry. Each concept here is a unique sketch that tells a 
              story—capturing moments of inspiration and translating them into visual narratives. Through careful observation and 
              passionate expression, I explore the intricate details of life, space, and human emotion. This collection represents 
              years of dedication to the craft of design, where every line serves a purpose and every shadow adds depth to the story 
              being told. These works are presented as independent design explorations for various brands and environments, not as 
              impersonations—simply an architect’s vision and concepts brought to life.
              You can contact me through <u className="font-medium">Instagram</u>, <u className="font-medium">Email</u>, for any queries.
            </p>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section
          className={`py-20 px-4 transition-all duration-1000 delay-1000 ${
            animationPhase === "complete"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-8xl mx-auto">
            {/* Desktop Bento Grid */}
            <div className="hidden md:grid grid-cols-12 grid-rows-4 gap-4 h-[900px] text-2xl">
              {/* Card 1 - Large */}
              <div className="col-span-6 row-span-2">
                <BentoCard src="/pic-1.png" label="BLUORNG" delayMs={1200} priority />
              </div>

              {/* Card 2 - Medium */}
              <div className="col-span-3 row-span-2">
                <BentoCard src="/pic-2.png" label="JAYWALKING" delayMs={1400} />
              </div>

              {/* Card 3 - Small */}
              <div className="col-span-3 row-span-1">
                <BentoCard src="/pic-3.png" label="MAINSTREET INDIA" delayMs={1600} />
              </div>

              {/* Card 4 - Small */}
              <div className="col-span-3 row-span-1">
                <BentoCard src="/pic-4.png" label="EVEMEN" delayMs={1800} />
              </div>

              {/* Card 5 - Left half bottom */}
              <div className="col-span-6 row-span-2">
                <BentoCard src="/pic-5.png" label="DAILY OBJECTS" delayMs={2000} />
              </div>

              {/* Card 6 - Right half bottom */}
              <div className="col-span-6 row-span-2">
                <BentoCard src="/pic-6.png" label="TITAN" delayMs={2200} />
              </div>

              
            </div>

            {/* Mobile Stack - 16:9 Ratio */}
            <div className="md:hidden space-y-6">
              {[
                { name: "BLUORNG", src: "/pic-1.png", delay: 1200 },
                { name: "JAYWALKING", src: "/pic-2.png", delay: 1400 },
                { name: "MAINSTREET INDIA", src: "/pic-3.png", delay: 1600 },
                { name: "EVEMEN", src: "/pic-4.png", delay: 1800 },
                { name: "DAILY OBJECTS", src: "/pic-5.png", delay: 2000 },
                { name: "TITAN", src: "/pic-6.png", delay: 2200 },
              ].map((card, index) => (
                <div key={index} className="aspect-video">
                  <BentoCard src={card.src} label={card.name} delayMs={card.delay} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 md:h-24">
          <div
            className="
              max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
              flex flex-col items-center justify-center text-center gap-2 py-4
              md:flex-row md:justify-between md:text-left md:gap-0 md:h-full md:py-0
            "
          >
            {/* Left: Brand or Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sketches by Jay. All rights reserved.
            </p>

            {/* Right: Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/cookies"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Cookies
              </a>
            </nav>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Page;
