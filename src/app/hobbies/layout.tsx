import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies - Arya Satwika",
  description: "Hobbies page of Arya Satwika",
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
