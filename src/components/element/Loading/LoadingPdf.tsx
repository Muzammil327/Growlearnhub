import React from "react";

export default function LoadingPdf() {
  return (
    <>
      <div className="border border-blue-300 shadow rounded-md p-3 w-full my-3">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 pt-7 pb-2">
            <div className="space-y-3">
              <div className="h-72 w-full bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
