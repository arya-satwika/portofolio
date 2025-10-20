import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Projects - Arya Satwika",
  description: "Video Projects page of Arya Satwika",
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
