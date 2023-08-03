import { formatToHref } from "@/utils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  nextId?: string;
  image: StaticImageData;
  title?: string;
  text?: string;
  textDark?: boolean;
  imgPriority?: boolean;
};

export const Hero = ({ id, nextId, image, title, text, textDark, imgPriority }: Props) => {
  const formattedPath = formatToHref(title);
  return (
    <section id={id} className={`${textDark && "text-black"} relative w-full h-screen flex justify-cente text-center`}>
      <Image alt={id} src={image} sizes="100vw" fill className="object-cover" priority={imgPriority} />
      <div className="flex-1 flex flex-col items-center justify-center backdrop-blur-sm">
        {title && formattedPath && (
          <Link href={formattedPath}>
            <h2 className="text-lg uppercase tracking-widest underline underline-offset-8">{title}</h2>
          </Link>
        )}
        {text && (
          <div className="flex-1 flex flex-col items-center ">
            <h1 className="text-5xl mt-36 sm:mt-64 tracking-widest uppercase">
              Time <span className="font-semibold">Snap</span>
            </h1>
            <p className="w-5/6 h-3/6 sm:h-auto overflow-y-scroll no-scrollbar text-sm mt-8 sm:mt-24 opacity-70 leading-6 sm:leading-loose scrollbar-hide">{text}</p>
          </div>
        )}
      </div>
      <div className="absolute bottom-16 w-full flex justify-center">
        <Link href={`#${nextId}`} className="">
          {nextId === "home" ? <ChevronUpIcon className={`h-10 w-10 hover:cursor-pointer hover:animate-ping opacity-70`} /> : <ChevronDownIcon className={`h-10 w-10 hover:cursor-pointer hover:animate-ping opacity-70`} />}
        </Link>
      </div>
    </section>
  );
};
