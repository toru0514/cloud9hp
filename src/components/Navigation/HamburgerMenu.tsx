"use client";

import {useState} from "react";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import SideMenu from "@/components/SideMenu/SideMenu";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="fixed top-2 right-4  shadow-lg flex items-center justify-center  z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <HiOutlineX
            className="w-6 h-6 text-black absolute top-0 right-26 transform translate-x-1 translate-y-1"/>
        ) : (
          <HiOutlineMenu
            className="w-8 h-8 text-black absolute top-2 right-2 transform translate-x-0 translate-y-0"/>
        )}
      </button>


      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-[150px]  bg-white text-black shadow-lg flex flex-col justify-start items-center p-6 z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="flex flex-col space-y-4 w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            <SideMenu isMobile={true}/>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
