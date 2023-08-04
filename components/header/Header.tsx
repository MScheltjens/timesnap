"use client";

import Image from "next/image";
import logo from "@/public/TimeSnapLogo.jpg";
import { Navigation } from "../navigation/Navigation";
import { useScrollDirection } from "@/hooks";
import Link from "next/link";

export const Header = () => {
  const scrollDirection = useScrollDirection(150);

  return (
    <header className={`fixed flex items-center w-full z-10 transition ease-in 0.5s linear text-white  ${scrollDirection === "down" ? "-translate-y-full" : scrollDirection === "up" ? "translate-y-0" : ""} bg-black bg-opacity-70 shadow-2xl shadow-gray-600`}>
      <div className="w-full px-4 flex items-center justify-between container mx-auto gap-20">
        <Link href="/">
          <Image src={logo} alt="time-snapp logo" priority className={`transition-all ease-in 0.4s linear ${scrollDirection === "down" && "translate-y-full rounded-b-lg"}`} />
        </Link>
        <Navigation />
        {/* TODO: style btn */}
      </div>
    </header>
  );
};
