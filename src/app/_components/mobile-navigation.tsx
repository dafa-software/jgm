"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavigationData } from "~/data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <XMarkIcon className="h-8 w-8" color="black" />
          ) : (
            <Bars3Icon className="h-8 w-8" color="black" />
          )}
        </button>
      </div>
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"} absolute top-20 w-full flex-col items-center border-b-2 border-blue-900 bg-white p-4`}
      >
        {NavigationData.map((props, index) => (
          <Link
            {...props}
            key={index}
            className={`${
              pathname === props.href ? "text-blue-400" : "text-blue-900"
            } mt-4 block text-xl`}
          >
            {props.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
