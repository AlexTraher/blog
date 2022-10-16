// Modified from https://github.com/vercel/vercel/blob/main/examples/create-react-app/src/vitals.js
const reportWebVitals = (onPerfEntry: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  if ('connection' in navigator) {
    // @ts-ignore
    return navigator?.connection?.effectiveType ?? '';
  } else {
    return '';
  }  
}

const sendToVercelAnalytics = (analyticsId: string) => (metric: any) => {
  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  const blob = new Blob([new URLSearchParams(body).toString()], {
    // This content type is necessary for `sendBeacon`
    type: 'application/x-www-form-urlencoded',
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    });
}

export default async () => {
  try {
    const { analyticsId } = await fetch('./analytics-token').then((res) => res.json());
    if (!analyticsId) {
      return;
    }
    await reportWebVitals(sendToVercelAnalytics(analyticsId));
  } catch (e) {
    // TODO - log this properly
  }
};