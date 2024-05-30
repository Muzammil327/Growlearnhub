"use client";
import React, { useState, useEffect } from "react";
import LoadingPdf from "./Loading/LoadingPdf";

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    // Set the iframeLoaded state to true when the iframe has finished loading
    setIframeLoaded(true);
  };

  return (
    <div className="mt-5">
      <iframe
        src={`https://drive.google.com/file/d/${pdfUrl}/preview`}
        width="100%"
        height="600px"
        title="PDF Viewer"
        style={{ border: "none", display: iframeLoaded ? "block" : "none" }}
        onLoad={handleIframeLoad}
      />
      {!iframeLoaded && (
        <>
          <LoadingPdf />
          <LoadingPdf />
        </>
      )}
    </div>
  );
};

export default PDFViewer;
