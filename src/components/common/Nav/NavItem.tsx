import Link from "next/link";
import React from "react";

interface NavItemProps {
  label: string;
  link: string;
  variant?: "header" | "footer" | "simple";
}

const NavItem: React.FC<NavItemProps> = ({label, link, variant = "header"}) => {
  const textSizeClass =
    variant === "footer"
      ? "text-xs sm:text-sm md:text-base lg:text-xl"
      : variant === "simple"
        ? "text-sm sm:text-sm md:text-base lg:text-lg"
        : "sm:text-base md:text-xl lg:text-[26px]";

  return (
    <Link href={link} className={`${textSizeClass} hover:underline`}>
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
