import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div>
      <Link href="#" target="_blank">
        <FaFacebookSquare size={20} />
      </Link>
      <Link href="#" target="_blank">
        <FaInstagram size={20} />
      </Link>
    </div>
  );
};
