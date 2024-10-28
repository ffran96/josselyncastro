import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id={"Hero"} className="select-none">
      <img
        className=" w-screen h-screen object-cover object-center"
        src="/joss-portada.webp"
        alt="Joss"
      />
    </section>
  );
}
