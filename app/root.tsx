import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import Navbar from "./components/Navbar";
import ShrinkableLogo from "./components/ShrinkableLogo";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
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
      <body className="bg-slate-100 dark:bg-black text-black dark:text-gait-blue">
        <Navbar />
        <ShrinkableLogo />
        <section>
          <ul className="p-8 flex justify-center">
            <li className="mx-8 sm:mx-12"><a href="https://twitter.com/alextraher"><div className="bg-twitter-light bg-no-repeat dark:bg-twitter-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
            <li className="mx-8 sm:mx-12"><a href="https://github.com/alextraher"><div className="bg-github-light bg-no-repeat dark:bg-github-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
          </ul>
        </section>
        <section className="flex justify-center flex-col items-center h-full">
          <h2 className="text-xl">Coming soon...</h2>
          
        </section>
        <section className="h-[500px] bg-orange-600">
          
        </section>
        <section className="h-[500px] bg-red-600">
          
        </section>
        
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
