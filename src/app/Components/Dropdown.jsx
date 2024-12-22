import Link from "next/link";
import React from "react";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RRSS from "../data/RRSS";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  const { instagram, youtube, email } = RRSS;

  return (
    <>
      {HandleClick && (
        <div className="flex fixed left-0 justify-center items-center h-full z-40 w-full backdrop-blur-3xl">
          <ul className="space-y-16">
            {Enlaces.map(({ id, link, name }) => (
              <li className="text-slate-100 text-4xl" key={id}>
                <Link onClick={() => setHandleClick(!HandleClick)} href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          {/*           <div className="absolute right-0 h-[180px] w-8 bg-[#000000]"></div>
           */}{" "}
          <div className="bg-[#00000099] rounded-tl-2xl rounded-bl-2xl  w-16 py-6 pl-4 absolute bottom-[40%] right-0 flex flex-col gap-6  items-start">
            <a href={"https://www.instagram.com/" + instagram} target="_blank">
              <FontAwesomeIcon
                className="text-white text-[34px]"
                icon={faInstagram}
              />
            </a>
            <a href={"https://www.youtube.com/" + youtube} target="_blank">
              <FontAwesomeIcon
                className="text-white text-3xl"
                icon={faYoutube}
              />
            </a>
            <a onClick={() => window.open(`mailto:${email}`)}>
              <FontAwesomeIcon
                className="text-white text-3xl"
                icon={faEnvelope}
              />
            </a>
          </div>
          <FontAwesomeIcon
            onClick={() => setHandleClick(!HandleClick)}
            className=" absolute right-6 top-0 p-5 text-2xl text-slate-100 items-center"
            icon={faXmark}
          />
        </div>
      )}
    </>
  );
}
