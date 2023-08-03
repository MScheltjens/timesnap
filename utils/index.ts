import photography from "../public/backgrounds/photography.jpg";
import mixedArt from "../public/backgrounds/mixed-art.jpg";

//format the page title for the href
export const formatToHref = (title: string | undefined): string => {
  if (title) return title.replace(" ", "-").toLowerCase();
  return "";
};

// get array of all the page backgrounds
export const backgrounds = [
  { imgData: photography, title: "photography" },
  { imgData: mixedArt, title: "mixed-art" },
];
