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
    icon: "/portfolio.png",
  },
  openGraph: {
    title: "Pavan Kumar S | Robotics & AI Portfolio",
    description: "Specializing in Autonomous Agents and Intelligent Systems.",
    url: "https://myportfolio-two-lemon-22.vercel.app/", 
    siteName: "Pavan Kumar S Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
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
  // Create the structured data object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pavan Kumar S",
    "url": "https://myportfolio-two-lemon-22.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/pavan-kumar-s-3b5b6b1b5", // REPLACE with your actual LinkedIn URL
      "https://github.com/your-username" // REPLACE with your actual GitHub URL
    ],
    "jobTitle": "Robotics & AI Student",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Bangalore Institute of Technology"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* This script helps Google link your LinkedIn and Website together */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}