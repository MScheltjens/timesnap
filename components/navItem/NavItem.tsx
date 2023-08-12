"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { label: string; href: string };

export const NavItem = ({ label, href }: Props) => {
  const currentPath = usePathname();

  return (
    <li>
      <Link className={`block uppercase tracking-widest whitespace-nowrap ${currentPath === href ? "text-teal-700" : "text-white"} transition duration-150 hover:text-teal-700 hover:animate-pulse`} href={href}>
        {label}
      </Link>
    </li>
  );
};
