import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import reportWebVitals from './utils/web-vitals';


hydrateRoot(document, <RemixBrowser />);

reportWebVitals();
