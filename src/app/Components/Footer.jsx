import React from "react";

export default function Footer() {
  return (
    <footer
      id={"footer"}
      className="bg-white text-black py-4 flex items-center justify-center"
    >
      <p className="text-lg">
        designed by{" "}
        <a href="https://webeo.es" target="_blank">
          <span className="text-orange-900 font-semibold cursor-pointer hover:underline">
            webeo
          </span>
        </a>
      </p>
    </footer>
  );
}
