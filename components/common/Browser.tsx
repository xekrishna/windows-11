"use client";

import React, { useEffect, useState } from "react";

const Browser = ({ url }: { url: string }) => {
  const [src, setSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Validate URL format to ensure it's safe to load in iframe
    try {
      const newUrl = new URL(url);
      setSrc(newUrl.href);
    } catch (error) {
      console.error("Invalid URL", error);
      setSrc(""); // Clear src if URL is invalid
    }
  }, [url]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!src) {
    return <div className="error-message">Invalid URL</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}>
      {isLoading && <div className="loading-indicator">Loading...</div>}
      <iframe
        src={src}
        title="Embedded Browser"
        style={{ width: "100%", height: "100%", border: "none" }}
        loading="lazy"
        onLoad={handleIframeLoad}
      />
    </div>
  );
};

export default Browser;
