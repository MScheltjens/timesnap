"use client";

import { NavItem } from "../navItem/NavItem";

export const Navigation = () => {
  return (
    <nav className="flex items-center text-xs sm:text-base ">
      <ul className="flex gap-2 lg:gap-6 flex-wrap justify-end">
        <NavItem label="home" href="/" />
        <NavItem label="photography" href="photography" />
        <NavItem label="mixed art" href="mixed-art" />
        <NavItem label="contact" href="contact" />
      </ul>
    </nav>
  );
};
