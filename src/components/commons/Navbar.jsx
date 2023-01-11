import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="absolute flex justify-between items-center w-[97%] mx-auto right-0 left-0 top-12">
      <div className="left flex items-center md:gap-16 lg:gap-28">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li className="mt-2">
              <Link href={"/"} className="font-semibold relative">
                <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                  Home
                </span>
                <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
              </Link>
            </li>
            <li className="mt-2">
              <Link href={"/shop"} className="font-semibold relative">
                <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                  Shop
                </span>
                <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
              </Link>
            </li>
            <li className="mt-2">
              <Link href={"/contact"} className="font-semibold relative">
                <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                  Contact
                </span>
                <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
              </Link>
            </li>
            <li className="mt-2">
              <Link href={"/about"} className="font-semibold relative">
                <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                  About
                </span>
                <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          className="py-4 px-6 rounded-lg hover:bg-yellow-300 transition-all"
          type="button"
        >
          <i className="fa fa-bars text-3xl" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
