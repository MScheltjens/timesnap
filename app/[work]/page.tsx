import { ImageGrid } from "@/components";
import { Database } from "@/lib/supabase.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function page({ params }: { params: { work: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: imageData } = (await supabase.from(params.work).select("*")) as { data: TDBImg[] };
  if (imageData) return <ImageGrid imgData={imageData} work={params.work} />;
}
