import React from "react";

export default function LiCV({Titulo, Lugar, Fecha}) {
  return (
      <li className="flex flex-col">
        <span className="text-xl font-medium">{Titulo}</span>
        <span className="italic text-base">{Lugar}</span>
        <span className="text-sm">{Fecha}</span>
      </li>
  );
}
