import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
/* import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
 */
export default function Hero() {
  return (
    <section id={"Hero"} className="select-none relative">
      <img
        className="w-screen h-dvh object-cover object-center"
        src="/joss-portada.webp"
        alt="Joss"
      />
      <div className="flex flex-col items-center gap-3 absolute bottom-2 left-[50%] transform -translate-x-2/4 -translate-y-2/4">
        <a href="mailto:josselyncastroactriz@gmail.com">
          <p className="text-white font-thin text-lg md:text-2xl rounded-full backdrop-blur-sm px-6 py-2 cursor-pointer">
            josselyncastroactriz@gmail.com
          </p>
        </a>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@josselyncastrogarces2094"
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-3xl md:text-4xl cursor-pointer hover:text-[#c4302b]"
              icon={faYoutube}
            />
          </a>
          <a href="https://www.instagram.com/josselyncg/" target="_blank">
            <FontAwesomeIcon
              className="text-3xl md:text-4xl cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg"
              icon={faInstagram}
            />
          </a>
        </div>
      </div>
      {/*       <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute text-[32px] bottom-1 left-[50%] opacity-30 transform -translate-x-2/4 -translate-y-2/4"
      /> */}
    </section>
  );
}
