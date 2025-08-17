import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sketches by V Jaya Surya",
  description:
    "Explore Sketches by V Jaya Surya – a creative collection of architectural and design concepts. Each sketch is an original exploration of space, form, and storytelling, crafted with passion and vision. Not affiliated with any brand, this portfolio showcases imaginative ideas and artistic expressions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black overscroll-none`}
      >
        {/* White backplate for safety if using translucent sections */}
        <div className="fixed inset-0 -z-50 bg-white" />
        {children}
      </body>
    </html>
  );
}
