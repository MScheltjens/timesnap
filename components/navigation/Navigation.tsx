"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "../navItem/NavItem";
import { useSupabaseSession } from "@/hooks";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center text-xs sm:text-base gap-4 text-white">
      <ul className="flex gap-2 lg:gap-6 justify-end flex-wrap">
        {pathname !== "/" && <NavItem label="home" href="/" />}
        <NavItem label="photography" href="/photography" />
        <NavItem label="mixed art" href="/mixed-art" />
        <NavItem label="contact" href="/contact" />
      </ul>
    </nav>
  );
};
