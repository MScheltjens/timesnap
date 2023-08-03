import Link from "next/link";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    // <IconContext.Provider value={{ className: "hover:animate-pulse hover:cursor-pointer" }}>
    <div>
      <Link href="#" target="_blank">
        <FaFacebookSquare size={20} />
      </Link>
      <Link href="#" target="_blank">
        <FaInstagram size={20} />
      </Link>
    </div>
    // </IconContext.Provider>
  );
};
