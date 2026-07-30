import { Header } from "@/components/Header";
import "@/app/globals.css";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import appCss from "./globals.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Arya Satwika - Portofolio" }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body
        className={"text-white antialiased min-w-screen min-h-screen background-gradient"}
      >
        <Header className="sticky top-0 z-30"/>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
