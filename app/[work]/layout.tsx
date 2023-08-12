import { BackgroundImg } from "@/components";
import { backgrounds } from "@/utils";

export default function Layout({ children, params }: { children: React.ReactNode; params: { work: string } }) {
  console.log(params);
  return (
    <div className="w-full flex flex-col items-center relative">
      <BackgroundImg backgrounds={backgrounds} />
      <div className="w-full h-full pt-18 sm:pt-28 backdrop-blur-sm">{children}</div>
    </div>
  );
}
