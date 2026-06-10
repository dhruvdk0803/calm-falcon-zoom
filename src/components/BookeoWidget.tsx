"use client";

import { useEffect, useRef } from "react";

export default function BookeoWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear out any stale widget content from hot-reloads
    container.innerHTML = "";

    // Prevent duplicate script injections by removing old Bookeo scripts
    document.querySelectorAll('script[src*="bookeo.com/widget.js"]').forEach((el) => {
      el.remove();
    });

    // Create and inject the Bookeo script directly into the container
    // so it runs in body context and can immediately find the target div
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41571M9F6LX1810C95EFBB";

    // widget.js only auto-starts on the window "load" event, which has
    // already fired by the time React injects this script — so start it
    // manually once loaded (unless it managed to auto-start an iframe)
    script.onload = () => {
      const w = window as unknown as { bookeo_start?: () => void };
      if (w.bookeo_start && !container.querySelector("iframe")) {
        w.bookeo_start();
      }
    };

    container.appendChild(script);

    return () => {
      // Clean up widget contents and scripts on unmount / fast-refresh
      if (container) {
        container.innerHTML = "";
      }
      document.querySelectorAll('script[src*="bookeo.com/widget.js"]').forEach((el) => {
        el.remove();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="bookeo_41571M9F6LX1810C95EFBB"
      className="w-full"
      style={{ minHeight: "700px" }}
    />
  );
}