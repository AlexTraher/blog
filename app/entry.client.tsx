import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";
import reportWebVitals from './utils/web-vitals';
hydrate(<RemixBrowser />, document);

reportWebVitals();
