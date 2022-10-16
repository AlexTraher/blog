import { json } from "@remix-run/node";

export async function loader() {
  const analyticsId = process.env.VERCEL_ANALYTICS_ID ?? null;

  return json({
    analyticsId,
  });
}