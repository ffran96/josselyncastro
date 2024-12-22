"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RRSS from "../data/RRSS";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  const { instagram, youtube, email } = RRSS;
  const [ShowRRSS, setShowRRSS] = useState(false);

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

          <div
          className={`${ ShowRRSS ? "right-0" : "-right-16" } transition-all absolute bg-[#00000099] rounded-tl-2xl rounded-bl-2xl w-16 h-48 pl-4 flex flex-col gap-6  justify-center items-start`}
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
            <a onClick={() => window.open(`mailto:${email}`)}>
              <FontAwesomeIcon
                className="text-white text-3xl"
                icon={faEnvelope}
              />
            </a>
            <div
              onClick={() => setShowRRSS(!ShowRRSS)}
              className="absolute -left-[26px] py-6 px-2 rounded-tl-2xl rounded-bl-2xl bg-[#00000099]"
            >
              <FontAwesomeIcon icon={ShowRRSS ? faAngleRight : faAngleLeft} />
            </div>
          </div>
          <FontAwesomeIcon
            onClick={() => setHandleClick(!HandleClick)}
            className="absolute right-6 top-0 p-5 text-2xl text-slate-100 items-center"
            icon={faXmark}
          />
        </div>
      )}
    </>
  );
}
