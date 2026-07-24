"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const tagManagerId = "GTM-NR6LK4S";
const analyticsId = "UA-44188253-2";

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    const tagManager = document.createElement("script");
    tagManager.async = true;
    tagManager.src = `https://www.googletagmanager.com/gtm.js?id=${tagManagerId}`;
    document.head.appendChild(tagManager);

    const analytics = document.createElement("script");
    analytics.async = true;
    analytics.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(analytics);

    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", analyticsId);

    return () => {
      tagManager.remove();
      analytics.remove();
    };
  }, []);

  return null;
}
