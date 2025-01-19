import React from "react";

export default function Button({ Label, Link, BgColor }) {
  return (
    <a
      href={Link}
      target="_blank"
      className={`flex items-center justify-center bg-[${BgColor}] uppercase max-w-fit py-3 px-4 rounded-3xl tracking-widest font-semibold text-sm xl:hover:text-[${BgColor}] xl:hover:bg-[#ffffff] xl:transition-colors xl:ease-in-out xl:duration-300`}
    >
      {Label}
    </a>
  );
}
