import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id={"Hero"} className="relative select-none">
      <img
        className=" w-screen h-screen object-cover object-top"
        src="/BI2A5681.jpg"
        alt="Joss"
      />

      <FontAwesomeIcon className="absolute bottom-0 inset-0 m-auto mb-10 text-4xl z-10 opacity-60" icon={faAnglesDown} />
    </section>
  );
}
