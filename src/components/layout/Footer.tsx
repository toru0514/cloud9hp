import Link from "next/link"; // ← 追加
import NavList from "@/components/common/Nav/NavList";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-4 sm:py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="hidden md:flex justify-center">
          <NavList isMobile={false} variant="footer"/>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <Link href="/">
            <div className="relative w-24 sm:w-32 md:w-40 lg:w-48 h-auto mb-4 aspect-square">
              <Image
                src="/footer/footer-logo.png"
                alt="Footer Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} 木材工房cloud9 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
