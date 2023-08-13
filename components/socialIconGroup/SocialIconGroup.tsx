"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaInstagram, FaEnvelope } from "react-icons/fa";

export const SocialIconGroup = () => {
  return (
    <IconContext.Provider value={{ className: "hover:text-teal-700 hover:animate-bounce text-xl" }}>
      <Link href="https://www.facebook.com/profile.php?id=100027116332614" target="_blank">
        <FaFacebookSquare />
      </Link>
      <Link href="https://www.instagram.com/123timesnap/" target="_blank">
        <FaInstagram />
      </Link>
      <Link href="contact">
        <FaEnvelope />
      </Link>
    </IconContext.Provider>
  );
};
