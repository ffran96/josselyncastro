"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Enlaces from "../data/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [HandleClick, setHandleClick] = useState(false);
  // Efecto para deshabilitar/rehabilitar el scroll del body cuando el Dropdown esté visible
  useEffect(() => {
    if (HandleClick) {
      document.body.style.overflow = "hidden"; // Deshabilita el scroll
    } else {
      document.body.style.overflow = "auto"; // Habilita el scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Asegura que el scroll esté habilitado cuando el componente se desmonte
    };
  }, [HandleClick]);
  return (
    <>
      {!HandleClick && (
        <header className="flex items-center justify-between fixed 2xl:px-12 px-6 top-0 w-full h-[67px] z-50 backdrop-blur-lg">
          <Link onClick={() => setHandleClick(false)} href="/">
            <Logo />
          </Link>
          <nav>
            {!HandleClick && (
              <ul className="hidden 2xl:flex select-none">
                {Enlaces.map(({ id, link, name }) => (
                  <li key={id}>
                    <Link
                      className="text-[#fffffff8] text-3xl px-6 py-4"
                      href={link}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="cursor-pointer" onClick={() => setHandleClick(!HandleClick)}>
              <FontAwesomeIcon
                className="2xl:hidden text-3xl text-[#fffffff8] items-center"
                icon={HandleClick ? faXmark : faBars}
              />
            </div>
          </nav>
        </header>
      )}
      <Dropdown
        Enlaces={Enlaces}
        HandleClick={HandleClick}
        setHandleClick={setHandleClick}
      />
    </>
  );
}
