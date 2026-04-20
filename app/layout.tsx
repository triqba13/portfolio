import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tariq Hamza Ahmad — Full Stack Developer",
  description:
    "Full Stack Developer based in Dar es Salaam, Tanzania. Building transparent, data-driven, and user-first digital solutions. Available for freelance.",
  keywords: ["Full Stack Developer", "Tariq Hamza Ahmad", "Tanzania", "Web Developer", "MERN Stack"],
  authors: [{ name: "Tariq Hamza Ahmad" }],
  openGraph: {
    title: "Tariq Hamza Ahmad — Full Stack Developer",
    description: "Building transparent, data-driven digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
