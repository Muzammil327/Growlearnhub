"use client"
import React, { useState } from "react";
import { saveAs } from "file-saver";

interface FileDownloaderProps {
  fileId: string;
  fileName: string;
  buttonText: string;
}

const FileDownloader: React.FC<FileDownloaderProps> = ({
  fileId,
  fileName,
  buttonText,
}) => {
  const [loading, setLoading] = useState(false);

  const saveFile = () => {
    setLoading(true);
    // Example PDF file URL
    const pdfUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    // Use fetch to get the PDF file as a Blob
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the Blob as a file
        saveAs(blob, `${fileName}`); // Change the second parameter to set the filename
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <button
      onClick={saveFile}
      disabled={loading} // Disable the button while loading
      className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full my-8`}
    >
      {loading ? "Downloading..." : buttonText}
    </button>
  );
};

export default FileDownloader;
