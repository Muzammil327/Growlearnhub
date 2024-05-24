"use client";
import React, { useState, useEffect } from "react";
import LoadingPdf from "./Loading/LoadingPdf";

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // Delay the showing of the iframe for 1 second
    const timer = setTimeout(() => {
      setShowIframe(true);
    }, 1000);

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-5">
      {showIframe && (
        <iframe
          src={`https://drive.google.com/file/d/${pdfUrl}/preview`}
          width="100%"
          height="800px"
          title="PDF Viewer"
          style={{ border: "none" }}
        />
      )}
      {!showIframe && (
        <>
          <LoadingPdf />
          <LoadingPdf />
        </>
      )}
    </div>
  );
};

export default PDFViewer;
