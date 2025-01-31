import React from "react";

export default function Underline({ children }) {
  return (
    <b className="decoration-[#5d3427] decoration-4 font-normal underline underline-offset-4">
      {children}
    </b>
  );
}
