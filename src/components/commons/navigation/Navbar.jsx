import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "../../../config";
import { Logo, NavbarOffcanvas } from "../index";

const Navbar = ({ minimal }) => {
  /**
   * State For Canvas
   */
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  useEffect(() => {
    // ** Check Whether Canvas Is Open, If Canvas Is Open Than Hide Body Overflow "Y"
    if (isCanvasOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      setTimeout(() => {
        document.body.classList.remove("overflow-y-hidden");
      }, 1000);
    }
  }, [isCanvasOpen]);

  if (minimal) {
    return (
      <header className="absolute z-[3] flex justify-between items-center p-3 w-[97%] mx-auto right-0 left-0 top-10">
        <div className="left flex items-center md:gap-16 lg:gap-28">
          <Link href={"/"}>
            <Logo color="blue" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navigation.map((nav) => {
                return (
                  <li key={nav.link}>
                    <Link href={nav.link} className="font-semibold relative">
                      <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                        {nav.text}
                      </span>
                      <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <button
            className="py-4 px-6 rounded-lg shadow-xl md:shadow-none bg-white hover:bg-yellow-300 transition-all"
            type="button"
            onClick={() => setIsCanvasOpen(!isCanvasOpen)}
          >
            <i className="fa fa-bars text-3xl" aria-hidden="true"></i>
          </button>
          <NavbarOffcanvas
            isOpen={isCanvasOpen}
            setIsCanvasOpen={setIsCanvasOpen}
          />
        </div>
      </header>
    );
  } else {
    return (
      <header className="sticky top-10 flex justify-between shadow-xl rounded-xl p-3 items-center w-[97%] mx-auto right-0 left-0">
        <div className="left flex items-center md:gap-16 lg:gap-28">
          <Link href={"/"}>
            <Logo color="blue" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navigation.map((nav) => {
                return (
                  <li key={nav.link}>
                    <Link href={nav.link} className="font-semibold relative">
                      <span className="peer/navlink text-lg hover:text-black text-gray-400 ">
                        {nav.text}
                      </span>
                      <div className="peer-hover/navlink:bg-indigo-500 peer-hover/navlink:w-full peer-hover/navlink:visible invisible duration-300 rounded-full w-0 transition-all absolute left-0 right-0 top-8 h-1"></div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <button
            className="py-4 px-6 rounded-lg hover:bg-yellow-300 transition-all"
            type="button"
            onClick={() => setIsCanvasOpen(!isCanvasOpen)}
          >
            <i className="fa fa-bars text-3xl" aria-hidden="true"></i>
          </button>
          <NavbarOffcanvas
            isOpen={isCanvasOpen}
            setIsCanvasOpen={setIsCanvasOpen}
          />
        </div>
      </header>
    );
  }
};

export default Navbar;