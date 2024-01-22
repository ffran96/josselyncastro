"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Enlaces from "../data/links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [HandleClick, setHandleClick] = useState(false);
  return (
      <header className="flex items-center justify-between fixed top-0 w-full px-6 md:px-24 py-4 z-50 bg-white/5 backdrop-blur-lg">
        <Link onClick={() => setHandleClick(false)} href="/">
          <Logo />
        </Link>
        <nav>
          <Dropdown
            Enlaces={Enlaces}
            HandleClick={HandleClick}
            setHandleClick={setHandleClick}
          />
          {!HandleClick && (
            <ul className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial]">
              {Enlaces.map((item) => (
                <li className="text-slate-100" key={item.id}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
          <div onClick={() => setHandleClick(!HandleClick)}>
            <FontAwesomeIcon
              className="md:hidden text-2xl text-slate-100 items-center"
              icon={HandleClick ? faXmark : faBars}
            />
          </div>
        </nav>
      </header>
  );
}
