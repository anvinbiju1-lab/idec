import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IEDC | Holy Grace Academy of Engineering, Mala",
  description:
    "Official digital identity of the Innovation & Entrepreneurship Development Cell (IEDC) at Holy Grace Academy of Engineering, Mala. Transforming engineering brilliance into high-growth ventures.",
  keywords: [
    "IEDC",
    "Holy Grace Academy of Engineering",
    "Mala",
    "Thrissur",
    "Kerala Startup Mission",
    "Innovation Cell",
    "Student Incubator",
    "Engineering Ventures",
    "Hardware Prototyping",
    "Robotics",
  ],
  authors: [{ name: "IEDC Holy Grace Team" }],
  openGraph: {
    title: "IEDC | Holy Grace Academy of Engineering, Mala",
    description: "The digital operating system of an elite campus innovation ecosystem.",
    siteName: "IEDC Holy Grace",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-text-body antialiased min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
