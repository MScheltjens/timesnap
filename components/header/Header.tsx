"use client";

import Image from "next/image";
import logo from "@/public/TimeSnapLogo.jpg";
import { Navigation } from "../navigation/Navigation";
import { useScrollDirection } from "@/hooks";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`fixed w-full z-10 transition ease-in 0.3s linear  ${scrollDirection === "down" ? "-translate-y-full" : scrollDirection === "up" ? "translate-y-0" : ""} bg-black bg-opacity-70 shadow-2xl shadow-gray-600`}>
      <div className="w-full px-4 flex items-center justify-between container mx-auto gap-20">
        <Image src={logo} alt="time-snapp logo" priority />
        <Navigation />
      </div>
    </header>
  );
};
