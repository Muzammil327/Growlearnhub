"use client";
import React, { useState } from "react";
import LoadingPdf from "./Loading/LoadingPdf";

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    // Set the iframeLoaded state to true when the iframe has finished loading
    setIframeLoaded(true);
  };

  const handleDownloadClick = () => {
    window.location.href =
      `https://drive.usercontent.google.com/u/0/uc?id=${pdfUrl}&export=download`;
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
      <button onClick={handleDownloadClick} className="bg-blue-500 w-full py-3 rounded my-3 text-white">Download PDF</button>
    </div>
  );
};

export default PDFViewer;
