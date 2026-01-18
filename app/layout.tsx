import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Pavan Kumar S | Robotics & AI Portfolio",
  description: "Portfolio of Pavan Kumar S, a Robotics & AI student at BIT Bengaluru specializing in autonomous agents, Gemini API, and OpenCV.",
  keywords: ["Pavan Kumar S", "Pavan Portfolio", "Robotics AI Student", "BIT Bengaluru", "Ants AI Intern"],
  verification: {
    google: "4z_ZRwnWTobnfxVBUcXJqH3GzS6duONHQQFtIKGxXx8",
  },
  icons: {
    icon: "/portfolio.png", // Added forward slash for better pathing
  },
  // --- ADDED OPEN GRAPH SECTION BELOW ---
  openGraph: {
    title: "Pavan Kumar S | Robotics & AI Portfolio",
    description: "Specializing in Autonomous Agents and Intelligent Systems.",
    url: "https://myportfolio-two-lemon-22.vercel.app/", 
    siteName: "Pavan Kumar S Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // Make sure this image is in your /public folder
        width: 1200,
        height: 630,
        alt: "Pavan Kumar S Robotics Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* You can remove the manual <head> meta tag now as it's in the metadata object above */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}