import photography from "../public/backgrounds/photography.jpg";
import mixedArt from "../public/backgrounds/mixed-art.jpg";
import { TImgBackGround } from "@/types";
import { createClient } from "@supabase/supabase-js";

//format the page title for the href
export const formatToHref = (title: string | undefined): string => {
  if (title) return title.replace(" ", "-").toLowerCase();
  return "";
};

// get array of all the page backgrounds
export const backgrounds: TImgBackGround[] = [
  { imgData: photography, title: "photography" },
  { imgData: mixedArt, title: "mixed-art" },
];

export const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
