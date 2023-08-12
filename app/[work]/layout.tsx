import { BackgroundImg } from "@/components";
import { backgrounds } from "@/utils";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col items-center relative">
      <BackgroundImg backgrounds={backgrounds} />
      <div className="w-full h-full pt-18 sm:pt-28 backdrop-blur-sm">{children}</div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ work: "photography" }, { work: "mixed-art" }];
}
