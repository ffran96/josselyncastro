"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Enlaces = [
  { id: "0", name: "Conóceme", link: "#conoceme" },
  { id: "1", name: "Curriculum", link: "#cv" },
  { id: "2", name: "Book", link: "#book" },
  { id: "3", name: "VideoBook", link: "#vbook" },
  { id: "4", name: "Contacto", link: "#contacto" },
];

export default function Header() {
  const [HandleClick, setHandleClick] = useState(false);
  return (
    <header className="flex items-center justify-between fixed top-0 w-full px-6 md:px-24 py-4 z-50 bg-white/5 backdrop-blur-lg">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial]">
          {Enlaces.map((item) => (
            <li className="text-slate-100" key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setHandleClick(!HandleClick)}
          className="mobile-buttom-menu"
          style={{ fontSize: "28px", color: "white" }}
        >
          <FontAwesomeIcon className="md:hidden " icon={HandleClick ? faXmark : faBars} />
        </div>
      </nav>
    </header>
  );
}
