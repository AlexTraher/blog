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
  return { title: "Gait Software" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Gait software consulting - for modern, accessible web solutions for your organisation"/>
        <Meta />
        <Links />
      </head>
      <body className="bg-gait-paper dark:bg-gait-paper-dark text-black dark:text-white font-body sub-pixel-antialiased text-base flex-col h-full">
        <Navbar />
          <main className="px-4 sm:py-4 md:px-8">
            <div className="w-2 h-[20px]"></div>
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
