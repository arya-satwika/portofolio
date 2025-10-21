import type { Metadata } from "next";


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
