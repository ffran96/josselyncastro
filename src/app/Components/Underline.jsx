import React from "react";

export default function Underline({ children }) {
  return (
    <b className="decoration-[#ffca76] font-normal underline underline-offset-4">
      {children}
    </b>
  );
}
