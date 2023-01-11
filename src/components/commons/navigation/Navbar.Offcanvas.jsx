import Link from "next/link";
import React from "react";
import { Navigation } from "../../../config";
import {
  IconTitled,
  InputIconned,
  Logo,
  Text3Xl,
  TextLg,
  TextMd,
  TextXl,
} from "../index";

const NavbarOffcanvas = ({ isOpen, setIsCanvasOpen }) => {
  const canvasState = isOpen ? "translate-x-0" : "translate-x-full";
  const overlayState = !isOpen ? "hidden" : "fixed";

  /**
   * Props For Iconned Input
   */
  const inputProps = {
    placeholder: "Enter Email Address",
    name: "email",
  };

  return (
    <>
      <div
        className={`overlay ${overlayState} h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.2)]`}
        onClick={() => setIsCanvasOpen(!isOpen)}
      ></div>
      <div
        className={`bg-black overflow-y-scroll overflow-x-hidden w-full md:w-3/4 lg:w-1/2 transition-all ${canvasState} duration-1000 ease-in-out h-screen top-0 fixed right-0`}
      >
        <div className="p-8 md:p-24 text-white flex flex-col gap-16">
          <div className="flex items-center justify-between">
            <div className="logo">
              <Logo color="white" />
            </div>
            <div className="close-canvas">
              <button
                type="button"
                className="border-2 border-white  text-white hover:border-yellow-300 hover:text-yellow-300 transition-all w-10 h-10 rounded-full"
                onClick={() => setIsCanvasOpen(!isOpen)}
              >
                <i className="fa fa-xmark text-2xl"></i>
              </button>
            </div>
          </div>
          <div>
            <Text3Xl
              text="We deploy world-class Creative on demand."
              classes={"font-medium pr-4 md:pr-12"}
            />
          </div>
          <div className="flex flex-col gap-6 md:hidden">
            {Navigation.map((nav) => {
              return (
                <Link
                  key={nav.link}
                  onClick={() => setIsCanvasOpen(!isOpen)}
                  href={nav.link}
                >
                  <TextXl text={nav.text} classes={"font-medium"} />
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-8">
            <TextMd
              text="Contact Us"
              classes={
                "font-semibold poppins uppercase tracking-widest text-gray-500"
              }
            />
            <div className="icons flex flex-col gap-5">
              <IconTitled
                icon="fa fa-star text-yellow-300"
                title="Lahore,Pakistan"
                titleLinkExternal={"https://goo.gl/maps/kwKKyFuGaBpUtNFR8"}
              />
              <IconTitled
                icon="fa fa-star text-yellow-300"
                title="0310 4864150"
                titleLinkExternal={"tel:+923104864150"}
              />
              <IconTitled
                icon="fa fa-star text-yellow-300"
                title="uzairdeveloper354123@gmail.com"
                titleLinkExternal={"mailto:uzairdeveloper354123@gmail.com"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <TextMd
              text="Get Update"
              classes={
                "font-semibold poppins uppercase tracking-widest text-gray-500"
              }
            />
            <form action="/" method="GET" className="input">
              <InputIconned inputProps={inputProps} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarOffcanvas;
