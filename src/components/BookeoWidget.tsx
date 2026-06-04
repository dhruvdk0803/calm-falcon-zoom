"use client";

import { useEffect, useRef } from "react";

const BookeoWidget = () => {
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple script injections
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    // Create the Bookeo script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://bookeo.com/widget.js?a=41571M9F6LX1810C95EFBB";
    script.async = true;
    script.defer = true;

    // When the script loads, initialize the widget if needed
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).BookeoWidget) {
        (window as any).BookeoWidget.init();
      }
    };

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Container for the Bookeo widget
  const containerStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "700px", // Ensure enough height for the widget
  };

  return (
    <div
      id="bookeo_container"
      data-bookeo-widget="41571M9F6LX1810C95EFBB"
      className="w-full"
      style={containerStyle}
    />
  );
};

export default BookeoWidget;