import React from "react";

export default function Loading() {
  return (
    <>
      <div className="border border-blue-300 shadow rounded-md p-3 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 pt-7 pb-2">
            <div className="space-y-3">
              <div className="h-6 bg-slate-700 w-9/12 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
