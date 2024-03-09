"use client";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";

type Props = {};

const Header = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-12 px-4 relative mx-auto w-full max-w-7xl">
      {/* THREE DOTS- LOGO */}
      <div className="flex gap-2 items-center">
        <div className="h-5 w-5 bg-amber-400 rounded-full"></div>
        <div className="h-5 w-5 bg-amber-400 rounded-full absolute animate-ping " />
        <p className="font-mono font-bold">ONUR.DEV</p>
        <a href="https://github.com/onur-c" target="_blank">
          <BsGithub />
        </a>
      </div>
      {/* Big res menu */}
      <div className="sm:flex hidden gap-2 font-mono">
        <Link href={"/"} className="hover:opacity-70 transition-opacity">
          HOME
        </Link>
        <Link href={"/"} className="hover:opacity-70 transition-opacity">
          ABOUT
        </Link>
        <Link href={"/"} className="hover:opacity-70 transition-opacity">
          WORKS
        </Link>
        <Link href={"/"} className="hover:opacity-70 transition-opacity">
          CONTACT
        </Link>
      </div>
      {/* Low res/Mobile Burger Menu */}
      <button
        className="sm:hidden block relative"
        onClick={() => setModalOpen((prev) => !prev)}
      >
        <CiMenuFries size={20} />
        {modalOpen && (
          <div className="absolute bg-white/50 backdrop-blur-sm top-5 -left-32 h-fit w-fit text-black flex flex-col p-8 items-start gap-2  font-mono">
            <Link href={"/"} className="hover:opacity-70 transition-opacity">
              HOME
            </Link>
            <Link href={"/"} className="hover:opacity-70 transition-opacity">
              ABOUT
            </Link>
            <Link href={"/"} className="hover:opacity-70 transition-opacity">
              WORKS
            </Link>
            <Link href={"/"} className="hover:opacity-70 transition-opacity">
              CONTACT
            </Link>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;
