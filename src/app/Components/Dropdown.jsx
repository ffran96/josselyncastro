import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  return (
    <>
      {HandleClick && (
        <div className="flex fixed left-0 justify-center items-center h-full z-40 w-full backdrop-blur-3xl">
          <ul className="space-y-16">
            {Enlaces.map((item) => (
              <li className="text-slate-100 text-4xl" key={item.id}>
                <Link
                  onClick={() => setHandleClick(!HandleClick)}
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
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
