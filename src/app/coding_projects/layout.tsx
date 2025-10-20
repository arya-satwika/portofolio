import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding Projects - Arya Satwika",
  description: "Coding Projects portfolio of Arya Satwika",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      { children }
    </section>
  );
}
