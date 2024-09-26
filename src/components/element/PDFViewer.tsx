"use client"
import React, { useState } from "react"
import LoadingPdf from "./Loading/LoadingPdf"

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleIframeLoad = () => {
    setIframeLoaded(true)
  }

  const handleDownloadClick = () => {
    setIsDownloading(true)
    const downloadUrl = `https://drive.google.com/uc?id=${pdfUrl}&export=download`
    window.location.href = downloadUrl

    // Optionally, you could reset isDownloading after a timeout or after the download has completed.
    setTimeout(() => setIsDownloading(false), 7000); // Adjust time as needed
  }

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
      <button
        onClick={handleDownloadClick}
        className="bg-blue-500 w-full py-3 rounded my-3 text-white"
        disabled={isDownloading} // Disable button during download
      >
        {isDownloading ? "Loading..." : "Download PDF"}
      </button>
    </div>
  )
}

export default PDFViewer
