import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arya Satwika - Portfolio",
  description: "Landing Page for Arya Satwika",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} text-white antialiased min-w-screen min-h-screen`}
      >
        <Header className="sticky top-0"/>
        {children}
      </body>
    </html>
  );
}
