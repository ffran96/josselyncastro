import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  return (
    <>
      <motion.div
        initial={HandleClick ? { y: -313 } : { y: 0 }}
        animate={HandleClick ? { y: 0 } : { y: -313 }}
        className="flex fixed left-0 top-16  justify-center py-4 z-40  w-full  bg-black/90 backdrop-blur-lg"
      >
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
      </motion.div>
    </>
  );
}
