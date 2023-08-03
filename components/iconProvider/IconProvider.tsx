"use client";

import { PropsWithChildren } from "react";
import { IconContext } from "react-icons";

export const IconProvider = ({ children }: PropsWithChildren) => {
  return <IconContext.Provider value={{ className: "hover:animate-pulse hover:cursor-pointer text-lg hover:text-teal-700" }}>{children}</IconContext.Provider>;
};
