import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  return (
    <>
      {HandleClick && (
        <motion.div
          initial={{ y: -313, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex fixed left-0 top-16  justify-center py-4 z-40  w-full backdrop-blur-lg"
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
      )}
    </>
  );
}
