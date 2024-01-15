import React from "react";
import Logo from "./Logo";

const Enlaces = ["Conóceme", "Curriculum", "Book", "VideoBook", "Contacto"];

export default function Header() {
  return (
    <header className="flex items-center justify-around fixed top-0 w-full px-6 py-4 z-50  bg-stone-900">
      <Logo />
      <nav>
        <ul className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial]">
          <li>Conóceme</li>
          <li>Curriculum</li>
          <li>Book</li>
          <li>VideoBook</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}
