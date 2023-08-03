import { FaEnvelope, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-2  w-full z-10 transition ease-in 0.3s linear fixed bottom-0 bg-black">
      <div className="flex justify-center gap-6">
        {/* TODO: add links */}
        <Link href="#" target="_blank">
          <FaFacebookSquare />
        </Link>
        <Link href="#" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="contact">
          <FaEnvelope />
        </Link>
      </div>
    </footer>
  );
};
