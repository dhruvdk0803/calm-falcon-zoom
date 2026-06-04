"use client";

import { useEffect, useRef } from "react";

const BookeoWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple script injections
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41571M9F6LX1810C95EFBB";
    script.async = true;
    script.defer = true;

    // Handle script loading    script.onload = () => {
      // Bookeo widget should auto-initialize when the container exists
      // Some versions require explicit initialization:
      if (typeof window !== "undefined" && (window as any).BookeoWidget) {
        (window as any).BookeoWidget.init();
      }
    };

    // Add script to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Ensure container has proper dimensions
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    minHeight: "700px", // Ensure sufficient height for Bookeo
  };

  return (
    <div
      ref={containerRef}
      id="bookeo_container"
      data-bookeo-widget="41571M9F6LX1810C95EFBB"
      className="w-full h-full"
      style={containerStyle}
    />
  );
};

export default BookeoWidget;