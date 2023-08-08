import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

const PhotoPage = async ({ params }: { params: { work: string; id: string } }) => {
  const supabase = createServerComponentClient<TDBImg>({ cookies });
  const { data: imageData } = (await supabase.from(params.work).select("*").eq("id", params.id)) as { data: TDBImg[] };

  if (imageData) {
    const { img_url, id } = imageData[0];
    return (
      <div className="mx-auto max-h-[600px] w-[800px] overflow-hidden bg-white">
        <div className="float-left h-[600px] w-[600px]">
          <Image src={img_url ?? ""} width={600} height={600} alt={String(id)} className="h-[750px] w-[750px] object-cover" />
        </div>
      </div>
    );
  }
};

export default PhotoPage;
