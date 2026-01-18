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
    icon: "portfolio.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4z_ZRwnWTobnfxVBUcXJqH3GzS6duONHQQFtIKGxXx8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
