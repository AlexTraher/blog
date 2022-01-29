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

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "alextraher.dev" };
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
      <body className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-50">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 dark:bg-gray-900 drop-shadow-md w-full">
          <Link to='/'><h1>AlexTraher.dev</h1></Link>
        </nav>
        <section>
          <ul className="p-8 flex justify-center">
            <li className="mx-8 sm:mx-12"><a href="https://twitter.com/alextraher"><div className="bg-twitter-light bg-no-repeat dark:bg-twitter-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
            <li className="mx-8 sm:mx-12"><a href="https://github.com/alextraher"><div className="bg-github-light bg-no-repeat dark:bg-github-dark w-16 h-16 opacity-80 hover:opacity-100 bg-center"></div></a></li>
          </ul>
        </section>
        <section className="flex justify-center flex-col items-center h-full">
          <h2 className="text-xl">Coming soon...</h2>
        </section>
        
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
