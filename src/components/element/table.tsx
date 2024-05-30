import React from "react";

export default function Table({ data }: any) {
  return (
    <div className="relative overflow-x-auto mb-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody>
          {data.tabletd1 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd1[0]}</td>
              <td className="px-6 py-4">{data.tabletd1[1]}</td>
            </tr>
          )}
          {data.tabletd2 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd2[0]}</td>
              <td className="px-6 py-4">{data.tabletd2[1]}</td>
            </tr>
          )}
          {data.tabletd3 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd3[0]}</td>
              <td className="px-6 py-4">{data.tabletd3[1]}</td>
            </tr>
          )}
          {data.tabletd4 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd4[0]}</td>
              <td className="px-6 py-4">{data.tabletd4[1]}</td>
            </tr>
          )}
          {data.tabletd5 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd5[0]}</td>
              <td className="px-6 py-4">{data.tabletd5[1]}</td>
            </tr>
          )}
          {data.tabletd6 && (
            <tr className="bg-white border-b">
              <td className="px-6 py-4">{data.tabletd6[0]}</td>
              <td className="px-6 py-4">{data.tabletd6[1]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
