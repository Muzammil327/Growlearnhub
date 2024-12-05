"use client"; // Next.js "use client" directive

import React, { useState, useEffect } from "react";

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Check localStorage for cached iframe load status
    const cachedIframeStatus = localStorage.getItem(`pdf-${pdfUrl}-loaded`);
    if (cachedIframeStatus === "true") {
      setIframeLoaded(true);
    }
  }, [pdfUrl]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    // Cache iframe load status in localStorage
    localStorage.setItem(`pdf-${pdfUrl}-loaded`, "true");
  };

  const handleDownloadClick = () => {
    setIsDownloading(true);
    const downloadUrl = `https://drive.google.com/uc?id=${pdfUrl}&export=download`;

    // Cache download status in localStorage (optional)
    localStorage.setItem(`pdf-${pdfUrl}-downloaded`, "true");

    window.location.href = downloadUrl;

    // Optionally, reset isDownloading after a timeout or after the download completes
    setTimeout(() => setIsDownloading(false), 7000); // Adjust time as needed
  };
  // https://drive.google.com/file/d/1sGLJuN5IQvqSOsoqVl64BEBoapsOFuGk/view?usp=sharing
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
          <div className="my-3 w-full rounded-md border border-blue-300 p-3 shadow">
            <div className="flex animate-pulse space-x-4">
              <div className="flex-1 space-y-6 pb-2 pt-7">
                <div className="space-y-3">
                  <div className="h-72 w-full rounded bg-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 w-full rounded-md border border-blue-300 p-3 shadow">
            <div className="flex animate-pulse space-x-4">
              <div className="flex-1 space-y-6 pb-2 pt-7">
                <div className="space-y-3">
                  <div className="h-72 w-full rounded bg-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <button
        onClick={handleDownloadClick}
        className="my-3 w-full rounded bg-blue-500 py-3 text-white"
        disabled={isDownloading} // Disable button during download
      >
        {isDownloading ? "Loading..." : "Download PDF"}
      </button>
    </div>
  );
};

export default PDFViewer;
