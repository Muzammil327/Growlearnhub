import React from "react";

export default function Loading3() {
  return (
    <>
      <div className="border border-blue-300 shadow rounded-md p-2 w-full my-4">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-2">
            <div className="space-y-3">
              <div className="h-8 bg-slate-600 w-8/12 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
