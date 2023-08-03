"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  images: string[];
  id: string;
};

export const ImageGrid = ({ images, id }: Props) => {
  return (
    <>
      <section id={`${id}-grid`} className="flex justify-center items-center relative">
        <div className="my-24 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3">
          {images.map((image) => (
            <figure key={image} className="relative h-72 w-72 opacity-100 transition-all ease-in hover:cursor-pointer hover:opacity-40 hover:scale-110">
              <Image src={image} alt={image} fill sizes="100%" className="flex items-center object-cover" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};
