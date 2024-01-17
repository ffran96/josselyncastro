import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Enlaces = [
  { id: "0", name: "Conóceme", link: "#conoceme" },
  { id: "1", name: "Curriculum", link: "#cv" },
  { id: "2", name: "Book", link: "#book" },
  { id: "3", name: "VideoBook", link: "#vbook" },
  { id: "4", name: "Contacto", link: "#contacto" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-around fixed top-0 w-full px-6 py-4 z-50 bg-white/5 backdrop-blur-lg">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial]">
          {Enlaces.map((item) => (
            <Link key={item.id} href={item.link}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
