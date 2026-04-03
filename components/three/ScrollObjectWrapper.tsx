"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ScrollObject = dynamic(() => import("./ScrollObject"), {
  ssr: false,
});

export default function ScrollObjectWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render on desktop (> 768px) and after page is idle
    if (window.innerWidth < 768) return;

    // Use requestIdleCallback to defer Three.js initialization
    // until the browser is idle (after LCP, after critical rendering)
    const loadWhenIdle = () => {
      setShouldRender(true);
    };

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(loadWhenIdle, {
        timeout: 5000,
      });
      return () => (window as any).cancelIdleCallback(id);
    } else {
      // Fallback: load after 3 seconds
      const timer = setTimeout(loadWhenIdle, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return <ScrollObject />;
}
