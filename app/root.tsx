import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";
import customStyles from "./custom.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: customStyles }
  ];
}

export const meta: MetaFunction = () => {
  return { title: "gait.dev" };
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex bg-gait-paper dark:bg-gait-blue-dark text-black dark:text-white font-body sub-pixel-antialiased text-base flex-col h-full">
        <Navbar />
        <main className="p-4 flex-[100%]">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
