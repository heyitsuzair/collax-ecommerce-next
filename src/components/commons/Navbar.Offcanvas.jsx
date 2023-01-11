import React from "react";

const NavbarOffcanvas = ({ isOpen, setIsCanvasOpen }) => {
  const canvasState = isOpen ? "translate-x-0" : "translate-x-full";
  const overlayState = !isOpen ? "hidden" : "fixed";

  return (
    <>
      <div
        className={`overlay ${overlayState} h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.2)]`}
        onClick={() => setIsCanvasOpen(!isOpen)}
      ></div>
      <div
        className={`bg-black w-1/2 transition-all ${canvasState} duration-1000 ease-in-out h-screen top-0 fixed right-0`}
      >
        <span className="text-white">Hello</span>
      </div>
    </>
  );
};

export default NavbarOffcanvas;
