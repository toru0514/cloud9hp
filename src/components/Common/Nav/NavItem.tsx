// src/components/Common/Nav/NavItem.tsx

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
            ? "text-xs sm:text-sm md:text-base lg:text-lg"
            : variant === "simple"
                ? "text-sm sm:text-sm md:text-base lg:text-lg"
                : "sm:text-base md:text-xl lg:text-[26px]";

    return (
        <Link href={link}>
            <div className={`${textSizeClass} hover:underline`}>
                {label}
            </div>
        </Link>
    );
};

export default NavItem;
