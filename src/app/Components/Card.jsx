import React from "react";

export default function Card({ children, Title }) {
  return (
    <>
      <div className="relative min-h-fit bg-gray-200 p-5 rounded-b-2xl rounded-2xl">
        <div className="absolute top-5 right-5 text-[#fffffff3] text-xs bg-[#5d3427] px-4 py-1 rounded-2xl max-w-fit">
          {Title}
        </div>
        {children}
      </div>
    </>
  );
}
