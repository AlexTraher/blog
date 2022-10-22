import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";
import customStyles from "./custom.css";
import Navbar from "./components/Navbar";
import ShrinkableLogo from "./components/ShrinkableLogo";

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gait-green-light dark:bg-gait-blue-dark text-black dark:text-gait-green-dark">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
