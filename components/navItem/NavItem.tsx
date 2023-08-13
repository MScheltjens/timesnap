"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { label: string; href: string };

export const NavItem = ({ label, href }: Props) => {
  const currentPath = usePathname();

  return (
    <li className="py-3 sm:max-w-xl sm:mx-auto">
      <Link
        className={`inline-block relative uppercase tracking-widest whitespace-nowrap ${
          currentPath === href ? "text-teal-700 underline underline-offset-8" : "text-white"
        } transition-all duration-150 hover:text-teal-700 hover:animate-pulse before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:opacity-0 before:transition-all before:duration-500 before:bg-teal-700 hover:before:w-full hover:before:opacity-100`}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
