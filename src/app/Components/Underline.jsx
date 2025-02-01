import React from "react";

export default function Underline({ children }) {
  return (
    <u className="underline underline-offset-4 decoration-4 decoration-[#5d3427]">
      {children}
    </u>
  );
}
