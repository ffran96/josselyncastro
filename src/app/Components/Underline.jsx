import React from "react";

export default function Underline({ children }) {
  return (
    <b className="decoration-[#925c4a] decoration-2 font-normal underline underline-offset-4">
      {children}
    </b>
  );
}
