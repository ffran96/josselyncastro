"use client";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RRSS from "../data/RRSS";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  const { instagram, youtube, email } = RRSS;
  const [ShowRRSS, setShowRRSS] = useState(true);

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
          <FontAwesomeIcon
            onClick={() => setHandleClick(!HandleClick)}
            className="absolute right-7 top-4 text-3xl text-slate-100 items-center"
            icon={faXmark}
          />
          <div
            className={`${
              ShowRRSS ? "right-0" : "-right-16"
            } fixed transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 bg-[#00000099] rounded-tl-2xl rounded-bl-2xl w-16 h-48 pl-2 flex flex-col gap-6  justify-center items-center`}
          >
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
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon
                className="text-white text-3xl"
                icon={faEnvelope}
              />
            </a>
            <div
              onClick={() => setShowRRSS(!ShowRRSS)}
              className="absolute -left-[26px] py-6 px-2 rounded-tl-2xl rounded-bl-2xl bg-[#00000099]"
            >
              <FontAwesomeIcon
                className={`${
                  ShowRRSS && "rotate-180"
                } transition-all duration-300`}
                icon={faAngleLeft}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
