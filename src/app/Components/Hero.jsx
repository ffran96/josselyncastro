import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id={"Hero"} className="select-none relative">
      <img
        className="w-screen h-screen object-cover object-center"
        src="/joss-portada.webp"
        alt="Joss"
      />
      <div className="absolute bottom-20 left-[50%] transform -translate-x-2/4 -translate-y-2/4">
        <a href="mailto:josselyncastroactriz@gmail.com">
          <p className="text-2xl rounded-full backdrop-blur-sm px-6 py-2 cursor-pointer">
            josselyncastroactriz@gmail.com
          </p>
        </a>
      </div>
    </section>
  );
}
