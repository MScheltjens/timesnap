"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  imgData: TDBImg[];
  work: string;
};

export const ImageGrid = ({ imgData, work }: Props) => {
  return (
    <>
      <section className="flex justify-center items-center relative">
        <div className="my-24 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3">
          {imgData &&
            imgData.map(
              (image) =>
                image && (
                  <Link href={`${work}/${image.id}`}>
                    <figure key={image.id} className="relative h-72 w-72 opacity-100 transition-all ease-in hover:cursor-pointer hover:opacity-40 hover:scale-110">
                      <Image src={image.img_url ?? ""} alt={`${image.id}-${image.img_url}`} fill sizes="100%" className="flex items-center object-cover" />
                    </figure>
                  </Link>
                )
            )}
        </div>
      </section>
    </>
  );
};
