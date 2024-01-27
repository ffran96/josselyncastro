"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function LiCV({ Titulo, Lugar, Fecha, Descripcion }) {
  const [HandleClick, setHandleClick] = useState(false);

  return (
    <li
      className="lg:w-[450px] lg:hover:bg-slate-400/20 rounded-lg p-2 transition-all ease-in-out cursor-pointer"
      onClick={() => setHandleClick(!HandleClick)}
    >
      <div className="flex items-center  gap-4">
        <span className="size-4 relative">
          <FontAwesomeIcon
            className="size-4 absolute inset-0 m-auto text-[rgb(var(--foreground-rgb)]"
            icon={!HandleClick ? faChevronRight : faChevronDown}
          />
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-medium">{Titulo}</span>
          <span className="italic text-base">{Lugar}</span>
          <span className="text-sm">{Fecha}</span>
          {HandleClick && (
            <ul className="mt-2 px-2 w-full">
              <li>{Descripcion}</li>
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
