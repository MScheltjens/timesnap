import photography from "../public/backgrounds/photography.jpg";
import mixedArt from "../public/backgrounds/mixed-art.jpg";
import { TImgBackGround } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";

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

export const getUser = async (supabase: SupabaseClient) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error?.message);
  }
};
