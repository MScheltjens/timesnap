"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { formatToHref } from "@/utils";

import { TImgBackGround } from "@/types";

type Props = {
  backgrounds: TImgBackGround[];
};

export const BackgroundImg = ({ backgrounds }: Props) => {
  const currentPath = usePathname();
  const formattedPath = formatToHref(currentPath).slice(1);
  const background = backgrounds.find((background) => background.title === formattedPath)?.imgData;

  return <Image alt="background" src={background!} fill sizes="100vw" className="object-cover min-h-screen" />;
};
