import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
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
      <div className="flex flex-col items-center justify-center gap-3 absolute -bottom-2 md:bottom-2 left-[50%] transform -translate-x-2/4 -translate-y-2/4 z-10">
        <a href="mailto:josselyncastroactriz@gmail.com">
          <p className="group flex justify-center items-center gap-4 text-white font-thin text-lg md:text-2xl rounded-full backdrop-blur-sm px-6 py-2 cursor-pointer">
            <FontAwesomeIcon className="text-[20px] transition-colors delay-100" icon={faComputerMouse} />
            <span>josselyncastroactriz@gmail.com</span>
          </p>
        </a>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@josselyncastrogarces2094"
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-white text-4xl cursor-pointer hover:text-[#c4302b] transition-colors delay-100"
              icon={faYoutube}
            />
          </a>
          <a href="https://www.instagram.com/josselyncg/" target="_blank">
            <FontAwesomeIcon
              className="text-white text-4xl cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg transition-colors delay-100"
              icon={faInstagram}
            />
          </a>
        </div>
      </div>
      {/*       <FontAwesomeIcon
        icon={faChevronDown}
        className="absolute text-[32px] bottom-1 left-[50%] opacity-30 transform -translate-x-2/4 -translate-y-2/4"
      /> */}
      <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-[#000000] from-0% via-[#000000ad] via-30% to-[#00000000] to-100%" />
    </section>
  );
}
