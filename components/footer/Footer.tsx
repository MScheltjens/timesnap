import { FaEnvelope, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-2  w-full z-10 transition ease-in 0.3s linear fixed bottom-0 bg-black bg-opacity-60 shadow-2xl shadow-gray-600 text-white">
      <div className="flex justify-center gap-6">
        <Link href="https://www.facebook.com/profile.php?id=100027116332614" target="_blank">
          <FaFacebookSquare />
        </Link>
        <Link href="https://www.instagram.com/123timesnap/" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="contact">
          <FaEnvelope />
        </Link>
      </div>
    </footer>
  );
};
