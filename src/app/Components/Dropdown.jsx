import Link from "next/link";
import React from "react";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  return (
    <>
      {HandleClick && (
        <div className="flex fixed left-0 top-16  justify-center py-4 z-50  w-full border-solid border-t-[1px] border-neutral-50/60 bg-black/90 backdrop-blur-lg">
          <ul className="space-y-6">
            {Enlaces.map((item) => (
              <li className="text-slate-100" key={item.id}>
                <Link
                  onClick={() => setHandleClick(!HandleClick)}
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
