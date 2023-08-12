import { ImageGrid } from "@/components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { work: string } }) {
  const supabase = createServerComponentClient<TDBImg>({ cookies });
  const { data: imageData } = (await supabase.from(params.work).select("*")) as { data: TDBImg[] };
  if (imageData) return <ImageGrid imgData={imageData} />;
  return notFound();
}

export const generateStaticParams = async () => {
  return [{ work: "photography" }, { work: "mixed-art" }];
};
