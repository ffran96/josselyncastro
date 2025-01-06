import React from "react";

export default function Footer() {
  return (
    <footer
      id={"footer"}
      className="bg-[#ffffffd2] text-black py-4 flex items-center justify-center"
    >
      <p className="text-lg">
        designed by{" "}
        <a href="https://webeo.es" target="_blank">
          <span className="text-[#5d3427] font-semibold cursor-pointer hover:underline">
            webeo
          </span>
        </a>
      </p>
    </footer>
  );
}
